import React from 'react';
import { useCart } from '../context/CartContext';
import { mockGifts } from '../data/mockData';

const GiftSelector = () => {
  const { selectGift } = useCart();

  return (
    <div className="gift-selector">
      <div className="gift-header">
        <div className="gift-icon">🎁</div>
        <div className="gift-header-text">
          <h4>Congratulations!</h4>
          <p>You've unlocked a FREE gift. Choose one below:</p>
        </div>
      </div>
      <div className="gift-options">
        {mockGifts.map(gift => (
          <div key={gift.id} className="gift-option-card">
            <img src={gift.imageUrl} alt={gift.title} />
            <div className="gift-info">
              <h5>{gift.title}</h5>
              <span className="gift-value">Value: ₹{gift.defaultPrice}</span>
              <button 
                className="select-gift-btn"
                onClick={() => selectGift(gift)}
              >
                Claim Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftSelector;
