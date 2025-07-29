import React, { useState } from 'react';
import './App.css';
import products from './data/products';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : { [selectedCategory]: products[selectedCategory] };

  return (
    <div className="app">
      <header className="navbar">
        <h1> NorWorld Vintage</h1>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          🛒 Cart <span className="badge">{cartItems.length}</span>
        </div>
      </header>

      {/* Shared layout for both pages */}
      <div className="banner-section">
        <img className="banner" src="/images/Highlight.png" alt="Highlight" />
        <div className="category-dropdown">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="All">All</option>
            <option value="Top Items">Top Items</option>
            <option value="Bottom Items">Bottom Items</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
      </div>

      {/* Conditional page */}
      {showCart ? (
        <CartPage
          cartItems={cartItems}
          totalPrice={totalPrice}
          setCartItems={setCartItems}
        />
      ) : (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
