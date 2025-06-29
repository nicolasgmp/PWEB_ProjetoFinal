import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import '../Styles/orderConfirmationPage.css';

const OrderConfirmationPage = () => {
  return (
    <div className="container confirmation-page">
      <FaCheckCircle className="confirmation-icon" />
      <h1>Pedido Confirmado!</h1>
      <p>Obrigado pela sua compra. Seu pedido foi recebido e está sendo processado.</p>
      <Link to="/" className="back-to-home-btn">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;