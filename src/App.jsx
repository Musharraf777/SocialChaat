import React from 'react';
import Navbar from './components/Navbar';
import ProductCarousel from './components/ProductCarousel';
import CartDrawer from './components/CartDrawer';
import { mockProducts } from './data/mockData';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content" style={{ paddingTop: '2rem' }}>
        <ProductCarousel title="Shop All Stiks" products={mockProducts} />
      </div>

      <CartDrawer />
    </div>
  );
}

export default App;
