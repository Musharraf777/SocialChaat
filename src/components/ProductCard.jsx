import React, { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.warn("Autoplay naturally blocked or video missing for:", product.title, e);
      });
    }
  }, [product.videoUrl]);

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="product-card">
      <div className="media-container">

        <video 
          ref={videoRef}
          src={product.videoUrl} 
          className="product-video show"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          style={{ opacity: 1, zIndex: 1 }}
        />
        <div className="card-overlay"></div>
        
        <div className="product-details-inner">
          <div className="product-text">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{formattedPrice}</p>
          </div>
          <button 
            className="add-to-cart-round-btn"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
