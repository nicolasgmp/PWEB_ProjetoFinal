import PropTypes from 'prop-types';
import { useCart } from '../CartContext';
import '../Styles/productCard.css'; 

const BallCard = ({ ball }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {

    addToCart(ball, 'único');
    alert(`${ball.name} adicionada ao carrinho!`);
  };

  return (
    <div className="product-card">
      <img src={ball.image} alt={ball.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-brand">{ball.brand}</h3>
        <h2 className="product-name">{ball.name}</h2>
        <p className="product-price">
          {ball.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

BallCard.propTypes = {
  ball: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BallCard;