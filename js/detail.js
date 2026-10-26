/* global PRESIDENTS, ERAS, orientMeta, PHOTOS */
(function () {
  function h(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function pill(status, label) {
    return h("span", "pill " + status, label);
  }

  function sources(list, parent) {
    if (!list || !list.length) return;
    var row = h("div", "source-list");
    list.forEach(function (s) {
      var a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.name;
      row.appendChild(a);
    });
    parent.appendChild(row);
  }

  function fact(label, text) {
    var box = h("div", "fact");
    box.appendChild(h("span", null, label));
    box.appendChild(h("p", null, text));
    return box;
  }

  function eraTitle(id) {
    var era = ERAS.filter(function (e) { return e.id === id; })[0];
    return era ? era.title : "";
  }

  function initials(name) {
    var parts = name.split(/\s+/).filter(function (w) {
      return !/^(da|de|do|das|dos|e)$/i.test(w);
    });
    return ((parts[0] || "?").charAt(0) + (parts[1] ? parts[1].charAt(0) : "")).toUpperCase();
  }

  function mountPortrait(parent, p, meta) {
    var photo = (typeof PHOTOS !== "undefined" && PHOTOS[p.id]) || null;
    var frame = h("div", "detail-portrait");
    if (photo) {
      var img = document.createElement("img");
      img.src = photo.src;
      img.alt = "Retrato de " + p.short;
      frame.appendChild(img);
      var cap = h("p", "credit");
      cap.appendChild(document.createTextNode(photo.author + " · " + photo.license + ". "));
      var a = document.createElement("a");
      a.href = photo.filePage;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Arquivo no Wikimedia Commons";
      cap.appendChild(a);
      if (photo.licenseUrl) {
        cap.appendChild(document.createTextNode(" · "));
        var lic = document.createElement("a");
        lic.href = photo.licenseUrl;
        lic.target = "_blank";
        lic.rel = "noopener noreferrer";
        lic.textContent = "licença";
        cap.appendChild(lic);
      }
      frame.appendChild(cap);
    } else {
      frame.appendChild(h("div", "avatar avatar-lg", initials(p.short)));
      frame.appendChild(h("p", "credit", "Sem retrato em licença livre no acervo deste site."));
    }
    frame.style.borderColor = meta.color;
    parent.appendChild(frame);
  }

  function renderPresident(root, p) {
    var meta = orientMeta(p.id);
    root.textContent = "";
    root.appendChild(h("p", "kicker", eraTitle(p.era) + " · " + p.periodLabel));
    var head = h("div", "detail-head");
    mountPortrait(head, p, meta);
    var titles = h("div", null);
    titles.appendChild(h("h1", null, p.name));
    titles.appendChild(h("p", "party", meta.line));
    if (p.partyDetail) titles.appendChild(h("p", "party-detail", p.partyDetail));
    head.appendChild(titles);
    root.appendChild(head);
    var grid = h("div", "meta-grid");
    [
      ["Chegou ao cargo", p.access],
      ["Deixou o cargo", p.exit],
      ["Período", p.periodLabel],
      ["Casos nesta ficha", String(p.cases.length)]
    ].forEach(function (pair) {
      var box = h("div", "meta-box");
      box.appendChild(h("span", null, pair[0]));
      box.appendChild(h("strong", null, pair[1]));
      grid.appendChild(box);
    });
    root.appendChild(grid);
    if (p.banner) {
      var banner = h("div", "banner");
      banner.appendChild(h("strong", null, p.banner.title));
      banner.appendChild(h("p", null, p.banner.text));
      root.appendChild(banner);
    }
    var prose = h("div", "prose");
    prose.appendChild(h("p", null, p.accessDetail));
    prose.appendChild(h("p", null, p.exitDetail));
    prose.appendChild(h("p", null, p.summary));
    root.appendChild(prose);
    root.appendChild(h("h2", null, p.cases.length ? "Casos e escândalos" : "O que se pode afirmar"));
    if (!p.cases.length) {
      var empty = h("div", "case");
      empty.appendChild(pill("sem", "Sem caso pessoal documentado"));
      empty.appendChild(h("p", null, "Não foi localizado, nas fontes usadas neste site, um processo penal de corrupção contra este presidente referente ao mandato. Isso não transforma o período em uma administração auditada: em vários momentos a imprensa era frágil, o controle judicial era outro e, na ditadura, a censura e o AI-5 limitaram apurações."));
      if (p.reading) sources(p.reading, empty);
      root.appendChild(empty);
    }
    p.cases.forEach(function (c) {
      var art = h("article", "case");
      art.id = "caso-" + c.id;
      var top = h("div", "card-top");
      top.appendChild(pill(c.status, c.statusLabel));
      top.appendChild(h("span", "years", c.years));
      art.appendChild(top);
      art.appendChild(h("h3", null, c.title));
      if (!c.targetsPresident) {
        art.appendChild(h("p", null, "Caso do período ou do entorno. Não é, por si só, uma condenação do presidente."));
      }
      art.appendChild(h("p", null, c.summary));
      var facts = h("div", "facts");
      facts.appendChild(fact("Quem aparece no caso", c.involved));
      facts.appendChild(fact("Valores documentados", c.amount));
      facts.appendChild(fact("Situação jurídica", c.legal));
      facts.appendChild(fact("Relação com o presidente", c.targetsPresident ? "A acusação ou a sanção atinge o próprio presidente." : "O presidente não é o condenado ou o réu principal deste registro."));
      art.appendChild(facts);
      if (c.scheme) {
        var a = document.createElement("a");
        a.href = "esquemas.html#" + c.scheme;
        a.textContent = "Abrir diagrama deste esquema";
        a.style.display = "inline-block";
        a.style.marginTop = "10px";
        art.appendChild(a);
      }
      sources(c.sources, art);
      root.appendChild(art);
    });
    if (p.other) {
      var other = h("section", "case");
      other.appendChild(pill("politico", "Fora do eixo corrupção"));
      other.appendChild(h("h3", null, p.other.title));
      p.other.paragraphs.forEach(function (para) { other.appendChild(h("p", null, para)); });
      sources(p.other.sources, other);
      root.appendChild(other);
    }
    if (p.reading && p.cases.length) {
      var more = h("div", "case");
      more.appendChild(h("h3", null, "Contexto do mandato"));
      sources(p.reading, more);
      root.appendChild(more);
    }
  }

  var root = document.getElementById("ficha");
  if (!root) return;
  var params = new URLSearchParams(location.search);
  var id = params.get("id") || "";
  var p = PRESIDENTS.filter(function (item) { return item.id === id; })[0];
  if (!p) {
    root.appendChild(h("h1", null, "Mandato não encontrado"));
    var back = h("p", null, "");
    var a = document.createElement("a");
    a.href = "index.html";
    a.textContent = "Voltar à linha do tempo";
    back.appendChild(a);
    root.appendChild(back);
    return;
  }
  document.title = p.short + " — Presidentes do Brasil";
  renderPresident(root, p);
})();
