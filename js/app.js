/* global ERAS, PRESIDENTS, SCHEMES, orientMeta, ORIENT_SCALE, PHOTOS */
(function () {
  var timeline = document.getElementById("timeline");
  var stats = document.getElementById("stats");
  var search = document.getElementById("q");
  var chips = document.querySelectorAll(".chip[data-filter]");
  var legend = document.getElementById("orient-legend");
  var filter = "todos";

  function h(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function initials(name) {
    var parts = name.split(/\s+/).filter(function (w) {
      return !/^(da|de|do|das|dos|e)$/i.test(w);
    });
    return ((parts[0] || "?").charAt(0) + (parts[1] ? parts[1].charAt(0) : "")).toUpperCase();
  }

  function yearsOf(p) {
    var found = (p.periodLabel || "").match(/\d{4}/g) || [];
    return { start: found[0] || "", end: found[1] && found[1] !== found[0] ? found[1] : "" };
  }

  function matches(p) {
    var q = (search.value || "").trim().toLowerCase();
    if (q) {
      var meta = orientMeta(p.id);
      var blob = (p.name + " " + p.party + " " + meta.line + " " + p.summary + " " + p.cases.map(function (c) { return c.title; }).join(" ")).toLowerCase();
      if (blob.indexOf(q) === -1) return false;
    }
    if (filter === "caso") return p.cases.length > 0;
    if (filter === "pessoal") return p.cases.some(function (c) { return c.targetsPresident; });
    if (filter === "sem") return !p.cases.some(function (c) { return c.targetsPresident; });
    return true;
  }

  function renderStats() {
    var cases = PRESIDENTS.reduce(function (n, p) { return n + p.cases.length; }, 0);
    stats.textContent = "";
    [
      [String(PRESIDENTS.length), " mandatos"],
      [String(cases), " casos nas fichas"],
      [String(typeof SCHEMES === "undefined" ? 0 : SCHEMES.length), " diagramas de esquemas"],
      ["26 out 2026", " atualização"]
    ].forEach(function (pair) {
      var s = h("span", "stat");
      s.appendChild(h("b", null, pair[0]));
      s.appendChild(document.createTextNode(pair[1]));
      stats.appendChild(s);
    });
  }

  function renderLegend() {
    if (!legend) return;
    legend.textContent = "";
    ORIENT_SCALE.forEach(function (item) {
      var li = h("li", "orient-key");
      var sw = h("i");
      sw.style.background = item.color;
      li.appendChild(sw);
      li.appendChild(document.createTextNode(item.legend));
      legend.appendChild(li);
    });
  }

  function portraitLink(p) {
    var a = document.createElement("a");
    a.className = "portrait";
    a.href = "presidente.html?id=" + encodeURIComponent(p.id);
    a.setAttribute("aria-label", "Abrir a ficha de " + p.short);
    var photo = (typeof PHOTOS !== "undefined" && PHOTOS[p.id]) || null;
    if (photo) {
      var img = document.createElement("img");
      img.src = photo.src;
      img.alt = "";
      a.appendChild(img);
    } else {
      a.appendChild(h("span", "avatar", initials(p.short)));
    }
    return a;
  }

  function renderList() {
    timeline.textContent = "";
    var any = false;
    var alt = 0;
    ERAS.forEach(function (era) {
      var people = PRESIDENTS.filter(function (p) { return p.era === era.id && matches(p); });
      if (!people.length) return;
      any = true;
      var group = h("section", "h-era");
      group.appendChild(h("p", "h-era-label", era.years + " · " + era.title));
      var row = h("div", "h-row");
      people.forEach(function (p) {
        var meta = orientMeta(p.id);
        var above = alt % 2 === 0;
        alt += 1;
        var item = h("article", "h-item " + (above ? "above" : "below"));
        item.style.setProperty("--seg", meta.color);
        var years = yearsOf(p);
        var year = h("div", "h-year");
        year.appendChild(h("strong", null, years.start));
        if (years.end) year.appendChild(h("small", null, years.end));
        item.appendChild(year);
        item.appendChild(h("span", "h-tick"));
        var card = h("div", "h-card");
        card.appendChild(portraitLink(p));
        var who = h("div", "h-who");
        who.appendChild(h("h3", null, p.short));
        who.appendChild(h("p", "h-party", meta.line));
        card.appendChild(who);
        var list = h("ul", "h-cases");
        if (!p.cases.length) {
          list.appendChild(h("li", "none", "sem caso documentado"));
        } else {
          p.cases.forEach(function (c) {
            list.appendChild(h("li", null, c.title));
          });
        }
        card.appendChild(list);
        item.appendChild(card);
        row.appendChild(item);
      });
      group.appendChild(row);
      timeline.appendChild(group);
    });
    if (!any) timeline.appendChild(h("p", "empty", "Nenhum mandato corresponde a essa busca."));
  }

  function bindScroll() {
    var prev = document.getElementById("scroll-prev");
    var next = document.getElementById("scroll-next");
    function step(dir) {
      timeline.scrollBy({ left: dir * Math.max(280, timeline.clientWidth * 0.6), behavior: "smooth" });
    }
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    timeline.addEventListener("wheel", function (event) {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      timeline.scrollLeft += event.deltaY;
    }, { passive: false });
    var drag = null;
    timeline.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.target.closest && event.target.closest("a, button, input")) return;
      drag = { id: event.pointerId, x: event.clientX, left: timeline.scrollLeft, moved: false };
      timeline.classList.add("dragging");
      try { timeline.setPointerCapture(event.pointerId); } catch (err) { /* ignore */ }
    });
    timeline.addEventListener("pointermove", function (event) {
      if (!drag || drag.id !== event.pointerId) return;
      var dx = event.clientX - drag.x;
      if (Math.abs(dx) > 4) drag.moved = true;
      if (!drag.moved) return;
      event.preventDefault();
      timeline.scrollLeft = drag.left - dx;
    });
    function endDrag(event) {
      if (!drag || drag.id !== event.pointerId) return;
      drag = null;
      timeline.classList.remove("dragging");
    }
    timeline.addEventListener("pointerup", endDrag);
    timeline.addEventListener("pointercancel", endDrag);
  }

  var hash = (location.hash || "").match(/^#mandato\/([a-z0-9-]+)/);
  if (hash) {
    location.replace("presidente.html?id=" + encodeURIComponent(hash[1]));
    return;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filter = chip.getAttribute("data-filter");
      chips.forEach(function (other) {
        other.setAttribute("aria-pressed", other === chip ? "true" : "false");
      });
      renderList();
    });
  });
  search.addEventListener("input", renderList);
  renderStats();
  renderLegend();
  renderList();
  bindScroll();
})();
