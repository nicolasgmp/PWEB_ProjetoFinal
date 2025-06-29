import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Basket Kicks. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;