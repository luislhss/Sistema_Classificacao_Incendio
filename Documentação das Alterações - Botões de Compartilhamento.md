# Documentação das Alterações - Botões de Compartilhamento

## Visão Geral
Esta documentação descreve as alterações realizadas no Sistema de Classificação de Incêndio para adicionar funcionalidades de compartilhamento do relatório de medidas de segurança. Foram implementados botões para compartilhar o relatório por e-mail, WhatsApp e para gerar um arquivo PDF.

## Arquivos Modificados

### 1. index.html
- Adicionadas bibliotecas externas:
  - Font Awesome (5.15.3) para ícones
  - jsPDF (2.5.1) para geração de PDF
  - html2canvas (1.4.1) para captura do conteúdo HTML para PDF
- Adicionado contêiner para botões de compartilhamento abaixo do relatório de medidas
- Implementados modais para entrada de dados (e-mail e WhatsApp)
- Adicionada referência ao novo arquivo JavaScript (compartilhamento.js)

### 2. styles.css
- Adicionados estilos para o contêiner de compartilhamento
- Implementados estilos para os botões de compartilhamento
- Criados estilos para os modais e formulários
- Adicionados estilos responsivos para dispositivos móveis

### 3. compartilhamento.js (Novo arquivo)
- Implementada função para mostrar botões de compartilhamento quando o relatório é gerado
- Criadas funções para manipulação dos modais (abrir/fechar)
- Implementada funcionalidade de compartilhamento por e-mail
- Implementada funcionalidade de compartilhamento por WhatsApp
- Implementada funcionalidade de geração de PDF
- Adicionadas funções auxiliares para validação e formatação de dados

## Detalhes das Implementações

### Botões de Compartilhamento
Os botões de compartilhamento são exibidos automaticamente quando o relatório de medidas é gerado. Eles estão localizados abaixo do relatório e incluem:
- Botão de E-mail com ícone de envelope
- Botão de WhatsApp com ícone do WhatsApp
- Botão de PDF com ícone de documento PDF

### Modal de E-mail
O modal de e-mail permite ao usuário inserir o endereço de e-mail do destinatário. Ao clicar em "Enviar", o sistema:
1. Valida o formato do e-mail
2. Formata o conteúdo do relatório
3. Abre o cliente de e-mail padrão do usuário com o relatório no corpo da mensagem

### Modal de WhatsApp
O modal de WhatsApp permite ao usuário inserir o DDD e o número de telefone. Ao clicar em "Enviar", o sistema:
1. Valida o formato do número
2. Formata o conteúdo do relatório
3. Abre o WhatsApp Web ou o aplicativo WhatsApp com o relatório pronto para envio

### Geração de PDF
Ao clicar no botão de PDF, o sistema:
1. Captura o conteúdo do relatório usando html2canvas
2. Cria um documento PDF usando jsPDF
3. Adiciona o conteúdo capturado ao PDF
4. Gera páginas adicionais se necessário
5. Faz o download do arquivo PDF com o nome "Relatório_Medidas_Segurança.pdf"

## Funcionalidades Adicionais

### Validação de Dados
- Validação de formato de e-mail
- Validação de DDD (2 dígitos) e número de telefone
- Aceitação apenas de caracteres numéricos nos campos de DDD e telefone

### Acessibilidade
- Suporte a navegação por teclado (tecla Enter nos campos de formulário)
- Foco automático nos campos de entrada ao abrir os modais

### Responsividade
- Interface adaptada para dispositivos móveis
- Modais redimensionados para telas menores
- Botões de compartilhamento reorganizados em coluna em telas pequenas

## Como Usar

1. Preencha os campos do formulário principal (Estado, Ocupação, Divisão, Altura)
2. Clique em "Mostrar Medidas" para gerar o relatório
3. Os botões de compartilhamento aparecerão automaticamente abaixo do relatório
4. Escolha uma das opções de compartilhamento:
   - E-mail: Insira o e-mail do destinatário e clique em "Enviar"
   - WhatsApp: Insira o DDD e número de telefone e clique em "Enviar"
   - PDF: O arquivo será gerado e baixado automaticamente

## Observações Técnicas

- As bibliotecas externas são carregadas via CDN, não sendo necessária instalação local
- O compartilhamento por e-mail utiliza o protocolo mailto:, que abre o cliente de e-mail padrão do usuário
- O compartilhamento por WhatsApp utiliza a API oficial do WhatsApp (wa.me)
- A geração de PDF pode levar alguns segundos dependendo do tamanho do relatório
