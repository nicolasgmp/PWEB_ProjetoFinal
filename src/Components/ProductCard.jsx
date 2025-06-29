import { useState } from 'react'; 
import PropTypes from 'prop-types';
import { useCart } from '../CartContext'; 
import '../Styles/productCard.css'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione uma numeração.');
      return;
    }
    
    addToCart(product, selectedSize);
    alert(`${product.name} (Nº ${selectedSize}) adicionado ao carrinho!`);
  };
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <h2 className="product-name">{product.name}</h2>
        
        {/* Seletor de Numeração */}
        <div className="product-size-selector">
          <label htmlFor={`size-select-${product.id}`}>Numeração:</label>
          <select 
            id={`size-select-${product.id}`}
            value={selectedSize} 
            onChange={(e) => setSelectedSize(Number(e.target.value))}
          >
            {product.sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <p className="product-price">
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired, 
  }).isRequired,
};

export default ProductCard;