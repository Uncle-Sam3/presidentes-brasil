/* global ERAS, PRESIDENTS */
(function () {
  var listView = document.getElementById("view-lista");
  var detailView = document.getElementById("view-mandato");
  var timeline = document.getElementById("timeline");
  var stats = document.getElementById("stats");
  var search = document.getElementById("q");
  var chips = document.querySelectorAll(".chip[data-filter]");
  var filter = "todos";
  var savedScroll = 0;

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

  function cardPills(p) {
    if (!p.cases.length) return [pill("sem", "Sem caso pessoal documentado")];
    var seen = {};
    var out = [];
    p.cases.forEach(function (c) {
      if (seen[c.status]) return;
      seen[c.status] = true;
      out.push(pill(c.status, c.statusLabel));
    });
    return out.slice(0, 3);
  }

  function matches(p) {
    var q = (search.value || "").trim().toLowerCase();
    if (q) {
      var blob = (p.name + " " + p.party + " " + p.summary + " " + p.cases.map(function (c) { return c.title + " " + c.summary; }).join(" ")).toLowerCase();
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

  function renderList() {
    timeline.textContent = "";
    var any = false;
    ERAS.forEach(function (era) {
      var people = PRESIDENTS.filter(function (p) { return p.era === era.id && matches(p); });
      if (!people.length) return;
      any = true;
      var section = h("section", "era");
      section.id = "era-" + era.id;
      var head = h("div", "era-head");
      var label = h("div", null);
      label.appendChild(h("div", "era-label", era.years));
      label.appendChild(h("h2", null, era.title));
      head.appendChild(label);
      head.appendChild(h("p", null, era.blurb));
      section.appendChild(head);
      var rail = h("div", "rail");
      people.forEach(function (p) {
        var btn = h("button", "card");
        btn.type = "button";
        btn.setAttribute("data-id", p.id);
        var top = h("div", "card-top");
        top.appendChild(h("span", "years", p.periodLabel));
        top.appendChild(h("span", "years", p.access + " · " + p.exit));
        btn.appendChild(top);
        btn.appendChild(h("h3", null, p.short));
        btn.appendChild(h("p", "party", p.party));
        btn.appendChild(h("p", null, p.card));
        var pills = h("div", "card-pills");
        cardPills(p).forEach(function (node) { pills.appendChild(node); });
        btn.appendChild(pills);
        btn.addEventListener("click", function () { openPresident(p.id, true); });
        rail.appendChild(btn);
      });
      section.appendChild(rail);
      timeline.appendChild(section);
    });
    if (!any) timeline.appendChild(h("p", "empty", "Nenhum mandato corresponde a essa busca."));
  }

  function fact(label, text) {
    var box = h("div", "fact");
    box.appendChild(h("span", null, label));
    box.appendChild(h("p", null, text));
    return box;
  }

  function renderDetail(p) {
    detailView.textContent = "";
    var back = h("a", "back", "← Voltar à linha do tempo");
    back.href = "#";
    back.addEventListener("click", function (e) {
      e.preventDefault();
      showList();
    });
    detailView.appendChild(back);
    detailView.appendChild(h("p", "kicker", eraTitle(p.era) + " · " + p.periodLabel));
    detailView.appendChild(h("h1", null, p.name));
    detailView.appendChild(h("p", "party", p.party + (p.partyDetail ? " · " + p.partyDetail : "")));
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
    detailView.appendChild(grid);
    if (p.banner) {
      var banner = h("div", "banner");
      banner.appendChild(h("strong", null, p.banner.title));
      banner.appendChild(h("p", null, p.banner.text));
      detailView.appendChild(banner);
    }
    var prose = h("div", "prose");
    prose.appendChild(h("p", null, p.accessDetail));
    prose.appendChild(h("p", null, p.exitDetail));
    prose.appendChild(h("p", null, p.summary));
    detailView.appendChild(prose);
    detailView.appendChild(h("h2", null, p.cases.length ? "Casos e escândalos" : "O que se pode afirmar"));
    if (!p.cases.length) {
      var empty = h("div", "case");
      empty.appendChild(pill("sem", "Sem caso pessoal documentado"));
      empty.appendChild(h("p", null, "Não foi localizado, nas fontes usadas neste site, um processo penal de corrupção contra este presidente referente ao mandato. Isso não transforma o período em uma administração auditada: em vários momentos a imprensa era frágil, o controle judicial era outro e, na ditadura, a censura e o AI-5 limitaram apurações."));
      if (p.reading) sources(p.reading, empty);
      detailView.appendChild(empty);
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
      detailView.appendChild(art);
    });
    if (p.other) {
      var other = h("section", "case");
      other.appendChild(pill("politico", "Fora do eixo corrupção"));
      other.appendChild(h("h3", null, p.other.title));
      p.other.paragraphs.forEach(function (para) { other.appendChild(h("p", null, para)); });
      sources(p.other.sources, other);
      detailView.appendChild(other);
    }
    if (p.reading && p.cases.length) {
      var more = h("div", "case");
      more.appendChild(h("h3", null, "Contexto do mandato"));
      sources(p.reading, more);
      detailView.appendChild(more);
    }
  }

  function eraTitle(id) {
    var era = ERAS.filter(function (e) { return e.id === id; })[0];
    return era ? era.title : "";
  }

  function openPresident(id, push) {
    var p = PRESIDENTS.filter(function (item) { return item.id === id; })[0];
    if (!p) return;
    savedScroll = window.scrollY;
    renderDetail(p);
    listView.hidden = true;
    detailView.hidden = false;
    window.scrollTo(0, 0);
    if (push) history.pushState({ id: id }, "", "#mandato/" + id);
  }

  function showList() {
    detailView.hidden = true;
    listView.hidden = false;
    history.pushState(null, "", location.pathname);
    window.scrollTo(0, savedScroll || 0);
  }

  function fromHash() {
    var hash = location.hash || "";
    var match = hash.match(/^#mandato\/([a-z0-9-]+)/);
    if (match) openPresident(match[1], false);
    else {
      detailView.hidden = true;
      listView.hidden = false;
    }
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
  window.addEventListener("popstate", fromHash);

  renderStats();
  renderList();
  fromHash();
})();
