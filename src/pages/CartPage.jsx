import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/cartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container cart-page cart-empty">
        <h2>Seu carrinho está vazio.</h2>
        <Link to="/" className="continue-shopping-btn">
          Continuar Comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2>Meu Carrinho</h2>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.cartId} className="cart-item"> {/* A key agora é o cartId */}
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              {/* Exibe a numeração do produto */}
              <p className="cart-item-spec">Numeração: {item.size}</p> 
              <p className="cart-item-spec">Quantidade: {item.quantity}</p>
              <p>Preço Unitário: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            {/* O botão de remover agora passa o cartId */}
            <button onClick={() => removeFromCart(item.cartId)} className="remove-item-btn">
              Remover
            </button>
          </div>
        ))}
      </div>
   <div className="cart-summary">
  <h3>Total: {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
  
  {/* Botão atualizado para ser um Link */}
  <Link to="/checkout" className="checkout-btn">
    Finalizar Compra
  </Link>

  <button onClick={clearCart} className="clear-cart-btn">
    Limpar Carrinho
  </button>
</div>
</div>
  );
};

export default CartPage;