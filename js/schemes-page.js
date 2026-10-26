/* global SCHEMES, mountDiagram */
(function () {
  var nav = document.getElementById("scheme-nav");
  var root = document.getElementById("map-root");
  var copy = document.getElementById("map-copy");
  var current = null;

  function renderCopy(scheme) {
    copy.textContent = "";
    copy.appendChild(el("p", "kicker", scheme.years));
    copy.appendChild(el("h2", null, scheme.title));
    scheme.summary.forEach(function (p) { copy.appendChild(el("p", null, p)); });
    if (scheme.correction) {
      var box = document.createElement("div");
      box.className = "callout";
      var strong = document.createElement("strong");
      strong.textContent = scheme.correctionTitle || "O que o registro mostra";
      box.appendChild(strong);
      var para = document.createElement("p");
      para.textContent = scheme.correction;
      box.appendChild(para);
      copy.appendChild(box);
    }
    var h = document.createElement("h3");
    h.textContent = "Leitura do fluxo";
    copy.appendChild(h);
    var ol = document.createElement("ol");
    ol.className = "flow";
    scheme.narrative.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      ol.appendChild(li);
    });
    copy.appendChild(ol);
    var src = document.createElement("div");
    src.className = "source-list";
    scheme.sources.forEach(function (s) {
      var a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.name;
      src.appendChild(a);
    });
    copy.appendChild(src);
    var holder = document.createElement("div");
    holder.setAttribute("data-node-detail", "1");
    holder.style.marginTop = "12px";
    copy.appendChild(holder);
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function show(id, push) {
    var scheme = SCHEMES.filter(function (s) { return s.id === id; })[0] || SCHEMES[0];
    if (current === scheme.id && root.childElementCount) return;
    current = scheme.id;
    nav.querySelectorAll("button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-id") === scheme.id ? "true" : "false");
    });
    renderCopy(scheme);
    root.className = "map-window";
    mountDiagram(root, scheme);
    if (push) history.replaceState(null, "", "#"+ scheme.id);
  }

  SCHEMES.forEach(function (scheme) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.setAttribute("data-id", scheme.id);
    btn.textContent = scheme.short;
    btn.addEventListener("click", function () { show(scheme.id, true); });
    nav.appendChild(btn);
  });

  var initial = (location.hash || "").replace("#", "");
  show(initial, false);
  window.addEventListener("hashchange", function () {
    show((location.hash || "").replace("#", ""), false);
  });
})();
