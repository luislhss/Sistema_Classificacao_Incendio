# Documentação das Alterações no Sistema de Classificação de Incêndio

## Visão Geral
Este documento descreve as alterações realizadas no Sistema de Classificação de Incêndio baseado no Decreto 16.302 da Bahia. O sistema foi complementado com a implementação das tabelas 6D a 6M.5, permitindo a classificação de todas as ocupações e divisões previstas no decreto.

## Alterações Realizadas

### 1. Implementação de Novas Tabelas
Foram implementadas as seguintes tabelas do Decreto 16.302:

- **Tabela 6D**: Serviços Profissionais (Divisões D-1, D-2, D-3 e D-4)
- **Tabela 6E**: Educacional e Cultural (Divisões E-1, E-2, E-3, E-4, E-5 e E-6)
- **Tabela 6F.1**: Locais de Reunião de Público (Divisões F-1 e F-2)
- **Tabela 6F.2**: Locais de Reunião de Público (Divisões F-3, F-9 e F-4)
- **Tabela 6F.3**: Locais de Reunião de Público (Divisões F-5, F-6 e F-8)
- **Tabela 6F.4**: Locais de Reunião de Público (Divisões F-7 e F-10)
- **Tabela 6G.1**: Serviços Automotivos (Divisões G-1 e G-2)
- **Tabela 6G.2**: Serviços Automotivos (Divisões G-3 e G-4)
- **Tabela 6G.3**: Serviços Automotivos (Divisão G-5)
- **Tabela 6H.1**: Serviços de Saúde e Institucional (Divisões H-1, H-4 e H-6)
- **Tabela 6H.2**: Serviços de Saúde e Institucional (Divisões H-2, H-3 e H-5)
- **Tabela 6I**: Indústria (Divisões I-1, I-2 e I-3)
- **Tabela 6J**: Depósito (Divisões J-1, J-2, J-3 e J-4)
- **Tabela 6L**: Explosivos (Divisões L-1, L-2 e L-3)
- **Tabela 6M**: Especial (Divisões M-1, M-2, M-3, M-4, M-5, M-6 e M-7)

### 2. Estrutura de Dados
Para cada tabela, foram criados dois arrays:
- **medidas_tabela6X**: Contém as medidas de segurança contra incêndio para a tabela X
- **altura_tabela6X**: Matriz que relaciona cada medida com as diferentes alturas de edificação

### 3. Funções Auxiliares Adicionadas
- **getIndiceAltura()**: Converte a altura selecionada em um índice para uso nas matrizes
- **obterDescricaoDivisao()**: Retorna a descrição de uma divisão específica
- **obterExemplosDivisao()**: Retorna exemplos de uma divisão específica

### 4. Modificação da Função getMedidasParaAltura()
A função foi expandida para suportar todas as novas tabelas implementadas, permitindo a seleção correta das medidas de segurança com base na ocupação, divisão e altura selecionadas.

### 5. Modificação da Função mostrarMedidas()
A função foi atualizada para incluir a lógica de seleção das medidas de segurança para todas as ocupações e divisões implementadas.

## Como Usar o Sistema

1. Selecione o Estado (atualmente apenas Bahia está totalmente implementado)
2. Selecione a Ocupação (todas as ocupações do Decreto 16.302 estão disponíveis)
3. Selecione a Divisão (as divisões são filtradas com base na ocupação selecionada)
4. Selecione a Altura da edificação
5. Clique em "Mostrar Medidas" para visualizar as medidas de segurança contra incêndio aplicáveis

## Observações Importantes

- O sistema agora suporta todas as ocupações e divisões previstas no Decreto 16.302 da Bahia
- As medidas de segurança são exibidas de acordo com a altura da edificação
- A implementação segue fielmente as tabelas 6A a 6M.5 do decreto
- As descrições e exemplos de cada divisão são exibidos para facilitar a compreensão do usuário

## Próximos Passos

- Implementação de outros estados (São Paulo e Minas Gerais estão previstos)
- Melhorias na interface do usuário
- Adição de recursos para exportação do relatório de medidas
