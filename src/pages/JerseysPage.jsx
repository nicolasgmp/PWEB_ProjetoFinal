import { useState, useEffect } from 'react';
import JerseyCard from '../Components/JerseyCard';
import db from '../data/db.json';
import '../Components/ProductList'; 
import '../Styles/jerseyPage.css'; 

const JerseysPage = () => {
  const [jerseys, setJerseys] = useState([]);
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    let filteredJerseys = db.jerseys;
    if (filter !== 'todos') {
      filteredJerseys = db.jerseys.filter(j => j.category === filter);
    }
    setJerseys(filteredJerseys);
  }, [filter]);

  return (
    <main className="container">
      <h2 className="section-title">Nossas Camisetas</h2>
      
      <div className="filter-container">
        <button onClick={() => setFilter('todos')} className={filter === 'todos' ? 'active' : ''}>Todas</button>
        <button onClick={() => setFilter('atual')} className={filter === 'atual' ? 'active' : ''}>Atuais</button>
        <button onClick={() => setFilter('city-edition')} className={filter === 'city-edition' ? 'active' : ''}>City Edition</button>
        <button onClick={() => setFilter('retro')} className={filter === 'retro' ? 'active' : ''}>Retrô</button>
        <button onClick={() => setFilter('vintage')} className={filter === 'vintage' ? 'active' : ''}>Vintage</button>
      </div>

      <div className="product-list">
        {jerseys.map((jersey) => (
          <JerseyCard key={jersey.id} jersey={jersey} />
        ))}
      </div>
    </main>
  );
};
export default JerseysPage;