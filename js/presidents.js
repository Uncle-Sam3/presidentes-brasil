var ERAS = [
  {
    id: "velha",
    title: "República Velha",
    years: "1889–1930",
    blurb: "República oligárquica, voto limitado e fraudes eleitorais. Quase não há processo penal moderno de corrupção contra os presidentes. Onde existe escândalo, a ficha diz o que foi política econômica, o que foi acusação e o que não chegou a sentença."
  },
  {
    id: "vargas",
    title: "Era Vargas",
    years: "1930–1946",
    blurb: "Revolução de 1930, governo provisório e Estado Novo. Censura e concentração de poder reduziram o controle externo. Vargas não tem condenação criminal por corrupção."
  },
  {
    id: "republica46",
    title: "República de 1946",
    years: "1946–1964",
    blurb: "Democracia com imprensa livre e crises seguidas. Há denúncias fortes — o “mar de lama” e as obras de Brasília — e quase nenhuma condenação criminal de presidente."
  },
  {
    id: "ditadura",
    title: "Ditadura militar",
    years: "1964–1985",
    blurb: "Presidentes eleitos pelo Congresso sob Atos Institucionais. O AI-5 e a censura impediram apuração independente. Escândalos do fim do regime, como Capemi e Coroa-Brastel, vieram a público na abertura e, em geral, sem pena para as autoridades."
  },
  {
    id: "nova",
    title: "Nova República",
    years: "1985–2026",
    blurb: "Imprensa, Ministério Público e Polícia Federal produzem um arquivo muito mais denso. A quantidade de casos daqui não prova, sozinha, que as décadas anteriores foram limpas: prova que passaram a ser investigadas."
  }
];

