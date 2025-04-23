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

// Função para verificar se o dispositivo é móvel
function ehDispositivoMovel() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para enviar relatório por WhatsApp
function enviarWhatsApp() {
    // Verificar se é dispositivo móvel
    const ehMovel = ehDispositivoMovel();
    
    // Obter conteúdo do relatório
    const conteudoRelatorio = obterConteudoRelatorio();
    
    // Preparar a mensagem
    const mensagem = encodeURIComponent(conteudoRelatorio);
    
    if (ehMovel) {
        // Em dispositivos móveis, oferece opção de abrir o app diretamente
        const usarContatos = confirm('Deseja abrir o WhatsApp para selecionar um contato? Clique em "Cancelar" para digitar o número manualmente.');
        
        if (usarContatos) {
            // Abrir WhatsApp diretamente sem número específico
            window.location.href = `whatsapp://send?text=${mensagem}`;
            fecharModal('modalWhatsApp');
            return;
        }
    }
    
    // Fluxo padrão para digitar número manualmente
    const ddd = document.getElementById('dddWhatsApp').value.trim();
    const numero = document.getElementById('numeroWhatsApp').value.trim();
    
    // Validação básica
    if (!ddd || !numero || ddd.length !== 2 || numero.length < 8) {
        alert('Por favor, insira um DDD (2 dígitos) e número de telefone válidos.');
        return;
    }
    
    // Formatar número completo
    const numeroCompleto = `55${ddd}${numero}`;
    
    // Abrir WhatsApp Web ou App
    if (ehMovel) {
        window.location.href = `whatsapp://send?phone=${numeroCompleto}&text=${mensagem}`;
    } else {
        window.open(`https://wa.me/${numeroCompleto}?text=${mensagem}`, '_blank');
    }
    
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

// Função para enviar feedback
function enviarFeedback() {
    const mensagem = document.getElementById('mensagemFeedback').value.trim();
    
    // Validação básica
    if (!mensagem) {
        alert('Por favor, escreva uma mensagem antes de enviar.');
        return;
    }
    
    // Preparar o assunto e corpo do e-mail
    const assunto = encodeURIComponent('Feedback - Sistema de Classificação de Incêndio');
    const corpo = encodeURIComponent(mensagem);
    
    // Abrir cliente de e-mail com endereço do desenvolvedor
    window.location.href = `mailto:luislhss@gmail.com?subject=${assunto}&body=${corpo}`;
    
    // Fechar o modal
    fecharModal('modalFeedback');
    
    // Limpar o campo de mensagem
    document.getElementById('mensagemFeedback').value = '';
    
    // Mostrar confirmação
    alert('Obrigado pelo seu feedback!');
}

// Função para abrir modal de feedback
function abrirModalFeedback() {
    document.getElementById('modalFeedback').style.display = 'block';
    document.getElementById('mensagemFeedback').focus();
}

// Função para abrir modal de informações
function abrirModalInfo() {
    document.getElementById('modalInfo').style.display = 'block';
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
    
    // Adicionar evento para tecla Enter no campo de feedback
    if (document.getElementById('mensagemFeedback')) {
        document.getElementById('mensagemFeedback').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                enviarFeedback();
            }
        });
    }
    
    // Adicionar seção de feedback e informações se não existir
    if (!document.getElementById('feedbackInfoContainer')) {
        adicionarSecaoFeedbackInfo();
    }
});

// Função para adicionar seção de feedback e informações
function adicionarSecaoFeedbackInfo() {
    // Criar container para os botões de feedback e info
    const container = document.createElement('div');
    container.id = 'feedbackInfoContainer';
    container.className = 'feedback-info-container';
    
    // Adicionar HTML para os botões
    container.innerHTML = `
        <div class="botoes-feedback-info">
            <button type="button" class="btn-feedback" onclick="abrirModalFeedback()">
                <i class="fas fa-comment"></i> Enviar Feedback
            </button>
            <button type="button" class="btn-info" onclick="abrirModalInfo()">
                <i class="fas fa-info-circle"></i> Sobre o Sistema
            </button>
        </div>
    `;
    
    // Adicionar ao final do body
    document.body.appendChild(container);
    
    // Criar modal de feedback
    const modalFeedback = document.createElement('div');
    modalFeedback.id = 'modalFeedback';
    modalFeedback.className = 'modal';
    
    modalFeedback.innerHTML = `
        <div class="modal-content">
            <span class="fechar" onclick="fecharModal('modalFeedback')">&times;</span>
            <h3>Enviar Feedback</h3>
            <div class="form-group">
                <label for="mensagemFeedback">Sua mensagem:</label>
                <textarea id="mensagemFeedback" rows="5" placeholder="Digite sua mensagem, sugestão ou reporte de erro"></textarea>
                <p class="dica">Pressione Ctrl+Enter para enviar</p>
            </div>
            <div class="form-group">
                <button type="button" class="btn-enviar" onclick="enviarFeedback()">Enviar</button>
            </div>
        </div>
    `;
    
    // Criar modal de informações
    const modalInfo = document.createElement('div');
    modalInfo.id = 'modalInfo';
    modalInfo.className = 'modal';
    
    modalInfo.innerHTML = `
        <div class="modal-content">
            <span class="fechar" onclick="fecharModal('modalInfo')">&times;</span>
            <h3>Sobre o Sistema</h3>
            <div class="info-content">
                <p><strong>Sistema de Classificação de Segurança Contra Incêndio</strong></p>
                <p>Este sistema permite classificar edificações de acordo com o Decreto da Bahia 16.302 e determinar as medidas de segurança necessárias.</p>
                <p><strong>Desenvolvedor:</strong> Luiz Henrique Santos da Silva</p>
                <p><strong>Contato:</strong> <a href="mailto:luislhss@gmail.com">luislhss@gmail.com</a></p>
                <p><strong>Instagram:</strong> <a href="https://instagram.com/luislhss" target="_blank">@luislhss</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/luislhss/Sistema_Classificacao_Incendio" target="_blank">github.com/luislhss/Sistema_Classificacao_Incendio</a></p>
            </div>
        </div>
    `;
    
    // Adicionar modais ao body
    document.body.appendChild(modalFeedback);
    document.body.appendChild(modalInfo);
}
