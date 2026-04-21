import React from 'react';
import { useCart } from '../context/CartContext';
import GiftSelector from './GiftSelector';

const CartDrawer = () => {
  const { 
    items, 
    giftItem, 
    cartTotal, 
    isEligibleForGift, 
    THRESHOLD, 
    isDrawerOpen, 
    closeDrawer, 
    updateQuantity, 
    removeFromCart,
    removeGift
  } = useCart();

  if (!isDrawerOpen) return null;

  const amountRemaining = Math.max(0, THRESHOLD - cartTotal);
  const progressPercentage = Math.min(100, (cartTotal / THRESHOLD) * 100);

  return (
    <div className="drawer-overlay" onClick={closeDrawer}>
      <div className="drawer-content" onClick={e => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={closeDrawer}>×</button>
        </div>

        <div className="drawer-body">
          {/* Progress Bar for Free Gift */}
          <div className="gift-progress-section">
            <div className="progress-text">
              {isEligibleForGift 
                ? "🎉 You are eligible for a FREE gift!" 
                : `Add ₹${amountRemaining.toFixed(2)} more to unlock a FREE gift!`}
            </div>
            <div className="progress-bar-container">
              <div 
                className={`progress-bar-fill ${isEligibleForGift ? 'success' : ''}`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="cart-items">
            {items.length === 0 ? (
              <div className="empty-cart">Your cart is empty</div>
            ) : (
              items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <div className="item-price">₹{item.price}</div>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>🗑</button>
                </div>
              ))
            )}

            {/* Gift Item rendering if selected */}
            {giftItem && (
              <div className="cart-item gift-item-row">
                <div className="gift-badge-corner">FREE</div>
                <img src={giftItem.imageUrl} alt={giftItem.title} />
                <div className="item-details">
                  <h4>{giftItem.title}</h4>
                  <div className="item-price free">₹0.00 <span className="original-price">₹{giftItem.defaultPrice}</span></div>
                  <div className="quantity-controls text-sm">
                    Qty: 1 (Max)
                  </div>
                </div>
                <button className="remove-item-btn" onClick={removeGift}>🗑</button>
              </div>
            )}
          </div>

          {/* Gift Selection UI */}
          {isEligibleForGift && !giftItem && (
            <GiftSelector />
          )}

        </div>

        <div className="drawer-footer">
          <div className="total-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={items.length === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
