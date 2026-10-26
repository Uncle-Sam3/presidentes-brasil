/* global */
var ORIENT_SCALE = [
  { id: "esquerda", paren: "esquerda", legend: "Esquerda", color: "#dc2626" },
  { id: "centro-esquerda", paren: "centro-esquerda", legend: "Centro-esquerda", color: "#c026d3" },
  { id: "centro", paren: "centro", legend: "Centro", color: "#ea7a1a" },
  { id: "centro-direita", paren: "centro-direita", legend: "Centro-direita", color: "#a16207" },
  { id: "direita", paren: "direita", legend: "Direita", color: "#16a34a" },
  { id: "militar", paren: "militar", legend: "Militar", color: "#2563eb" },
  { id: "regime", paren: "regime militar", legend: "Regime militar", color: "#2563eb" },
  { id: "estado-novo", paren: "ditadura/Estado Novo", legend: "Ditadura / Estado Novo", color: "#6d28d9" },
  { id: "sem-partido", paren: "sem partido", legend: "Sem partido", color: "#78716c" }
];

var ORIENT = {
  deodoro: { sigla: "Sem partido", orient: "militar" },
  floriano: { sigla: "Sem partido", orient: "militar" },
  prudente: { sigla: "PRP", orient: "centro-direita" },
  "campos-sales": { sigla: "PRP", orient: "centro-direita" },
  "rodrigues-alves": { sigla: "PRP", orient: "centro-direita" },
  "afonso-pena": { sigla: "PRM", orient: "centro-direita" },
  nilo: { sigla: "PRF", orient: "centro-direita" },
  hermes: { sigla: "PRC", orient: "militar" },
  venceslau: { sigla: "PRM", orient: "centro-direita" },
  delfim: { sigla: "PRM", orient: "centro-direita" },
  epitacio: { sigla: "PRM", orient: "centro-direita" },
  bernardes: { sigla: "PRM", orient: "centro-direita" },
  washington: { sigla: "PRP", orient: "centro-direita" },
  "junta-1930": { sigla: "Sem partido", orient: "militar" },
  "vargas-1": { sigla: "Sem partido", orient: "estado-novo" },
  linhares: { sigla: "Sem partido", orient: "sem-partido" },
  dutra: { sigla: "PSD", orient: "centro" },
  "vargas-2": { sigla: "PTB", orient: "centro-esquerda" },
  "cafe-filho": { sigla: "PSP", orient: "centro" },
  "carlos-luz": { sigla: "PSD", orient: "centro" },
  nereu: { sigla: "PSD", orient: "centro" },
  jk: { sigla: "PSD", orient: "centro" },
  janio: { sigla: "PTN", orient: "centro-direita" },
  "mazzilli-1961": { sigla: "PSD", orient: "centro" },
  jango: { sigla: "PTB", orient: "centro-esquerda" },
  "mazzilli-1964": { sigla: "PSD", orient: "centro" },
  castelo: { sigla: "ARENA", orient: "regime" },
  "costa-e-silva": { sigla: "ARENA", orient: "regime" },
  "junta-1969": { sigla: "ARENA", orient: "regime" },
  medici: { sigla: "ARENA", orient: "regime" },
  geisel: { sigla: "ARENA", orient: "regime" },
  figueiredo: { sigla: "ARENA", orient: "regime" },
  sarney: { sigla: "PMDB", orient: "centro" },
  collor: { sigla: "PRN", orient: "centro-direita" },
  itamar: { sigla: "PMDB", orient: "centro" },
  "fhc-1": { sigla: "PSDB", orient: "centro" },
  "fhc-2": { sigla: "PSDB", orient: "centro" },
  "lula-1": { sigla: "PT", orient: "esquerda" },
  "lula-2": { sigla: "PT", orient: "esquerda" },
  "dilma-1": { sigla: "PT", orient: "esquerda" },
  "dilma-2": { sigla: "PT", orient: "esquerda" },
  temer: { sigla: "MDB", orient: "centro" },
  bolsonaro: { sigla: "PL", orient: "direita" },
  "lula-3": { sigla: "PT", orient: "esquerda" }
};

function orientMeta(id) {
  var row = ORIENT[id];
  var scale = ORIENT_SCALE.filter(function (item) { return item.id === row.orient; })[0];
  return {
    sigla: row.sigla,
    paren: scale.paren,
    legend: scale.legend,
    color: scale.color,
    line: row.sigla + " (" + scale.paren + ")"
  };
}
