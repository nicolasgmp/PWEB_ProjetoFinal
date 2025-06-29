import { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import db from '../data/db.json';
import '../Styles/productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    setProducts(db.products);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;