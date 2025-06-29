import { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaBarcode } from 'react-icons/fa';
import '../Styles/checkoutPage.css'

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleFinalizePurchase = (e) => {
    e.preventDefault();
   
    alert('Compra finalizada com sucesso! (Simulação)');
    clearCart();
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container checkout-page">
        <h2>Seu carrinho está vazio. Não há nada para finalizar.</h2>
      </div>
    );
  }

  return (
    <div className="container checkout-page">
      <h2>Finalizar Compra</h2>
      <form className="checkout-form" onSubmit={handleFinalizePurchase}>
        <div className="form-section">
          <h3>1. Dados Pessoais</h3>
          <input type="text" placeholder="Nome Completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="CPF" required />
        </div>

        <div className="form-section">
          <h3>2. Endereço de Entrega</h3>
          <input type="text" placeholder="CEP" required />
          <input type="text" placeholder="Endereço, Nº" required />
          <input type="text" placeholder="Complemento (Opcional)" />
          <input type="text" placeholder="Bairro" required />
          <input type="text" placeholder="Cidade" required />
          <input type="text" placeholder="Estado" required />
        </div>

        <div className="form-section">
          <h3>3. Método de Pagamento</h3>
          <div className="payment-options">
            <button type="button" onClick={() => setPaymentMethod('credit-card')} className={paymentMethod === 'credit-card' ? 'active' : ''}>
              <FaCreditCard /> Cartão de Crédito
            </button>
            <button type="button" onClick={() => setPaymentMethod('pix')} className={paymentMethod === 'pix' ? 'active' : ''}>
              <FaBarcode /> Pix
            </button>
          </div>
          
          {paymentMethod === 'credit-card' && (
            <div className="payment-details">
              <input type="text" placeholder="Número do Cartão" required />
              <input type="text" placeholder="Nome no Cartão" required />
              <div className="card-flex">
                <input type="text" placeholder="Validade (MM/AA)" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </div>
          )}

          {paymentMethod === 'pix' && (
            <div className="payment-details pix-details">
              <p>Pague com Pix para aprovação imediata. Clique em "Finalizar Compra" para gerar o QR Code.</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_do_QR_Code.svg/1200px-Link_pra_pagina_do_QR_Code.svg.png" alt="Exemplo de QR Code" width="150" />
            </div>
          )}
        </div>

        <div className="checkout-summary">
          <h3>Resumo do Pedido</h3>
          <p>Total: <strong>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
          <button type="submit" className="finalize-btn">
            Finalizar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
