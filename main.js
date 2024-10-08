
var medidas_tabela6A = [
    "Acesso de Viatura na Edificação",
    "Segurança Estrutural contra Incêndio",
    "Compartimentação Vertical",
    "Controle de Materiais de Acabamento",
    "Saídas de Emergência",
    "Brigada de Incêndio",
    "Iluminação de Emergência",
    "Alarme de Incêndio",
    "Sinalização de Emergência",
    "Extintores",
    "Hidrante e Mangotinhos"
];

var altura_tabela6A = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
];


var medidas_tabela6B = [
    "Acesso de Viatura na Edificação",
    "Segurança Estrutural contra Incêndio",
    "Compartimentação Horizontal (Áreas)",
    "Compartimentação Vertical",
    "Controle de Materiais de Acabamento",
    "Saídas de Emergência",
    "Plano de Emergência",
    "Brigada de Incêndio",
    "Iluminação de Emergência",
    "Detecção de Incêndio",
    "Alarme de Incêndio",
    "Sinalização de Emergência",
    "Extintores",
    "Hidrante e Mangotinhos",
    "Chuveiros Automáticos",
    "Controle de Fumaça"
];

var altura_tabela6B = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1]

];

var medidas_tabela6C = [
    "Acesso de Viatura na Edificação",
    "Segurança Estrutural contra Incêndio",
    "Compartimentação Horizontal (Áreas)",
    "Compartimentação Vertical",
    "Controle de Materiais de Acabamento",
    "Saídas de Emergência",
    "Plano de Emergência",
    "Brigada de Incêndio",
    "Iluminação de Emergência",
    "Detecção de Incêndio",
    "Alarme de Incêndio",
    "Sinalização de Emergência",
    "Extintores",
    "Hidrante e Mangotinhos",
    "Chuveiros Automáticos",
    "Controle de Fumaça"
];

