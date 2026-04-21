import React from 'react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ title, products }) => {
  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
