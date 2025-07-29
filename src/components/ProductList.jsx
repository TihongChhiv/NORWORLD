import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  const handleBuyNow = (item) => {
    window.alert(`Buying: ${item.name}`);
  };

  return (
    <div className="product-list">
      {Object.keys(products).map((category) => (
        <div key={category} id={category.toLowerCase().replace(" ", "")}>
          <h2>{category}</h2>
          <div className="items">
            {products[category].map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="btns">
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                  <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                </div>
                <div className="favorite">❤️</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;