/* global SCHEMES */
(function (root) {
  var DRAG_PX = 6;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "class") node.className = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function svgEl(tag, attrs) {
    var node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs || {}).forEach(function (key) {
      node.setAttribute(key, attrs[key]);
    });
    return node;
  }

  function bezier(p0, p1, p2, p3, t) {
    var u = 1 - t;
    var uu = u * u;
    var tt = t * t;
    return {
      x: uu * u * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + tt * t * p3.x,
      y: uu * u * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + tt * t * p3.y
    };
  }

  function curveEnds(a, b) {
    var x1 = a.x + a.w;
    var y1 = a.y + a.h / 2;
    var x2 = b.x;
    var y2 = b.y + b.h / 2;
    var dx = Math.max(48, Math.abs(x2 - x1) / 2);
    return {
      p0: { x: x1, y: y1 },
      p1: { x: x1 + dx, y: y1 },
      p2: { x: x2 - dx, y: y2 },
      p3: { x: x2, y: y2 }
    };
  }

  function curvePath(a, b) {
    var c = curveEnds(a, b);
    var d = "M " + c.p0.x + " " + c.p0.y +
      " C " + c.p1.x + " " + c.p1.y + ", " + c.p2.x + " " + c.p2.y + ", " + c.p3.x + " " + c.p3.y;
    return { d: d, ends: c };
  }

  function boxesOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function labelSize(text) {
    return {
      w: Math.max(44, Math.round(text.length * 6.55 + 16)),
      h: 20
    };
  }

  function labelClears(cx, cy, size, nodes) {
    var box = { x: cx - size.w / 2, y: cy - size.h + 2, w: size.w, h: size.h };
    var pad = 6;
    var padded = { x: box.x - pad, y: box.y - pad, w: box.w + pad * 2, h: box.h + pad * 2 };
    for (var i = 0; i < nodes.length; i++) {
      if (boxesOverlap(padded, nodes[i])) return false;
    }
    return true;
  }

  function placeEdgeLabel(a, b, text, nodes) {
    var ends = curveEnds(a, b);
    var size = labelSize(text);
    var best = null;
    var bestScore = Infinity;
    var offsets = [-18, -40, -68, -96, -124, 18, 44, 72];
    for (var i = 2; i <= 22; i++) {
      var t = i / 24;
      var pt = bezier(ends.p0, ends.p1, ends.p2, ends.p3, t);
      for (var k = 0; k < offsets.length; k++) {
        var cy = pt.y + offsets[k];
        if (!labelClears(pt.x, cy, size, nodes)) continue;
        var score = Math.abs(t - 0.5) * 120 + Math.abs(offsets[k]) * 0.35;
        if (score < bestScore) {
          bestScore = score;
          best = { x: pt.x, y: cy };
        }
      }
    }
    if (!best) {
      var mid = bezier(ends.p0, ends.p1, ends.p2, ends.p3, 0.5);
      best = { x: mid.x, y: mid.y - 36, tight: true };
    }
    return best;
  }

  function mountDiagram(container, scheme) {
    container.textContent = "";
    var bounds = scheme.nodes.reduce(function (acc, n) {
      acc.w = Math.max(acc.w, n.x + n.w + 48);
      acc.h = Math.max(acc.h, n.y + n.h + 48);
      return acc;
    }, { w: 800, h: 600 });

    var titlebar = el("div", { class: "map-titlebar" }, [
      el("span", { class: "dots", "aria-hidden": "true" }, [el("i"), el("i"), el("i")]),
      el("strong", { text: scheme.title })
    ]);
    var tools = el("div", { class: "map-tools" });
    var zoomLabel = el("span", { class: "zoom-label", text: "100%" });
    function tool(label, title, fn) {
      var b = el("button", { class: "tool-btn", type: "button", title: title, text: label });
      b.addEventListener("click", fn);
      return b;
    }
    tools.appendChild(tool("−", "Afastar", function () { view.scaleAt(view.scale * 0.85); }));
    tools.appendChild(tool("+", "Aproximar", function () { view.scaleAt(view.scale * 1.18); }));
    tools.appendChild(tool("Ajustar", "Encaixar o mapa na janela", function () { view.fit(); }));
    tools.appendChild(zoomLabel);
    titlebar.appendChild(tools);

    var stage = el("div", {
      class: "map-stage",
      tabindex: "0",
      role: "application",
      "aria-label": "Mapa de " + scheme.title + ". Arraste para mover, inclusive sobre um bloco. Um toque sem arrastar abre o bloco."
    });
    var world = el("div", { class: "map-world" });
    world.style.width = bounds.w + "px";
    world.style.height = bounds.h + "px";
    var svg = svgEl("svg", { class: "map-edges", width: bounds.w, height: bounds.h });
    var defs = svgEl("defs");
    var marker = svgEl("marker", {
      id: "arrow-" + scheme.id,
      markerWidth: "10",
      markerHeight: "10",
      refX: "8",
      refY: "3",
      orient: "auto"
    });
    marker.appendChild(svgEl("path", { d: "M0,0 L8,3 L0,6 Z", fill: "#e7d7c4" }));
    defs.appendChild(marker);
    svg.appendChild(defs);

    var byId = {};
    scheme.nodes.forEach(function (n) { byId[n.id] = n; });

    var labelLayer = svgEl("g", { class: "edge-labels" });
    scheme.edges.forEach(function (edge) {
      var a = byId[edge.from];
      var b = byId[edge.to];
      if (!a || !b) return;
      var c = curvePath(a, b);
      svg.appendChild(svgEl("path", {
        d: c.d,
        fill: "none",
        stroke: edge.dashed ? "#e0b15a" : "#e7d7c4",
        "stroke-width": "1.6",
        "stroke-dasharray": edge.dashed ? "6 5" : "0",
        "marker-end": "url(#arrow-" + scheme.id + ")"
      }));
      if (edge.label) {
        var spot = placeEdgeLabel(a, b, edge.label, scheme.nodes);
        var pill = svgEl("g", { class: "edge-label-group" });
        var text = svgEl("text", {
          class: "edge-label",
          x: spot.x,
          y: spot.y,
          "text-anchor": "middle"
        });
        text.textContent = edge.label;
        var bg = svgEl("rect", { rx: "8", fill: "#f4efe6", "data-label-bg": "1" });
        pill.appendChild(bg);
        pill.appendChild(text);
        labelLayer.appendChild(pill);
        text._labelBg = bg;
      }
    });

    var detailBox = container.parentElement ? container.parentElement.querySelector("[data-node-detail]") : null;
    var detail = el("div", { class: "map-node-detail" });

    function showNode(n, btn) {
      world.querySelectorAll(".map-node").forEach(function (other) {
        other.setAttribute("aria-pressed", other === btn ? "true" : "false");
      });
      detail.textContent = "";
      detail.appendChild(el("strong", { text: n.title }));
      detail.appendChild(el("p", { text: n.detail }));
      if (n.source) {
        var link = el("a", {
          href: n.source.url,
          target: "_blank",
          rel: "noopener noreferrer",
          text: n.source.name
        });
        detail.appendChild(link);
      }
      if (detailBox) {
        detailBox.textContent = "";
        detailBox.appendChild(el("h3", { text: n.title }));
        detailBox.appendChild(el("p", { text: n.detail }));
        if (n.source) {
          detailBox.appendChild(el("a", {
            href: n.source.url,
            target: "_blank",
            rel: "noopener noreferrer",
            text: n.source.name
          }));
        }
      }
    }

    scheme.nodes.forEach(function (n) {
      var btn = el("button", { class: "map-node " + n.type, type: "button", "aria-pressed": "false" });
      btn.style.left = n.x + "px";
      btn.style.top = n.y + "px";
      btn.style.width = n.w + "px";
      btn.style.minHeight = n.h + "px";
      btn.appendChild(el("span", { class: "tag", text: n.tag }));
      btn.appendChild(el("strong", { text: n.title }));
      btn.appendChild(el("em", { text: n.text }));
      btn._node = n;
      world.appendChild(btn);
    });
    world.insertBefore(svg, world.firstChild);
    svg.appendChild(labelLayer);
    stage.appendChild(world);

    requestAnimationFrame(function () {
      labelLayer.querySelectorAll("text").forEach(function (text) {
        var bg = text._labelBg;
        if (!bg) return;
        var box = text.getBBox();
        bg.setAttribute("x", box.x - 6);
        bg.setAttribute("y", box.y - 3);
        bg.setAttribute("width", box.width + 12);
        bg.setAttribute("height", box.height + 6);
      });
    });

    var view = {
      x: 16,
      y: 16,
      scale: 0.72,
      apply: function () {
        world.style.transform = "translate(" + view.x + "px," + view.y + "px) scale(" + view.scale + ")";
        zoomLabel.textContent = Math.round(view.scale * 100) + "%";
      },
      scaleAt: function (next) {
        next = Math.min(1.7, Math.max(0.35, next));
        var rect = stage.getBoundingClientRect();
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var wx = (cx - view.x) / view.scale;
        var wy = (cy - view.y) / view.scale;
        view.scale = next;
        view.x = cx - wx * view.scale;
        view.y = cy - wy * view.scale;
        view.apply();
      },
      fit: function () {
        var pad = 28;
        var minX = Math.min.apply(null, scheme.nodes.map(function (n) { return n.x; }));
        var minY = Math.min.apply(null, scheme.nodes.map(function (n) { return n.y; }));
        var maxX = Math.max.apply(null, scheme.nodes.map(function (n) { return n.x + n.w; }));
        var maxY = Math.max.apply(null, scheme.nodes.map(function (n) { return n.y + n.h; }));
        var cw = stage.clientWidth || 800;
        var ch = stage.clientHeight || 640;
        var fitScale = Math.min((cw - pad * 2) / (maxX - minX), (ch - pad * 2) / (maxY - minY));
        if (!isFinite(fitScale) || fitScale <= 0) fitScale = 0.9;
        view.scale = Math.min(1.05, Math.max(0.85, fitScale));
        if (view.scale > fitScale + 0.04) {
          view.x = 24 - minX * view.scale;
          view.y = 16 - minY * view.scale;
        } else {
          view.x = (cw - (maxX - minX) * view.scale) / 2 - minX * view.scale;
          view.y = (ch - (maxY - minY) * view.scale) / 2 - minY * view.scale;
        }
        view.apply();
      }
    };

    var drag = null;
    stage.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.target.closest && event.target.closest(".map-node-detail")) return;
      event.preventDefault();
      var nodeEl = event.target.closest ? event.target.closest(".map-node") : null;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        ox: view.x,
        oy: view.y,
        moved: false,
        nodeEl: nodeEl
      };
      stage.classList.add("dragging");
      try { stage.setPointerCapture(event.pointerId); } catch (err) { /* ignore */ }
    });
    stage.addEventListener("pointermove", function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      var dx = event.clientX - drag.x;
      var dy = event.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < DRAG_PX) return;
      drag.moved = true;
      event.preventDefault();
      view.x = drag.ox + dx;
      view.y = drag.oy + dy;
      view.apply();
    });
    function endDrag(event) {
      if (!drag || drag.id !== event.pointerId) return;
      var moved = drag.moved;
      var nodeEl = drag.nodeEl;
      drag = null;
      stage.classList.remove("dragging");
      if (!moved && nodeEl && nodeEl._node) showNode(nodeEl._node, nodeEl);
    }
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);
    stage.addEventListener("selectstart", function (event) { event.preventDefault(); });
    stage.addEventListener("dragstart", function (event) { event.preventDefault(); });
    stage.addEventListener("wheel", function (event) {
      event.preventDefault();
      var factor = event.deltaY > 0 ? 0.92 : 1.08;
      var rect = stage.getBoundingClientRect();
      var next = Math.min(1.7, Math.max(0.35, view.scale * factor));
      var wx = (event.clientX - rect.left - view.x) / view.scale;
      var wy = (event.clientY - rect.top - view.y) / view.scale;
      view.scale = next;
      view.x = event.clientX - rect.left - wx * view.scale;
      view.y = event.clientY - rect.top - wy * view.scale;
      view.apply();
    }, { passive: false });

    detail.appendChild(el("strong", { text: "Clique num bloco" }));
    detail.appendChild(el("p", { text: "O texto do bloco mostra o que a denúncia, a delação ou a sentença registrou. Arraste para mover o mapa; um toque curto abre o bloco." }));
    stage.appendChild(detail);
    var help = el("p", {
      class: "map-help",
      text: "Arraste em qualquer ponto, inclusive sobre um bloco, para mover. Um clique ou toque sem arrastar abre o bloco. Roda do mouse ou pinça aproximam. Tracejado = elo alegado, ainda não reconhecido como fato por sentença."
    });
    container.appendChild(titlebar);
    container.appendChild(stage);
    container.appendChild(help);
    requestAnimationFrame(function () { view.fit(); });
    if (container._onResize) window.removeEventListener("resize", container._onResize);
    container._onResize = function () { view.fit(); };
    window.addEventListener("resize", container._onResize);
    return view;
  }

  root.mountDiagram = mountDiagram;
  root.placeEdgeLabel = placeEdgeLabel;
  root.labelSize = labelSize;
})(typeof window !== "undefined" ? window : globalThis);
