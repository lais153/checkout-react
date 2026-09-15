# 🛍️ SPA Checkout Seguro — Sistema de Sacola de Compras

Esta aplicação consiste em uma Single Page Application (SPA) desenvolvida em **React** com **Vite**, projetada para gerenciar o fluxo de uma sacola de compras de moda e cosméticos até a etapa de validação de pagamento e auditoria de crédito em tempo real.

O projeto atende aos requisitos práticos exigidos para a avaliação do módulo de Front-End React.

---

## 🛠️ Stack Tecnológica

- **React 18** & **Vite** (Ambiente e renderização rápida)
- **React Router Dom** (Navegação dinâmica e controle de histórico de rotas)
- **React Hook Form** (Controle performático e captura de estados do formulário)
- **Zod** (Construção de schemas e validação rigorosa de dados de entrada)
- **JavaScript Nativo (ES6+)** (Sem utilização de TypeScript ou Context API)
- **Acessibilidade e Semântica** (Uso de tags nativas do HTML5 e tratamento visual de erros)

---

## 🔒 Fluxo de Telas e Regras de Negócio

1. **Sacola de Compras (`/`):** Exibição de um catálogo fixo de itens de moda (Bolsas, Perfumes e Batons) carregados de forma estática através de memória local. O sistema faz a redução e computação dos valores automaticamente, exibindo o subtotal formatado em Reais (R$).
2. **Formulário de Pagamento (`/pagamento`):** Estrutura de captura integrada com o **Zod Schema**, que valida os seguintes critérios antes do envio:
   - Nome impresso preenchido obrigatoriamente.
   - Numeração do cartão contendo exatamente 16 caracteres numéricos (higienizados de espaços).
   - Validade estruturada em `MM/AA` (com trava para meses superiores a 12).
   - Código de segurança (CVV) contendo estritamente 3 dígitos.
3. **Processamento Assíncrono:** Ao submeter, o botão é bloqueado exibindo `"Processando compra..."` durante um delay assíncrono simulado de 2 segundos através de Promises.
4. **Filtro de Fraude:** O sistema conta com um algoritmo baseado na estrutura de dados `Set`. Se o usuário digitar um cartão composto por todos os números idênticos (ex: `1111 1111 1111 1111`), o mecanismo detecta a anomalia e redireciona o fluxo para a rota `/falha` com a mensagem textual exata exigida: **`tentativa de golpe`**. Transações normais direcionam o usuário para a página de `/sucesso`.

---

## 🚀 Inicialização Local

1. Instale os pacotes e dependências listados no projeto:
   ```bash
   npm install
   ```

2. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
 