var PRESIDENTS = [
  {
    id: "deodoro",
    order: 1,
    era: "velha",
    name: "Manuel Deodoro da Fonseca",
    short: "Deodoro da Fonseca",
    party: "Sem partido",
    partyDetail: "marechal; líder do movimento republicano",
    periodLabel: "15 nov 1889 – 23 nov 1891",
    access: "Proclamação",
    accessDetail: "Chefiou o golpe que depôs o Império em 15 de novembro de 1889 e passou a chefiar o governo provisório. Em 1891 foi eleito presidente pelo Congresso Constituinte.",
    exit: "Renúncia",
    exitDetail: "Renunciou em 23 de novembro de 1891, depois de fechar o Congresso e perder o apoio de setores da Marinha e do próprio ministério.",
    card: "A crise econômica do Encilhamento marcou o governo. Não há condenação criminal contra Deodoro.",
    summary: "O mandato mistura a fundação da República e uma bolha financeira. O Encilhamento, conduzido na Fazenda por Rui Barbosa, multiplicou bancos emissores e especulação na Bolsa. Foi um desastre de política monetária com favorecimento a especuladores, não uma sentença penal contra o presidente.",
    cases: [
      {
        id: "encilhamento",
        title: "Encilhamento",
        status: "sem",
        statusLabel: "Sem condenação criminal",
        years: "1890–1891",
        targetsPresident: false,
        summary: "Rui Barbosa, ministro da Fazenda, autorizou bancos a emitir moeda com lastro frágil. O crédito fácil inflou companhias de papel e a especulação na Rua do Ouvidor, o “encilhamento”. Quando a bolha furou, ficaram falências, inflação e acusações de favorecimento a grupos próximos dos emissores. Deodoro não foi réu. Rui Barbosa também não foi condenado criminalmente por esse desenho.",
        involved: "Deodoro da Fonseca, chefe do governo; Rui Barbosa, ministro da Fazenda; banqueiros emissores e especuladores da Bolsa do Rio.",
        amount: "Não há um valor de propina fixado em processo. O estrago foi macroeconômico: emissão descontrolada e quebra de empresas criadas na onda especulativa.",
        legal: "Não existe condenação criminal. O episódio é tratado pela historiografia como crise de política econômica com favorecimento, não como um caso penal julgado.",
        sources: [
          { name: "Wikipedia — Encilhamento", url: "https://pt.wikipedia.org/wiki/Encilhamento" },
          { name: "Wikipedia — Deodoro da Fonseca", url: "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca" }
        ]
      }
    ],
    reading: [{ name: "Lista de presidentes do Brasil", url: "https://pt.wikipedia.org/wiki/Lista_de_presidentes_do_Brasil" }]
  },
  {
    id: "floriano",
    order: 2,
    era: "velha",
    name: "Floriano Vieira Peixoto",
    short: "Floriano Peixoto",
    party: "Sem partido",
    partyDetail: "marechal",
    periodLabel: "23 nov 1891 – 15 nov 1894",
    access: "Vice que assumiu",
    accessDetail: "Era vice de Deodoro e assumiu com a renúncia. A Constituição previa nova eleição, mas Floriano ficou até o fim do quadriênio, o que a oposição tratou como permanência ilegal.",
    exit: "Fim do período",
    exitDetail: "Transmitiu o cargo ao civil Prudente de Morais em 15 de novembro de 1894.",
    card: "Governo de exceção e guerra civil. Sem condenação por corrupção pessoal.",
    summary: "Floriano governou sob estado de sítio, enfrentou a Revolta da Armada e a Revolução Federalista e consolidou a República à força. Não há processo penal de corrupção contra ele. O que a história registra é repressão política, não um esquema de propina sentenciado.",
    cases: [],
    reading: [
      { name: "Wikipedia — Floriano Peixoto", url: "https://pt.wikipedia.org/wiki/Floriano_Peixoto" },
      { name: "Lista de presidentes do Brasil", url: "https://pt.wikipedia.org/wiki/Lista_de_presidentes_do_Brasil" }
    ]
  },
  {
    id: "prudente",
    order: 3,
    era: "velha",
    name: "Prudente José de Morais Barros",
    short: "Prudente de Morais",
    party: "Partido Republicano Paulista",
    partyDetail: "PRP",
    periodLabel: "15 nov 1894 – 15 nov 1898",
    access: "Eleito",
    accessDetail: "Primeiro presidente civil, eleito de forma direta, ainda com voto restrito.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o quadriênio e passou o cargo a Campos Sales.",
    card: "Primeiro civil. A Guerra de Canudos dominou o noticiário, não um processo de corrupção.",
    summary: "O governo enfrentou a Guerra de Canudos e tentou pacificar a República depois de Floriano. Não foi localizado um caso penal de corrupção contra Prudente. Fraudes eleitorais e o poder dos coronéis são traços do regime, não uma sentença com o nome dele.",
    cases: [],
    reading: [{ name: "Wikipedia — Prudente de Morais", url: "https://pt.wikipedia.org/wiki/Prudente_de_Morais" }]
  },
  {
    id: "campos-sales",
    order: 4,
    era: "velha",
    name: "Manuel Ferraz de Campos Sales",
    short: "Campos Sales",
    party: "Partido Republicano Paulista",
    partyDetail: "PRP",
    periodLabel: "15 nov 1898 – 15 nov 1902",
    access: "Eleito",
    accessDetail: "Eleito pelo voto direto restrito, com apoio da política dos estados.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o quadriênio.",
    card: "Funding loan e política dos governadores. Não são condenações por corrupção.",
    summary: "Campos Sales renegociou a dívida externa no funding loan de 1898 e organizou a “política dos governadores”: o governo federal sustentava as oligarquias estaduais em troca de apoio no Congresso. É um arranjo de poder, criticado como farsa eleitoral, não um processo criminal de propina contra o presidente.",
    cases: [],
    reading: [
      { name: "Wikipedia — Campos Sales", url: "https://pt.wikipedia.org/wiki/Campos_Sales" },
      { name: "Wikipedia — Política dos governadores", url: "https://pt.wikipedia.org/wiki/Pol%C3%ADtica_dos_governadores" }
    ]
  },
  {
    id: "rodrigues-alves",
    order: 5,
    era: "velha",
    name: "Francisco de Paula Rodrigues Alves",
    short: "Rodrigues Alves",
    party: "Partido Republicano Paulista",
    partyDetail: "PRP",
    periodLabel: "15 nov 1902 – 15 nov 1906",
    access: "Eleito",
    accessDetail: "Eleito para o mandato que modernizou portos e a capital.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o período em 1906. Foi eleito de novo em 1918, mas morreu em 16 de janeiro de 1919, antes de tomar posse. Por isso não há segundo mandato.",
    card: "Reforma do Rio, sob o prefeito Pereira Passos. Sem condenação do presidente.",
    summary: "O Rio passou por uma reforma urbana dura, conduzida pelo prefeito Pereira Passos, com sanitarismo de Oswaldo Cruz e a Revolta da Vacina. Houve remoções e contratos de obras. Não há condenação criminal de Rodrigues Alves por corrupção nesses contratos. A Revolta da Vacina foi conflito sanitário e policial, não um caso de propina.",
    cases: [],
    reading: [{ name: "Wikipedia — Rodrigues Alves", url: "https://pt.wikipedia.org/wiki/Rodrigues_Alves" }]
  },
  {
    id: "afonso-pena",
    order: 6,
    era: "velha",
    name: "Afonso Augusto Moreira Pena",
    short: "Afonso Pena",
    party: "Partido Republicano Mineiro",
    partyDetail: "PRM",
    periodLabel: "15 nov 1906 – 14 jun 1909",
    access: "Eleito",
    accessDetail: "Eleito pelo PRP e pelo PRM, na política do café com leite.",
    exit: "Morte",
    exitDetail: "Morreu em 14 de junho de 1909, no cargo. O vice Nilo Peçanha assumiu.",
    card: "Morreu no cargo. O Convênio de Taubaté foi política do café, não um processo penal.",
    summary: "No início do governo vigorava o Convênio de Taubaté, acordo dos estados cafeeiros para sustentar o preço do café com compra de estoques. Críticos viram favorecimento aos fazendeiros. Não há ação penal de corrupção contra Afonso Pena. Ele morreu antes de completar o mandato.",
    cases: [],
    reading: [{ name: "Wikipedia — Afonso Pena", url: "https://pt.wikipedia.org/wiki/Afonso_Pena" }]
  },
  {
    id: "nilo",
    order: 7,
    era: "velha",
    name: "Nilo Procópio Peçanha",
    short: "Nilo Peçanha",
    party: "Partido Republicano Fluminense",
    partyDetail: "PRF",
    periodLabel: "14 jun 1909 – 15 nov 1910",
    access: "Vice que assumiu",
    accessDetail: "Assumiu com a morte de Afonso Pena e completou o quadriênio.",
    exit: "Fim do período",
    exitDetail: "Transmitiu o cargo a Hermes da Fonseca.",
    card: "Mandato curto de sucessão. Sem caso penal de corrupção documentado.",
    summary: "Nilo criou estruturas de ensino profissional e administrou a sucessão presidencial disputada de 1910. Não foi localizada condenação ou denúncia penal de corrupção contra ele nesse período.",
    cases: [],
    reading: [{ name: "Wikipedia — Nilo Peçanha", url: "https://pt.wikipedia.org/wiki/Nilo_Pe%C3%A7anha" }]
  },
  {
    id: "hermes",
    order: 8,
    era: "velha",
    name: "Hermes Rodrigues da Fonseca",
    short: "Hermes da Fonseca",
    party: "Partido Republicano Conservador",
    partyDetail: "PRC",
    periodLabel: "15 nov 1910 – 15 nov 1914",
    access: "Eleito",
    accessDetail: "Eleito contra Rui Barbosa na campanha civilista, com forte apoio militar.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o quadriênio.",
    card: "Intervenções da “política das salvações”. Sem condenação por corrupção.",
    summary: "O governo começou com a Revolta da Chibata e seguiu com intervenções federais nos estados, a política das salvações, para quebrar oligarquias adversárias. Há acusações da época de arbítrio e de uso da máquina. Não há sentença criminal de corrupção contra Hermes.",
    cases: [],
    reading: [{ name: "Wikipedia — Hermes da Fonseca", url: "https://pt.wikipedia.org/wiki/Hermes_da_Fonseca" }]
  },
  {
    id: "venceslau",
    order: 9,
    era: "velha",
    name: "Venceslau Brás Pereira Gomes",
    short: "Venceslau Brás",
    party: "Partido Republicano Mineiro",
    partyDetail: "PRM",
    periodLabel: "15 nov 1914 – 15 nov 1918",
    access: "Eleito",
    accessDetail: "Eleito na chapa com o PRP, ainda na lógica do café com leite.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o período. O sucessor eleito, Rodrigues Alves, não chegou a tomar posse.",
    card: "Primeira Guerra e gripe espanhola. Sem caso penal de corrupção do presidente.",
    summary: "O Brasil declarou guerra às potências centrais em 1917. A gripe espanhola matou milhares, inclusive no Rio. Não há um esquema de corrupção com sentença ligado a Venceslau. O mandato seguinte imediato foi exercido pelo vice eleito, porque Rodrigues Alves estava doente.",
    cases: [],
    reading: [{ name: "Wikipedia — Venceslau Brás", url: "https://pt.wikipedia.org/wiki/Venceslau_Br%C3%A1s" }]
  },
  {
    id: "delfim",
    order: 10,
    era: "velha",
    name: "Delfim Moreira da Costa Ribeiro",
    short: "Delfim Moreira",
    party: "Partido Republicano Mineiro",
    partyDetail: "PRM",
    periodLabel: "15 nov 1918 – 28 jul 1919",
    access: "Vice que assumiu",
    accessDetail: "Rodrigues Alves foi eleito em 1918, mas não tomou posse por doença e morreu em 16 de janeiro de 1919. Delfim, vice eleito, assumiu em 15 de novembro de 1918.",
    exit: "Eleição complementar",
    exitDetail: "Doente, governou de fato pouco. Epitácio Pessoa venceu a eleição especial e tomou posse em 28 de julho de 1919.",
    card: "Sucessão de meses, com o presidente eleito morto antes da posse. Sem caso de corrupção.",
    summary: "Mandato-ponte, exercido em grande parte pelos ministros por causa da saúde de Delfim. Não há caso de corrupção associado a ele.",
    cases: [],
    reading: [{ name: "Wikipedia — Delfim Moreira", url: "https://pt.wikipedia.org/wiki/Delfim_Moreira" }]
  },
  {
    id: "epitacio",
    order: 11,
    era: "velha",
    name: "Epitácio Lindolfo da Silva Pessoa",
    short: "Epitácio Pessoa",
    party: "Partido Republicano Mineiro",
    partyDetail: "candidato de consenso; paraibano",
    periodLabel: "28 jul 1919 – 15 nov 1922",
    access: "Eleito",
    accessDetail: "Eleito em pleito especial depois da morte de Rodrigues Alves.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o período deixado em aberto pela morte do antecessor eleito.",
    card: "A crítica documentada é o nepotismo, não uma condenação penal.",
    summary: "Epitácio fez obras do centenário da Independência e foi criticado, já na época, por nomear parentes para cargos. É a acusação mais estável do mandato. Não houve processo penal de corrupção contra ele.",
    cases: [
      {
        id: "nepotismo-epitacio",
        title: "Nomeações de parentes",
        status: "sem",
        statusLabel: "Sem processo criminal",
        years: "1919–1922",
        targetsPresident: true,
        summary: "Jornais e opositores acusaram Epitácio de lotar cargos com parentes da Paraíba. A prática era comum na República Velha; no governo dele virou tema público. Não existe ação penal correspondente. Nepotismo, nesse período, era desvio ético e político julgado pela imprensa, não pelo Código Penal de hoje.",
        involved: "Epitácio Pessoa e familiares nomeados para postos federais.",
        amount: "Não há cifra de desvio apurada em processo.",
        legal: "Sem denúncia penal e sem condenação.",
        sources: [
          { name: "Wikipedia — Epitácio Pessoa", url: "https://pt.wikipedia.org/wiki/Epit%C3%A1cio_Pessoa" }
        ]
      }
    ],
    reading: [{ name: "Lista de presidentes do Brasil", url: "https://pt.wikipedia.org/wiki/Lista_de_presidentes_do_Brasil" }]
  },
  {
    id: "bernardes",
    order: 12,
    era: "velha",
    name: "Artur da Silva Bernardes",
    short: "Artur Bernardes",
    party: "Partido Republicano Mineiro",
    partyDetail: "PRM",
    periodLabel: "15 nov 1922 – 15 nov 1926",
    access: "Eleito",
    accessDetail: "Eleito em 1922 numa eleição contestada pelos militares tenentistas.",
    exit: "Fim do mandato",
    exitDetail: "Governou quase todo o tempo sob estado de sítio e transmitiu o cargo a Washington Luís.",
    card: "Estado de sítio e tenentismo. Sem condenação por corrupção.",
    summary: "Bernardes enfrentou revoltas tenentistas, entre elas a de São Paulo em 1924 e a Coluna Prestes. A marca do governo é a repressão política sob estado de sítio. Não há sentença de corrupção contra ele.",
    cases: [],
    reading: [{ name: "Wikipedia — Artur Bernardes", url: "https://pt.wikipedia.org/wiki/Artur_Bernardes" }]
  },
  {
    id: "washington",
    order: 13,
    era: "velha",
    name: "Washington Luís Pereira de Sousa",
    short: "Washington Luís",
    party: "Partido Republicano Paulista",
    partyDetail: "PRP",
    periodLabel: "15 nov 1926 – 24 out 1930",
    access: "Eleito",
    accessDetail: "Eleito pelo PRP, defendeu a política do café e a defesa da moeda.",
    exit: "Deposto",
    exitDetail: "A Revolução de 1930, em 24 de outubro, depôs Washington Luís e impediu a posse do sucessor eleito Júlio Prestes.",
    card: "Deposto em 1930. A crise do café não é um processo de corrupção contra ele.",
    summary: "A queda do preço do café em 1929 quebrou a política de valorização e a sucessão que indicava outro paulista. Washington Luís foi deposto. Não há condenação criminal por corrupção. Júlio Prestes, eleito em 1930, não tomou posse e por isso não entra na linha.",
    cases: [],
    reading: [{ name: "Wikipedia — Washington Luís", url: "https://pt.wikipedia.org/wiki/Washington_Lu%C3%ADs" }]
  },
  {
    id: "junta-1930",
    order: 14,
    era: "vargas",
    name: "Junta Governativa Provisória de 1930",
    short: "Junta de 1930",
    party: "Sem partido",
    partyDetail: "Tasso Fragoso, Mena Barreto e Isaías de Noronha",
    periodLabel: "24 out 1930 – 3 nov 1930",
    access: "Golpe",
    accessDetail: "Os generais Augusto Tasso Fragoso e João de Deus Mena Barreto e o almirante Isaías de Noronha assumiram o poder no dia em que Washington Luís foi deposto, até Getúlio Vargas chegar ao Rio.",
    exit: "Entrega a Vargas",
    exitDetail: "Em 3 de novembro de 1930 a junta transmitiu o governo a Getúlio Vargas.",
    card: "Dez dias entre a deposição e Vargas. Sem caso próprio de corrupção.",
    summary: "A junta é um intervalo militar da Revolução de 1930, não um governo com programa. Não há caso de corrupção associado a esses dez dias.",
    cases: [],
    reading: [{ name: "Wikipedia — Revolução de 1930", url: "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_de_1930" }]
  },
  {
    id: "vargas-1",
    order: 15,
    era: "vargas",
    name: "Getúlio Dornelles Vargas",
    short: "Getúlio Vargas",
    party: "Sem partido no Estado Novo",
    partyDetail: "chegou pela Aliança Liberal; ditadura a partir de 1937",
    periodLabel: "3 nov 1930 – 29 out 1945",
    access: "Revolução de 1930",
    accessDetail: "Assumiu como chefe do governo provisório. A Constituinte de 1934 o elegeu presidente. Em 10 de novembro de 1937 deu o golpe do Estado Novo e passou a governar sem eleição e com censura.",
    exit: "Deposto",
    exitDetail: "Foi deposto em 29 de outubro de 1945 pelos militares, que entregaram a presidência a José Linhares, do Supremo.",
    card: "Quase 15 anos, os últimos sob ditadura. Sem condenação criminal por corrupção.",
    summary: "O Estado Novo fechou partidos, censurou a imprensa e criou o DIP. Esse ambiente impediu investigação independente. Depois da queda houve apurações sobre a administração, sem condenação criminal de Vargas. Acusações de favorecimento a industriais amigos do regime aparecem na historiografia como política de quadros, não como sentença.",
    cases: [
      {
        id: "apuracoes-1945",
        title: "Apurações depois da queda",
        status: "arquivado",
        statusLabel: "Sem condenação",
        years: "1945–1946",
        targetsPresident: false,
        summary: "Com o fim do Estado Novo, o governo Linhares e a imprensa reaberta examinaram contratos e nomeações do regime. Não resultou condenação criminal de Getúlio Vargas. A ausência de sentença precisa ser lida junto com 15 anos de censura: muita coisa não foi investigável na hora.",
        involved: "Administração do Estado Novo. Vargas não foi réu criminal por corrupção.",
        amount: "Não há total consolidado em sentença.",
        legal: "Sem condenação criminal do ex-presidente.",
        sources: [
          { name: "Wikipedia — Estado Novo", url: "https://pt.wikipedia.org/wiki/Estado_Novo_(Brasil)" },
          { name: "Wikipedia — Getúlio Vargas", url: "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas" }
        ]
      }
    ]
  },
  {
    id: "linhares",
    order: 16,
    era: "vargas",
    name: "José Linhares",
    short: "José Linhares",
    party: "Sem partido",
    partyDetail: "presidente do Supremo Tribunal Federal",
    periodLabel: "29 out 1945 – 31 jan 1946",
    access: "Linha de sucessão",
    accessDetail: "Presidente do STF, assumiu quando os militares depuseram Vargas, para conduzir a transição até a posse do eleito.",
    exit: "Posse do eleito",
    exitDetail: "Transmitiu o cargo a Eurico Gaspar Dutra em 31 de janeiro de 1946.",
    card: "Transição de três meses. Sem caso de corrupção.",
    summary: "Linhares convocou e respeitou a eleição de dezembro de 1945. Não há caso de corrupção ligado a esse intervalo.",
    cases: [],
    reading: [{ name: "Wikipedia — José Linhares", url: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Linhares" }]
  },
  {
    id: "dutra",
    order: 17,
    era: "republica46",
    name: "Eurico Gaspar Dutra",
    short: "Eurico Gaspar Dutra",
    party: "PSD",
    partyDetail: "Partido Social Democrático",
    periodLabel: "31 jan 1946 – 31 jan 1951",
    access: "Eleito",
    accessDetail: "Eleito em dezembro de 1945, a primeira eleição presidencial depois do Estado Novo, e empossado em 31 de janeiro de 1946.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o período e passou o cargo a Getúlio Vargas, eleito em 1950.",
    card: "Constituição de 1946. Sem caso penal de corrupção do presidente.",
    summary: "Dutra governou sob a nova Constituição, alinhou o Brasil à Guerra Fria e proibiu o jogo. Não foi localizado um processo de corrupção contra ele. O Plano SALTE, de obras, executou pouco do que anunciou; isso é falha de governo, não condenação.",
    cases: [],
    reading: [{ name: "Wikipedia — Eurico Gaspar Dutra", url: "https://pt.wikipedia.org/wiki/Eurico_Gaspar_Dutra" }]
  },
  {
    id: "vargas-2",
    order: 18,
    era: "republica46",
    name: "Getúlio Dornelles Vargas",
    short: "Getúlio Vargas",
    party: "PTB",
    partyDetail: "Partido Trabalhista Brasileiro",
    periodLabel: "31 jan 1951 – 24 ago 1954",
    access: "Eleito",
    accessDetail: "Voltou pelo voto direto em 1950 e tomou posse em 31 de janeiro de 1951.",
    exit: "Suicídio",
    exitDetail: "Matou-se no Palácio do Catete em 24 de agosto de 1954, no auge da crise aberta pelo atentado da Rua Tonelero.",
    card: "Crise do “mar de lama”. Vargas não foi condenado. O atentado é crime do entorno, não sentença de corrupção.",
    summary: "A oposição, em especial Carlos Lacerda, chamou de “mar de lama” as denúncias de corrupção no entorno do Catete. O caso mais concreto na imprensa foi o financiamento do jornal Última Hora. Em 5 de agosto de 1954, um atentado na Rua Tonelero matou o major Rubens Vaz e feriu Lacerda. A investigação chegou a Gregório Fortunato, chefe da guarda pessoal. Vargas não chegou a ser denunciado: suicidou-se.",
    cases: [
      {
        id: "mar-de-lama",
        title: "“Mar de lama” e Última Hora",
        status: "investigado",
        statusLabel: "Denúncias sem processo contra Vargas",
        years: "1953–1954",
        targetsPresident: false,
        summary: "Lacerda e a União Democrática Nacional acusavam o governo de corrupção sistêmica. O ponto que virou CPI foi o jornal Última Hora, de Samuel Wainer, favorecido por empréstimos do Banco do Brasil enquanto apoiava Vargas. A comissão examinou o favorecimento. Não houve condenação criminal de Vargas, que morreu no cargo.",
        involved: "Samuel Wainer, dono da Última Hora; diretores do Banco do Brasil; oposição liderada por Carlos Lacerda. Vargas era o alvo político, não um réu.",
        amount: "Os empréstimos do Banco do Brasil ao jornal são o valor discutido na CPI. Não há sentença que fixe propina recebida por Vargas.",
        legal: "Sem denúncia penal contra o presidente e sem condenação. A crise foi encerrada pela morte dele, não por um juízo.",
        sources: [
          { name: "Wikipedia — Última Hora", url: "https://pt.wikipedia.org/wiki/%C3%9Altima_Hora" },
          { name: "Wikipedia — Getúlio Vargas", url: "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas" }
        ]
      },
      {
        id: "tonelero",
        title: "Atentado da Rua Tonelero",
        status: "condenado",
        statusLabel: "Crime do entorno, não de corrupção",
        years: "1954",
        targetsPresident: false,
        summary: "Homens da guarda pessoal de Vargas participaram do atentado contra Carlos Lacerda. Gregório Fortunato foi condenado pela morte do major Rubens Vaz. É um crime de sangue ligado à crise política que a oposição narrava como luta contra a corrupção. Não é um julgamento de peculato ou corrupção passiva de Vargas.",
        involved: "Gregório Fortunato e outros membros da guarda pessoal. A vítima fatal foi o major Rubens Vaz. Lacerda ficou ferido.",
        amount: "Não se aplica. O processo é de homicídio e participação no atentado.",
        legal: "Fortunato foi condenado pela Justiça. Vargas não foi réu: morreu três semanas depois do atentado.",
        sources: [
          { name: "Wikipedia — Atentado da Rua Tonelero", url: "https://pt.wikipedia.org/wiki/Atentado_da_rua_Tonelero" }
        ]
      }
    ]
  },
  {
    id: "cafe-filho",
    order: 19,
    era: "republica46",
    name: "João Fernandes Campos Café Filho",
    short: "Café Filho",
    party: "PSP",
    partyDetail: "Partido Social Progressista",
    periodLabel: "24 ago 1954 – 8 nov 1955",
    access: "Vice que assumiu",
    accessDetail: "Vice de Vargas, assumiu após o suicídio.",
    exit: "Licença e impedimento",
    exitDetail: "Licenciou-se por saúde em 8 de novembro de 1955. Depois do impedimento de Carlos Luz, o Congresso considerou o retorno de Café Filho incompatível com a crise e manteve Nereu Ramos.",
    card: "Sucessão da crise de 1954. Sem caso de corrupção pessoal.",
    summary: "Café Filho administrou o pós-suicídio de Vargas e a preparação da eleição de Juscelino. Não há caso penal de corrupção contra ele. Saiu de cena na crise militar de novembro de 1955.",
    cases: [],
    reading: [{ name: "Wikipedia — Café Filho", url: "https://pt.wikipedia.org/wiki/Caf%C3%A9_Filho" }]
  },
  {
    id: "carlos-luz",
    order: 20,
    era: "republica46",
    name: "Carlos Coimbra da Luz",
    short: "Carlos Luz",
    party: "PSD",
    partyDetail: "presidente da Câmara",
    periodLabel: "8 nov 1955 – 11 nov 1955",
    access: "Linha de sucessão",
    accessDetail: "Presidente da Câmara, assumiu com a licença de Café Filho.",
    exit: "Impedido",
    exitDetail: "Em 11 de novembro de 1955, o general Lott depôs a resistência a Juscelino num movimento que o Congresso depois legalizou. Carlos Luz foi declarado impedido. Foram três dias.",
    card: "Três dias na crise de novembro de 1955. Sem caso de corrupção.",
    summary: "Carlos Luz ficou no cargo durante a crise sucessória que opôs setores das Forças Armadas à posse de Juscelino e de João Goulart. Não há caso de corrupção. O episódio é golpe e contragolpe, resolvido no Congresso com a posse de Nereu Ramos.",
    cases: [],
    reading: [{ name: "Wikipedia — Carlos Luz", url: "https://pt.wikipedia.org/wiki/Carlos_Luz" }]
  },
  {
    id: "nereu",
    order: 21,
    era: "republica46",
    name: "Nereu de Oliveira Ramos",
    short: "Nereu Ramos",
    party: "PSD",
    partyDetail: "presidente do Senado",
    periodLabel: "11 nov 1955 – 31 jan 1956",
    access: "Linha de sucessão",
    accessDetail: "Presidente do Congresso, assumiu depois do impedimento de Carlos Luz e governou sob estado de sítio até a posse de Juscelino.",
    exit: "Posse do eleito",
    exitDetail: "Transmitiu o cargo a Juscelino Kubitschek em 31 de janeiro de 1956.",
    card: "Transição sob estado de sítio. Sem caso de corrupção.",
    summary: "Nereu garantiu a posse dos eleitos de 1955. Não há caso de corrupção associado a esses dois meses e meio.",
    cases: [],
    reading: [{ name: "Wikipedia — Nereu Ramos", url: "https://pt.wikipedia.org/wiki/Nereu_Ramos" }]
  },
  {
    id: "jk",
    order: 22,
    era: "republica46",
    name: "Juscelino Kubitschek de Oliveira",
    short: "Juscelino Kubitschek",
    party: "PSD",
    partyDetail: "Partido Social Democrático",
    periodLabel: "31 jan 1956 – 31 jan 1961",
    access: "Eleito",
    accessDetail: "Eleito em 1955 e empossado depois da crise militar de novembro, com João Goulart de vice.",
    exit: "Fim do mandato",
    exitDetail: "Concluiu o período e passou o cargo a Jânio Quadros. Depois de 1964 teve os direitos políticos cassados e respondeu a inquéritos do regime.",
    card: "Brasília e denúncias de superfaturamento. Inquéritos da ditadura, sem condenação da Justiça comum.",
    summary: "A construção de Brasília em poucos anos gerou, já na época, denúncias de sobrepreço e de favorecimento a empreiteiras. Depois do golpe de 1964, inquéritos policiais-militares investigaram Juscelino por corrupção e enriquecimento. Ele foi cassado e morreu em 1976 sem uma condenação da Justiça comum. IPM de ditadura não equivale a sentença de juiz livre.",
    cases: [
      {
        id: "brasilia",
        title: "Obras de Brasília e IPMs após 1964",
        status: "investigado",
        statusLabel: "Investigado · sem condenação comum",
        years: "1956–1961, inquéritos depois de 1964",
        targetsPresident: true,
        summary: "A Novacap e as empreiteiras ergueram a nova capital com dispensa larga de disputa e aditivos. Oposição e imprensa falaram em superfaturamento. O regime militar reabriu essa conta em inquéritos que também serviram para perseguir adversários. Não há condenação criminal transitada em julgado na Justiça ordinária contra JK.",
        involved: "Governo Kubitschek, Novacap, empreiteiras das obras da capital. Os IPMs foram conduzidos pelas Forças Armadas depois do golpe.",
        amount: "Não há total de propina fixado em sentença. O que existe são denúncias de sobrepreço numa obra cujo custo global era, já na época, objeto de disputa política.",
        legal: "Sem condenação da Justiça comum. Cassação política e IPM do regime militar não são tratados aqui como culpa penal confirmada.",
        sources: [
          { name: "Wikipedia — Juscelino Kubitschek", url: "https://pt.wikipedia.org/wiki/Juscelino_Kubitschek" },
          { name: "Wikipedia — Construção de Brasília", url: "https://pt.wikipedia.org/wiki/Constru%C3%A7%C3%A3o_de_Bras%C3%ADlia" }
        ]
      }
    ]
  },
  {
    id: "janio",
    order: 23,
    era: "republica46",
    name: "Jânio da Silva Quadros",
    short: "Jânio Quadros",
    party: "PTN",
    partyDetail: "Partido Trabalhista Nacional, com apoio da UDN",
    periodLabel: "31 jan 1961 – 25 ago 1961",
    access: "Eleito",
    accessDetail: "Eleito em 1960 com a vassoura como símbolo da campanha contra a corrupção, tendo João Goulart, de outra chapa, como vice.",
    exit: "Renúncia",
    exitDetail: "Renunciou em 25 de agosto de 1961. As razões continuam disputadas: isolamento político ou tentativa de voltar com mais poderes. O Congresso aceitou a renúncia.",
    card: "Sete meses. Elegeu-se contra a corrupção. Não há caso penal contra ele.",
    summary: "Jânio durou sete meses. Não houve tempo, nem depois apareceu prova, de um processo de corrupção contra ele. A renúncia abriu a crise que levou João Goulart ao poder sob parlamentarismo.",
    cases: [],
    reading: [{ name: "Wikipedia — Jânio Quadros", url: "https://pt.wikipedia.org/wiki/J%C3%A2nio_Quadros" }]
  },
  {
    id: "mazzilli-1961",
    order: 24,
    era: "republica46",
    name: "Pascoal Ranieri Mazzilli",
    short: "Ranieri Mazzilli",
    party: "PSD",
    partyDetail: "presidente da Câmara",
    periodLabel: "25 ago 1961 – 7 set 1961",
    access: "Linha de sucessão",
    accessDetail: "Presidente da Câmara, assumiu com a renúncia de Jânio enquanto os ministros militares vetavam João Goulart.",
    exit: "Posse de Jango",
    exitDetail: "Deixou o cargo em 7 de setembro de 1961, quando Goulart assumiu sob o sistema parlamentarista.",
    card: "Treze dias de sucessão. Sem caso de corrupção.",
    summary: "Interinidade da crise de 1961. Sem caso próprio.",
    cases: [],
    reading: [{ name: "Wikipedia — Ranieri Mazzilli", url: "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli" }]
  },
  {
    id: "jango",
    order: 25,
    era: "republica46",
    name: "João Belchior Marques Goulart",
    short: "João Goulart",
    party: "PTB",
    partyDetail: "Partido Trabalhista Brasileiro",
    periodLabel: "7 set 1961 – 2 abr 1964",
    access: "Vice que assumiu",
    accessDetail: "Vice de Jânio, só tomou posse depois do Ato Adicional que instituiu o parlamentarismo. O plebiscito de 6 de janeiro de 1963 devolveu o presidencialismo.",
    exit: "Golpe militar",
    exitDetail: "Foi deposto pelo golpe de 31 de março e 1º de abril de 1964. O Congresso declarou a presidência vaga em 2 de abril.",
    card: "Deposto em 1964. Acusações da oposição não viraram condenação.",
    summary: "Adversários acusavam o governo Goulart de corrupção e de preparar uma ruptura institucional. Essas acusações fizeram parte da justificativa política do golpe. Não existe condenação criminal de João Goulart por corrupção. Inquéritos abertos pela ditadura contra o governo deposto têm o mesmo limite dos IPMs: foram instrumento de um regime de força.",
    cases: [
      {
        id: "acusacoes-jango",
        title: "Acusações usadas na justificativa do golpe",
        status: "sem",
        statusLabel: "Sem condenação criminal",
        years: "1961–1964",
        targetsPresident: true,
        summary: "A campanha contra Goulart misturava reforma agrária, relação com sindicatos e denúncias genéricas de corrupção. Não houve ação penal com sentença. Tratar a deposição como prova de corrupção inverte a ordem: o golpe interrompeu o julgamento político pelas urnas, marcado para 1965.",
        involved: "Governo Goulart e a oposição civil e militar que o depôs.",
        amount: "Não há valor apurado em sentença.",
        legal: "Sem condenação. Os IPMs posteriores a 1964 não são contados aqui como culpa confirmada.",
        sources: [
          { name: "Wikipedia — João Goulart", url: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Goulart" },
          { name: "Wikipedia — Golpe de 1964", url: "https://pt.wikipedia.org/wiki/Golpe_de_Estado_no_Brasil_em_1964" }
        ]
      }
    ]
  },
  {
    id: "mazzilli-1964",
    order: 26,
    era: "ditadura",
    name: "Pascoal Ranieri Mazzilli",
    short: "Ranieri Mazzilli",
    party: "PSD",
    partyDetail: "presidente da Câmara",
    periodLabel: "2 abr 1964 – 15 abr 1964",
    access: "Linha de sucessão",
    accessDetail: "Voltou à presidência interina quando o Congresso declarou vago o cargo de Goulart, até a eleição indireta de Castelo Branco.",
    exit: "Eleição indireta",
    exitDetail: "Deixou o cargo em 15 de abril de 1964, na posse de Castelo Branco.",
    card: "Duas semanas depois do golpe. Sem caso próprio.",
    summary: "Segunda interinidade de Mazzilli, agora para formalizar a transição aberta pelo golpe. Sem caso de corrupção.",
    cases: [],
    reading: [{ name: "Wikipedia — Ranieri Mazzilli", url: "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli" }]
  },
  {
    id: "castelo",
    order: 27,
    era: "ditadura",
    name: "Humberto de Alencar Castelo Branco",
    short: "Castelo Branco",
    party: "ARENA",
    partyDetail: "militar; ARENA a partir de 1966",
    periodLabel: "15 abr 1964 – 15 mar 1967",
    access: "Eleito pelo Congresso após o golpe",
    accessDetail: "Eleito em 11 de abril de 1964 pelo Congresso já expurgado, num pleito indireto produzido pelo golpe.",
    exit: "Fim do mandato",
    exitDetail: "Deixou o cargo em 15 de março de 1967. Morreu em acidente aéreo em 18 de julho de 1967.",
    card: "Primeiro general-presidente. Atos Institucionais. Sem condenação por corrupção pessoal.",
    summary: "Castelo editou atos que cassaram mandatos e criou a Comissão Geral de Investigações, usada para apurar o governo deposto e também para perseguir adversários. Menos de 10% daqueles processos terminaram em alguma sanção, em geral confisco, não pena criminal regular. Não há condenação de Castelo por corrupção. A censura nascente limita o que se pode afirmar sobre contratos do período.",
    cases: [],
    reading: [
      { name: "Wikipedia — Castelo Branco", url: "https://pt.wikipedia.org/wiki/Humberto_de_Alencar_Castelo_Branco" },
      { name: "Memórias da Ditadura — Comissão Geral de Investigações", url: "https://memoriasdaditadura.org.br/" }
    ]
  },
  {
    id: "costa-e-silva",
    order: 28,
    era: "ditadura",
    name: "Artur da Costa e Silva",
    short: "Costa e Silva",
    party: "ARENA",
    partyDetail: "Aliança Renovadora Nacional",
    periodLabel: "15 mar 1967 – 31 ago 1969",
    access: "Eleito indireto",
    accessDetail: "Eleito pelo Congresso sob a ARENA e empossado em 15 de março de 1967.",
    exit: "Doença",
    exitDetail: "Afastado em 31 de agosto de 1969 por um AVC. O Ato Institucional 12 entregou o governo a uma junta militar, em vez do vice Pedro Aleixo, civil. Costa e Silva morreu em 17 de dezembro de 1969.",
    card: "Editou o AI-5. Sem caso de corrupção pessoal documentado em juízo.",
    summary: "Em 13 de dezembro de 1968, Costa e Silva fechou o Congresso e editou o AI-5, que institucionalizou a censura e a cassação sem defesa. Não há processo de corrupção contra ele. O AI-5 é o motivo pelo qual os governos seguintes quase não têm arquivo independente de irregularidades.",
    cases: [],
    reading: [{ name: "Wikipedia — Costa e Silva", url: "https://pt.wikipedia.org/wiki/Artur_da_Costa_e_Silva" }]
  },
  {
    id: "junta-1969",
    order: 29,
    era: "ditadura",
    name: "Junta militar de 1969",
    short: "Junta de 1969",
    party: "ARENA",
    partyDetail: "Lira Tavares, Rademaker e Márcio Melo",
    periodLabel: "31 ago 1969 – 30 out 1969",
    access: "Ato Institucional",
    accessDetail: "Os ministros Aurélio de Lira Tavares (Exército), Augusto Hamann Rademaker Grünewald (Marinha) e Márcio de Souza e Mello (Aeronáutica) assumiram com o AI-12, passando à frente do vice Pedro Aleixo.",
    exit: "Eleição indireta",
    exitDetail: "Deixaram o cargo em 30 de outubro de 1969, na posse de Médici.",
    card: "Dois meses de junta. Sem caso próprio de corrupção.",
    summary: "A junta governou durante a doença de Costa e Silva e preparou a escolha de Médici. Não há caso de corrupção desses dois meses separado da estrutura do regime.",
    cases: [],
    reading: [{ name: "Wikipedia — Junta militar de 1969", url: "https://pt.wikipedia.org/wiki/Junta_militar_brasileira_de_1969" }]
  },
  {
    id: "medici",
    order: 30,
    era: "ditadura",
    name: "Emílio Garrastazu Médici",
    short: "Emílio Garrastazu Médici",
    party: "ARENA",
    partyDetail: "Aliança Renovadora Nacional",
    periodLabel: "30 out 1969 – 15 mar 1974",
    access: "Eleito indireto",
    accessDetail: "Escolhido pelos militares e eleito pelo Congresso, já sob o AI-5.",
    exit: "Fim do mandato",
    exitDetail: "Transmitiu o cargo a Ernesto Geisel.",
    card: "Anos de chumbo e milagre econômico. Censura impediu apuração. Sem condenação pessoal.",
    summary: "Foi o período de maior repressão e também das grandes obras, como a Transamazônica. Denúncias de desperdício e superfaturamento circularam depois, quando a censura afrouxou. Não há condenação criminal de Médici. A falta de processo, aqui, é efeito do AI-5, não um certificado de contas limpas.",
    cases: [
      {
        id: "transamazonica",
        title: "Transamazônica e grandes obras",
        status: "sem",
        statusLabel: "Denúncias posteriores · sem processo da época",
        years: "1970–1974",
        targetsPresident: false,
        summary: "A abertura da Transamazônica concentrou contratos públicos num ambiente sem imprensa livre nem oposição no Congresso. Estudos e reportagens posteriores apontam custo alto, meta de assentamento não cumprida e espaço para sobrepreço. Não houve investigação criminal independente na época nem condenação do presidente.",
        involved: "Governo Médici e empreiteiras das obras. Sem réu presidencial.",
        amount: "Não há cifra de propina em sentença.",
        legal: "Sem processo criminal da época contra Médici.",
        sources: [
          { name: "Wikipedia — Emílio Garrastazu Médici", url: "https://pt.wikipedia.org/wiki/Em%C3%ADlio_Garrastazu_M%C3%A9dici" },
          { name: "Wikipedia — Transamazônica", url: "https://pt.wikipedia.org/wiki/Rodovia_Transamaz%C3%B4nica" }
        ]
      }
    ]
  },
  {
    id: "geisel",
    order: 31,
    era: "ditadura",
    name: "Ernesto Beckmann Geisel",
    short: "Ernesto Geisel",
    party: "ARENA",
    partyDetail: "Aliança Renovadora Nacional",
    periodLabel: "15 mar 1974 – 15 mar 1979",
    access: "Eleito indireto",
    accessDetail: "Eleito pelo Congresso em 1974, ainda sob o AI-5, que só revogou no fim do governo, em 1978.",
    exit: "Fim do mandato",
    exitDetail: "Transmitiu o cargo a João Figueiredo.",
    card: "Caso Lutfalla no BNDE: CPI e arquivamento no STF, sem punição.",
    summary: "Geisel conduziu a abertura lenta e manteve a repressão. O escândalo financeiro que veio a público no período foi o empréstimo do BNDE ao grupo Lutfalla. A CPI existiu. O Supremo arquivou sem punir os citados. Geisel não foi pessoalmente condenado.",
    cases: [
      {
        id: "lutfalla",
        title: "Caso Lutfalla",
        status: "arquivado",
        statusLabel: "Arquivado pelo STF · sem punição",
        years: "empréstimo anterior, estoura em 1977–1980",
        targetsPresident: false,
        summary: "O Banco Nacional de Desenvolvimento Econômico emprestou ao grupo têxtil Lutfalla, ligado à família do sogro de Paulo Maluf, apesar do risco de calote. Reportagens da época falaram em ordem superior para liberar o crédito. Uma CPI foi instalada em 1980. O STF arquivou o caso sem punição dos envolvidos. Não há sentença contra Geisel.",
        involved: "Grupo Lutfalla; Paulo Maluf, então figura política de São Paulo; o ministro do Planejamento João Paulo dos Reis Velloso é citado em relatos do caso. Geisel era o presidente quando o escândalo veio a público.",
        amount: "O empréstimo é descrito como vultoso para uma empresa à beira da falência. Não há valor de condenação, porque não houve condenação.",
        legal: "O STF arquivou o inquérito sem punir os acusados. O arquivamento encerrou a apuração; as fontes desta ficha não registram sentença de mérito nem o motivo processual além do arquivamento.",
        sources: [
          { name: "Wikipedia — Caso Lutfalla", url: "https://pt.wikipedia.org/wiki/Caso_Lutfalla" }
        ]
      }
    ]
  },
  {
    id: "figueiredo",
    order: 32,
    era: "ditadura",
    name: "João Baptista de Oliveira Figueiredo",
    short: "João Figueiredo",
    party: "PDS",
    partyDetail: "ARENA até 1979; depois Partido Democrático Social",
    periodLabel: "15 mar 1979 – 15 mar 1985",
    access: "Eleito indireto",
    accessDetail: "Último presidente do regime, eleito pelo colégio em 1978 e empossado em 1979. A Lei de Anistia é desse governo.",
    exit: "Fim do mandato",
    exitDetail: "Transmitiu o cargo, já na transição negociada, a José Sarney. Tancredo Neves tinha sido eleito, adoeceu e não tomou posse.",
    card: "Capemi e Coroa-Brastel. Quase ninguém do governo foi condenado. Paim Cunha, empresário, foi.",
    summary: "A abertura deixou a imprensa mostrar dois escândalos grandes: a Capemi, previdência dos militares usada em contratos sem disputa, e o grupo Coroa-Brastel, sustentado por crédito público. Figueiredo não foi condenado. No Coroa-Brastel, o empresário Assis Paim Cunha foi condenado anos depois; a denúncia contra os ministros Delfim Netto e Ernane Galvêas não foi recebida pelo STF.",
    cases: [
      {
        id: "capemi",
        scheme: "capemi",
        title: "Escândalo Capemi",
        status: "sem",
        statusLabel: "CPI · ninguém condenado",
        years: "1979–1983",
        targetsPresident: false,
        summary: "A Agropecuária Capemi, ligada ao fundo de pecúlio dos militares, desviou recursos da previdência para cobrir negócios próprios, com compras sem concorrência e pagamentos em duplicidade. O Estadão estimou um rombo de US$ 10 milhões. A CPI confirmou as denúncias. O ministro da Agricultura Amaury Stábile foi acusado. Nenhuma condenação saiu. Figueiredo não foi réu.",
        involved: "Agropecuária Capemi, dirigentes militares do fundo, ministro Amaury Stábile e servidores. O presidente não foi denunciado.",
        amount: "Cerca de US$ 10 milhões, na estimativa da reportagem de 1982–1983. Não é valor de sentença.",
        legal: "Sem condenação de nenhum acusado, segundo o balanço do próprio Estadão.",
        sources: [
          { name: "Estadão — o escândalo Capemi", url: "https://www.estadao.com.br/150-anos/150-momentos/escandalo-capemi-revelou-esquema-de-corrupcao-que-abalou-o-governo-figueiredo/" },
          { name: "Wikipedia — Capemi", url: "https://pt.wikipedia.org/wiki/Capemi" }
        ]
      },
      {
        id: "coroa",
        title: "Coroa-Brastel",
        status: "condenado",
        statusLabel: "Empresário condenado · ministros sem denúncia recebida",
        years: "1981–1983, sentença em 1998",
        targetsPresident: false,
        summary: "O grupo do empresário Assis Paim Cunha quebrou em 1983 depois de emitir letras de câmbio sem lastro. O MPF acusou os ministros Delfim Netto e Ernane Galvêas de articular empréstimo da Caixa para tapar o buraco. O STF não recebeu a denúncia de peculato contra os ministros. Paim Cunha foi condenado em 1998 a 8 anos e 3 meses por gestão fraudulenta. O prejuízo aos investidores foi estimado, à época da sentença, em cerca de R$ 300 milhões em valor atualizado pelo jornal.",
        involved: "Assis Paim Cunha; ministros Antônio Delfim Netto e Ernane Galvêas, acusados e não denunciados pelo STF. Figueiredo não foi réu.",
        amount: "A Folha, em 1998, citou lesão da ordem de Cr$ 231 bilhões, atualizados então para cerca de R$ 300 milhões, e cerca de 34 mil investidores atingidos.",
        legal: "Paim Cunha condenado em primeira instância em 1998 por gestão fraudulenta. A denúncia de peculato contra Delfim Netto e Ernane Galvêas não foi recebida pelo STF: a acusação não passou da admissibilidade e não houve instrução contra eles. Sem condenação do presidente.",
        sources: [
          { name: "Folha — condenação de Paim Cunha em 1998", url: "https://www1.folha.uol.com.br/fsp/dinheiro/fi01109824.htm" },
          { name: "Wikipedia — Escândalo Coroa-Brastel", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_Coroa-Brastel" }
        ]
      },
      {
        id: "mandioca",
        title: "Escândalo da mandioca",
        status: "condenado",
        statusLabel: "Operadores condenados por peculato",
        years: "1979–1981",
        targetsPresident: false,
        summary: "Na agência do Banco do Brasil de Floresta, em Pernambuco, notas frias de sementes e insumos geraram empréstimos rurais fraudulentos pelo Proagro. Foi fraude de particulares com servidores, não um esquema do Planalto. O STJ registrou condenações por peculato de Weldon Gilberto Cornélio da Silva e Manoel Edilberto Ferraz, com desvios atualizados, na decisão, em R$ 490 mil e R$ 592 mil.",
        involved: "Comerciantes, laranjas e a agência do Banco do Brasil em Floresta (PE). Sem ligação sentenciada com Figueiredo.",
        amount: "R$ 490 mil e R$ 592 mil, em valores que o STJ cita como atualizados para dois dos condenados. O esquema local foi maior do que a pena individual.",
        legal: "Condenações por peculato. O STF negou liminar que pedia para reconhecer prescrição num habeas corpus de 2010. São penas de operadores privados e locais.",
        sources: [
          { name: "STF — condenados no escândalo da mandioca", url: "https://noticias.stf.jus.br/postsnoticias/condenados-por-participacao-no-escandalo-da-mandioca-tem-pedido-de-liminar-negado/" }
        ]
      }
    ]
  },
  {
    id: "sarney",
    order: 33,
    era: "nova",
    name: "José Sarney Costa",
    short: "José Sarney",
    party: "PMDB",
    partyDetail: "vice de Tancredo; saiu do PDS para a Aliança Democrática",
    periodLabel: "15 mar 1985 – 15 mar 1990",
    access: "Vice que assumiu",
    accessDetail: "Tancredo Neves foi eleito em 15 de janeiro de 1985 pelo colégio eleitoral, adoeceu na véspera da posse e morreu em 21 de abril sem assumir. Sarney, o vice, foi empossado em 15 de março de 1985.",
    exit: "Fim do mandato",
    exitDetail: "A Emenda Constitucional alongou o mandato até 15 de março de 1990, quando Fernando Collor tomou posse.",
    card: "Denúncias na Ferrovia Norte-Sul. Sarney não foi condenado.",
    summary: "A Nova República começou com inflação alta e com uma série de denúncias de obra e de verba. A mais estável é a Ferrovia Norte-Sul, anunciada como obra emblemática e atingida por acusações de superfaturamento. Sarney não foi condenado criminalmente. Tancredo, que não governou, não tem ficha própria.",
    cases: [
      {
        id: "norte-sul",
        title: "Ferrovia Norte-Sul",
        status: "investigado",
        statusLabel: "Denúncias · sem condenação do presidente",
        years: "1987–1990",
        targetsPresident: false,
        summary: "O governo lançou a ferrovia entre Açailândia e Anápolis como projeto de integração. Reportagens e auditorias apontaram sobrepreço, atraso e contratos questionáveis. A obra atravessou décadas e vários presidentes. Não há condenação criminal de José Sarney.",
        involved: "Ministério dos Transportes, empreiteiras contratadas e o Palácio, que fez da ferrovia uma vitrine. Sem sentença contra Sarney.",
        amount: "Não há total de propina fechado em sentença com o nome do presidente. As denúncias falam em superfaturamento de trechos, não num percentual único.",
        legal: "Sem condenação criminal do presidente.",
        sources: [
          { name: "Wikipedia — Ferrovia Norte-Sul", url: "https://pt.wikipedia.org/wiki/Ferrovia_Norte-Sul" },
          { name: "Wikipedia — José Sarney", url: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Sarney" }
        ]
      }
    ]
  },
  {
    id: "collor",
    order: 34,
    era: "nova",
    name: "Fernando Affonso Collor de Mello",
    short: "Fernando Collor",
    party: "PRN",
    partyDetail: "Partido da Reconstrução Nacional",
    periodLabel: "15 mar 1990 – 29 dez 1992",
    access: "Eleito",
    accessDetail: "Primeiro presidente eleito pelo voto direto depois da ditadura, no segundo turno de 1989.",
    exit: "Impeachment",
    exitDetail: "A Câmara autorizou o processo em 29 de setembro de 1992. O Senado o afastou em 2 de outubro. Collor renunciou em 29 de dezembro. O Senado, mesmo assim, concluiu o julgamento e o inabilitou por oito anos.",
    card: "Caiu no impeachment do esquema PC Farias e foi absolvido na ação penal em 1994. Condenado em 2023 por outro caso, já como senador.",
    summary: "O esquema de Paulo César Farias derrubou Collor no Congresso. Na Justiça, o Supremo o absolveu em 1994 por falta de provas. Décadas depois, já senador, Collor foi condenado pelo próprio STF na Lava Jato, por corrupção na BR Distribuidora. São dois casos, com dois resultados. A ficha não mistura um com o outro.",
    cases: [
      {
        id: "pc-farias",
        scheme: "pcfarias",
        title: "Esquema PC Farias e impeachment",
        status: "absolvido",
        statusLabel: "Impeachment político · absolvido na AP 307",
        years: "1990–1994",
        targetsPresident: true,
        summary: "A CPI do PC ouviu empreiteiros e doleiros. O padrão descrito era pagamento a Paulo César Farias, tesoureiro da campanha, para ter acesso a decisões do governo. O dinheiro, segundo a investigação, circulava em empresas sem lastro, contas de terceiros e depósitos no exterior. A acusação ligava esse caixa a gastos da Casa da Dinda; o Fiat Elba em nome de uma secretária virou a peça pública mais citada. A Câmara autorizou o impeachment em setembro de 1992 e o Senado concluiu a perda do cargo e oito anos de inelegibilidade mesmo depois da renúncia — sanção política, não pena criminal. Na Ação Penal 307, em dezembro de 1994, o STF absolveu Collor de corrupção passiva porque a maioria não viu prova de que ele recebeu a vantagem. PC Farias foi morto em 1996, com processos ainda abertos. A absolvição é por falta de provas naquele processo, não um apagamento do impeachment nem da condenação posterior, já como senador, na AP 1025.",
        involved: "Paulo César Farias; empresários ouvidos na CPI; pessoas do entorno da Casa da Dinda, na narrativa da acusação. Collor era o acusado na AP 307.",
        amount: "A CPI descreveu um circuito de fachada e de contas no exterior. Não há valor de condenação contra Collor, porque a sentença penal foi absolutória. Estimativas da imprensa não substituem esse resultado.",
        legal: "Sanção política em 1992: perda do cargo e oito anos de inelegibilidade. Na AP 307, em 1994, o STF absolveu Collor de corrupção passiva porque a maioria não viu prova de que ele recebeu a vantagem. O motivo da absolvição é falta de provas, não anulação do processo.",
        sources: [
          { name: "STF — absolvição em 1994 no caso PC Farias", url: "https://noticias.stf.jus.br/postsnoticias/conheca-alguns-julgamentos-historicos-que-marcaram-os-ultimos-50-anos-do-stf/" },
          { name: "Wikipedia — Impeachment de Fernando Collor", url: "https://pt.wikipedia.org/wiki/Impeachment_de_Fernando_Collor" },
          { name: "Wikipedia — Paulo César Farias", url: "https://pt.wikipedia.org/wiki/Paulo_C%C3%A9sar_Farias" }
        ]
      },
      {
        id: "br-distribuidora",
        title: "BR Distribuidora — caso posterior, como senador",
        status: "condenado",
        statusLabel: "Condenado pelo STF · prisão domiciliar",
        years: "fatos na década de 2010 · sentença em 2023",
        targetsPresident: true,
        summary: "Este caso não é do mandato presidencial de 1990–1992. Como senador, Collor foi acusado de receber propina para viabilizar contratos da UTC Engenharia com a BR Distribuidora. Em maio de 2023 o plenário do STF, na AP 1025, o condenou a 8 anos e 10 meses por corrupção passiva e lavagem. Os embargos foram rejeitados em novembro de 2024. Ele começou a cumprir pena em abril de 2025 e, em 1º de maio de 2025, Alexandre de Moraes concedeu prisão domiciliar humanitária por motivo de saúde.",
        involved: "Fernando Collor; os empresários Pedro Paulo Bergamaschi de Leoni Ramos e Luis Pereira Duarte de Amorim, também condenados; UTC Engenharia; diretores da BR Distribuidora.",
        amount: "O STF fixou em R$ 20 milhões a vantagem recebida para direcionar contratos de bases de distribuição de combustíveis.",
        legal: "Condenação vigente do STF: 8 anos e 10 meses, regime inicial fechado, cumprida em prisão domiciliar humanitária desde maio de 2025, com tornozeleira. Não altera a absolvição de 1994.",
        sources: [
          { name: "STF — pena mantida na AP 1025", url: "https://noticias.stf.jus.br/postsnoticias/stf-mantem-penas-de-fernando-collor-por-participacao-em-esquema-de-corrupcao-na-br-distribuidora/" },
          { name: "STF — prisão domiciliar humanitária, maio de 2025", url: "https://noticias.stf.jus.br/postsnoticias/stf-concede-prisao-domiciliar-humanitaria-ao-ex-presidente-fernando-collor/" },
          { name: "O Globo — manutenção da pena em 2024", url: "https://oglobo.globo.com/politica/noticia/2024/11/14/stf-rejeita-recurso-e-mantem-pena-de-collor-apos-condenacao-na-lava-jato.ghtml" }
        ]
      }
    ]
  },
  {
    id: "itamar",
    order: 35,
    era: "nova",
    name: "Itamar Augusto Cautiero Franco",
    short: "Itamar Franco",
    party: "PMDB",
    partyDetail: "vice pelo PRN; depois filiado ao PMDB",
    periodLabel: "2 out 1992 – 1 jan 1995",
    access: "Vice que assumiu",
    accessDetail: "Assumiu interinamente em 2 de outubro de 1992, com o afastamento de Collor, e em definitivo com a renúncia e o impeachment, em 29 de dezembro.",
    exit: "Fim do período",
    exitDetail: "Entregou o cargo a Fernando Henrique Cardoso em 1º de janeiro de 1995, depois de lançar o Plano Real.",
    card: "No governo dele estourou o escândalo dos Anões do Orçamento, no Congresso. Itamar não foi condenado.",
    summary: "Itamar segurou a transição do impeachment e o Plano Real. O grande caso de corrupção do período foi parlamentar: os Anões do Orçamento, em 1993. A CPI cassou deputados. O presidente não era o operador e não foi condenado.",
    cases: [
      {
        id: "anoes",
        scheme: "anoes",
        title: "Anões do Orçamento",
        status: "politico",
        statusLabel: "CPI · cassações · sem pena ao presidente",
        years: "1993",
        targetsPresident: false,
        summary: "Parlamentares da comissão mista de orçamento direcionavam emendas a empreiteiras e entidades, com comissão de volta. João Alves e Genebaldo Correia estão entre os nomes centrais. Houve cassação e renúncia. Muitos processos penais prescreveram. Itamar não foi acusado de chefiar o esquema.",
        involved: "Deputados e senadores de mais de um partido, empreiteiras e entidades beneficiadas pelas emendas. O presidente ficou fora da lista de condenados.",
        amount: "Não há um total único fechado em sentença. A CPI documentou emendas e comissões caso a caso.",
        legal: "Cassação e renúncia no Congresso são sanção política. Em boa parte dos processos penais a punição prescreveu: o prazo para uma condenação definitiva se esgotou antes do trânsito em julgado. Prescrição não declara inocência. Sem condenação de Itamar Franco.",
        sources: [
          { name: "Wikipedia — Anões do Orçamento", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_dos_An%C3%B5es_do_Or%C3%A7amento" },
          { name: "Wikipedia — Itamar Franco", url: "https://pt.wikipedia.org/wiki/Itamar_Franco" }
        ]
      }
    ]
  },
  {
    id: "fhc-1",
    order: 36,
    era: "nova",
    name: "Fernando Henrique Cardoso",
    short: "Fernando Henrique Cardoso",
    party: "PSDB",
    partyDetail: "Partido da Social Democracia Brasileira",
    periodLabel: "1 jan 1995 – 1 jan 1999",
    access: "Eleito",
    accessDetail: "Eleito no primeiro turno em 1994, já com o Real em circulação.",
    exit: "Reeleito",
    exitDetail: "A emenda da reeleição, de 1997, permitiu um segundo mandato seguido. Ele venceu de novo em 1998.",
    card: "Denúncias de compra de votos para aprovar a reeleição. Sem condenação de FHC.",
    summary: "O primeiro mandato consolidou o Real e abriu as privatizações de telefonia, mineração e energia. A acusação de corrupção mais direta contra o Planalto foi a de que deputados teriam recebido dinheiro para votar a emenda da reeleição em 1997. As privatizações geraram disputa sobre preço e regras. Nenhuma das duas linhas produziu condenação criminal de Fernando Henrique.",
    cases: [
      {
        id: "reeleicao",
        title: "Denúncias na emenda da reeleição",
        status: "investigado",
        statusLabel: "Denúncias · sem condenação do presidente",
        years: "1997",
        targetsPresident: false,
        summary: "Para valer em 1998, a reeleição precisava de emenda constitucional. Parlamentares e reportagens acusaram o governo de pagar deputados pela votação — o valor de R$ 200 mil por voto circulou na imprensa da época. Houve investigação. Não houve condenação de FHC nem um acórdão que desse aqueles pagamentos como provados contra ele.",
        involved: "Deputados acusados de vender o voto e operadores políticos do governo. FHC era o beneficiário político da emenda, não um condenado.",
        amount: "A cifra repetida na época foi R$ 200 mil por parlamentar acusado. É número de denúncia jornalística, não de sentença.",
        legal: "Sem condenação criminal do presidente.",
        sources: [
          { name: "Wikipedia — Emenda da Reeleição", url: "https://pt.wikipedia.org/wiki/Emenda_da_Reelei%C3%A7%C3%A3o" },
          { name: "Wikipedia — Fernando Henrique Cardoso", url: "https://pt.wikipedia.org/wiki/Fernando_Henrique_Cardoso" }
        ]
      },
      {
        id: "privatizacoes",
        title: "Controvérsia sobre as privatizações",
        status: "sem",
        statusLabel: "Disputa de preço · sem condenação",
        years: "1995–1998",
        targetsPresident: false,
        summary: "Telebras, Vale e empresas estaduais de energia foram vendidas no período. Críticos falaram em preço baixo e em financiamento público aos compradores. O TCU examinou procedimentos. Não resultou condenação criminal do presidente por corrupção nessas vendas. Divergência sobre valuation não é, sem mais, um caso de propina.",
        involved: "Governo federal, BNDES e os consórcios compradores.",
        amount: "Não há propina fixada em sentença contra FHC. Os preços de venda são públicos nos editais e seguem disputados na literatura econômica.",
        legal: "Sem condenação criminal do presidente.",
        sources: [
          { name: "Wikipedia — Privatização no Brasil", url: "https://pt.wikipedia.org/wiki/Privatiza%C3%A7%C3%A3o_no_Brasil" }
        ]
      }
    ]
  },
  {
    id: "fhc-2",
    order: 37,
    era: "nova",
    name: "Fernando Henrique Cardoso",
    short: "Fernando Henrique Cardoso",
    party: "PSDB",
    partyDetail: "Partido da Social Democracia Brasileira",
    periodLabel: "1 jan 1999 – 1 jan 2003",
    access: "Reeleito",
    accessDetail: "Reeleito em 1998, já no primeiro turno, e empossado para o segundo mandato em 1999.",
    exit: "Fim do mandato",
    exitDetail: "Transmitiu o cargo a Luiz Inácio Lula da Silva em 1º de janeiro de 2003.",
    card: "Marka-FonteCindam: condenação penal prescrita em 2016. FHC não foi réu.",
    summary: "O segundo mandato abriu com a maxidesvalorização do real. O Banco Central socorreu os bancos Marka e FonteCindam com dólar abaixo do mercado. O presidente do BC foi condenado e a pena prescreveu. No Congresso aliado, o escândalo da Sudam derrubou Jader Barbalho da presidência do Senado. FHC não foi condenado em nenhum dos dois.",
    cases: [
      {
        id: "marka",
        title: "Marka e FonteCindam",
        status: "prescrito",
        statusLabel: "Condenação penal prescrita",
        years: "1999 · prescrição em 2016",
        targetsPresident: false,
        summary: "Às vésperas da desvalorização de janeiro de 1999, o Banco Central vendeu dólares a dois bancos que tinham apostado na estabilidade do câmbio. A sentença de 2005 falou em prejuízo de cerca de R$ 1,5 bilhão. Francisco Lopes, presidente do BC, foi condenado a 10 anos por peculato; a pena depois foi reduzida para 4 anos. Em 2016 a própria juíza declarou a prescrição: ninguém daquele grupo cumpriu a pena, exceto o banqueiro Salvatore Cacciola, preso por ter fugido. O TCU, em trilha administrativa separada, condenou ex-diretores a ressarcir bilhões. FHC não foi réu.",
        involved: "Francisco Lopes e outros diretores do Banco Central; Salvatore Cacciola (Marka); controladores do FonteCindam.",
        amount: "Cerca de R$ 1,5 bilhão de prejuízo ao erário, na sentença de 2005. O TCU falou depois em ressarcimento corrigido superior a R$ 3,7 bilhões numa das fases, com recurso à época.",
        legal: "Condenação criminal de 2005. A pena de Francisco Lopes foi reduzida para 4 anos e, em 2016, a juíza reconheceu a prescrição da pretensão punitiva: com a pena menor, o prazo para punir se esgotou antes do trânsito em julgado. Prescrição não é absolvição. Cacciola chegou a ser preso. Sem condenação de FHC. A trilha do TCU é administrativa e distinta.",
        sources: [
          { name: "Folha — condenação em 2005", url: "https://www1.folha.uol.com.br/fsp/brasil/fc0504200502.htm" },
          { name: "G1 — prescrição em 2016", url: "https://g1.globo.com/rio-de-janeiro/noticia/2016/10/caso-marka-fontecidam-e-encerrado-apos-prescricao-sem-condenacoes.html" },
          { name: "O Globo — prescrição sem cumprimento de pena", url: "https://oglobo.globo.com/economia/prescricao-encerra-caso-marka-sem-punicao-dos-responsaveis-20269632" }
        ]
      },
      {
        id: "sudam",
        title: "Fraudes na Sudam",
        status: "investigado",
        statusLabel: "Crise na base · sem condenação de FHC",
        years: "2001",
        targetsPresident: false,
        summary: "Em 2001, denúncias de desvio em projetos financiados pela Sudam, a superintendência da Amazônia, atingiram aliados do governo. Jader Barbalho deixou a presidência do Senado. O caso é da base congressual e de órgãos de fomento, não uma sentença contra o presidente.",
        involved: "Dirigentes e parlamentares ligados à Sudam, entre eles Jader Barbalho, que renunciou ao comando do Senado. FHC não foi denunciado por esse esquema.",
        amount: "Não há total único de sentença contra o presidente. Os inquéritos falaram em projetos superfaturados com dinheiro dos fundos de desenvolvimento.",
        legal: "Sem condenação de Fernando Henrique. Os processos de parlamentares tiveram destinos próprios, vários deles longos e inconclusos.",
        sources: [
          { name: "Wikipedia — Jader Barbalho", url: "https://pt.wikipedia.org/wiki/Jader_Barbalho" },
          { name: "Wikipedia — Sudam", url: "https://pt.wikipedia.org/wiki/Superintend%C3%AAncia_do_Desenvolvimento_da_Amaz%C3%B4nia" }
        ]
      }
    ]
  },
  {
    id: "lula-1",
    order: 38,
    era: "nova",
    name: "Luiz Inácio Lula da Silva",
    short: "Luiz Inácio Lula da Silva",
    party: "PT",
    partyDetail: "Partido dos Trabalhadores",
    periodLabel: "1 jan 2003 – 1 jan 2007",
    access: "Eleito",
    accessDetail: "Eleito no segundo turno de 2002 e empossado em 1º de janeiro de 2003.",
    exit: "Reeleito",
    exitDetail: "Reeleito em 2006, ainda no segundo turno, apesar do mensalão e dos sanguessugas.",
    card: "Mensalão e sanguessugas. Lula não foi réu da AP 470 nem condenado nos sanguessugas.",
    summary: "O primeiro mandato teve dois esquemas julgados ou investigados em público. O mensalão comprou apoio no Congresso com dinheiro operado por Marcos Valério; o STF condenou o núcleo do PT e parlamentares da base, e não denunciou Lula. A máfia dos sanguessugas vendeu ambulâncias via emendas de dezenas de partidos. Os casos pessoais da Lava Jato, posteriores, estão na ficha do segundo mandato porque os processos trataram os dois períodos juntos — e foram anulados.",
    cases: [
      {
        id: "mensalao",
        scheme: "mensalao",
        title: "Mensalão — Ação Penal 470",
        status: "condenado",
        statusLabel: "Aliados condenados · Lula não foi réu",
        years: "2003–2005 · julgamento 2012–2014",
        targetsPresident: false,
        summary: "Roberto Jefferson, do PTB, revelou pagamentos mensais a deputados da base. O procurador-geral denunciou o núcleo do governo e do PT, não Lula: a AP 470 não tem o presidente como réu. O STF reconstituiu um circuito de cerca de R$ 110 milhões, em valores da época, com publicidade do Banco do Brasil e da Câmara, empréstimos simulados do Banco Rural e do BMG e o operador Marcos Valério. José Dirceu, ministro da Casa Civil, foi condenado por corrupção ativa (pena inicial somada de 10 anos e 10 meses; em 2014 os embargos infringentes afastaram só a formação de quadrilha, porque já havia votos bastantes pela absolvição desse crime, e a corrupção ficou). Delúbio Soares, tesoureiro do PT, e José Genoino, presidente do partido, foram condenados por corrupção no mesmo julgamento; a quadrilha também caiu para eles em 2014. São condenações do círculo político do governo, vigentes quanto à corrupção, e não uma sentença contra Lula.",
        involved: "José Dirceu (Casa Civil), José Genoino (presidência do PT), Delúbio Soares (tesouraria do PT), Marcos Valério, Henrique Pizzolato, diretores do Banco Rural e deputados de PP, PL, PTB, PMDB e outros. Lula não foi acusado nesta ação.",
        amount: "Cerca de R$ 110 milhões, em valores da época, na descrição feita no julgamento do STF. A pena inicial de Dirceu, antes dos embargos, somava 10 anos e 10 meses e multa de cerca de R$ 676 mil.",
        legal: "Condenações do STF por corrupção vigentes contra o núcleo político e operadores, com cumprimento de pena. Em 2014 os embargos infringentes afastaram só a formação de quadrilha de oito réus, porque já havia votos bastantes pela absolvição desse crime. Corrupção ativa e passiva permaneceram. Nenhuma sentença da AP 470 contra Lula.",
        sources: [
          { name: "STF — peça do julgamento cita cerca de R$ 110 milhões", url: "https://www.stf.jus.br/arquivo/cms/noticiaNoticiaStf/anexo/itemVIap470mAB.pdf" },
          { name: "Câmara — embargos de 2014", url: "https://www.camara.leg.br/tv/427795-stf-absolve-oito-condenados-do-mensalao-do-crime-de-formacao-de-quadrilha/" },
          { name: "Wikipedia — Mensalão", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_mensal%C3%A3o" }
        ]
      },
      {
        id: "sanguessugas",
        scheme: "sanguessugas",
        title: "Máfia dos sanguessugas",
        status: "condenado",
        statusLabel: "Operadores condenados · lista parlamentar mista",
        years: "2006",
        targetsPresident: false,
        summary: "A família Vedoin vendia ambulâncias superfaturadas a prefeituras indicadas por emendas. A PF estimou o esquema, no noticiário da operação, em cerca de R$ 110 milhões e citou mais de cem parlamentares de vários partidos. Houve cassações e penas contra operadores. Lula não foi denunciado.",
        involved: "Grupo Vedoin, assessores parlamentares e deputados de PT, PMDB, PP, PL, PSDB e outros. Sem o presidente na denúncia.",
        amount: "Cerca de R$ 110 milhões, estimativa da investigação repercutida à época. Não é a soma das penas.",
        legal: "Condenações e cassações parciais. Onde o processo prescreveu, o prazo penal se esgotou antes de condenação definitiva. Onde houve absolvição, o juiz rejeitou a acusação. Muitos nomes da lista não foram condenados. Sem condenação de Lula.",
        sources: [
          { name: "Wikipedia — Sanguessugas", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_dos_sanguessugas" }
        ]
      }
    ]
  },
  {
    id: "lula-2",
    order: 39,
    era: "nova",
    name: "Luiz Inácio Lula da Silva",
    short: "Luiz Inácio Lula da Silva",
    party: "PT",
    partyDetail: "Partido dos Trabalhadores",
    periodLabel: "1 jan 2007 – 1 jan 2011",
    access: "Reeleito",
    accessDetail: "Reeleito em 2006 e empossado para o segundo mandato em 2007.",
    exit: "Fim do mandato",
    exitDetail: "Transmitiu o cargo a Dilma Rousseff em 1º de janeiro de 2011, com aprovação alta e com o esquema da Petrobras ainda não revelado.",
    card: "Tríplex, sítio e Instituto Lula: condenações e denúncias da Lava Jato, anuladas em 2021 sem novo mérito.",
    summary: "O cartel da Petrobras atravessa este mandato e o anterior. As ações contra Lula nasceram dessa investigação: o MPF o acusou de receber o tríplex do Guarujá, reformas no sítio de Atibaia e vantagens no Instituto Lula, com base em delações de Léo Pinheiro, Palocci e Marcelo Odebrecht e em documentos das empreiteiras. Moro e, no sítio, Gabriela Hardt condenaram; o TRF-4 aumentou as penas; o STJ confirmou o tríplex. Ele ficou preso 580 dias. Em 2021 o STF anulou esses processos por incompetência da 13ª Vara de Curitiba e por suspeição de Moro. A anulação é processual: o mérito não foi rejulgado. No Distrito Federal o tríplex prescreveu e o sítio foi rejeitado. Em setembro de 2025 a Folha registrou que não havia ação ativa da Lava Jato contra ele.",
    cases: [
      {
        id: "petrolao",
        scheme: "petrolao",
        title: "Petrolão / Lava Jato — o esquema na Petrobras",
        status: "condenado",
        statusLabel: "Esquema condenado em parte · muitas penas depois anuladas",
        years: "contratos 2004–2014",
        targetsPresident: false,
        summary: "O MPF descreveu um cartel de empreiteiras que combinava licitações da Petrobras e pagava propina de cerca de 1% a 3% a diretores e a operadores políticos. O balanço da estatal usou 3% como média contábil e reconheceu perda de R$ 6,2 bilhões em contratos de 2004 a 2012. A lavagem, nas delações e denúncias, passava por doleiros como Alberto Youssef, contratos fictícios, contas no exterior e, na Odebrecht, por um departamento interno de propina e por doações eleitorais oficiais. PT, PP e PMDB/MDB aparecem como destinatários indicados, não um partido só. João Vaccari Neto, tesoureiro do PT no período, foi condenado em Curitiba por corrupção passiva num núcleo de propina da Sete Brasil e da Petrobras (pena de 10 anos, elevada pelo TRF-4 para 24 anos). Essa condenação foi depois anulada: em 2024 Fachin reconheceu a incompetência da 13ª Vara e mandou o caso à Justiça Eleitoral; em 2025 Dias Toffoli anulou os atos da Lava Jato contra Vaccari. Anulação não rejulga se o fato ocorreu. Lula não é o condenado deste mapa.",
        involved: "Empreiteiras do cartel; diretores Paulo Roberto Costa, Renato Duque, Nestor Cerveró e Jorge Zelada; doleiro Alberto Youssef; tesoureiros e operadores partidários, entre eles João Vaccari Neto (PT). Lula não foi o réu destas condenações de diretores e tesoureiros.",
        amount: "R$ 6,2 bilhões de baixa contábil da Petrobras (estimativa de 3% sobre contratos de 2004 a 2012). Odebrecht admitiu US$ 788 milhões em propina em 12 países, entre 2001 e 2016, não só no Brasil e não só na Petrobras.",
        legal: "Houve condenações e delações. A partir de 2021 o STF anulou séries de processos da 13ª Vara Federal de Curitiba: a vara foi declarada incompetente para o fato (incompetência territorial), juízes foram declarados suspeitos e, em alguns autos, a prova foi anulada. Anulação desfaz a sentença; não é absolvição de mérito. O mapa descreve denúncia e leniência, não penas vigentes.",
        sources: [
          { name: "G1 — baixa de R$ 6,2 bi no balanço", url: "https://g1.globo.com/economia/negocios/noticia/2015/04/petrobras-divulga-balanco-auditado-com-prejuizo-de-r-216-bi-em-2014.html" },
          { name: "G1 — Odebrecht admite US$ 788 milhões", url: "https://g1.globo.com/politica/noticia/odebrecht-admite-us-788-milhoes-em-propina-em-12-paises-dizem-eua.ghtml" },
          { name: "STF — plenário confirma a anulação das condenações de Lula, 2021", url: "https://noticias.stf.jus.br/postsnoticias/stf-confirma-anulacao-de-condenacoes-do-ex-presidente-lula-na-lava-jato/" },
          { name: "G1 — Fachin anula condenação de Vaccari, 2024", url: "https://g1.globo.com/politica/noticia/2024/01/10/fachin-anula-condenacao-do-ex-tesoureiro-do-pt-joao-vaccari-neto-pela-lava-jato.ghtml" },
          { name: "G1 — Toffoli anula os atos da Lava Jato contra Vaccari, 2025", url: "https://g1.globo.com/politica/noticia/2025/08/15/toffoli-anula-todos-os-atos-da-lava-jato-contra-o-ex-tesoureiro-do-pt-joao-vaccari-netto.ghtml" },
          { name: "Wikipedia — Operação Lava Jato", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Lava_Jato" }
        ]
      },
      {
        id: "triplex",
        title: "Tríplex do Guarujá",
        status: "anulado",
        statusLabel: "Condenação anulada · prescrição depois · sem novo mérito",
        years: "sentença 2017 · anulação 2021 · prescrição no DF",
        targetsPresident: true,
        summary: "O MPF acusou Lula de receber propina da OAS, ligada a contratos da empreiteira com a Petrobras, na forma de um tríplex no Edifício Solaris, no Guarujá, reservado e reformado para ele e para Marisa Letícia. A prova apresentada pela acusação foi documental e oral: contratos e reformas da OAS e o depoimento de José Aldemário Pinheiro Filho, o Léo Pinheiro, presidente da OAS, que disse em delação e em juízo que o imóvel era destinado a Lula. A defesa negou a propriedade e tratou o depoimento como relato de quem negociava benefício penal. Em 12 de julho de 2017 Sergio Moro, na 13ª Vara Federal de Curitiba, condenou Lula a 9 anos e 6 meses por corrupção passiva e lavagem. Em 24 de janeiro de 2018 a 8ª Turma do TRF-4 confirmou por unanimidade e aumentou a pena para 12 anos e 1 mês; o relator João Pedro Gebran Neto escreveu que a prova corroborava a versão de que o apartamento e as reformas eram propina. Em 23 de abril de 2019 a Quinta Turma do STJ manteve a condenação e reduziu a pena para 8 anos, 10 meses e 20 dias, e a reparação de R$ 16 milhões para R$ 2,4 milhões, por dosimetria. Lula ficou preso de 7 de abril de 2018 a 8 de novembro de 2019. Em 8 de março de 2021, no HC 193726, Fachin anulou a ação porque a 13ª Vara não tinha competência territorial; o plenário confirmou por 8 a 3 em 15 de abril. Em 23 de março de 2021 a Segunda Turma, por 3 a 2, declarou Moro suspeito no tríplex (Gilmar Mendes, Lewandowski e Cármen Lúcia); o plenário manteve a suspeição em junho de 2021 e anulou as provas daquele processo. A defesa usou, entre outros elementos, as mensagens da Vaza Jato, publicadas pelo Intercept em junho de 2019 a partir de invasão dos celulares de procuradores (Operação Spoofing): o material mostrava conversas entre Moro e Deltan Dallagnol e foi tratado pela acusação como prova ilícita e pela defesa como indício de parcialidade. A anulação é processual. O mérito — se o tríplex foi propina — não foi julgado de novo. No Distrito Federal o caso prescreveu: o prazo para punir se esgotou, ainda menor porque Lula tem mais de 70 anos. Prescrição não é absolvição.",
        involved: "Luiz Inácio Lula da Silva, acusado; OAS e Léo Pinheiro, depoente e réu; Agenor Franklin Magalhães Medeiros, da OAS; Sergio Moro, juiz da sentença depois anulada; força-tarefa do MPF em Curitiba.",
        amount: "A reparação fixada pelo STJ em 2019, antes da anulação, foi de R$ 2,4 milhões. O TRF-4 tinha elevado esse valor a R$ 16 milhões. Nenhum desses números sobrevive como condenação.",
        legal: "Condenação de 2017, confirmada pelo TRF-4 em 2018 e pelo STJ em 2019, anulada em 2021 por incompetência territorial da 13ª Vara (HC 193726, plenário 8 a 3) e, em fundamento próprio, por suspeição de Moro (Segunda Turma, 3 a 2, mantida pelo plenário). As provas do tríplex foram anuladas e não puderam ser reaproveitadas. No DF o processo prescreveu sem novo julgamento de mérito.",
        sources: [
          { name: "G1 — sentença de Moro, 12 de julho de 2017", url: "https://g1.globo.com/politica/noticia/a-sentenca-da-condenacao-de-lula.ghtml" },
          { name: "TRF-4 — pena elevada a 12 anos e 1 mês, 24 de janeiro de 2018", url: "https://www.trf4.jus.br/trf4/controlador.php?acao=noticia_visualizar&id_noticia=18776" },
          { name: "STJ — pena reduzida a 8 anos, 10 meses e 20 dias", url: "https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Quinta-Turma-reduz-pena-do-ex-presidente-Lula-para-oito-anos-e-dez-meses.aspx" },
          { name: "G1 — Segunda Turma declara Moro parcial, 23 de março de 2021", url: "https://g1.globo.com/politica/noticia/2021/03/23/carmen-lucia-muda-voto-e-2a-turma-do-stf-declara-que-moro-foi-parcial-ao-condenar-lula.ghtml" },
          { name: "STF — plenário mantém a suspeição no tríplex", url: "https://noticias.stf.jus.br/postsnoticias/stf-confirma-suspeicao-de-sergio-moro-na-acao-do-triplex-do-guaruja/" },
          { name: "STF — plenário confirma a incompetência de Curitiba", url: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261" }
        ]
      },
      {
        id: "atibaia",
        title: "Sítio de Atibaia",
        status: "anulado",
        statusLabel: "Condenação anulada · denúncia rejeitada depois",
        years: "sentença 2019 · anulação 2021 · TRF-1 em 2025",
        targetsPresident: true,
        summary: "O MPF acusou Lula de receber reformas e benfeitorias num sítio em Atibaia, formalizado em nome de Fernando Bittar, pagas pela Odebrecht e pela OAS como propina de contratos com a Petrobras. A acusação apontou visitas da família, o acervo pessoal levado ao imóvel e lançamentos nos sistemas internos da Odebrecht. A defesa disse que o sítio não era de Lula e que as obras tinham outra explicação. Em 6 de fevereiro de 2019 a juíza substituta Gabriela Hardt, na 13ª Vara de Curitiba, condenou Lula a 12 anos e 11 meses por corrupção passiva e lavagem. Em 27 de novembro de 2019 a 8ª Turma do TRF-4 confirmou por unanimidade e aumentou a pena para 17 anos, 1 mês e 10 dias; o relator Gebran Neto atendeu o MPF no agravante de o crime ter sido imputado a quem era presidente. Fachin anulou essa ação no mesmo HC 193726, por incompetência territorial de Curitiba, confirmada pelo plenário. Gilmar Mendes estendeu ao sítio o efeito da suspeição de Moro declarada no tríplex. A denúncia, já no Distrito Federal, foi rejeitada. Em julho de 2025 o TRF-1 recusou o recurso do MPF e manteve o caso encerrado. Rejeição e anulação não são uma sentença que diga que a reforma não existiu ou que não foi paga pelas empreiteiras. Esse fato não voltou a ser julgado no mérito.",
        involved: "Luiz Inácio Lula da Silva; Odebrecht e OAS, apontadas como pagadoras das obras; Fernando Bittar, em cujo nome o imóvel estava; Gabriela Hardt, juíza da sentença de 2019.",
        amount: "O TRF-4 descreveu, na dosimetria de 2019, parcelas como R$ 700 mil atribuídos à Odebrecht e US$ 170 mil atribuídos à OAS, além de outra fatia descrita como corrupção em favor do PT. São cifras da condenação depois anulada, não de uma pena vigente.",
        legal: "Condenação de primeira e segunda instâncias anulada em 2021 por incompetência da 13ª Vara e, por extensão, pela suspeição de Moro. A denúncia foi rejeitada na Justiça do Distrito Federal. O TRF-1 manteve o encerramento em julho de 2025. Sem novo julgamento de mérito e sem absolvição que substitua a condenação anulada.",
        sources: [
          { name: "TRF-4 — pena do sítio elevada a 17 anos, 1 mês e 10 dias", url: "https://www.trf4.jus.br/trf4/controlador.php?acao=noticia_visualizar&id_noticia=14914" },
          { name: "G1 — julgamento do sítio no TRF-4, 27 de novembro de 2019", url: "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2019/11/27/relator-do-processo-sobre-sitio-de-atibaia-no-trf-4-vota-por-condenacao-de-lula-por-corrupcao-e-lavagem-de-dinheiro.ghtml" },
          { name: "STF — incompetência de Curitiba alcança o sítio e o Instituto Lula", url: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261" },
          { name: "Jornal de Brasília — TRF-1 mantém o sítio encerrado", url: "https://jornaldebrasilia.com.br/noticias/politica-e-poder/trf-1-rejeita-recurso-do-mpf-e-mantem-encerrada-acao-do-sitio-de-atibaia-contra-lula/" }
        ]
      },
      {
        id: "instituto-lula",
        title: "Instituto Lula — terreno e doações",
        status: "anulado",
        statusLabel: "Denúncias anuladas · sem condenação",
        years: "denúncias em Curitiba · anulação 2021",
        targetsPresident: true,
        summary: "Duas acusações do MPF não chegaram a condenação. Na primeira, a Odebrecht teria comprado um terreno de cerca de R$ 12 milhões em São Paulo para a sede do Instituto Lula, apresentado pela denúncia como propina; a empreiteira também foi acusada de comprar um apartamento em São Bernardo do Campo no mesmo prédio em que Lula morava. Na segunda, a Odebrecht teria feito quatro doações de R$ 1 milhão ao instituto, entre 2013 e 2014, e o MPF acusou Lula, Antonio Palocci e Paulo Okamotto de lavagem, com base na delação de Palocci. Palocci, ex-ministro da Fazenda e da Casa Civil, disse em delação que existia uma conta corrente de favores políticos em benefício de Lula. Marcelo Odebrecht, em depoimento de colaboração, associou o codinome “Amigo”, usado numa planilha interna de pagamentos da empreiteira, a Lula; a defesa contestou a identificação e o alcance de cada lançamento. São relatos de delatores, confrontados com documentos da própria Odebrecht, não uma sentença. Fachin anulou os atos de Curitiba nos dois casos, pelo mesmo motivo de incompetência territorial, e os autos foram ao Distrito Federal. Ricardo Lewandowski vedou, em 2021, o uso da leniência da Odebrecht na ação da sede. Não houve julgamento de mérito que confirmasse ou rejeitasse a acusação do terreno e das doações.",
        involved: "Luiz Inácio Lula da Silva; Paulo Okamotto, do Instituto Lula; Antonio Palocci e Marcelo Odebrecht, como delatores; Odebrecht, como empresa acusada de pagar.",
        amount: "Cerca de R$ 12 milhões, valor do terreno na denúncia da sede. Quatro doações de R$ 1 milhão na denúncia das contribuições ao instituto. Números da acusação, não de condenação.",
        legal: "Não houve condenação. Os atos da 13ª Vara foram anulados em 2021 por incompetência territorial. Provas da leniência da Odebrecht foram vedadas na ação da sede. Sem novo julgamento de mérito.",
        sources: [
          { name: "BBC — as quatro ações anuladas por Fachin, entre elas as do Instituto Lula", url: "https://www.bbc.com/portuguese/brasil-56328403" },
          { name: "G1 — Lewandowski veta a leniência da Odebrecht na ação da sede", url: "https://g1.globo.com/politica/noticia/2021/06/28/lewandowski-impede-uso-do-acordo-de-leniencia-da-odebrecht-contra-lula.ghtml" },
          { name: "STF — incompetência de Curitiba, abril de 2021", url: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261" },
          { name: "Folha — situação dos processos em setembro de 2025", url: "https://www1.folha.uol.com.br/poder/2025/09/veja-o-que-aconteceu-com-os-processos-contra-o-presidente-lula.shtml" }
        ]
      }
    ]
  },
  {
    id: "dilma-1",
    order: 40,
    era: "nova",
    name: "Dilma Vana Rousseff",
    short: "Dilma Rousseff",
    party: "PT",
    partyDetail: "Partido dos Trabalhadores",
    periodLabel: "1 jan 2011 – 1 jan 2015",
    access: "Eleita",
    accessDetail: "Eleita no segundo turno de 2010 e empossada em 2011. Antes, de 2003 a 2010, presidira o conselho de administração da Petrobras.",
    exit: "Reeleita",
    exitDetail: "Reeleita em 2014 num segundo turno apertado, com a Lava Jato já em curso desde março daquele ano.",
    card: "A Lava Jato vem a público. Pasadena é reprovada pelo TCU. Dilma não tem condenação penal.",
    summary: "Dilma não foi condenada por corrupção. O que a atinge nesse mandato é a responsabilidade política sobre a Petrobras, que ela supervisionou antes de ser presidente, e o início da Operação Lava Jato. O TCU considerou lesiva a compra da refinaria de Pasadena. Ela disse que votou no conselho com um resumo incompleto. Isso não virou ação penal com condenação.",
    cases: [
      {
        id: "pasadena",
        title: "Refinaria de Pasadena",
        status: "sem",
        statusLabel: "TCU apontou prejuízo · sem condenação penal",
        years: "compra em 2006 · julgamento de contas depois",
        targetsPresident: true,
        summary: "A Petrobras comprou a refinaria de Pasadena, no Texas, numa operação que o TCU considerou lesiva à companhia. Dilma presidia o conselho quando o negócio foi aprovado e afirmou que o papel submetido aos conselheiros omitia cláusulas relevantes. Houve prejuízo estimado em centenas de milhões de dólares. Não houve condenação criminal dela.",
        involved: "Conselho da Petrobras, do qual Dilma era presidente; a vendedora Astra Oil; diretores da área internacional depois citados na Lava Jato.",
        amount: "Estimativas públicas de prejuízo ficaram na casa de centenas de milhões de dólares. Não há reparação criminal imposta a Dilma.",
        legal: "Irregularidade apontada pelo Tribunal de Contas. Sem condenação penal da então presidente do conselho.",
        sources: [
          { name: "Wikipedia — Refinaria de Pasadena", url: "https://pt.wikipedia.org/wiki/Refinaria_de_Pasadena" },
          { name: "Wikipedia — Dilma Rousseff", url: "https://pt.wikipedia.org/wiki/Dilma_Rousseff" }
        ]
      },
      {
        id: "lava-jato-dilma",
        scheme: "petrolao",
        title: "Lava Jato durante o governo",
        status: "investigado",
        statusLabel: "Citada em delações · sem condenação",
        years: "2014",
        targetsPresident: false,
        summary: "A operação começou em março de 2014, no governo Dilma, e passou a descrever um cartel que as denúncias datam desde o governo anterior. Delatores — entre eles Paulo Roberto Costa, Alberto Youssef e, depois, executivos da Odebrecht — citaram diretorias loteadas por partidos da base, propina de 1% a 3% e doações eleitorais. Dilma presidia o conselho da Petrobras antes da Presidência e era a chefe do governo quando a operação estourou. Citação em delação e responsabilidade política sobre a estatal não são condenação. Não há sentença penal de corrupção contra ela. As condenações de diretores e de operadores é que foram proferidas, e várias delas foram depois anuladas pelo STF por incompetência da 13ª Vara de Curitiba, suspeição de magistrado ou nulidade de prova.",
        involved: "Diretores da Petrobras, empreiteiras e a Presidência, como responsável política pela estatal. Sem sentença penal contra Dilma.",
        amount: "O mesmo R$ 6,2 bilhões de baixa contábil da Petrobras e os percentuais de 1% a 3% descritos nas delações. Nada disso foi cobrado de Dilma numa condenação.",
        legal: "Sem condenação criminal.",
        sources: [
          { name: "Wikipedia — Operação Lava Jato", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Lava_Jato" },
          { name: "G1 — balanço da Petrobras em 2015", url: "https://g1.globo.com/economia/negocios/noticia/2015/04/petrobras-divulga-balanco-auditado-com-prejuizo-de-r-216-bi-em-2014.html" }
        ]
      }
    ]
  },
  {
    id: "dilma-2",
    order: 41,
    era: "nova",
    name: "Dilma Vana Rousseff",
    short: "Dilma Rousseff",
    party: "PT",
    partyDetail: "Partido dos Trabalhadores",
    periodLabel: "1 jan 2015 – 31 ago 2016",
    access: "Reeleita",
    accessDetail: "Reeleita em 2014 e empossada em 2015, com Michel Temer de vice.",
    exit: "Impeachment",
    exitDetail: "Afastada em 12 de maio de 2016 e cassada pelo Senado em 31 de agosto de 2016. Numa votação separada, o Senado rejeitou a inabilitação por oito anos. Ela pôde se candidatar de novo.",
    card: "Caiu pelas pedaladas fiscais, crime de responsabilidade. Não foi condenada por corrupção.",
    summary: "O impeachment de Dilma não foi um julgamento de propina. O Senado a condenou por abrir créditos suplementares e por atrasar repasses do Tesouro a bancos públicos — as pedaladas — de um modo que o TCU considerou maquiagem fiscal. É sanção política por crime de responsabilidade. Não existe condenação penal de Dilma por corrupção.",
    cases: [
      {
        id: "pedaladas",
        title: "Pedaladas fiscais e decretos de crédito",
        status: "politico",
        statusLabel: "Impeachment · sem condenação penal",
        years: "2014–2016",
        targetsPresident: true,
        summary: "O Tesouro atrasou pagamentos devidos a Caixa, Banco do Brasil e BNDES, e esses bancos carregaram o custo. As contas públicas pareciam melhores do que eram. O TCU rejeitou as contas de 2014. A Câmara autorizou o impeachment e o Senado cassou o mandato em 31 de agosto de 2016. A acusação vencedora não foi o Petrolão, embora a Lava Jato fosse o pano de fundo político. O Senado não aplicou os oito anos de inelegibilidade.",
        involved: "Dilma Rousseff; equipe econômica; bancos públicos credores das chamadas pedaladas; TCU e o Congresso.",
        amount: "As manobras foram medidas em dezenas de bilhões de reais de atrasos e de créditos. Não são propina recebida pela presidente.",
        legal: "Condenação política: perda do cargo. Sem inabilitação de oito anos. Sem condenação penal por corrupção.",
        sources: [
          { name: "Wikipedia — Impeachment de Dilma Rousseff", url: "https://pt.wikipedia.org/wiki/Impeachment_de_Dilma_Rousseff" }
        ]
      }
    ]
  },
  {
    id: "temer",
    order: 42,
    era: "nova",
    name: "Michel Miguel Elias Temer Lulia",
    short: "Michel Temer",
    party: "MDB",
    partyDetail: "PMDB, renomeado MDB em 2017",
    periodLabel: "31 ago 2016 – 1 jan 2019",
    access: "Vice que assumiu",
    accessDetail: "Vice de Dilma, assumiu em definitivo com o impeachment, em 31 de agosto de 2016. Já estava interino desde 12 de maio.",
    exit: "Fim do período",
    exitDetail: "Transmitiu o cargo a Jair Bolsonaro em 1º de janeiro de 2019.",
    card: "Gravação da JBS e mala de R$ 500 mil. Processos trancados ou com absolvição. Sem condenação vigente.",
    summary: "Temer foi o presidente mais diretamente gravado num escândalo de propina e, ainda assim, não tem condenação vigente. A mala de R$ 500 mil é um fato filmado nas mãos do assessor Rodrigo Rocha Loures. O elo com Temer não sustentou a ação penal. Na Eletronuclear, a denúncia criminal foi rejeitada e, em 2025, a Justiça o absolveu de improbidade. Ele ficou preso quatro dias em 2019, na Lava Jato do Rio, e foi solto.",
    cases: [
      {
        id: "mala",
        scheme: "jbs",
        title: "JBS — gravação e mala de R$ 500 mil",
        status: "trancado",
        statusLabel: "Ação penal trancada por falta de provas",
        years: "2017 · trancamento mantido em 2024",
        targetsPresident: true,
        summary: "Delatores da J&F gravaram Temer e filmaram a entrega de R$ 500 mil a Rocha Loures. A acusação dizia que era propina. A Câmara rejeitou autorizar processos enquanto ele era presidente. Depois do mandato, o TRF-1 trancou a ação por falta de provas, sem julgamento de mérito, em 2021. O STJ manteve. Em 8 de maio de 2024, Edson Fachin recusou o recurso do MPF. Não há condenação.",
        involved: "Michel Temer; Rodrigo Rocha Loures; Joesley Batista e Ricardo Saud, da J&F/JBS.",
        amount: "R$ 500 mil na mala filmada. A acusação apresentava esse valor como parcela de um acerto maior, não como total sentenciado.",
        legal: "O TRF-1 trancou a ação penal em 2021 por falta de provas de que o dinheiro da mala chegou a Temer — ausência de justa causa, não exame de mérito até o fim. O STJ manteve. Em maio de 2024 Fachin não admitiu o recurso do MPF porque o recurso extraordinário não reexamina prova. Sem condenação.",
        sources: [
          { name: "G1 — Fachin mantém o encerramento em 2024", url: "https://g1.globo.com/politica/noticia/2024/05/08/fachin-mantem-encerrada-investigacao-de-temer-no-caso-da-mala-de-r-500-mil.ghtml" },
          { name: "Wikipedia — Joesley Batista", url: "https://pt.wikipedia.org/wiki/Joesley_Batista" }
        ]
      },
      {
        id: "angra",
        title: "Eletronuclear e Angra 3",
        status: "absolvido",
        statusLabel: "Denúncia rejeitada · absolvido na improbidade em 2025",
        years: "acusações sobre 2013–2014 · sentenças até 2025",
        targetsPresident: true,
        summary: "A Lava Jato do Rio acusou Temer, então vice-presidente, de um esquema em contratos da Eletronuclear para Angra 3. Ele foi preso de 21 a 25 de março de 2019 por ordem do juiz Marcelo Bretas e solto. A denúncia criminal foi rejeitada por falta de provas, com trânsito em julgado referido na sentença cível. Em novembro de 2025, a juíza Cláudia Valéria Bastos Fernandes absolveu Temer, Moreira Franco e outros de improbidade, por ver só conjecturas.",
        involved: "Michel Temer; Moreira Franco; o almirante Othon Luiz Pinheiro da Silva; João Baptista Lima Filho, o coronel Lima; Engevix, na narrativa do MPF.",
        amount: "O MPF falou em ao menos R$ 1 milhão de propina e em desvios da ordem de milhões nos contratos de Angra 3. A sentença de 2025 diz que esse pagamento não foi provado.",
        legal: "A denúncia penal foi rejeitada por falta de provas do pagamento. Em novembro de 2025 a Justiça absolveu Temer de improbidade porque a acusação, no julgamento, ficou em conjecturas. Sem condenação.",
        sources: [
          { name: "O Globo — absolvição de improbidade em novembro de 2025", url: "https://oglobo.globo.com/politica/noticia/2025/11/27/justica-absolve-temer-e-moreira-franco-de-acusacao-de-improbidade-administrativa-na-eletronuclear.ghtml" },
          { name: "Gazeta do Povo — mesma sentença", url: "https://www.gazetadopovo.com.br/republica/justica-absolve-temer-em-acao-ligada-a-lava-jato-sobre-contratos-de-angra-3/" }
        ]
      }
    ]
  },
  {
    id: "bolsonaro",
    order: 43,
    era: "nova",
    name: "Jair Messias Bolsonaro",
    short: "Jair Bolsonaro",
    party: "PL",
    partyDetail: "elegeu-se pelo PSL; ficou sem partido; filiou-se ao PL em 2021",
    periodLabel: "1 jan 2019 – 1 jan 2023",
    access: "Eleito",
    accessDetail: "Eleito no segundo turno de 2018 e empossado em 1º de janeiro de 2019.",
    exit: "Fim do mandato",
    exitDetail: "Deixou o cargo em 1º de janeiro de 2023, após perder a reeleição para Lula. Não admitiu a derrota no rito comum. As consequências penais e eleitorais vieram depois e estão separadas abaixo: uma é corrupção em investigação, a outra é a condenação por golpe, que não é caso de propina.",
    card: "Joias sauditas ainda sem condenação. Rachadinha da família sem julgamento de mérito. Condenado em 2025 por golpe, noutro processo.",
    summary: "Os casos de corrupção do mandato — joias de governos árabes, suspeita de rachadinha no antigo gabinete e o orçamento secreto — não produziram condenação de Bolsonaro até 26 de outubro de 2026. A condenação que ele cumpre é outra: 27 anos e 3 meses por tentativa de golpe, julgada pela Primeira Turma do STF em 2025. A ficha separa as duas coisas de propósito.",
    cases: [
      {
        id: "joias",
        title: "Joias da Arábia Saudita",
        status: "investigado",
        statusLabel: "Indiciado · PGR pediu arquivamento · sem condenação",
        years: "2021–2026",
        targetsPresident: true,
        summary: "Conjuntos de joias dados por governos da Arábia Saudita e do Bahrein foram trazidos sem o rito de presente oficial. A PF concluiu, em 2024, que assessores tentaram vender itens nos Estados Unidos e indiciou Bolsonaro por associação criminosa, lavagem e peculato. Um conjunto Chopard foi avaliado em cerca de R$ 5,1 milhões; a venda apurada foi estimada em cerca de R$ 6,8 milhões. Em março de 2026 a PGR pediu o arquivamento penal, por falta de lei clara sobre de quem é o presente de chefe de Estado. Até agosto de 2026 o inquérito seguia com Alexandre de Moraes, e a Receita mantinha apuração aduaneira. Não há condenação.",
        involved: "Jair Bolsonaro; o ajudante de ordens Mauro Cid; assessores como Marcelo Costa Câmara; governos da Arábia Saudita e do Bahrein como doadores oficiais.",
        amount: "Cerca de R$ 6,8 milhões na estimativa da PF para os itens negociados; cerca de R$ 5,1 milhões na perícia do conjunto Chopard destinado a Michelle Bolsonaro.",
        legal: "Investigado e indiciado. Arquivamento penal pedido pela PGR em março de 2026, sem decisão de mérito do relator nas fontes consultadas até agosto de 2026. Apuração administrativa da Receita em andamento. Sem condenação.",
        sources: [
          { name: "Poder360 — PGR pede arquivamento e transferência das joias", url: "https://www.poder360.com.br/poder-justica/pgr-pede-que-moraes-transfira-joias-sauditas-para-receita-federal/" },
          { name: "Estadão — custódia passa à Receita em 2026", url: "https://www.estadao.com.br/politica/moraes-libera-envio-joias-sauditas-bolsonaro-custodia-receita-federal-nprp/" },
          { name: "UOL — laudos da PF liberados à Receita, agosto de 2026", url: "https://noticias.uol.com.br/politica/ultimas-noticias/2026/08/28/moraes-autoriza-receita-a-ter-acesso-a-laudos-sobre-joias-sauditas.ghtm" }
        ]
      },
      {
        id: "rachadinha-bolsonaro",
        scheme: "rachadinha",
        title: "Rachadinha no gabinete de Flávio Bolsonaro",
        status: "trancado",
        statusLabel: "Denúncia rejeitada · sem mérito",
        years: "gabinete na Alerj · desfecho 2021–2022",
        targetsPresident: false,
        summary: "O caso é anterior à Presidência e atinge o filho, então deputado estadual. O MP-RJ acusou Flávio Bolsonaro de organizar a devolução de salários de assessores, com Fabrício Queiroz no centro, e falou em cerca de R$ 6 milhões. Em 2021 o STJ anulou provas e atos porque o juízo de primeira instância era incompetente — Flávio já tinha foro de senador — e porque a quebra de sigilo era inválida. Em maio de 2022 o TJ-RJ rejeitou a denúncia, sem mérito. Jair Bolsonaro não foi condenado por rachadinha no gabinete de deputado federal.",
        involved: "Flávio Bolsonaro; Fabrício Queiroz; assessores da Alerj. Jair Bolsonaro não é condenado neste processo.",
        amount: "Cerca de R$ 6 milhões na acusação do MP-RJ, dos quais ao menos R$ 2,7 milhões em dinheiro vivo. Números da denúncia, não de sentença.",
        legal: "Em 2021 o STJ anulou provas e atos da primeira instância: o juízo do Rio era incompetente, porque Flávio já tinha foro de senador, e a quebra de sigilo que sustentava a apuração foi invalidada. Em maio de 2022 o TJ-RJ rejeitou a denúncia, sem julgar se o fato ocorreu. Gilmar Mendes negou recursos em 2025. Sem mérito.",
        sources: [
          { name: "Gazeta de S. Paulo — síntese processual atualizada em 2026", url: "https://www.gazetasp.com.br/politica/lula-x-flavio-bolsonaro-e-seus-processos-na-justica-dois-candidatos-a-presidencia-zero-julgamento-de-merito/" },
          { name: "Wikipedia — Caso Queiroz", url: "https://pt.wikipedia.org/wiki/Caso_Queiroz" }
        ]
      },
      {
        id: "orcamento-secreto",
        title: "Orçamento secreto (emendas de relator)",
        status: "politico",
        statusLabel: "Declarado inconstitucional · sem condenação pessoal",
        years: "2019–2022",
        targetsPresident: false,
        summary: "Emendas de relator, classificadas como RP9, passaram a distribuir dezenas de bilhões de reais por ano sem que o eleitor soubesse qual parlamentar indicara cada verba. O Planalto usou esse volume para ampliar a base na Câmara. Em dezembro de 2022 o STF declarou o desenho inconstitucional. É um caso de opacidade orçamentária e de risco de corrupção, no mesmo gênero dos Anões, não uma condenação de Bolsonaro por receber propina.",
        involved: "Relatores do orçamento, lideranças da Câmara e o Palácio do Planalto. Sem réu presidencial condenado.",
        amount: "Dezenas de bilhões de reais por ano em emendas RP9 no auge do mecanismo. O número exato varia conforme o exercício e a fonte orçamentária.",
        legal: "Norma e prática declaradas inconstitucionais pelo STF em 2022. Sem condenação criminal do presidente.",
        sources: [
          { name: "Wikipedia — Orçamento secreto", url: "https://pt.wikipedia.org/wiki/Or%C3%A7amento_secreto" }
        ]
      },
      {
        id: "inss-bolsonaro",
        scheme: "inss",
        title: "Descontos associativos no INSS (começo do salto)",
        status: "andamento",
        statusLabel: "Esquema em investigação · presidente não denunciado",
        years: "2019–2022, dentro da série 2019–2024",
        targetsPresident: false,
        summary: "Os convênios que permitiam a associações descontar mensalidade na aposentadoria já existiam. O valor anual ficou na média de R$ 524 milhões entre 2016 e 2021 e subiu a R$ 706 milhões em 2022. A explosão maior é de 2023–2024. A Operação Sem Desconto, em 2025, apura os dois governos. Bolsonaro não foi denunciado nas peças do MPF citadas aqui.",
        involved: "Servidores do INSS e dirigentes de associações. Sem denúncia contra o presidente.",
        amount: "R$ 6,3 bilhões descontados de 2019 a 2024 para entidades investigadas, na conta do MPF. Só uma parte disso é do mandato de Bolsonaro.",
        legal: "Investigação em andamento. Sem condenação e sem denúncia contra Bolsonaro.",
        sources: [
          { name: "MPF — Operação Sem Desconto", url: "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/mpf-atua-de-forma-coordenada-em-investigacoes-que-apuram-descontos-irregulares-em-beneficios-do-inss" },
          { name: "BBC — curva dos descontos por governo", url: "https://www.bbc.com/portuguese/articles/cy0xj17wwjlo" }
        ]
      }
    ],
    other: {
      title: "Condenação por golpe e inelegibilidade — não são casos de corrupção",
      paragraphs: [
        "Em junho de 2023 o TSE declarou Bolsonaro inelegível por oito anos por abuso de poder político e uso indevido dos meios de comunicação, por causa da reunião com embaixadores em que atacou as urnas. É sanção eleitoral.",
        "Em 2025 a Primeira Turma do STF condenou Bolsonaro a 27 anos e 3 meses de prisão por tentativa de golpe de Estado, abolição violenta do Estado democrático de direito, organização criminosa armada e danos ao patrimônio, no núcleo da trama que culminou no 8 de janeiro de 2023. A fase de recursos ordinários encerrou-se em 2026 e a pena passou a ser executada. Ele cumpre prisão domiciliar por saúde. A defesa protocolou revisão criminal. Até 26 de outubro de 2026 o relator, Kassio Nunes Marques, não tinha julgado a revisão: disse que só a analisaria depois do segundo turno.",
        "Essa condenação é o fato penal mais grave associado ao fim do mandato. Não entra na lista de corrupção porque o crime sentenciado é outro."
      ],
      sources: [
        { name: "STF — 29 condenações na trama golpista, dezembro de 2025", url: "https://noticias.stf.jus.br/postsnoticias/stf-concluiu-julgamento-de-acoes-contra-reus-que-planejaram-golpe-de-estado/" },
        { name: "G1 — penas em execução, abril de 2026", url: "https://g1.globo.com/politica/noticia/2026/04/24/trama-golpista-stf-encerra-fase-de-recursos-e-ja-executou-as-penas-de-todos-os-condenados.ghtml" },
        { name: "Agência Brasil — PGR contra a revisão, junho de 2026", url: "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/pgr-se-manifesta-contra-revisao-da-condenacao-de-bolsonaro" }
      ]
    }
  },
  {
    id: "lula-3",
    order: 44,
    era: "nova",
    name: "Luiz Inácio Lula da Silva",
    short: "Luiz Inácio Lula da Silva",
    party: "PT",
    partyDetail: "Partido dos Trabalhadores",
    periodLabel: "1 jan 2023 – em exercício",
    access: "Eleito",
    accessDetail: "Eleito no segundo turno de 2022, com 50,9% dos votos válidos, e empossado em 1º de janeiro de 2023. As condenações da Lava Jato já tinham sido anuladas em 2021; por isso a candidatura foi registrada.",
    exit: "Mandato em curso",
    exitDetail: "Em 26 de outubro de 2026 o mandato seguia. No dia anterior, 25 de outubro, o TSE e a imprensa deram Lula como reeleito para um quarto período, a ser iniciado em janeiro de 2027, contra Flávio Bolsonaro. Esse quarto mandato ainda não começou e não tem ficha.",
    banner: {
      title: "Reeleito em 25 de outubro de 2026",
      text: "G1, CNN Brasil, Agência Brasil e o Senado noticiaram a vitória de Lula sobre Flávio Bolsonaro no segundo turno, com cerca de 51,8% dos votos válidos. A posse do período seguinte foi anunciada para o início de janeiro de 2027. Até lá, o presidente em exercício é o do terceiro mandato."
    },
    card: "Fraude dos descontos do INSS em investigação. Sem denúncia contra Lula. Condenações antigas da Lava Jato continuam anuladas.",
    summary: "O caso de corrupção novo e documentado deste mandato é o dos descontos associativos no INSS, herdado em parte do governo anterior e acelerado em 2023–2024. O MPF não denunciou Lula. As condenações da Lava Jato contra ele permanecem anuladas: não foram substituídas por uma absolvição de mérito nos casos do tríplex e do sítio, e também não voltaram a valer.",
    cases: [
      {
        id: "inss-lula",
        scheme: "inss",
        title: "Operação Sem Desconto — INSS",
        status: "andamento",
        statusLabel: "Em investigação · presidente não denunciado",
        years: "2023–2026",
        targetsPresident: false,
        summary: "Associações descontaram mensalidades de aposentadorias com autorização que a maior parte dos beneficiários nega ter dado. A CGU viu o salto: R$ 1,3 bilhão em 2023 e projeção de R$ 2,6 bilhões em 2024, depois de R$ 706 milhões em 2022. O MPF soma R$ 6,3 bilhões descontados de 2019 a 2024 para entidades sob investigação — total debitado, não sentença de quanto foi crime. A PF fez a Operação Sem Desconto em abril de 2025. Até outubro de 2026 o INSS tinha devolvido R$ 3,6 bilhões a 5,1 milhões de pessoas e ainda não recuperara esse dinheiro das entidades. Lula não é réu nas notas do MPF usadas aqui.",
        involved: "Servidores do INSS, dirigentes de associações e sindicatos conveniados. Sem denúncia criminal contra o presidente da República.",
        amount: "R$ 6,3 bilhões descontados entre 2019 e 2024, segundo o MPF. Devolução de R$ 3,6 bilhões até outubro de 2026. Um bloqueio judicial citado pelo MPF chegou a cerca de R$ 4 bilhões de uma entidade.",
        legal: "Inquéritos e ações em andamento em vários estados. Prisões foram revistas pelo STF em 2026. Sem condenação e sem denúncia contra Lula nas fontes públicas desta ficha.",
        sources: [
          { name: "MPF — coordenação das investigações, maio de 2025", url: "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/mpf-atua-de-forma-coordenada-em-investigacoes-que-apuram-descontos-irregulares-em-beneficios-do-inss" },
          { name: "BBC News Brasil — o salto em 2023–2024", url: "https://www.bbc.com/portuguese/articles/cy0xj17wwjlo" },
          { name: "Folha — R$ 3,6 bi devolvidos até outubro de 2026", url: "https://www1.folha.uol.com.br/mercado/2026/10/inss-devolve-r-36-bilhoes-a-segurados-que-contestaram-fraude-e-16-milhao-esperam-valores.shtml" }
        ]
      },
      {
        id: "lava-jato-status",
        title: "Status das condenações antigas da Lava Jato",
        status: "anulado",
        statusLabel: "Anuladas em 2021 · sem processo ativo",
        years: "revisão 2021–2025",
        targetsPresident: true,
        summary: "As condenações do tríplex (Moro em 2017, TRF-4 em 2018, STJ em 2019) e do sítio (Gabriela Hardt em 2019, TRF-4 no mesmo ano) foram anuladas pelo STF em 2021. O motivo da anulação de Fachin, confirmado pelo plenário por 8 a 3, foi a incompetência territorial da 13ª Vara Federal de Curitiba. Em fundamento separado, a Segunda Turma declarou Moro suspeito no tríplex por 3 a 2, e o plenário manteve; a defesa invocava, entre outros elementos, as mensagens da Vaza Jato. As provas daquele processo foram anuladas e não foram julgadas de novo. As denúncias do Instituto Lula, baseadas na leniência da Odebrecht e na delação de Palocci, também saíram de Curitiba sem condenação. No DF o tríplex prescreveu, porque o prazo se esgotou, e a denúncia do sítio foi rejeitada; o TRF-1 manteve esse encerramento em julho de 2025. A Folha registrou em 12 de setembro de 2025 que não havia processo ativo da Lava Jato contra o presidente. Isso não é inocência declarada. O detalhe de cada prova está na ficha de 2007–2010.",
        involved: "Luiz Inácio Lula da Silva, como acusado nas ações anuladas; STF, como tribunal que anulou; Justiça Federal do Distrito Federal, que encerrou o que restou.",
        amount: "Os valores das acusações originais não se converteram em condenação vigente. Ver a ficha de 2007–2010.",
        legal: "O STF anulou as condenações em 2021: incompetência territorial da 13ª Vara Federal de Curitiba (HC 193726, de Fachin, confirmado pelo plenário) e, à parte, suspeição de Moro no tríplex (Segunda Turma, 23 de março). No DF, o tríplex prescreveu porque o prazo se esgotou, e a denúncia do sítio foi rejeitada. Sem absolvição de mérito nos dois casos principais. Sem processo ativo, segundo a Folha em setembro de 2025.",
        sources: [
          { name: "STF — confirmação da anulação, abril de 2021", url: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261" },
          { name: "Folha — o que aconteceu com os processos, setembro de 2025", url: "https://www1.folha.uol.com.br/poder/2025/09/veja-o-que-aconteceu-com-os-processos-contra-o-presidente-lula.shtml" }
        ]
      }
    ],
    reading: [
      { name: "G1 — resultado da eleição de 25 de outubro de 2026", url: "https://g1.globo.com/politica/eleicoes/2026/noticia/2026/10/25/quem-ganhou-a-eleicao-para-presidente-em-2026.ghtml" },
      { name: "Agência Brasil — reeleição", url: "https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/lula-e-reeleito-presidente-do-brasil-em-virada-historica" },
      { name: "Senado — quarto mandato, posse anunciada para janeiro de 2027", url: "https://www12.senado.leg.br/noticias/senado-agora/2026/10/25/lula-e-eleito-presidente-para-quarto-mandato" }
    ]
  }
];
