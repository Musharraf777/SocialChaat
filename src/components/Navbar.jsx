import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { items, openDrawer } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-text">kekka.</span>
      </div>
      <div className="nav-links">
        <a href="#" className="active">Shop All</a>
        <a href="#">Haircare</a>
        <a href="#">About Us</a>
      </div>
      <div className="nav-actions">
        <button className="cart-btn" onClick={openDrawer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
