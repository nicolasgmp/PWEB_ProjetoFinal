import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShoesPage from './pages/ShoesPage'; 
import JerseysPage from './pages/JerseysPage';
import BallsPage from './pages/BallsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-wrapper">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate replace to="/tenis" />} />
              <Route path="/tenis" element={<ShoesPage />} />
              <Route path="/camisetas" element={<JerseysPage />} />
              <Route path="/bolas" element={<BallsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
