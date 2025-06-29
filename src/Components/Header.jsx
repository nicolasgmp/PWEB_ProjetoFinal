import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import '../Styles/header.css';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Basket Kicks
          <img src="https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/06/icone-modo-basquete-brawl-stars-dicas-basket.png" alt="logo" width={28}/>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/tenis">Tênis</Link></li>
            <li><Link to="/camisetas">Camisetas</Link></li>
            <li><Link to="/bolas">Bolas</Link></li>
            <li>
              <Link to="/cart" className="cart-link">
                Carrinho 
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;