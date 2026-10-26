# Presidentes do Brasil — linha do tempo e esquemas

Site estático, em português, com um verbete por mandato presidencial desde a proclamação da República (15 de novembro de 1889) até o presidente em exercício em 26 de outubro de 2026. Cada ficha registra como a pessoa chegou e saiu do cargo e os principais casos de corrupção do período, com o desfecho jurídico: investigação, denúncia, condenação, absolvição, anulação, prescrição ou arquivamento.

Há nove diagramas dos esquemas mais documentados (Petrolão/Lava Jato, mensalão, Anões do Orçamento, PC Farias, sanguessugas, rachadinhas, mala da JBS, descontos do INSS e Capemi). Dá para arrastar, aproximar e clicar em cada bloco.

O texto separa acusação de sentença. Condenação anulada não é tratada como culpa confirmada nem como absolvição. A página [Metodologia](metodologia.html) explica os critérios e os limites.

## Como abrir no computador

Não há etapa de build. Na pasta do repositório:

```bash
python3 -m http.server 4173
```

Abra `http://localhost:4173`. A página inicial é a linha do tempo. Os mapas ficam em `esquemas.html`.

## Como publicar no GitHub Pages

O site está na raiz do repositório (`index.html` ao lado deste arquivo). No GitHub:

1. Abra **Settings** do repositório.
2. No menu lateral, entre em **Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta **/ (root)**.
5. Salve.

Alguns minutos depois o site fica em `https://<usuário>.github.io/<repositório>/`.

Não é preciso Node, bundler nem gerar a pasta `docs`. Se preferir servir a partir de `/docs`, mova `index.html`, `esquemas.html`, `metodologia.html`, `favicon.svg`, `css/` e `js/` para essa pasta e escolha `/docs` no mesmo menu.

## O que há em cada arquivo

| Arquivo | Função |
| --- | --- |
| `index.html` | Linha do tempo e ficha de cada mandato |
| `esquemas.html` | Diagramas interativos |
| `metodologia.html` | Critérios, vocabulário jurídico e limites |
| `js/presidents.js` | Dados dos mandatos, casos e fontes |
| `js/schemes.js` | Dados dos diagramas |
| `css/style.css` | Visual |

## Atualizar um caso

Edite `js/presidents.js` ou `js/schemes.js`. Cada caso precisa de resumo, envolvidos, valor (ou a frase de que não há valor sentenciado), situação jurídica e ao menos um link. Mantenha o tom da metodologia: não promova delação a sentença e não apague uma anulação.

A data de corte do conteúdo é **26 de outubro de 2026**.
