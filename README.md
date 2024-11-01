# Modelo Lógico de Dados: Gerenciamento de Contratos

Este projeto foi desenvolvido para gerenciar dados contratuais, incluindo informações detalhadas sobre cada contrato, órgão contratante, valores mensais e anuais, aditivos contratuais e informações de repactuação. O modelo lógico representa as tabelas e colunas do banco de dados para armazenar as informações contratuais.

### Tabelas e Colunas

- **Contrato**
  - `contrato_id`: INT, PK
  - `status`: CHAR
  - `data_inicio`: DATE
  - `data_fim`: DATE
  - `valor_mensal`: DECIMAL
  - `valor_anual`: DECIMAL
  - `info_repactuacao_2023`: VARCHAR
  - `info_repactuacao_2024`: VARCHAR
  - `info_reajuste_2024`: VARCHAR

- **Órgão**
  - `orgao_id`: INT, PK
  - `nome`: VARCHAR
  - `endereco`: TEXT
  - `cnpj`: VARCHAR

- **Valor**
  - `valor_id`: INT, PK
  - `contrato_id`: INT, FK
  - `valor_mensal_empregado`: DECIMAL
  - `valor_mensal_material`: DECIMAL
  - `valor_mensal_total`: DECIMAL
  - `valor_anual`: DECIMAL

- **Aditivo**
  - `aditivo_id`: INT, PK
  - `contrato_id`: INT, FK
  - `data`: DATE
  - `motivo`: VARCHAR
  - `quantidade_mo`: INT
  - `valor_mensal`: DECIMAL
  - `valor_anual`: DECIMAL
  - `assinado_tomador`: BOOLEAN

### Diagrama Lógico

As tabelas e relações no modelo lógico seguem a estrutura descrita acima para implementar a base de dados relacional.

---

## Estrutura de Arquivos

- `index.html`: Arquivo HTML para exibir o diagrama e as informações.
- `styles.css`: Estilos para layout e aparência do diagrama e dados.
- `scripts.js`: Script JavaScript para renderizar o diagrama e exibir dados.

---

## Instruções de Uso

1. Clone o repositório e abra `index.html` para visualizar o diagrama e os dados.
2. Modifique `scripts.js` para ajustar a estrutura de dados ou `styles.css` para alterar o estilo.

- Ou acesse o link: [Modelo Lógico de Dados: Gerenciamento de Contratos]()

---
