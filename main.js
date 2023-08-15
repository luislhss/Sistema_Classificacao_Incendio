
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
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1]

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

    if (ocupacaoSelecionada === "Residencial") {
        var divisoesResidencial = [
            { value: "", text: "" }, // Opção vazia
            { value: "A-1", text: "A-1 - Habitação unifamiliar" },
            { value: "A-2", text: "A-2 - Habitação multifamiliar" },
            { value: "A-3", text: "A-3 - Habitação coletiva" }
        ];

        for (var i = 0; i < divisoesResidencial.length; i++) {
            var option = document.createElement("option");
            option.value = divisoesResidencial[i].value;
            option.text = divisoesResidencial[i].text;
            divisaoSelect.appendChild(option);
        }

    } else if (ocupacaoSelecionada === "Serviço de Hospedagem") {
        var divisoesHospedagem = [
            { value: "", text: "" }, // Opção vazia
            { value: "B-1", text: "B-1 - Hotel" },
            { value: "B-2", text: "B-2 - Hotel-Residência" }
        ];

        for (var i = 0; i < divisoesHospedagem.length; i++) {
            var option = document.createElement("option");
            option.value = divisoesHospedagem[i].value;
            option.text = divisoesHospedagem[i].text;
            divisaoSelect.appendChild(option);
        }
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

    if (divisaoSelecionada === "A-1") {
        descricao = "Habitação unifamiliar";
        exemplos = "Casas térreas ou assobradadas (isoladas e não isoladas) e condomínios horizontais";
    } else if (divisaoSelecionada === "A-2") {
        descricao = "Habitação multifamiliar";
        exemplos = "Edifícios de apartamento em geral";
    } else if (divisaoSelecionada === "A-3") {
        descricao = "Habitação coletiva";
        exemplos = "Pensionatos, internatos, alojamentos, mosteiros, conventos, residências geriátricas. Capacidade máxima de 16 leitos";
    } else if (divisaoSelecionada === "A-3") {
        descricao = "Habitação coletiva";
        exemplos = "Pensionatos, internatos, alojamentos, mosteiros, conventos, residências geriátricas. Capacidade máxima de 16 leitos";
    } else if (divisaoSelecionada === "B-1") {
        descricao = "Hotel e assemelhado";
        exemplos = "Hotéis, motéis, pensões, hospedarias, pousadas, albergues, casas de cômodos, divisão A-3 com mais de 16 leitos";
    } else if (divisaoSelecionada === "B-2") {
        descricao = "Hotel residencial";
        exemplos = "Hotéis e assemelhados com cozinha própria nos apartamentos (incluem-se apart-hotéis, flats, hotéis residenciais)";
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
    }

    if (estadoSelecionado === "Bahia" && ocupacaoSelecionada === "Serviço de Hospedagem") {
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
}

return medidasParaAltura;

}
//Fim da função gerar medidas


