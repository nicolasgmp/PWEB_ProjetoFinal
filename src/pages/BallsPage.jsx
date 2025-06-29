import { useState, useEffect } from 'react';
import BallCard from '../Components/BallCard';
import db from '../data/db.json';
import '../Styles/productList.css'; 

const BallsPage = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    
    setBalls(db.balls);
  }, []);

  return (
    <main className="container">
      <h2 className="section-title">Bolas de Basquete</h2>
      <div className="product-list">
        {balls.map((ball) => (
          <BallCard key={ball.id} ball={ball} />
        ))}
      </div>
    </main>
  );
};

export default BallsPage;