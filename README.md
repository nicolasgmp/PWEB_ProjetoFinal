# 🏀 Basket Kicks Store

Um protótipo funcional de e-commerce construído com React, originalmente focado na venda de tênis de basquete e evoluído para uma plataforma multi-categoria: tênis, camisetas (jerseys) e bolas de basquete. Projeto ideal para estudo de arquitetura de SPA, gerenciamento de estado com Context API e uso de rotas modernas no React.

---

## 🚀 Visão Geral

- **SPA Completa:** Navegação fluida entre páginas e categorias.
- **Carrinho Global:** Persistência do carrinho durante a sessão.
- **Checkout Simulado:** Fluxo completo com múltiplos métodos de pagamento.
- **Filtros Dinâmicos:** Filtragem de produtos e categorias.
- **Componentização:** Interface modular e reutilizável.

---

## 🧰 Tecnologias & Bibliotecas

- **[React 18+](https://react.dev/)**
- **[Vite](https://vitejs.dev/):** Build e dev server ultrarrápidos.
- **[React Router DOM 6+](https://reactrouter.com/)**
- **React Context API:** Gerenciamento global de estado (carrinho).
- **React Hooks:** (`useState`, `useEffect`, `useContext`, `useNavigate`)
- **[Prop-types](https://www.npmjs.com/package/prop-types):** Validação de props.
- **[React Icons](https://react-icons.github.io/react-icons/):** Ícones SVG modernos.

---

## 🗂️ Estrutura do Projeto

```
/basket-kicks-store
|-- /src
|   |-- /Components
|   |   |-- BallCard.jsx
|   |   |-- Footer.jsx    
|   |   |-- Header.jsx
|   |   |-- JerseyCard.jsx 
|   |   |-- ProductCard.jsx   
|   |   |-- ProductList.jsx
|   |-- /data   
|   |   |-- db.json
|   |-- /pages
|   |   |-- BallsPage.jsx
|   |   |-- CartPage.jsx
|   |   |-- CheckoutPage.jsx
|   |   |-- JerseysPage.jsx
|   |   |-- OrderConfirmationPage.jsx
|   |   |-- ShoesPage.jsx
|   |-- /Styles
|   |   |-- cartPage.css
|   |   |-- checkoutPage.css
|   |   |-- footer.css
|   |   |-- header.css
|   |   |-- homePage.css
|   |   |-- jerseyPage.css
|   |   |-- orderConfirmationPage.css
|   |   |-- productCard.css
|   |   |-- productList.css
|   |-- App.css
|   |-- App.jsx
|   |-- CartContext.jsx
|   |-- index.css
|   |-- main.jsx
|-- .gitignore
|-- package.json
|-- README.md
```

---

## 📑 Guia de Componentes & Funcionalidades

### 1. Core React & Roteamento

- `App.jsx`: Núcleo da aplicação, incluindo Provider do carrinho e definição das rotas.
- **Rotas principais:**
  - `/tenis` (página inicial)
  - `/camisetas`
  - `/bolas`
  - `/cart`, `/checkout`, `/order-confirmation`
  - Redirecionamento automático da raiz `/` para `/tenis`

### 2. Gerenciamento de Estado (Carrinho)

- **Contexto Global:**  
  `src/contexts/CartContext.jsx`
- **CartProvider:** Disponibiliza estado e funções do carrinho para toda a app.
- **useCart():** Hook customizado para acessar o contexto.
- **Lógica de variações:**  
  Produtos são diferenciados por variação (tamanho/cor) usando um cartId único (ex: tênis por numeração, jerseys por tamanho, bolas como "único").

### 3. Estrutura de Produtos

- Dados simulados em `src/data/db.json` (arrays: products, jerseys, balls).
- **Cards por categoria:**
  - `ProductCard.jsx` (tênis)
  - `JerseyCard.jsx` (camisetas)
  - `BallCard.jsx` (bolas)

### 4. Páginas Principais

- **`ShoesPage.jsx`:** Lista todos os tênis.
- **`JerseysPage.jsx`:** Lista camisetas com barra de filtros (Atuais, City Edition, Retrô, Vintage).
- **`BallsPage.jsx`:** Lista todas as bolas.
- **`CartPage.jsx`:** Resumo dos itens, remover/limpar carrinho, link para checkout.
- **`CheckoutPage.jsx`:** Formulário multi-seção, métodos de pagamento dinâmicos (Cartão/Pix), validação e mensagem de sucesso.
- **`OrderConfirmationPage.jsx`:** Confirmação de compra e limpeza do carrinho.

### 5. Estilização

- **index.css:** Estilos globais e variáveis CSS.
- **CSS Modular:** Cada página/componente com seu próprio arquivo, garantindo escopo e reutilização.
- **Consistência visual:** Estilos comuns reutilizados entre componentes de card.

---

## 🚦 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   [http://localhost:5173](http://localhost:5173) (ou endereço fornecido no terminal)

---

## 📄 Licença

[MIT](LICENSE)
