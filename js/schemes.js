var SCHEMES = [
  {
    id: "petrolao",
    short: "Petrolão / Lava Jato",
    title: "Petrolão — cartel, propina e lavagem",
    years: "Contratos sobretudo 2004–2014 · operação a partir de 2014",
    summary: [
      "O desenho resume o mecanismo descrito em delações, denúncias do MPF e no próprio balanço da Petrobras. Não é uma sentença única contra um partido, nem a situação atual de cada réu.",
      "A Petrobras estimou em R$ 6,2 bilhões a baixa contábil de gastos indevidos, aplicando 3% sobre contratos com empresas citadas na investigação entre 2004 e 2012. Esse 3% é uma média contábil da companhia, não a prova de que todo contrato pagou exatamente isso a um único partido."
    ],
    correctionTitle: "A versão “3% doados ao PT” e o que os autos mostram",
    correction: "A descrição de que as empreiteiras ficavam com cerca de 3% e convertiam o valor em papéis para doar só ao PT cobre apenas um pedaço do registro. Denúncias e delações falam em propina de cerca de 1% a 3% do contrato (em aditivos, às vezes mais), paga por um cartel de empreiteiras. O dinheiro passava por operadores e doleiros, como Alberto Youssef, por contratos fictícios de consultoria, empresas de fachada e contas no exterior. A Odebrecht ainda mantinha um setor interno de propinas (sistemas Drousys e MyWebDay) e usava doações eleitorais oficiais. Os beneficiários indicados nas peças incluíam PT, PP, PMDB/MDB e outros partidos, além de diretores e operadores — não um destinatário só.",
    narrative: [
      "Empreiteiras combinavam preços no chamado Clube e venceram licitações da Petrobras.",
      "Diretores da estatal, indicados por partidos que sustentavam o governo, homologavam contratos e aditivos.",
      "A propina descrita nas peças ficava na faixa de 1% a 3% do contrato. O balanço da Petrobras usou 3% como estimativa contábil.",
      "Uma via passava pelo doleiro Alberto Youssef: consultoria fictícia, offshore e dinheiro vivo.",
      "Outra via era o setor de operações estruturadas da Odebrecht, que registrava pagamentos e também doações oficiais de campanha.",
      "O destino documentado inclui caixa partidário de mais de um partido, campanhas declaradas e enriquecimento de pessoas. Muitas condenações individuais foram depois anuladas pelo STF."
    ],
    sources: [
      { name: "Balanço Petrobras — perda de R$ 6,2 bi (G1, 2015)", url: "https://g1.globo.com/economia/negocios/noticia/2015/04/petrobras-divulga-balanco-auditado-com-prejuizo-de-r-216-bi-em-2014.html" },
      { name: "Senado — Bendine explica a baixa de 3%", url: "https://www12.senado.leg.br/noticias/materias/2015/04/28/bendine-anuncia-esforco-da-petrobras-para-recuperar-r-6-2-bi-da-corrupcao" },
      { name: "Departamento de Justiça dos EUA / G1 — Odebrecht admite US$ 788 milhões", url: "https://g1.globo.com/politica/noticia/odebrecht-admite-us-788-milhoes-em-propina-em-12-paises-dizem-eua.ghtml" },
      { name: "Exame — Youssef descreve a divisão da propina", url: "https://exame.com/brasil/youssef-60-da-propina-seguia-para-agentes-politicos/" },
      { name: "Wikipedia — Operação Lava Jato", url: "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Lava_Jato" }
    ],
    nodes: [
      { id: "cartel", type: "company", tag: "Quem pagava", x: 30, y: 400, w: 230, h: 150, title: "Cartel de empreiteiras", text: "Odebrecht, OAS, UTC, Camargo Corrêa, Andrade Gutierrez, Queiroz Galvão e outras.", detail: "Delação de Paulo Roberto Costa, de Alberto Youssef e acordos de leniência descrevem um cartel que combinava vencedor, preço e compensação para quem perdia a disputa. A Odebrecht admitiu, no acordo com EUA, Brasil e Suíça, US$ 788 milhões em propina em 12 países entre 2001 e 2016." },
      { id: "petrobras", type: "public", tag: "Estatal", x: 30, y: 30, w: 250, h: 130, title: "Petrobras", text: "Obras e serviços, sobretudo 2004–2014.", detail: "No balanço de 2014, auditado em 2015, a companhia baixou R$ 6,194 bilhões como gastos adicionais capitalizados indevidamente. A conta usou 3% sobre o valor dos contratos com empresas citadas. A maior fatia foi atribuída à área de Abastecimento." },
      { id: "diretores", type: "politics", tag: "Cotas na diretoria", x: 448, y: 30, w: 250, h: 170, title: "Diretores indicados por partidos", text: "Costa (PP), Duque (PT), Cerveró e Zelada na área internacional.", detail: "As denúncias descrevem um rateio político de diretorias. Paulo Roberto Costa (Abastecimento) foi associado ao PP; Renato Duque (Serviços), ao PT. Nestor Cerveró e Jorge Zelada aparecem na área internacional. Indicação política não é, sozinha, prova de crime: o crime descrito é o pagamento de vantagem em troca de contrato." },
      { id: "contrato", type: "public", tag: "Contrato", x: 866, y: 380, w: 250, h: 140, title: "Licitação e aditivo", text: "Preço combinado e contrato acima do que a concorrência produziria.", detail: "O sobrepreço do cartel e a propina não são a mesma coisa. A propina era uma fração do contrato; o prejuízo da combinação de preços podia ser maior. A estimativa de 3% da Petrobras mede o pagamento indevido que a estatal conseguiu estimar, não todo o dano do cartel." },
      { id: "propina", type: "launder", tag: "Percentual", x: 1284, y: 160, w: 230, h: 140, title: "Propina de 1% a 3%", text: "Faixa citada em delações. Em aditivos, há menção a percentuais maiores.", detail: "Youssef descreveu 1% em contratos da diretoria de Abastecimento e algo entre 2% e 5% em certos aditivos. Em peça sobre a Camargo Corrêa, o MPF narrou cerca de 1% em contratos da REPAR e de Abreu e Lima, com uma fatia destinada ao caixa do PP via Costa, Janene e Youssef. Não há um percentual único para todos os contratos nem um destinatário único." },
      { id: "youssef", type: "operator", tag: "Doleiro", x: 1682, y: 30, w: 230, h: 150, title: "Alberto Youssef", text: "Operador que recebia, convertia e repartia.", detail: "Youssef é o doleiro que virou delator no início da Lava Jato. As peças descrevem depósitos em empresas ligadas a ele, a pretexto de serviços que não existiam, e repasses depois a agentes políticos e a Paulo Roberto Costa. Ele já havia aparecido no Banestado e no caso Banestado/CC5, anos antes." },
      { id: "setor", type: "operator", tag: "Dentro da empreiteira", x: 1682, y: 420, w: 230, h: 160, title: "Setor de propinas da Odebrecht", text: "Contabilidade paralela, Drousys e MyWebDay.", detail: "A leniência da Odebrecht descreveu um departamento criado para pagar vantagem indevida no Brasil e no exterior, com sistemas próprios para esconder os lançamentos. Além de caixa não declarado, a empresa usou doações eleitorais registradas na Justiça Eleitoral como uma das formas de entregar dinheiro a campanhas." },
      { id: "fachada", type: "launder", tag: "Lavagem", x: 2080, y: 20, w: 240, h: 130, title: "Contrato fictício", text: "Consultoria ou nota fria para justificar o depósito.", detail: "O MPF descreveu, no exemplo da Camargo Corrêa, repasses a empresas de Youssef com motivo ideologicamente falso de prestação de serviço, e também contratos da Costa Global, de Paulo Roberto Costa, com empreiteiras." },
      { id: "offshore", type: "launder", tag: "Lavagem", x: 2080, y: 190, w: 240, h: 130, title: "Contas no exterior", text: "Suíça e outras praças usadas para esconder o dono do dinheiro.", detail: "Acordos de leniência e cooperação com a Suíça localizaram contas usadas para receber propina. O país da conta muda conforme o operador. O ponto comum nas peças é a ocultação do beneficiário final, não um banco único." },
      { id: "vivo", type: "launder", tag: "Lavagem", x: 2080, y: 370, w: 240, h: 120, title: "Doleiro e dinheiro vivo", text: "Câmbio informal e espécie, fora do sistema oficial.", detail: "Parte da propina não virava doação nem depósito rastreável. Delações falam em entregas em dinheiro, intermediadas por doleiros, para diretores e operadores. Esse trecho é mais difícil de reconstituir do que um TED." },
      { id: "doacao", type: "politics", tag: "Via eleitoral", x: 2080, y: 540, w: 240, h: 140, title: "Doação oficial de campanha", text: "Dinheiro que entrava declarado no TSE, originado do mesmo caixa ilícito.", detail: "A leniência da Odebrecht distinguiu propina disfarçada e doação eleitoral formalmente registrada. Doação declarada não prova, sozinha, que a origem era lícita. Também não permite tratar toda doação de empreiteira como propina." },
      { id: "partidos", type: "politics", tag: "Quem recebia", x: 2488, y: 20, w: 260, h: 160, title: "Mais de um partido", text: "PT, PP, PMDB/MDB e outros aparecem nas delações e denúncias.", detail: "O rateio político da diretoria já indica pluralidade: PP na Abastecimento, PT em Serviços, PMDB com influência em outras áreas ao longo dos governos. Lista de delação não é condenação. Vários citados foram condenados e, a partir de 2021, tiveram processos da 13ª Vara de Curitiba anulados pelo STF: a vara foi declarada incompetente, houve suspeição de magistrado e, em alguns autos, nulidade da prova. Anulação não é absolvição.", source: { name: "STF — anulação das condenações da Lava Jato contra Lula, 2021", url: "https://noticias.stf.jus.br/postsnoticias/stf-confirma-anulacao-de-condenacoes-do-ex-presidente-lula-na-lava-jato/" } },
      { id: "pessoal", type: "politics", tag: "Quem recebia", x: 2488, y: 230, w: 260, h: 150, title: "Pessoas, não só partido", text: "Diretores, operadores e políticos ficavam com parte do valor.", detail: "As próprias delações dividem o dinheiro: uma fatia para o grupo político que indicou o diretor, outra para o diretor e para quem operava. Tratar o esquema só como “doação ao PT” apaga o enriquecimento pessoal e os outros partidos descritos nos autos." },
      { id: "campanhas", type: "outcome", tag: "Uso eleitoral", x: 2488, y: 450, w: 260, h: 160, title: "Caixa de campanha", text: "Parte oficial, parte não declarada, em várias legendas.", detail: "O destino eleitoral está nas leniências e em representações eleitorais. Houve condenação, acordo, prescrição (o prazo de punir se esgotou) e anulação pelo STF — incompetência da 13ª Vara de Curitiba, suspeição de juiz ou nulidade de prova. O mapa descreve a investigação, não penas vigentes.", source: { name: "STF — plenário confirma a anulação, 2021", url: "https://noticias.stf.jus.br/postsnoticias/stf-confirma-anulacao-de-condenacoes-do-ex-presidente-lula-na-lava-jato/" } },
    ],
    edges: [
      { from: "cartel", to: "contrato", label: "vence preço combinado" },
      { from: "petrobras", to: "diretores", label: "cargos fatiados" },
      { from: "diretores", to: "contrato", label: "homologa" },
      { from: "contrato", to: "propina", label: "sobrepreço" },
      { from: "propina", to: "youssef", label: "1% a 3%" },
      { from: "propina", to: "setor", label: "conta paralela" },
      { from: "youssef", to: "fachada", label: "nota fria" },
      { from: "youssef", to: "offshore", label: "exterior" },
      { from: "youssef", to: "vivo", label: "espécie" },
      { from: "setor", to: "offshore", label: "Drousys" },
      { from: "setor", to: "doacao", label: "doação ao TSE" },
      { from: "fachada", to: "partidos", label: "caixa oculto" },
      { from: "vivo", to: "pessoal", label: "reparte" },
      { from: "offshore", to: "pessoal", label: "esconde titular" },
      { from: "doacao", to: "campanhas", label: "vários partidos" }
    ]
  },
  {
    id: "mensalao",
    short: "Mensalão",
    title: "Mensalão — AP 470",
    years: "Fatos a partir de 2003 · julgamento no STF em 2012–2014",
    summary: [
      "Esquema julgado pelo Supremo na Ação Penal 470. O relator falou em cerca de R$ 110 milhões, em valores da época, e em 40 réus. O presidente Lula não foi réu nesse processo.",
      "O núcleo político do PT — José Dirceu, José Genoino e Delúbio Soares — foi condenado por corrupção. Em 2014, embargos infringentes afastaram a formação de quadrilha de oito condenados, entre eles Dirceu, Genoino, Delúbio e Marcos Valério. A condenação por corrupção permaneceu."
    ],
    correction: "“Mensalão” foi o nome político dado por Roberto Jefferson a pagamentos periódicos a parlamentares. O julgamento mostrou um circuito mais largo: contratos de publicidade, empréstimos simulados e repasses do publicitário Marcos Valério, em favor da base aliada e de despesas do PT. Não foi uma condenação do presidente.",
    narrative: [
      "Contratos de publicidade do Banco do Brasil/Visanet e da Câmara, além de empréstimos sem perspectiva real de pagamento, alimentavam o caixa de Marcos Valério.",
      "Valério, sócio da SMP&B e da DNA Propaganda, centralizava saques e repasses.",
      "Parlamentares de PP, PL, PTB, PMDB e de outros partidos da base recebiam pagamentos para sustentar votações.",
      "Delúbio Soares, tesoureiro do PT, operava o lado partidário. Dirceu foi apontado pelo STF como articulador político e condenado por corrupção ativa.",
      "Lula não integrava a denúncia da AP 470. O julgamento não produz uma sentença contra ele."
    ],
    sources: [
      { name: "STF — voto na AP 470 menciona cerca de R$ 110 milhões", url: "https://www.stf.jus.br/arquivo/cms/noticiaNoticiaStf/anexo/itemVIap470mAB.pdf" },
      { name: "STF — contexto histórico da AP 470 e da AP 307", url: "https://noticias.stf.jus.br/postsnoticias/conheca-alguns-julgamentos-historicos-que-marcaram-os-ultimos-50-anos-do-stf/" },
      { name: "MPMA — penas iniciais de Dirceu, Genoino e Delúbio", url: "https://www.mpma.mp.br/ap-470-stf-define-penas-de-prisao-de-dirceu-genoino-e-delubio/" },
      { name: "Câmara — embargos afastam formação de quadrilha de oito réus", url: "https://www.camara.leg.br/tv/427795-stf-absolve-oito-condenados-do-mensalao-do-crime-de-formacao-de-quadrilha/" },
      { name: "Wikipedia — Escândalo do mensalão", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_mensal%C3%A3o" }
    ],
    nodes: [
      { id: "visanet", type: "public", tag: "Origem", x: 30, y: 30, w: 250, h: 130, title: "Banco do Brasil e Visanet", text: "Contratos de publicidade superfaturados ou desviados.", detail: "Henrique Pizzolato, então diretor do Banco do Brasil, foi condenado na AP 470. O dinheiro de contratos publicitários é uma das fontes reconstituídas pelo STF." },
      { id: "camara", type: "public", tag: "Origem", x: 30, y: 200, w: 250, h: 120, title: "Contratos da Câmara", text: "Publicidade da Casa também entrou no circuito.", detail: "O deputado João Paulo Cunha, que presidiu a Câmara, foi réu na AP 470 por fatos ligados a contrato de publicidade. A condenação dele é pessoal e não se estende ao presidente da República." },
      { id: "emprestimo", type: "company", tag: "Origem", x: 30, y: 380, w: 250, h: 150, title: "Empréstimos simulados", text: "Banco Rural e BMG. Crédito sem garantia à altura, tratado como fundo perdido.", detail: "O voto do STF descreve empréstimos ao PT e a empresas de Marcos Valério sem cadastro e garantia normais, na prática não pagos, compensados por favores. Dirigentes do Banco Rural foram condenados; a formação de quadrilha de parte deles caiu em 2014." },
      { id: "valerio", type: "operator", tag: "Operador", x: 448, y: 180, w: 260, h: 160, title: "Marcos Valério", text: "SMP&B e DNA. Sacava e repartia.", detail: "Valério é o operador comum a quase todos os núcleos da AP 470. Foi condenado por corrupção, lavagem e outros crimes. A pena por formação de quadrilha foi afastada no mesmo pacote de embargos de 2014. Ele cumpriu prisão." },
      { id: "lavagem", type: "launder", tag: "Como circulava", x: 876, y: 340, w: 260, h: 130, title: "Saques e contas", text: "Recursos fracionados, em espécie e por empresas do grupo.", detail: "A lavagem descrita no mensalão é menos offshore do que a da Lava Jato: saques vultosos, empresas de publicidade e repasses internos. O STF considerou provado o circuito para os réus condenados." },
      { id: "dirceu", type: "politics", tag: "Condenado", x: 1304, y: 20, w: 260, h: 150, title: "José Dirceu", text: "Ministro da Casa Civil. Corrupção ativa.", detail: "Pena inicial somada de 10 anos e 10 meses, por quadrilha e corrupção ativa, mais multa. Em 2014 o plenário afastou a quadrilha. Restou a corrupção ativa, ligada à compra de apoio de parlamentares e à simulação de empréstimos. Não é uma condenação de Lula." },
      { id: "delubio", type: "politics", tag: "Condenado", x: 1304, y: 210, w: 260, h: 140, title: "Delúbio Soares e José Genoino", text: "Tesoureiro e presidente do PT à época.", detail: "Delúbio foi o operador partidário dos repasses. Genoino presidia o PT. Ambos foram condenados por corrupção; a quadrilha foi afastada em 2014. Penas foram cumpridas em regime compatível com o que restou depois dos recursos." },
      { id: "base", type: "politics", tag: "Quem recebia", x: 1304, y: 420, w: 260, h: 160, title: "Parlamentares da base", text: "PP, PL, PTB, PMDB e outros. Voto em troca de pagamento.", detail: "Roberto Jefferson, do PTB, denunciou o esquema e também foi condenado na AP 470. Houve condenações de deputados de mais de um partido. Lista nominal e penas estão no acórdão, não neste resumo." },
      { id: "lula", type: "outcome", tag: "Fora da denúncia", x: 2170, y: 80, w: 270, h: 150, title: "Lula não foi réu", text: "A AP 470 não o acusou nem o condenou.", detail: "O procurador-geral denunciou dirigentes e operadores, não o presidente. Votos comentaram o benefício político para o governo. Comentário de voto não é condenação. Qualquer caso posterior contra Lula está em outra ficha e teve outro destino jurídico." },
      { id: "stf", type: "outcome", tag: "Sentença", x: 1732, y: 300, w: 270, h: 160, title: "STF, 2012–2014", text: "Condenações por corrupção mantidas. Quadrilha reduzida.", detail: "O julgamento de 2012 condenou núcleo político, financeiro e publicitário. Em 2014 os embargos infringentes, por 6 a 5, afastaram só a formação de quadrilha de oito réus, porque já havia votos bastantes pela absolvição desse crime. Corrupção, lavagem e peculato condenados não caíram por esse motivo.", source: { name: "Câmara — embargos afastam a quadrilha de oito réus", url: "https://www.camara.leg.br/tv/427795-stf-absolve-oito-condenados-do-mensalao-do-crime-de-formacao-de-quadrilha/" } },
    ],
    edges: [
      { from: "visanet", to: "valerio", label: "publicidade" },
      { from: "camara", to: "valerio", label: "contratos" },
      { from: "emprestimo", to: "valerio", label: "crédito simulado" },
      { from: "valerio", to: "lavagem", label: "saques" },
      { from: "lavagem", to: "dirceu", label: "articulação" },
      { from: "lavagem", to: "delubio", label: "caixa do PT" },
      { from: "lavagem", to: "base", label: "mensalidades" },
      { from: "dirceu", to: "stf", label: "corrupção ativa" },
      { from: "base", to: "stf", label: "corrupção passiva" },
      { from: "stf", to: "lula", label: "não foi réu", dashed: true }
    ]
  },
  {
    id: "anoes",
    short: "Anões do Orçamento",
    title: "Anões do Orçamento",
    years: "1993 · governo Itamar Franco · CPI do Orçamento",
    summary: [
      "Escândalo do Congresso, não uma condenação do presidente Itamar Franco. Parlamentares da comissão de orçamento inseriam emendas que carimbavam verba para empreiteiras e entidades. Parte da obra não saía do papel. Uma comissão voltava ao parlamentar.",
      "A revista Veja popularizou o apelido “anões do orçamento”. A CPI de 1993 cassou ou empurrou a renúncia de parlamentares. Muitos processos penais prescreveram. Não há um valor único fechado em sentença contra um presidente."
    ],
    narrative: [
      "O relator e membros da comissão de orçamento direcionavam emendas.",
      "Empreiteiras e entidades recebiam a verba, muitas vezes com sobrepreço ou sem executar a obra.",
      "Um percentual voltava em dinheiro, conta de laranja ou vantagem ao parlamentar.",
      "João Alves (PPR-BA) virou símbolo ao dizer que achara uma quantia alta num guarda-roupa. Genebaldo Correia (PMDB-BA) foi outro nome central da CPI.",
      "Itamar apoiou a investigação. O caso é do Legislativo do período."
    ],
    sources: [
      { name: "Wikipedia — Anões do Orçamento", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_dos_An%C3%B5es_do_Or%C3%A7amento" },
      { name: "Wikipedia — Itamar Franco", url: "https://pt.wikipedia.org/wiki/Itamar_Franco" }
    ],
    nodes: [
      { id: "comissao", type: "public", tag: "Origem", x: 30, y: 200, w: 240, h: 140, title: "Comissão de Orçamento", text: "Relator e membros escreviam emendas nominais.", detail: "No regimento da época, um grupo pequeno de deputados e senadores tinha poder enorme para remanejar dotações no fim da votação do orçamento. Esse poder, sem transparência, foi o instrumento do esquema." },
      { id: "emenda", type: "public", tag: "Ato", x: 438, y: 40, w: 240, h: 130, title: "Emenda carimbada", text: "A verba já nascia com destinatário combinado.", detail: "A emenda indicava obra, município ou entidade. Quem controlava a redação cobrava de quem seria pago com o dinheiro público." },
      { id: "empresa", type: "company", tag: "Quem recebia a verba", x: 846, y: 180, w: 240, h: 140, title: "Empreiteiras e entidades", text: "Construtoras, prefeituras e ONGs de fachada.", detail: "Havia empresa real com sobrepreço e entidade criada para receber convênio e não executar. Os dois caminhos apareceram na CPI." },
      { id: "obra", type: "company", tag: "Destino formal", x: 1254, y: 20, w: 240, h: 140, title: "Obra superfaturada ou inexistente", text: "O papel da licitação não garantia a ponte ou a estrada.", detail: "Relatórios da CPI descreveram convênios pagos sem medição correspondente. O prejuízo é a soma desses convênios, não um número único repetido em toda reportagem." },
      { id: "volta", type: "launder", tag: "Caminho de volta", x: 1254, y: 280, w: 240, h: 140, title: "Comissão ao parlamentar", text: "Dinheiro vivo, cheque de terceiro, conta de laranja.", detail: "O retorno não era doação eleitoral formal. Era comissão, muitas vezes em espécie. Por isso a frase do guarda-roupa de João Alves ficou como imagem do caso — é declaração dele, não um laudo contábil de todo o esquema." },
      { id: "joao", type: "politics", tag: "Nomes centrais", x: 1662, y: 150, w: 270, h: 160, title: "João Alves e outros", text: "Vários partidos. Não era um esquema de uma legenda só.", detail: "João Alves (PPR-BA) e Genebaldo Correia (PMDB-BA) estão entre os nomes mais citados. Houve cassações pela Câmara e renúncias para evitar a perda do mandato. A lista completa está no relatório da CPI." },
      { id: "cpi", type: "outcome", tag: "Desfecho", x: 2100, y: 180, w: 270, h: 150, title: "CPI em 1993", text: "Seis cassados. Quatro renunciaram. Pena penal, à parte.", detail: "O relatório pediu 18 cassações. Seis deputados perderam o mandato e quatro renunciaram antes, entre eles João Alves, para evitar a inelegibilidade. Cassação é sanção da Câmara, não pena. Ibsen Pinheiro foi inocentado pela Justiça em 2000. Onde um processo penal prescreveu, o prazo se esgotou antes do trânsito em julgado; isso não declara inocência. Itamar não foi acusado.", source: { name: "CBN — cassações e a absolvição judicial de Ibsen", url: "https://cbn.globoradio.globo.com/institucional/historia/aniversario/cbn-25-anos/boletins/2016/09/21/1993-BRASIL-VIVE-O-ESCANDALO-DOS-ANOES-DO-ORCAMENTO.htm" } },
    ],
    edges: [
      { from: "comissao", to: "emenda", label: "escreve a emenda" },
      { from: "emenda", to: "empresa", label: "carimba o pago" },
      { from: "empresa", to: "obra", label: "executa mal ou não executa" },
      { from: "empresa", to: "volta", label: "devolve um percentual" },
      { from: "volta", to: "joao", label: "espécie e laranja" },
      { from: "joao", to: "cpi", label: "cassação ou renúncia" },
      { from: "obra", to: "cpi", label: "CPI de 1993" }
    ]
  },
  {
    id: "pcfarias",
    short: "PC Farias / Collor",
    title: "Esquema PC Farias",
    years: "Governo Collor, 1990–1992 · AP 307 julgada em 1994",
    summary: [
      "Paulo César Farias, tesoureiro da campanha de Collor, foi acusado de cobrar empresários interessados em contratos, dívidas e favores do governo. O dinheiro circulava por empresas de fachada, laranjas e contas no exterior.",
      "O desfecho se divide em dois. No Congresso, Collor sofreu impeachment em 1992, uma sanção política, e ficou inelegível por oito anos. No Supremo, a Ação Penal 307 terminou em 1994 com absolvição por falta de provas de que ele participou dos fatos. As duas decisões coexistem: caiu do cargo e foi absolvido na ação penal desse esquema."
    ],
    correction: "A condenação criminal posterior de Collor, de 2023, é outro caso: propina na BR Distribuidora quando ele era senador, julgada na AP 1025. Não reabre nem reverte a absolvição de 1994.",
    narrative: [
      "Empresários procurados por decisões do governo federal pagavam o tesoureiro.",
      "PC Farias usava empresas de fachada e contas de terceiros, inclusive fora do país.",
      "A acusação ligava esse caixa a gastos da Casa da Dinda e de pessoas do entorno. O símbolo midiático foi um carro Elba em nome de uma secretária.",
      "A CPI e a Câmara sustentaram o impeachment. O Senado confirmou a perda do cargo mesmo depois da renúncia.",
      "A PGR denunciou Collor por corrupção passiva. O STF absolveu por falta de provas. PC Farias morreu em 1996, com processos ainda em curso."
    ],
    sources: [
      { name: "STF — absolvição na AP 307, em 1994, por falta de provas", url: "https://noticias.stf.jus.br/postsnoticias/conheca-alguns-julgamentos-historicos-que-marcaram-os-ultimos-50-anos-do-stf/" },
      { name: "Wikipedia — Paulo César Farias", url: "https://pt.wikipedia.org/wiki/Paulo_C%C3%A9sar_Farias" },
      { name: "Wikipedia — Impeachment de Fernando Collor", url: "https://pt.wikipedia.org/wiki/Impeachment_de_Fernando_Collor" }
    ],
    nodes: [
      { id: "empresa", type: "company", tag: "Quem pagava", x: 30, y: 200, w: 240, h: 140, title: "Empresários", text: "Interessados em contrato, financiamento ou omissão do governo.", detail: "A CPI do PC ouviu empreiteiros e doleiros. O padrão descrito era pagamento a Farias para ter acesso a decisões, não um edital único. Os depoimentos não foram todos confirmados na ação penal contra Collor." },
      { id: "pc", type: "operator", tag: "Operador", x: 438, y: 180, w: 250, h: 150, title: "Paulo César Farias", text: "Tesoureiro da campanha e, depois, do esquema.", detail: "PC Farias controlava empresas usadas para receber. Foi réu em ações penais. Em 23 de junho de 1996 foi morto em Maceió, com a namorada Suzana Marcolino. A morte interrompeu parte dos processos. A versão policial do crime é disputada; este site não escolhe uma teoria." },
      { id: "fachada", type: "launder", tag: "Lavagem", x: 856, y: 20, w: 250, h: 130, title: "Empresas de fachada", text: "Notas e contratos para dar aparência lícita.", detail: "O esquema usava pessoas jurídicas sem atividade compatível com o valor que circulava. É o mesmo desenho que reaparece, em outra escala, na Lava Jato duas décadas depois." },
      { id: "laranja", type: "launder", tag: "Lavagem", x: 856, y: 190, w: 250, h: 130, title: "Laranjas e exterior", text: "Contas em nome de terceiros e depósitos fora do Brasil.", detail: "A investigação apontou contas no exterior e interpostas pessoas. “Laranja”, aqui, é a pessoa ou empresa que empresta o nome. Não houve, na AP 307, uma sentença que fixasse o total movimentado em nome de Collor." },
      { id: "dinda", type: "alleged", tag: "Acusação", x: 856, y: 390, w: 250, h: 140, title: "Gastos do entorno", text: "Casa da Dinda e contas de assessores. Elo alegado.", detail: "A acusação dizia que reformas e despesas pessoais eram pagas pelo caixa de Farias. O Fiat Elba em nome de uma secretária virou peça de comunicação. O STF, em 1994, entendeu que não havia prova bastante da participação de Collor." },
      { id: "impeach", type: "outcome", tag: "Político", x: 1274, y: 20, w: 280, h: 150, title: "Impeachment em 1992", text: "Câmara 441 a 38. Senado, 76 a 2.", detail: "A Câmara autorizou o processo em 29 de setembro de 1992, por 441 votos a 38. O Senado afastou Collor em 2 de outubro. Ele renunciou em 29 de dezembro, e no dia seguinte o Senado aplicou oito anos de inelegibilidade por 76 a 2. Isso é crime de responsabilidade, julgado pelo Parlamento, não pelo juiz criminal.", source: { name: "Wikipedia — placares do impeachment de Collor", url: "https://en.wikipedia.org/wiki/Impeachment_of_Fernando_Collor_de_Mello" } },
      { id: "ap307", type: "outcome", tag: "Penal", x: 1274, y: 230, w: 280, h: 160, title: "AP 307 — absolvido", text: "1994, por 5 a 3, falta de provas.", detail: "Em 13 de dezembro de 1994 o STF absolveu Collor de corrupção passiva por 5 votos a 3. A maioria não viu prova de que ele recebeu a vantagem. Os votos pela condenação se concentraram no episódio Mercedes-Benz/Curió e não formaram maioria. O motivo é falta de provas, não anulação do processo.", source: { name: "Folha — absolvição por 5 a 3", url: "https://www1.folha.uol.com.br/fsp/1994/12/13/brasil/19.html" } },
      { id: "morte", type: "outcome", tag: "Operador", x: 1274, y: 450, w: 280, h: 130, title: "PC Farias, 1996", text: "Morto antes de esgotar os próprios processos.", detail: "Parte das ações contra o operador não chegou a uma sentença final por causa da morte. Condenações que já existiam contra ele não se transferem automaticamente a Collor." }
    ],
    edges: [
      { from: "empresa", to: "pc", label: "paga o tesoureiro" },
      { from: "pc", to: "fachada", label: "empresa sem lastro" },
      { from: "pc", to: "laranja", label: "nome de terceiro" },
      { from: "pc", to: "dinda", label: "acusação", dashed: true },
      { from: "dinda", to: "impeach", label: "crise política" },
      { from: "dinda", to: "ap307", label: "denúncia", dashed: true },
      { from: "pc", to: "morte", label: "1996" }
    ]
  },
  {
    id: "sanguessugas",
    short: "Sanguessugas",
    title: "Máfia dos sanguessugas",
    years: "Operação da PF em 2006 · emendas do período Lula",
    summary: [
      "Grupo liderado pela família Vedoin, em Rondônia, vendia ambulâncias a prefeituras com sobrepreço. O caminho político eram emendas parlamentares que obrigavam o município a comprar daquele fornecedor. Em troca, o parlamentar recebia um percentual.",
      "A Polícia Federal deflagrou a Operação Sanguessuga em 2006. O noticiário, a partir da investigação, estimou o esquema em cerca de R$ 110 milhões. Mais de uma centena de parlamentares de vários partidos foi citada. Houve cassações e condenações, sobretudo de operadores. Não houve condenação de Lula nesse caso."
    ],
    narrative: [
      "Os Vedoin articulavam com assessores parlamentares a apresentação de emendas para compra de ambulâncias.",
      "A emenda chegava à prefeitura com o fornecedor na prática já escolhido.",
      "A ambulância custava mais do que deveria. A diferença remunerava o grupo e o parlamentar.",
      "O esquema atravessava a base e a oposição. Não é um caso de um partido só.",
      "A PF prendeu operadores em 2006. O desfecho dos parlamentares variou entre cassação, absolvição e prescrição."
    ],
    sources: [
      { name: "Wikipedia — Escândalo dos sanguessugas", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_dos_sanguessugas" }
    ],
    nodes: [
      { id: "vedoin", type: "operator", tag: "Quem montava", x: 30, y: 200, w: 240, h: 150, title: "Grupo Vedoin", text: "Darci Vedoin e parentes. Empresas de ambulâncias.", detail: "A investigação apontou Darci Vedoin como organizador, com familiares e funcionários que procuravam gabinetes em Brasília. São operadores privados, condenados ou presos na operação, não ocupantes do Planalto." },
      { id: "ambulancia", type: "company", tag: "Bem", x: 438, y: 20, w: 250, h: 140, title: "Ambulância superfaturada", text: "Preço acima do de mercado, às vezes veículo incompleto.", detail: "O sobrepreço era a fonte da propina. Em alguns municípios o veículo chegava; em outros, a nota saía na frente da entrega. O número de cerca de R$ 110 milhões é estimativa da investigação repercutida pela imprensa, não uma soma de todas as sentenças." },
      { id: "emenda", type: "politics", tag: "Ato oficial", x: 438, y: 230, w: 250, h: 140, title: "Emenda parlamentar", text: "O gabinete indicava a verba e, na prática, o vendedor.", detail: "A emenda individual dava aparência legal ao repasse. O crime descrito é o ajuste prévio com o fornecedor e o pagamento de volta, não a existência da emenda em si." },
      { id: "pref", type: "public", tag: "Quem assinava", x: 856, y: 400, w: 250, h: 130, title: "Prefeituras", text: "Municípios pequenos compravam com a verba federal carimbada.", detail: "Prefeitos muitas vezes tinham pouca escolha: ou compravam como a emenda determinava ou perdiam o recurso. Alguns foram investigados por aderir ao ajuste; outros foram tratados como ponta fraca." },
      { id: "propina", type: "launder", tag: "Volta", x: 856, y: 140, w: 240, h: 140, title: "Percentual de propina", text: "Comissão ao parlamentar e ao assessor que redigia a emenda.", detail: "A PF descreveu pagamentos em dinheiro e por intermediários a assessores que serviam de ponte. Assessoria não isenta o parlamentar quando fica provado que ele pediu ou recebeu." },
      { id: "partidos", type: "politics", tag: "Quem foi citado", x: 1274, y: 40, w: 270, h: 160, title: "Vários partidos", text: "PT, PMDB, PP, PL, PSDB e outros constam das listas da época.", detail: "A lista inicial da PF passou de 100 parlamentares. Estar na lista significava indício, não condenação. A CPI e o Conselho de Ética separaram casos. Tratar o escândalo como obra de uma legenda contradiz a própria lista." },
      { id: "pf", type: "outcome", tag: "Desfecho", x: 1712, y: 180, w: 270, h: 170, title: "PF, 2006", text: "Prisão dos operadores. Cassações parciais. Lula fora da denúncia.", detail: "A operação atingiu base e oposição. Não há sentença contra Lula. Entre os parlamentares, o destino variou: cassação, absolvição (o juiz rejeitou a acusação) e prescrição (o prazo penal se esgotou antes de condenação definitiva).", source: { name: "Wikipedia — Escândalo dos sanguessugas", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_dos_sanguessugas" } },
    ],
    edges: [
      { from: "vedoin", to: "ambulancia", label: "vende" },
      { from: "vedoin", to: "emenda", label: "combina a emenda" },
      { from: "emenda", to: "pref", label: "verba carimbada" },
      { from: "ambulancia", to: "pref", label: "entrega com sobrepreço" },
      { from: "emenda", to: "propina", label: "percentual" },
      { from: "propina", to: "partidos", label: "assessor e parlamentar" },
      { from: "partidos", to: "pf", label: "lista de 2006" },
      { from: "vedoin", to: "pf", label: "prisões" }
    ]
  },
  {
    id: "rachadinha",
    short: "Rachadinhas",
    title: "Rachadinha — gabinete de Flávio Bolsonaro",
    years: "Alerj, anos 2000–2018 · desfecho processual em 2021–2022",
    summary: [
      "“Rachadinha” é o nome popular do desvio em que assessores de gabinete devolvem parte do salário pago pelo Estado. No caso mais documentado da família Bolsonaro, o Ministério Público do Rio acusou o então deputado estadual Flávio Bolsonaro de liderar um esquema no gabinete da Alerj, com Fabrício Queiroz centralizando o dinheiro.",
      "Não houve julgamento de mérito. O STJ anulou atos porque o juiz de primeira instância era incompetente. O MP-RJ pediu a extinção e o TJ-RJ rejeitou a denúncia em 2022. Rejeição e nulidade não são absolvição. Também não são condenação. Jair Bolsonaro, presidente em 2019–2022, não foi condenado por rachadinha."
    ],
    correction: "Os valores mais citados saem da acusação do MP-RJ: cerca de R$ 6 milhões em salários e ao menos R$ 2,7 milhões em dinheiro vivo. São números da denúncia, não de uma sentença. Em 2026 houve pedido para reabrir a apuração com outras provas. Até 26 de outubro de 2026 isso não é uma condenação nova.",
    narrative: [
      "O Estado pagava o salário de assessores nomeados pelo deputado.",
      "Segundo o MP, parte desse salário voltava em dinheiro ao grupo.",
      "Fabrício Queiroz, ex-assessor e ex-PM, foi apontado como quem recolhia e depositava.",
      "Depósitos e uma loja de chocolates da família aparecem na investigação como caminho do dinheiro.",
      "O processo contra Flávio morreu por nulidade de competência e rejeição da denúncia, sem o juiz dizer se o fato aconteceu."
    ],
    sources: [
      { name: "Gazeta de S. Paulo — síntese do desfecho de Flávio e do tríplex, 2026", url: "https://www.gazetasp.com.br/politica/lula-x-flavio-bolsonaro-e-seus-processos-na-justica-dois-candidatos-a-presidencia-zero-julgamento-de-merito/" },
      { name: "Wikipedia — Caso Queiroz", url: "https://pt.wikipedia.org/wiki/Caso_Queiroz" }
    ],
    nodes: [
      { id: "assessor", type: "public", tag: "Ponta", x: 30, y: 180, w: 240, h: 140, title: "Assessores nomeados", text: "Servidores do gabinete na Alerj.", detail: "A acusação diz que funcionários eram contratados com a condição de devolver parte do que recebiam. Quem devolveu de fato, e sob qual ameaça ou acordo, não foi decidido em sentença." },
      { id: "salario", type: "public", tag: "Dinheiro público", x: 438, y: 170, w: 240, h: 130, title: "Folha da Alerj", text: "O salário saía do orçamento do Legislativo fluminense.", detail: "A origem do dinheiro, se o esquema for verdadeiro, é a folha parlamentar, não um contrato de obra. Por isso o caso é diferente de cartel de empreiteira." },
      { id: "devolve", type: "launder", tag: "Ato descrito pelo MP", x: 846, y: 170, w: 240, h: 140, title: "Devolução em dinheiro", text: "Parte do salário voltava em espécie.", detail: "O MP-RJ falou em ao menos R$ 2,7 milhões movimentados em dinheiro vivo dentro de um total acusado de cerca de R$ 6 milhões. São cifras da acusação." },
      { id: "queiroz", type: "operator", tag: "Operador apontado", x: 1254, y: 150, w: 250, h: 160, title: "Fabrício Queiroz", text: "Ex-assessor. Centralizava, segundo o MP e relatórios do Coaf.", detail: "Queiroz teve prisão preventiva decretada e depois relaxada ao longo do caso. Relatórios de movimentação suspeita e depósitos em contas ligadas a ele formaram o núcleo da investigação. Ele negou organização criminosa. Não há, neste resumo, uma condenação definitiva a registrar." },
      { id: "loja", type: "launder", tag: "Caminho alegado", x: 1672, y: 20, w: 270, h: 140, title: "Depósitos e loja", text: "Contas e a chocolateira da família entraram no inquérito.", detail: "Investigadores trataram depósitos fracionados e a movimentação de uma loja de chocolates como possível camada para misturar o dinheiro. A defesa tratou os valores como empréstimos e negócios lícitos. Sem sentença de mérito, as duas versões continuam como versão." },
      { id: "flavio", type: "alleged", tag: "Acusado", x: 1672, y: 240, w: 270, h: 160, title: "Flávio Bolsonaro", text: "Deputado estadual à época. Denúncia não recebida.", detail: "O MP o acusou de chefiar o esquema. Em 2021 o STJ anulou provas e atos da primeira instância: o juízo era incompetente, porque Flávio já tinha foro de senador, e a quebra de sigilo foi invalidada. Em maio de 2022 o TJ-RJ rejeitou a denúncia, sem julgar o fato. Em 2026 houve pedido de desarquivamento.", source: { name: "Wikipedia — Caso Queiroz", url: "https://pt.wikipedia.org/wiki/Caso_Queiroz" } },
      { id: "status", type: "outcome", tag: "Status em 2026", x: 2110, y: 240, w: 270, h: 170, title: "Sem mérito", text: "Nem condenação nem absolvição. Jair não foi condenado por isso.", detail: "Sem mérito: o STJ anulou a prova por incompetência do juízo e por quebra de sigilo inválida, e o TJ-RJ rejeitou a denúncia em 2022. Isso não é absolvição nem condenação. Jair Bolsonaro não foi condenado por rachadinha. A pena dele no STF, em 2025, é a da trama golpista.", source: { name: "Wikipedia — Caso Queiroz", url: "https://pt.wikipedia.org/wiki/Caso_Queiroz" } },
    ],
    edges: [
      { from: "assessor", to: "salario", label: "nomeação" },
      { from: "salario", to: "devolve", label: "parte do salário" },
      { from: "devolve", to: "queiroz", label: "recolhe" },
      { from: "queiroz", to: "loja", label: "depósitos" },
      { from: "queiroz", to: "flavio", label: "acusação do MP", dashed: true },
      { from: "flavio", to: "status", label: "denúncia rejeitada" },
      { from: "loja", to: "status", label: "prova anulada" }
    ]
  },
  {
    id: "jbs",
    short: "JBS e a mala",
    title: "JBS — gravação e mala de R$ 500 mil",
    years: "2017 · desfecho contra Temer mantido em 2024",
    summary: [
      "Em maio de 2017, executivos da J&F, controladora da JBS, entregaram à PGR uma delação com uma gravação de Michel Temer e o registro em vídeo de uma mala. Ricardo Saud, da J&F, entregou R$ 500 mil a Rodrigo Rocha Loures, então assessor de Temer. O vídeo de Loures com a mala é fato documentado.",
      "A acusação dizia que o dinheiro era propina pedida por Temer, ligada ao silêncio de Eduardo Cunha e a favores do governo. Temer chegou a ser denunciado. A Câmara barrou o andamento de acusações enquanto ele era presidente. Depois, o TRF-1 trancou a ação penal por falta de provas, o STJ manteve e, em maio de 2024, o ministro Edson Fachin recusou o recurso do MPF. Não houve condenação."
    ],
    correction: "Separar as camadas evita o erro mais comum: a mala existiu; o vínculo jurídico com Temer não foi provado. Falta de justa causa encerra o processo sem examinar o mérito até o fim. Não é a mesma coisa que uma sentença escrita “absolvo porque o fato não ocorreu”, embora o efeito prático seja não haver pena.",
    narrative: [
      "A J&F negociou delação e gravou conversa com o presidente.",
      "Ricardo Saud entregou uma mala com R$ 500 mil.",
      "Rocha Loures foi filmado recebendo e saindo com a mala. Esse trecho é imagem, não inferência.",
      "O passo seguinte — a mala seria de Temer — é a acusação. O Judiciário entendeu que a prova não sustentava a ação penal contra ele.",
      "Outros casos de Temer ligados à Lava Jato (Angra 3, “quadrilhão do MDB”) também terminaram sem condenação vigente."
    ],
    sources: [
      { name: "G1 — Fachin mantém o trancamento, maio de 2024", url: "https://g1.globo.com/politica/noticia/2024/05/08/fachin-mantem-encerrada-investigacao-de-temer-no-caso-da-mala-de-r-500-mil.ghtml" },
      { name: "UOL — processo da mala segue encerrado", url: "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2024/05/08/homem-da-mala-fachin-mantem-decisao-que-trancou-processo-contra-temer.htm" },
      { name: "Wikipedia — Joesley Batista", url: "https://pt.wikipedia.org/wiki/Joesley_Batista" }
    ],
    nodes: [
      { id: "jf", type: "company", tag: "Quem pagava", x: 30, y: 170, w: 230, h: 140, title: "J&F / JBS", text: "Delação de Joesley Batista e Ricardo Saud.", detail: "A delação premiada é prova produzida por quem recebe benefício penal. Serve para investigar. Não substitui a sentença. Os delatores também foram processados pelos próprios crimes que confessaram." },
      { id: "audio", type: "alleged", tag: "Gravação", x: 428, y: 20, w: 250, h: 140, title: "Conversa com Temer", text: "Áudio de maio de 2017. O sentido da fala foi disputado.", detail: "Temer foi gravado no Jaburu. A acusação ouviu um aval a pagamento. A defesa ouviu uma conversa ambígua, sem pedido explícito de propina. O tribunal que trancou o processo não adotou a leitura da acusação como justa causa." },
      { id: "saud", type: "operator", tag: "Entrega", x: 428, y: 250, w: 250, h: 130, title: "Ricardo Saud", text: "Executivo da J&F que levou o dinheiro.", detail: "Saud é quem aparece na entrega. O valor de R$ 500 mil está no inquérito e no vídeo. É uma parcela, apresentada pela acusação como amostra de um acerto maior, não como a soma de tudo o que a JBS pagou na política brasileira ao longo dos anos." },
      { id: "mala", type: "launder", tag: "Espécie", x: 846, y: 210, w: 240, h: 140, title: "Mala com R$ 500 mil", text: "Dinheiro vivo. Sem contrato fictício nesse ato.", detail: "Diferente da Lava Jato da Petrobras, aqui a lavagem mal começou: a entrega foi em espécie e foi filmada pela investigação. Não houve tempo, nesse episódio, de converter o valor em doação eleitoral." },
      { id: "loures", type: "politics", tag: "Documentado", x: 1254, y: 20, w: 270, h: 150, title: "Rodrigo Rocha Loures", text: "Assessor filmado com a mala.", detail: "Loures, deputado licenciado e assessor, foi o receptor visível. Ele respondeu a processo próprio. O vídeo prova a posse da mala por ele. Não prova, por si, quem seria o destinatário final." },
      { id: "temer", type: "alleged", tag: "Acusação", x: 1692, y: 180, w: 270, h: 150, title: "Michel Temer", text: "Duas denúncias barradas na Câmara.", detail: "A PGR denunciou Temer por corrupção passiva. A Câmara rejeitou autorizar o processo por 263 a 227 em agosto de 2017, e uma segunda denúncia, de organização criminosa e obstrução, por 251 a 233 em outubro. Sem dois terços, o STF não processa o presidente em exercício. Depois do mandato, o TRF-1 trancou a ação da mala por falta de prova de que o dinheiro chegou a ele.", source: { name: "Câmara — primeira denúncia, 263 a 227", url: "https://www.camara.leg.br/noticias/519587-camara-nega-autorizacao-para-processo-contra-temer-no-supremo" } },
      { id: "fim", type: "outcome", tag: "Status", x: 2130, y: 180, w: 300, h: 150, title: "Sem condenação", text: "Trancado por falta de justa causa. Sem pena.", detail: "Trancado por falta de justa causa: o TRF-1 entendeu que não havia prova ligando a mala a Temer. Isso não rejulga o vídeo nem declara que a entrega não existiu. Em 2024 Fachin não admitiu o recurso do MPF porque o recurso extraordinário não reexamina prova. Sem condenação.", source: { name: "G1 — Fachin mantém o encerramento em 2024", url: "https://g1.globo.com/politica/noticia/2024/05/08/fachin-mantem-encerrada-investigacao-de-temer-no-caso-da-mala-de-r-500-mil.ghtml" } },
    ],
    edges: [
      { from: "jf", to: "audio", label: "grava" },
      { from: "jf", to: "saud", label: "delator entrega" },
      { from: "saud", to: "mala", label: "R$ 500 mil" },
      { from: "mala", to: "loures", label: "vídeo" },
      { from: "loures", to: "temer", label: "elo alegado", dashed: true },
      { from: "audio", to: "temer", label: "interpretação", dashed: true },
      { from: "temer", to: "fim", label: "falta de prova" }
    ]
  },
  {
    id: "inss",
    short: "Descontos do INSS",
    title: "Descontos associativos no INSS",
    years: "Descontos de 2019 a 2024 · Operação Sem Desconto em 2025",
    summary: [
      "Associações tinham convênio para descontar uma mensalidade direto na aposentadoria ou pensão. A Controladoria-Geral da União e a Polícia Federal encontraram um salto desses descontos e uma amostra em que 97,6% dos beneficiários ouvidos disseram que não tinham autorizado.",
      "O MPF fala em R$ 6,3 bilhões descontados entre 2019 e 2024 em favor de entidades investigadas. Esse número é o total debitado, não uma sentença que diga quanto foi fraude. O grosso do aumento ocorreu em 2023 e 2024, já no terceiro governo Lula; os convênios e um primeiro aumento vêm de 2022, ainda com Bolsonaro. Até outubro de 2026 não há denúncia contra nenhum dos dois presidentes nas peças públicas usadas aqui."
    ],
    narrative: [
      "Uma associação firmava convênio com o INSS para descontar mensalidade em folha.",
      "Servidores e sistemas da autarquia habilitavam a entidade.",
      "O valor saía do benefício sem autorização confiável do aposentado, segundo a amostra da CGU.",
      "A Operação Sem Desconto, em abril de 2025, mirou entidades e servidores. Houve bloqueio de bens, inclusive um de cerca de R$ 4 bilhões de uma associação.",
      "O governo passou a devolver valores contestados: R$ 3,6 bilhões a 5,1 milhões de pessoas até outubro de 2026, ainda sem recuperar essa soma das entidades."
    ],
    sources: [
      { name: "MPF — R$ 6,3 bi e ao menos 23 investigações", url: "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/mpf-atua-de-forma-coordenada-em-investigacoes-que-apuram-descontos-irregulares-em-beneficios-do-inss" },
      { name: "BBC News Brasil — o que é fato na disputa Lula × Bolsonaro", url: "https://www.bbc.com/portuguese/articles/cy0xj17wwjlo" },
      { name: "Folha — devolução de R$ 3,6 bi até outubro de 2026", url: "https://www1.folha.uol.com.br/mercado/2026/10/inss-devolve-r-36-bilhoes-a-segurados-que-contestaram-fraude-e-16-milhao-esperam-valores.shtml" },
      { name: "O Globo — ressarcimento ainda não recuperado", url: "https://oglobo.globo.com/economia/noticia/2026/10/20/fraude-no-inss-governo-gasta-r-36-bilhoes-para-ressarcir-aposentados-e-ainda-nao-recuperou-recursos.ghtml" }
    ],
    nodes: [
      { id: "assoc", type: "company", tag: "Quem recebia", x: 30, y: 150, w: 250, h: 150, title: "Associações", text: "Entidades com convênio de desconto em folha.", detail: "São sindicatos e associações de aposentados, nem todas investigadas. A fraude descrita é o desconto de quem não se filiou. Dirigentes estão entre os alvos da operação. O nome de cada entidade está nos inquéritos, que seguem em vários estados." },
      { id: "servidor", type: "public", tag: "Dentro do INSS", x: 448, y: 20, w: 250, h: 140, title: "Servidores e sistemas", text: "O convênio dependia de gente e de senha dentro da autarquia.", detail: "O MPF apura corrupção passiva, inserção de dados falsos e violação de dever funcional. Houve afastamento de servidores. Isso ainda é investigação, com prisões que o STF reviu em 2026." },
      { id: "desconto", type: "launder", tag: "O ato", x: 876, y: 20, w: 250, h: 140, title: "Desconto sem autorização", text: "A mensalidade saía antes de o benefício cair na conta.", detail: "A CGU entrevistou 1.273 pessoas da amostra: 97,6% disseram que não autorizaram. É amostra, não universo. Indica fraude em massa; não transforma cada real descontado em crime já sentenciado." },
      { id: "valor", type: "company", tag: "Dimensão", x: 448, y: 280, w: 260, h: 150, title: "R$ 6,3 bilhões", text: "Soma descontada de 2019 a 2024 para entidades sob investigação.", detail: "A BBC, com o relatório da CGU, mostra a curva: média anual de R$ 524 milhões entre 2016 e 2021, R$ 706 milhões em 2022, R$ 1,3 bilhão em 2023 e projeção de R$ 2,6 bilhões em 2024. O salto é fato contábil. A parcela ilícita ainda é objeto dos processos." },
      { id: "aposentado", type: "public", tag: "Quem perdeu", x: 1294, y: 180, w: 260, h: 130, title: "Aposentados e pensionistas", text: "O dinheiro saiu do benefício, não de um contrato de obra.", detail: "Até outubro de 2026 o INSS tinha devolvido R$ 3,6 bilhões a 5,1 milhões de pessoas que contestaram. Outros 1,6 milhão ainda esperavam, segundo a Folha. A União não tinha recuperado das associações o que já pagou aos segurados." },
      { id: "op", type: "outcome", tag: "2025–2026", x: 1722, y: 30, w: 280, h: 160, title: "Operação Sem Desconto", text: "PF e MPF. Inquéritos em vários estados. Sem trânsito em julgado.", detail: "Em maio de 2025 o MPF já mapeava ao menos 23 investigações e um bloqueio de cerca de R$ 4 bilhões de uma associação. Em 2026 o ministro André Mendonça flexibilizou prisões. O caso segue aberto." },
      { id: "pres", type: "outcome", tag: "Presidentes", x: 2170, y: 170, w: 280, h: 170, title: "Nenhum dos dois denunciado", text: "Bolsonaro e Lula não são réus nas peças citadas.", detail: "O esquema atravessa os dois governos. A responsabilidade política pela fiscalização do INSS é debatida. Responsabilidade política não é denúncia criminal. Este site não atribui a nenhum dos presidentes um crime que o MPF não tenha acusado." }
    ],
    edges: [
      { from: "assoc", to: "servidor", label: "convênio" },
      { from: "servidor", to: "desconto", label: "habilita" },
      { from: "desconto", to: "aposentado", label: "sai do benefício" },
      { from: "assoc", to: "valor", label: "recebe o débito" },
      { from: "valor", to: "op", label: "PF em 2025" },
      { from: "aposentado", to: "op", label: "contestações" },
      { from: "op", to: "pres", label: "sem denúncia", dashed: true }
    ]
  },
  {
    id: "capemi",
    short: "Capemi",
    title: "Escândalo Capemi",
    years: "Governo Figueiredo · CPI no início dos anos 1980",
    summary: [
      "A Capemi era a caixa de pecúlio dos militares. A Agropecuária Capemi, ligada a esse fundo, recebeu contratos e usou recursos da previdência privada para cobrir rombos, com compras sem concorrência e pagamentos em duplicidade. Reportagens do Estadão em 1982–1983, premiadas com o Esso, estimaram um rombo de US$ 10 milhões aos cofres públicos.",
      "A CPI da Câmara confirmou irregularidades. O ministro da Agricultura Amaury Stábile e servidores foram acusados. Ninguém foi condenado. Figueiredo não foi réu. O caso ficou como exemplo de corrupção no fim da ditadura que a abertura tornou visível e o Judiciário não puniu."
    ],
    narrative: [
      "O fundo de pensão dos militares controlava a Agropecuária Capemi.",
      "A empresa entrou em contratos públicos, inclusive madeira ligada à hidrelétrica de Tucuruí, sem concorrência adequada.",
      "Dinheiro da previdência cobria prejuízo da empresa.",
      "A imprensa calculou um rombo de cerca de US$ 10 milhões.",
      "A CPI ouviu os acusados. Não houve condenação."
    ],
    sources: [
      { name: "Estadão — retrospectiva do escândalo Capemi", url: "https://www.estadao.com.br/150-anos/150-momentos/escandalo-capemi-revelou-esquema-de-corrupcao-que-abalou-o-governo-figueiredo/" },
      { name: "Wikipedia — Capemi", url: "https://pt.wikipedia.org/wiki/Capemi" }
    ],
    nodes: [
      { id: "fundo", type: "public", tag: "Origem", x: 30, y: 160, w: 240, h: 140, title: "Capemi", text: "Caixa de pecúlios, pensões e montepios dos militares.", detail: "Não era o Orçamento da União no sentido clássico. Era previdência de militares, misturada em seguida com contratos públicos. O prejuízo descrito atinge tanto o fundo quanto o Estado." },
      { id: "agro", type: "company", tag: "Empresa", x: 438, y: 20, w: 250, h: 140, title: "Agropecuária Capemi", text: "Cooperativa usada para negócios além da previdência.", detail: "A empresa quebrou. Antes disso, recebeu dinheiro do fundo para honrar compromissos próprios. O Estadão descreveu pagamentos em duplicidade e compras sem concorrência." },
      { id: "contrato", type: "company", tag: "Contrato", x: 856, y: 20, w: 250, h: 140, title: "Contratos sem disputa", text: "Inclusive extração de madeira em área de Tucuruí.", detail: "Relatos da época ligam a Capemi à exploração de madeira na área da hidrelétrica de Tucuruí, com intermediação de militares e do aparelho de informações. Essa camada é a mais opaca: houve CPI, não houve sentença." },
      { id: "rombo", type: "launder", tag: "Prejuízo", x: 1274, y: 150, w: 250, h: 140, title: "Cerca de US$ 10 milhões", text: "Estimativa da reportagem premiada em 1983.", detail: "US$ 10 milhões de 1983 não são o valor corrigido. O número serve como ordem de grandeza registrada à época. Não é cifra de acórdão, porque não houve condenação." },
      { id: "ministro", type: "politics", tag: "Acusados", x: 1692, y: 20, w: 270, h: 150, title: "Ministro e servidores", text: "Amaury Stábile foi acusado de prevaricação e corrupção.", detail: "A acusação alcançou o ministro da Agricultura e servidores, além de militares ligados à empresa. Figueiredo, presidente, não foi denunciado. Acusação de CPI, sem condenação, fica neste site como acusação." },
      { id: "cpi", type: "outcome", tag: "Desfecho", x: 2130, y: 160, w: 270, h: 150, title: "CPI sem pena", text: "Irregularidade confirmada em depoimento. Zero condenações.", detail: "O Estadão registra que os depoimentos na Câmara confirmaram as denúncias e que nenhum acusado foi condenado. É um desfecho de impunidade processual, não um laudo de inocência." }
    ],
    edges: [
      { from: "fundo", to: "agro", label: "cobre o rombo" },
      { from: "agro", to: "contrato", label: "sem concorrência" },
      { from: "contrato", to: "rombo", label: "duplicidade" },
      { from: "rombo", to: "ministro", label: "acusação" },
      { from: "ministro", to: "cpi", label: "sem condenação" },
      { from: "rombo", to: "cpi", label: "CPI confirma" }
    ]
  }
];
