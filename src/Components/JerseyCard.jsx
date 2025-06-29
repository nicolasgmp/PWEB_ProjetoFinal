import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../CartContext';
import '../Styles/productCard.css'; 

const JerseyCard = ({ jersey }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(jersey.sizes[0]);

  const handleAddToCart = () => {
    addToCart(jersey, selectedSize);
    alert(`${jersey.name} (Tamanho ${selectedSize}) adicionada ao carrinho!`);
  };

  return (
    <div className="product-card">
      <img src={jersey.image} alt={jersey.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-brand">{jersey.team}</h3>
        <h2 className="product-name">{jersey.name}</h2>
        
        <div className="product-size-selector">
          <label htmlFor={`size-select-${jersey.id}`}>Tamanho:</label>
          <select 
            id={`size-select-${jersey.id}`}
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {jersey.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <p className="product-price">
          {jersey.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

JerseyCard.propTypes = {
  jersey: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default JerseyCard;