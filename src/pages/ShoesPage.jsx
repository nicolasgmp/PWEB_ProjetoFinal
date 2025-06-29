import ProductList from '../Components/ProductList';
import '../Styles/homePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
        <section className="hero-section">
            <h1>A Quadra te Chama</h1>
            <p>Encontre o tênis perfeito para elevar o seu jogo.</p>
        </section>
        <main className="container">
            <h2 className="section-title">Nossos Lançamentos</h2>
            <ProductList />
        </main>
    </div>
  );
};

export default HomePage;