// Funções para compartilhamento do relatório de medidas de segurança contra incêndio

// Mostrar os botões de compartilhamento quando o relatório for gerado
function mostrarBotoesCompartilhamento() {
    const medidasContainer = document.getElementById('medidasContainer');
    const compartilhamentoContainer = document.getElementById('compartilhamentoContainer');
    
    // Verifica se há conteúdo no relatório
    if (medidasContainer.innerHTML.trim() !== '') {
        compartilhamentoContainer.style.display = 'block';
    } else {
        compartilhamentoContainer.style.display = 'none';
    }
}

// Modificar a função mostrarMedidas original para chamar a função de mostrar botões
const originalMostrarMedidas = window.mostrarMedidas;
window.mostrarMedidas = function() {
    // Chama a função original
    originalMostrarMedidas();
    
    // Mostra os botões de compartilhamento
    setTimeout(mostrarBotoesCompartilhamento, 100);
};

// Funções para manipulação dos modais
function abrirModalEmail() {
    document.getElementById('modalEmail').style.display = 'block';
    document.getElementById('emailDestinatario').focus();
}

function abrirModalWhatsApp() {
    document.getElementById('modalWhatsApp').style.display = 'block';
    document.getElementById('dddWhatsApp').focus();
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modais = document.getElementsByClassName('modal');
    for (let i = 0; i < modais.length; i++) {
        if (event.target === modais[i]) {
            modais[i].style.display = 'none';
        }
    }
};

// Função para enviar relatório por e-mail
function enviarEmail() {
    const emailDestinatario = document.getElementById('emailDestinatario').value.trim();
    
    // Validação básica de e-mail
    if (!emailDestinatario || !validarEmail(emailDestinatario)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }
    
    // Obter conteúdo do relatório
    const conteudoRelatorio = obterConteudoRelatorio();
    
    // Preparar o assunto e corpo do e-mail
    const assunto = encodeURIComponent('Relatório de Medidas de Segurança Contra Incêndio');
    const corpo = encodeURIComponent(conteudoRelatorio);
    
    // Abrir cliente de e-mail padrão
    window.location.href = `mailto:${emailDestinatario}?subject=${assunto}&body=${corpo}`;
    
    // Fechar o modal
    fecharModal('modalEmail');
}

// Função para enviar relatório por WhatsApp
function enviarWhatsApp() {
    const ddd = document.getElementById('dddWhatsApp').value.trim();
    const numero = document.getElementById('numeroWhatsApp').value.trim();
    
    // Validação básica
    if (!ddd || !numero || ddd.length !== 2 || numero.length < 8) {
        alert('Por favor, insira um DDD (2 dígitos) e número de telefone válidos.');
        return;
    }
    
    // Obter conteúdo do relatório
    const conteudoRelatorio = obterConteudoRelatorio();
    
    // Formatar número completo
    const numeroCompleto = `55${ddd}${numero}`;
    
    // Preparar a mensagem
    const mensagem = encodeURIComponent(conteudoRelatorio);
    
    // Abrir WhatsApp Web ou App
    window.open(`https://wa.me/${numeroCompleto}?text=${mensagem}`, '_blank');
    
    // Fechar o modal
    fecharModal('modalWhatsApp');
}

// Função para gerar PDF do relatório
function gerarPDF() {
    // Importar jsPDF da biblioteca carregada
    const { jsPDF } = window.jspdf;
    
    // Obter o elemento do relatório
    const elemento = document.getElementById('medidasContainer');
    
    // Verificar se há conteúdo
    if (elemento.innerHTML.trim() === '') {
        alert('Não há relatório para gerar PDF.');
        return;
    }
    
    // Criar instância do PDF
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Usar html2canvas para capturar o conteúdo
    html2canvas(elemento).then(canvas => {
        // Adicionar imagem do canvas ao PDF
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // largura da página A4 em mm, com margens
        const pageHeight = 297; // altura da página A4 em mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 10; // margem superior
        
        // Adicionar primeira página
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - 20; // 20 é a soma das margens superior e inferior
        
        // Adicionar páginas adicionais se necessário
        while (heightLeft > 0) {
            position = heightLeft - imgHeight + 10;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight - 20;
        }
        
        // Salvar o PDF
        doc.save('Relatório_Medidas_Segurança.pdf');
    });
}

// Função auxiliar para obter o conteúdo formatado do relatório
function obterConteudoRelatorio() {
    const medidasContainer = document.getElementById('medidasContainer');
    
    // Obter texto do relatório
    let texto = '';
    
    // Obter todos os elementos de texto do relatório
    const elementos = medidasContainer.querySelectorAll('h2, h3, p');
    
    elementos.forEach(elemento => {
        if (elemento.tagName === 'H2') {
            texto += elemento.textContent + '\n\n';
        } else if (elemento.tagName === 'H3') {
            texto += elemento.textContent + '\n';
        } else {
            texto += elemento.textContent + '\n';
        }
    });
    
    return texto;
}

// Função auxiliar para validar e-mail
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Inicializar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se já existe um relatório gerado
    mostrarBotoesCompartilhamento();
    
    // Adicionar eventos para tecla Enter nos campos de formulário
    document.getElementById('emailDestinatario').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enviarEmail();
        }
    });
    
    document.getElementById('numeroWhatsApp').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enviarWhatsApp();
        }
    });
    
    // Adicionar validação para aceitar apenas números no DDD e número de WhatsApp
    document.getElementById('dddWhatsApp').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    document.getElementById('numeroWhatsApp').addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
