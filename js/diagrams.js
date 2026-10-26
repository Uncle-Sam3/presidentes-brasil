/* global SCHEMES */
(function (root) {
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

  function curve(a, b) {
    var x1 = a.x + a.w;
    var y1 = a.y + a.h / 2;
    var x2 = b.x;
    var y2 = b.y + b.h / 2;
    var dx = Math.max(48, Math.abs(x2 - x1) / 2);
    var d = "M " + x1 + " " + y1 + " C " + (x1 + dx) + " " + y1 + ", " + (x2 - dx) + " " + y2 + ", " + x2 + " " + y2;
    return { d: d, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 };
  }

  function mountDiagram(container, scheme) {
    container.textContent = "";
    var bounds = scheme.nodes.reduce(function (acc, n) {
      acc.w = Math.max(acc.w, n.x + n.w + 40);
      acc.h = Math.max(acc.h, n.y + n.h + 40);
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

    var stage = el("div", { class: "map-stage", tabindex: "0", role: "application", "aria-label": "Mapa de " + scheme.title + ". Arraste para mover. Clique num bloco para detalhes." });
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
    scheme.edges.forEach(function (edge) {
      var a = byId[edge.from];
      var b = byId[edge.to];
      if (!a || !b) return;
      var c = curve(a, b);
      var path = svgEl("path", {
        d: c.d,
        fill: "none",
        stroke: edge.dashed ? "#e0b15a" : "#e7d7c4",
        "stroke-width": "1.6",
        "stroke-dasharray": edge.dashed ? "6 5" : "0",
        "marker-end": "url(#arrow-" + scheme.id + ")"
      });
      svg.appendChild(path);
      if (edge.label) {
        var pill = svgEl("g");
        var text = svgEl("text", { class: "edge-label", x: c.mx, y: c.my - 6, "text-anchor": "middle" });
        text.textContent = edge.label;
        var bg = svgEl("rect", { rx: "8", fill: "#f4efe6", opacity: "0.92" });
        pill.appendChild(bg);
        pill.appendChild(text);
        svg.appendChild(pill);
        requestAnimationFrame(function () {
          var box = text.getBBox();
          bg.setAttribute("x", box.x - 6);
          bg.setAttribute("y", box.y - 2);
          bg.setAttribute("width", box.width + 12);
          bg.setAttribute("height", box.height + 5);
        });
      }
    });

    var selected = null;
    var detailBox = container.parentElement.querySelector("[data-node-detail]");
    scheme.nodes.forEach(function (n) {
      var btn = el("button", { class: "map-node " + n.type, type: "button", "aria-pressed": "false" });
      btn.style.left = n.x + "px";
      btn.style.top = n.y + "px";
      btn.style.width = n.w + "px";
      btn.style.minHeight = n.h + "px";
      btn.appendChild(el("span", { class: "tag", text: n.tag }));
      btn.appendChild(el("strong", { text: n.title }));
      btn.appendChild(el("em", { text: n.text }));
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        selected = n.id;
        world.querySelectorAll(".map-node").forEach(function (other) {
          other.setAttribute("aria-pressed", other === btn ? "true" : "false");
        });
        detail.textContent = "";
        detail.appendChild(el("strong", { text: n.title }));
        detail.appendChild(el("p", { text: n.detail }));
        if (detailBox) {
          detailBox.textContent = "";
          detailBox.appendChild(el("h3", { text: n.title }));
          detailBox.appendChild(el("p", { text: n.detail }));
        }
      });
      world.appendChild(btn);
    });
    world.insertBefore(svg, world.firstChild);
    stage.appendChild(world);

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
      if (event.target.closest(".map-node, .map-node-detail")) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, ox: view.x, oy: view.y };
      stage.classList.add("dragging");
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      view.x = drag.ox + (event.clientX - drag.x);
      view.y = drag.oy + (event.clientY - drag.y);
      view.apply();
    });
    function endDrag(event) {
      if (!drag || drag.id !== event.pointerId) return;
      drag = null;
      stage.classList.remove("dragging");
    }
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);
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

    var help = el("p", { class: "map-help", text: "Arraste o fundo para mover. Roda do mouse ou pinça aproximam. Clique num bloco. Tracejado = elo alegado, ainda não reconhecido como fato por sentença." });
    var detail = el("div", { class: "map-node-detail" });
    detail.appendChild(el("strong", { text: "Clique num bloco" }));
    detail.appendChild(el("p", { text: "O texto do bloco mostra o que a denúncia, a delação ou a sentença registrou." }));
    stage.appendChild(detail);
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
})(window);