var altura_tabela6C = [
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [0,	0,	0,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [1,	1,	1,	1,	1,	1],
    [0,	0,	0,	0,	1,	1],
    [0,	0,	0,	0,	0,	1]
];


// Função para atualizar a página
/*
    sempre que uma opção diferente for selecionada no campo de seleção de estado,
    a página será atualizada e a última opção selecionada será exibida novamente. 
*/

function limparCamposDivisaoAltura() {

    var alturaSelect = document.getElementById("altura");
    alturaSelect.selectedIndex = 0;

    var descricaoDivisaoContainer = document.getElementById("descricaoDivisaoContainer");
    descricaoDivisaoContainer.innerHTML = "";

    var medidasContainer = document.getElementById("medidasContainer");
    medidasContainer.innerHTML = "";
}

function atualizarPagina() {
// Armazena a última opção selecionada no armazenamento local
    var estadoSelecionado = document.getElementById("estado").value;
    localStorage.setItem("estadoSelecionado", estadoSelecionado);

    
// Reset "ocupação" e "altura" dropdowns para opção inicial
    var ocupacaoSelect = document.getElementById("ocupacao");
    ocupacaoSelect.innerHTML = '<option value="">Selecione a ocupação</option>';

   var alturaSelect = document.getElementById("altura");
    alturaSelect.selectedIndex = 0;
    limparCamposDivisaoAltura();

// Recarrega a página
    location.reload();
}
// Fim da função para atualizar página


// Adicionar um evento de mudança para o select de estado
var estadoSelect = document.getElementById("estado");
estadoSelect.addEventListener("change", atualizarPagina);

// Recuperar a última opção selecionada do armazenamento local
var estadoSelecionado = localStorage.getItem("estadoSelecionado");
if (estadoSelecionado) {
    estadoSelect.value = estadoSelecionado;
}
// Fim do evento de mudança para o select de estado


// Adicionar um evento de mudança para o select de ocupação
var ocupacaoSelect = document.getElementById("ocupacao");
ocupacaoSelect.addEventListener("change", atualizarDivisao);
// Fim do envento de mudança para o select de ocupação


//Função atualizarDivisão
function atualizarDivisao() {
    var ocupacaoSelecionada = document.getElementById("ocupacao").value;
    var divisaoSelect = document.getElementById("divisao");
    divisaoSelect.innerHTML = ""; // Limpa as opções anteriores

    var divisoes = {
        "Residencial": [
            { value: "", text: "" },
            { value: "A-1", text: "A-1 - Habitação unifamiliar" },
            { value: "A-2", text: "A-2 - Habitação multifamiliar" },
            { value: "A-3", text: "A-3 - Habitação coletiva" }
        ],
        "Serviço de Hospedagem": [
            { value: "", text: "" },
            { value: "B-1", text: "B-1 - Hotel" },
            { value: "B-2", text: "B-2 - Hotel-Residência" }
        ],
        "Comercial": [
            { value: "", text: "" },
            { value: "C-1", text: "C-1 - Comércio com baixa carga de incêndio" },
            { value: "C-2", text: "C-2 - Comércio com média e alta carga de incêndio" },
            { value: "C-3", text: "C-3 - Shopping centers" }
        ],
        "Serviço profissional": [
            { value: "", text: "" },
            { value: "D-1", text: "D-1 - Local para prestação de serviço profissional ou condução de negócios" },
            { value: "D-2", text: "D-2 - Agência bancária" },
            { value: "D-3", text: "D-3 - Serviço de reparação (exceto os classificados em G-4)" },
            { value: "D-4", text: "D-4 – Laboratório" }
        ],
        "Educacional e cultura física": [
            { value: "", text: "" },
            { value: "E-1", text: "E-1 - Escola em geral" },
            { value: "E-2", text: "E-2 - Escola especial" },
            { value: "E-3", text: "E-3 - Espaço para cultura física" },
            { value: "E-4", text: "E-4 - Centro de treinamento profissional" },
            { value: "E-5", text: "E-5 - Pré-escola" },
            { value: "E-6", text: "E-6 – Escola para portadores de deficiências" }
        ],
        "Local de Reunião de Público": [
            { value: "", text: "" },
            { value: "F-1", text: "F-1 - Local onde há objeto de valor inestimável" },
            { value: "F-2", text: "F-2 - Local religioso e velório" },
            { value: "F-3", text: "F-3 - Centro esportivo e de exibição" },
            { value: "F-4", text: "F-4 – Estação e terminal de passageiro" },
            { value: "F-5", text: "F-5 – Arte cênica e auditório" },
            { value: "F-6", text: "F-6 – Clubes sociais e diversão" },
            { value: "F-7", text: "F-7 – Construção provisória" },
            { value: "F-8", text: "F-8 – Local para refeição" },
            { value: "F-9", text: "F-9 – Recreação pública" },
            { value: "F-10", text: "F-10 – Exposição de objetos ou animais" }
        ],
        "Serviço automotivo e assemelhados": [
            { value: "", text: "" },
            { value: "G-1", text: "G-1 - Garagem sem acesso de público e sem abastecimento" },
            { value: "G-2", text: "G-2 - Garagem com acesso de público e sem abastecimento" },
            { value: "G-3", text: "G-3 - Local dotado de abastecimento de combustível" },
            { value: "G-4", text: "G-4 – Serviço de conservação, manutenção e reparos" },
            { value: "G-5", text: "G-5 – Hangares" }
        ],
        "Serviço de saúde e institucional": [
            { value: "", text: "" },
            { value: "H-1", text: "H-1 - Hospital veterinário e assemelhados" },
            { value: "H-2", text: "H-2 - Local onde pessoas requerem cuidados especiais por limitações físicas ou mentais" },
            { value: "H-3", text: "H-3 - Hospital e assemelhado" },
            { value: "H-4", text: "H-4 – Edificações das forças armadas e policiais" },
            { value: "H-5", text: "H-5 – Local onde a liberdade das pessoas sofre restrições" },
            { value: "H-6", text: "H-6 – Clínica e consultório médico e odontológico" }
        ],
        "Indústria": [
            { value: "", text: "" },
            { value: "I-1", text: "I-1 - Locais onde as atividades exercidas e os materiais utilizados apresentam baixo potencial de incêndio. Locais onde a carga de incêndio não chega a 300MJ/m2" },
            { value: "I-2", text: "I-2 - Locais onde as atividades exercidas e os materiais utilizados apresentam médio potencial de incêndio. Locais com carga de incêndio entre 300 a 1.200MJ/m2" },
            { value: "I-3", text: "I-3 - Locais onde há alto risco de incêndio. Locais com carga de incêndio superior a 1.200 MJ/m²" }
        ],
        "Depósito": [
            { value: "", text: "" },
            { value: "J-1", text: "J-1 - Depósitos de material incombustível" },
            { value: "J-2", text: "J-2 - Todo tipo de Depósito" },
            { value: "J-3", text: "J-3 - Todo tipo de Depósito" },
            { value: "J-4", text: "J-4 – Todo tipo de Depósito" }
        ],
        "Explosivo": [
            { value: "", text: "" },
            { value: "L-1", text: "L-1 - Comércio" },
            { value: "L-2", text: "L-2 - Indústria" },
            { value: "L-3", text: "L-3 - Depósito" }
        ],
        "Especial": [
            { value: "", text: "" },
            { value: "M-1", text: "M-1 - Túnel" },
            { value: "M-2", text: "M-2 - Líquido ou gás inflamáveis ou combustíveis" },
            { value: "M-3", text: "M-3 - Central de comunicação e energia" },
            { value: "M-4", text: "M-4 – Propriedade em transformação" },
            { value: "M-5", text: "M-5 – Silos" },
            { value: "M-6", text: "M-6 Terra selvagem" },
            { value: "M-7", text: "M-7 – Pátio de contêineres" }
        ]
    };

    var divisoesSelecionadas = divisoes[ocupacaoSelecionada] || [];

    for (var i = 0; i < divisoesSelecionadas.length; i++) {
        var option = document.createElement("option");
        option.value = divisoesSelecionadas[i].value;
        option.text = divisoesSelecionadas[i].text;
        divisaoSelect.appendChild(option);
    }

    limparCamposDivisaoAltura();
// Chame a função de atualizar descrição da divisão
    atualizarDescricaoDivisao();
    
}
//Fim da função atualizarDivisao


//Atualiza a descrição da divisão (quadro de visualização)
function atualizarDescricaoDivisao() {
    limparCamposDivisaoAltura();
    var divisaoSelecionada = document.getElementById("divisao").value;
    var descricaoDivisaoContainer = document.getElementById("descricaoDivisaoContainer");
    descricaoDivisaoContainer.innerHTML = "";
    var descricao = "";
    var exemplos = "";
    switch(divisaoSelecionada) {
        case "A-1":
            descricao = "Habitação unifamiliar";
            exemplos = "Casas térreas ou assobradadas (isoladas e não isoladas) e condomínios horizontais";
            break;
        case "A-2":
            descricao = "Habitação multifamiliar";
            exemplos = "Edifícios de apartamento em geral";
            break;
        case "A-3":
            descricao = "Habitação coletiva";
            exemplos = "Pensionatos, internatos, alojamentos, mosteiros, conventos, residências geriátricas. Capacidade máxima de 16 leitos";
            break;
        case "B-1":
            descricao = "Hotel e assemelhado";
            exemplos = "Hotéis, motéis, pensões, hospedarias, pousadas, albergues, casas de cômodos, divisão A-3 com mais de 16 leitos";
            break;
        case "B-2":
            descricao = "Hotel residencial";
            exemplos = "Hotéis e assemelhados com cozinha própria nos apartamentos (incluem-se apart-hotéis, flats, hotéis residenciais)";
            break;
        case "C-1":
            descricao = "Comércio com baixa carga de incêndio";
            exemplos = "Artigos de metal, louças, artigos hospitalares e Outros";
            break;
        case "C-2":
            descricao = "Comércio com média e alta carga de incêndio";
            exemplos = "Edifícios de lojas de departamentos, magazines, armarinhos, galerias comerciais, supermercados em geral, mercados e outros";
            break;
        case "C-3":
            descricao = "Shopping centers";
            exemplos = "Centro de compras em geral (shopping centers)";
            break;
        case "D-1":
            descricao = "Local para prestação de serviço profissional ou condução de negócios";
            exemplos = "Escritórios administrativos ou técnicos, instituições financeiras (que não estejam incluídas em D-2), repartições públicas, cabeleireiros, centros profissionais e assemelhados";
            break;
        case "D-2":
            descricao = "Agência bancária";
            exemplos = "Agências bancárias e assemelhados";
            break;
        case "D-3":
            descricao = "Serviço de reparação (exceto os classificados em G-4)";
            exemplos = "Lavanderias, assistência técnica, reparação e manutenção de aparelhos eletrodomésticos, chaveiros, pintura de letreiros e outros";
            break;
        case "D-4":
            descricao = "Laboratório";
            exemplos = "Laboratórios de análises clínicas sem internação, laboratórios químicos, fotográficos e assemelhados";
            break;
        case "E-1":
            descricao = "Escola em geral";
            exemplos = "Escolas de primeiro, segundo e terceiro graus, cursos supletivos e pré-universitário e assemelhados";
            break;
        case "E-2":
            descricao = "Escola especial";
            exemplos = "Escolas de artes e artesanato, de línguas, de cultura geral, de cultura estrangeira, escolas religiosas e assemelhados";
            break;
        case "E-3":
            descricao = "Espaço para cultura física";
            exemplos = "Locais de ensino e/ou práticas de artes marciais, natação, ginástica (artística, dança, musculação e outros) esportes coletivos (tênis, futebol e outros que não estejam incluídos em F-3), sauna, casas de fisioterapia e assemelhados. Sem arquibancadas.";
            break;
        case "E-4":
            descricao = "Centro de treinamento profissional";
            exemplos = "Escolas profissionais em geral";
            break;
        case "E-5":
            descricao = "Pré-escola";
            exemplos = "Creches, escolas maternais, jardins de Infância";
            break;
        case "E-6":
            descricao = "Escola para portadores de deficiências";
            exemplos = "Escolas para excepcionais, deficientes visuais e auditivos e assemelhados";
            break;
        case "F-1":
            descricao = "Local onde há objeto de valor inestimável";
            exemplos = "Museus, centro de documentos históricos, galerias de arte, bibliotecas e assemelhados";
            break;
        case "F-2":
            descricao = "Local religioso e velório";
            exemplos = "Igrejas, capelas, sinagogas, mesquitas, templos, cemitérios, crematórios, necrotérios, salas de funerais e assemelhados";
            break;
        case "F-3":
            descricao = "Centro esportivo e de exibição";
            exemplos = "Arenas em geral, estádios, ginásios, piscinas, rodeios, autódromos, sambódromos, pista de patinação e assemelhados. Todos com arquibancadas";
            break;
        case "F-4":
            descricao = "Estação e terminal de passageiro";
            exemplos = "Estações rodoferroviárias e marítimas, portos, metrô, aeroportos, heliponto, estações de transbordo em geral e assemelhados";
            break;
        case "F-5":
            descricao = "Arte cênica e auditório";
            exemplos = "Teatros em geral, cinemas, óperas, auditórios de estúdios de rádio e televisão, auditórios em geral e assemelhados";
            break;
        case "F-6":
            descricao = "Clubes sociais e diversão";
            exemplos = "Boates, clubes em geral, salões de baile, restaurantes dançantes, clubes sociais, bingo, bilhares, tiro ao alvo, boliche e assemelhados";
            break;
        case "F-7":
            descricao = "Construção provisória";
            exemplos = "Circos e assemelhados";
            break;
        case "F-8":
            descricao = "Local para refeição";
            exemplos = "Restaurantes, lanchonetes, bares, cafés, refeitórios, cantinas e assemelhados";
            break;
        case "F-9":
            descricao = "Recreação pública";
            exemplos = "Jardim zoológico, parques recreativos e assemelhados";
            break;
        case "F-10":
            descricao = "Exposição de objetos ou animais";
            exemplos = "Salões e salas para exposição de objetos ou animais. Edificações permanente";
            break;
        case "G-1":
            descricao = "Garagem sem acesso de público e sem abastecimento";
            exemplos = "Garagens automáticas, garagens com manobristas";
            break;
        case "G-2":
            descricao = "Garagem com acesso de público e sem abastecimento";
            exemplos = "Garagens coletivas sem automação, em geral, sem abastecimento (exceto veículos de carga e coletivos)";
            break;
        case "G-3":
            descricao = "Local dotado de abastecimento de combustível";
            exemplos = "Postos de abastecimento e serviço, garagens (exceto veículos de carga e coletivos)";
            break;
        case "G-4":
            descricao = "Serviço de conservação, manutenção e reparos";
            exemplos = "Oficinas de conserto de veículos, borracharia (sem recauchutagem). Oficinas e garagens de veículos de carga e coletivos, máquinas agrícolas e rodoviárias, retificadoras de motores";
            break;
        case "G-5":
            descricao = "Hangares";
            exemplos = "Abrigos para aeronaves com ou sem abastecimento";
            break;
        case "H-1":
            descricao = "Hospital veterinário e assemelhados";
            exemplos = "Hospitais, clínicas e consultórios veterinários e assemelhados (inclui-se alojamento com ou sem adestramento)";
            break;
        case "H-2":
            descricao = "Local onde pessoas requerem cuidados especiais por limitações físicas ou mentais";
            exemplos = "Asilos, orfanatos, abrigos geriátricos, hospitais psiquiátricos, reformatórios, tratamento de dependentes de drogas, álcool. E assemelhados. Todos sem celas";
            break;
        case "H-3":
            descricao = "Hospital e assemelhado";
            exemplos = "Hospitais, casa de saúde, prontos-socorros, clínicas com internação, ambulatórios e postos de atendimento de urgência, postos de saúde e puericultura e assemelhados com internação";
            break;
        case "H-4":
            descricao = "Edificações das forças armadas e policiais";
            exemplos = "Quartéis, delegacias, postos policiais e assemelhados";
            break;
        case "H-5":
            descricao = "Local onde a liberdade das pessoas sofre restrições";
            exemplos = "Hospitais psiquiátricos, manicômios, reformatórios, prisões em geral (casa de detenção, penitenciárias, presídios) e instituições assemelhadas. Todos com celas";
            break;
        case "H-6":
            descricao = "Clínica e consultório médico e odontológico";
            exemplos = "Clínicas médicas, consultórios em geral, unidades de hemodiálise, ambulatórios e assemelhados. Todos sem internação";
            break;
        case "I-1":
            descricao = "Locais onde as atividades exercidas e os materiais utilizados apresentam baixo potencial de incêndio. Locais onde a carga de incêndio não chega a 300MJ/m2";
            exemplos = "Atividades que utilizam pequenas quantidades de materiais combustíveis. Aço, aparelhos de rádio e som, armas, artigos de metal, gesso, esculturas de pedra, ferramentas, jóias, relógios, sabão, serralheria, suco de frutas, louças, máquinas";
            break;
        case "I-2":
            descricao = "Locais onde as atividades exercidas e os materiais utilizados apresentam médio potencial de incêndio. Locais com carga de incêndio entre 300 a 1.200MJ/m2";
            exemplos = "Artigos de vidro, automóveis, bebidas destiladas, instrumentos musicais, móveis, alimentos, marcenarias, fábricas de caixas";
            break;
        case "I-3":
            descricao = "Locais onde há alto risco de incêndio. Locais com carga de incêndio superior a 1.200 MJ/m²";
            exemplos = "Atividades industriais que envolvam inflamáveis, materiais oxidantes, ceras, espuma sintética, grãos, tintas, borracha, processamento de lixo";
            break;
        case "J-1":
            descricao = "Depósitos de material incombustível";
            exemplos = "Edificações sem processo industrial que armazenam tijolos, pedras, areias, cimentos, metais e outros materiais incombustíveis. Todos sem embalagem";
            break;
        case "J-2":
            descricao = "Todo tipo de Depósito";
            exemplos = "Depósitos com carga de incêndio até 300MJ/m2";
            break;
        case "J-3":
            descricao = "Todo tipo de Depósito";
            exemplos = "Depósitos com carga de incêndio entre 300 a 1.200MJ/m2";
            break;
        case "J-4":
            descricao = "Todo tipo de Depósito";
            exemplos = "Depósitos onde a carga de incêndio ultrapassa a 1.200MJ/m²";
            break;
        case "L-1":
            descricao = "Comércio";
            exemplos = "Comércio em geral de fogos de artifício e assemelhados";
            break;
        case "L-2":
            descricao = "Indústria";
            exemplos = "Indústria de material explosivo";
            break;
        case "L-3":
            descricao = "Depósito";
            exemplos = "Depósito de material explosivo";
            break;
        case "M-1":
            descricao = "Túnel";
            exemplos = "Túnel rodoferroviário e marítimo, destinados a transporte de passageiros ou cargas diversas";
            break;
        case "M-2":
            descricao = "Líquido ou gás inflamáveis ou combustíveis";
            exemplos = "Edificação destinada a produção, manipulação, armazenamento e distribuição de líquidos ou gases inflamáveis ou combustíveis";
            break;
        case "M-3":
            descricao = "Central de comunicação e energia";
            exemplos = "Central telefônica, centros de comunicação, centrais de transmissão ou de distribuição de energia e assemelhados";
            break;
        case "M-4":
            descricao = "Propriedade em transformação";
            exemplos = "Locais em construção ou demolição e assemelhados";
            break;
        case "M-5":
            descricao = "Silos";
            exemplos = "Armazéns de grãos e assemelhados";
            break;
        case "M-6":
            descricao = "Terra selvagem";
            exemplos = "Floresta, reserva ecológica, parque florestal e assemelhados";
            break;
        case "M-7":
            descricao = "Pátio de contêineres";
            exemplos = "Área aberta destinada a armazenamento de contêineres";
            break;
        default:
            descricao = "Descrição não disponível";
            exemplos = "Exemplos não disponíveis";
    }
    var descricaoElement = document.createElement("p");
    descricaoElement.textContent = "Descrição: " + descricao;
    descricaoDivisaoContainer.appendChild(descricaoElement);
    var exemplosElement = document.createElement("p");
    exemplosElement.textContent = "Exemplos: " + exemplos;
    descricaoDivisaoContainer.appendChild(exemplosElement);
}

// Adicione um evento "change" ao select da divisão 
    var divisaoSelect = document.getElementById("divisao");
    divisaoSelect.addEventListener("change", atualizarDescricaoDivisao);
//Fim do evento


//Função Mostrar medidas de segurança de acordo seleção
function mostrarMedidas() {
    estadoSelecionado = document.getElementById("estado").value;
    ocupacaoSelecionada = document.getElementById("ocupacao").value;
    divisaoSelecionada = document.getElementById("divisao").value;
    alturaSelecionada = document.getElementById("altura").value;
    var medidasParaMostrar = [];
    limparCamposDivisaoAltura();
    var descricaoDivisaoContainer = document.getElementById("descricaoDivisaoContainer");
    descricaoDivisaoContainer.innerHTML = "";

    var descricao = "";
    var exemplos = "";

    if (divisaoSelecionada === "A-1") {
        descricao = "Habitação unifamiliar";
        exemplos = "Casas térreas ou assobradadas (isoladas e não isoladas) e condomínios horizontais";
    } else if (divisaoSelecionada === "A-2") {
        descricao = "Habitação multifamiliar";
        exemplos = "Edifícios de apartamento em geral";
    } else if (divisaoSelecionada === "A-3") {
        descricao = "Habitação coletiva";
        exemplos = "Pensionatos, internatos, alojamentos, mosteiros, conventos, residências geriátricas. Capacidade máxima de 16 leitos";
    } else if (divisaoSelecionada === "B-1") {
        descricao = "Hotel e assemelhado";
        exemplos = "Hotéis, motéis, pensões, hospedarias, pousadas, albergues, casas de cômodos, divisão A-3 com mais de 16 leitos";
    } else if (divisaoSelecionada === "B-2") {
        descricao = "Hotel residencial";
        exemplos = "Hotéis e assemelhados com cozinha própria nos apartamentos (incluem-se apart-hotéis, flats, hotéis residenciais)";
    } else if (divisaoSelecionada === "C-1") {
        descricao = "Comércio com baixa carga de incêndio";
        exemplos = "Artigos de metal, louças, artigos hospitalares e Outros";
    } else if (divisaoSelecionada === "C-2") {
        descricao = "Comércio com média e alta carga de incêndio";
        exemplos = "Edifícios de lojas de departamentos, magazines, armarinhos, galerias comerciais, supermercados em geral, mercados e outros";
    } else if (divisaoSelecionada === "C-3") {
        descricao = "Shopping centers";
        exemplos = "Centro de compras em geral (shopping centers)";
    }
     
    var descricaoElement = document.createElement("p");
    descricaoElement.textContent = "Descrição: " + descricao;
     descricaoDivisaoContainer.appendChild(descricaoElement);

    var exemplosElement = document.createElement("p");
    exemplosElement.textContent = "Exemplos: " + exemplos;
    descricaoDivisaoContainer.appendChild(exemplosElement);


    if (estadoSelecionado === "Bahia" && ocupacaoSelecionada === "Residencial") {
        if (divisaoSelecionada === "A-1" || divisaoSelecionada === "A-2" || divisaoSelecionada === "A-3") {
            if (alturaSelecionada === "Térrea") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 0);
            } else if (alturaSelecionada === "H ≤ 6") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 1);
            } else if (alturaSelecionada === "6 < H ≤ 12") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 2);
            } else if (alturaSelecionada === "12 < H ≤ 23") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 3);
            } else if (alturaSelecionada === "23 < H ≤ 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 4);
            } else if (alturaSelecionada === "Acima de 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6A, 5);
            }
        }
    } else if (estadoSelecionado === "Bahia" && ocupacaoSelecionada === "Serviço de Hospedagem") {
        if (divisaoSelecionada === "B-1" || divisaoSelecionada === "B-2") {
            if (alturaSelecionada === "Térrea") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 0);
            } else if (alturaSelecionada === "H ≤ 6") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 1);
            } else if (alturaSelecionada === "6 < H ≤ 12") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 2);
            } else if (alturaSelecionada === "12 < H ≤ 23") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 3);
            } else if (alturaSelecionada === "23 < H ≤ 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 4);
            } else if (alturaSelecionada === "Acima de 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6B, 5);
            }
        }
    } else if (estadoSelecionado === "Bahia" && ocupacaoSelecionada === "Comercial") {
        if (divisaoSelecionada === "C-1" || divisaoSelecionada === "C-2" || divisaoSelecionada === "C-3") {
            if (alturaSelecionada === "Térrea") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 0);
            } else if (alturaSelecionada === "H ≤ 6") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 1);
            } else if (alturaSelecionada === "6 < H ≤ 12") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 2);
            } else if (alturaSelecionada === "12 < H ≤ 23") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 3);
            } else if (alturaSelecionada === "23 < H ≤ 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 4);
            } else if (alturaSelecionada === "Acima de 30") {
                medidasParaMostrar = getMedidasParaAltura(altura_tabela6C, 5);
            }
        }
    }


    //MEDIDAS
    var relatorioContainer = document.getElementById("medidasContainer");
    relatorioContainer.innerHTML = "";

    var titulo = document.createElement("h2");
    titulo.textContent = "Relatório de Medidas de Segurança Contra Incêndio";
    relatorioContainer.appendChild(titulo);

    var estadoInfo = document.createElement("p");
    estadoInfo.textContent = "Estado: " + estadoSelecionado;
    relatorioContainer.appendChild(estadoInfo);

    var ocupacaoInfo = document.createElement("p");
    ocupacaoInfo.textContent = "Ocupação: " + ocupacaoSelecionada;
    relatorioContainer.appendChild(ocupacaoInfo);

    var descricaoDivisaoInfo = document.createElement("p");
    descricaoDivisaoInfo.textContent = document.getElementById("descricaoDivisaoContainer").textContent;
    relatorioContainer.appendChild(descricaoDivisaoInfo);

    var alturaInfo = document.createElement("p");
    alturaInfo.textContent = "Altura: " + alturaSelecionada;
    relatorioContainer.appendChild(alturaInfo);

    var medidasList = document.createElement("ul");
    relatorioContainer.appendChild(medidasList);


    var titulo2 = document.createElement("h3");
    titulo2.textContent = "Medidas de segurança:";
    relatorioContainer.appendChild(titulo2);
    //..............

    for (var j = 0; j < medidasParaMostrar.length; j++) {
        var medida = medidasParaMostrar[j];
        var pElement = document.createElement("p");
        pElement.textContent = medida;
        medidasContainer.appendChild(pElement);
    }    
}

//Função gerar medidas
function getMedidasParaAltura(alturaMatriz, indiceAltura) {
    var medidasParaAltura = [];


if (divisaoSelecionada === "A-1" || divisaoSelecionada === "A-2" || divisaoSelecionada === "A-3" ) {
    for (var i = 0; i < medidas_tabela6A.length; i++) {
        if (alturaMatriz[i][indiceAltura] === 1) {
            medidasParaAltura.push(medidas_tabela6A[i]);
        }
    }
 } else if (divisaoSelecionada === "B-1" || divisaoSelecionada === "B-2" ) {
    for (var i = 0; i < medidas_tabela6B.length; i++) {
        if (alturaMatriz[i][indiceAltura] === 1) {
            medidasParaAltura.push(medidas_tabela6B[i]);
        }
    }
} else if (divisaoSelecionada === "C-1" || divisaoSelecionada === "C-2" || divisaoSelecionada === "C-3") {
    for (var i = 0; i < medidas_tabela6C.length; i++) {
        if (alturaMatriz[i][indiceAltura] === 1) {
            medidasParaAltura.push(medidas_tabela6C[i]);
        }
    }
}

return medidasParaAltura;

}
//Fim da função gerar medidas


