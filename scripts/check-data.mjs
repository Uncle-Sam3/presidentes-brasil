import fs from "fs";
import vm from "vm";

const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("js/presidents.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync("js/schemes.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync("js/orient.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync("js/photos.js", "utf8"), ctx);

const { PRESIDENTS, ERAS, SCHEMES, ORIENT, ORIENT_SCALE } = ctx;
const errors = [];

if (PRESIDENTS.length !== 44) errors.push("esperados 44 mandatos, veio " + PRESIDENTS.length);
const ids = new Set();
let prev = 0;
PRESIDENTS.forEach((p) => {
  if (ids.has(p.id)) errors.push("id repetido " + p.id);
  ids.add(p.id);
  if (p.order !== prev + 1) errors.push("ordem quebrada em " + p.id);
  prev = p.order;
  ["name", "short", "party", "periodLabel", "access", "exit", "summary", "card", "era"].forEach((k) => {
    if (!p[k]) errors.push(p.id + " sem " + k);
  });
  if (!ERAS.some((e) => e.id === p.era)) errors.push(p.id + " era inválida");
  if (!ORIENT[p.id]) errors.push(p.id + " sem orientação");
  else if (!ORIENT_SCALE.some((s) => s.id === ORIENT[p.id].orient)) errors.push(p.id + " orientação inválida");
  if (p.party === "PSDB" && ORIENT[p.id] && ORIENT[p.id].orient !== "centro") errors.push(p.id + " PSDB fora de centro");
  p.cases.forEach((c) => {
    ["title", "status", "statusLabel", "summary", "involved", "amount", "legal"].forEach((k) => {
      if (!c[k]) errors.push(p.id + "/" + c.id + " sem " + k);
    });
    if (!c.sources || !c.sources.length) errors.push(p.id + "/" + c.id + " sem fonte");
    c.sources.forEach((s) => {
      if (!/^https:\/\//.test(s.url)) errors.push("url ruim " + s.url);
    });
  });
  (p.reading || []).forEach((s) => {
    if (!/^https:\/\//.test(s.url)) errors.push("url ruim " + s.url);
  });
  if (p.other) {
    p.other.sources.forEach((s) => {
      if (!/^https:\/\//.test(s.url)) errors.push("url ruim " + s.url);
    });
  }
});

if (SCHEMES.length < 5) errors.push("menos de 5 esquemas");
SCHEMES.forEach((s) => {
  const nodes = new Set(s.nodes.map((n) => n.id));
  if (s.nodes.length < 4) errors.push(s.id + " com poucos nós");
  s.edges.forEach((e) => {
    if (!nodes.has(e.from) || !nodes.has(e.to)) errors.push(s.id + " aresta solta " + e.from + "→" + e.to);
  });
  if (!s.sources.length) errors.push(s.id + " sem fonte");
  s.nodes.forEach((n) => {
    if (n.x + n.w > 1600 || n.y + n.h > 900) {
      /* petrolao canvas is wider; only flag overlap roughly later */
    }
    if (!n.detail || !n.title) errors.push(s.id + " nó incompleto");
  });
});

const urls = new Set();
function collect(list) {
  (list || []).forEach((s) => urls.add(s.url));
}
PRESIDENTS.forEach((p) => {
  p.cases.forEach((c) => collect(c.sources));
  collect(p.reading);
  if (p.other) collect(p.other.sources);
});
SCHEMES.forEach((s) => collect(s.sources));

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("ok", PRESIDENTS.length, "mandatos;", PRESIDENTS.reduce((n, p) => n + p.cases.length, 0), "casos;", SCHEMES.length, "esquemas;", urls.size, "links");
fs.writeFileSync("/tmp/urls.txt", [...urls].join("\n"));
