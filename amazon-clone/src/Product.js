import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Hooked</p>
        <p className="product__price">
          <small>$</small>
          <strong>13.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/81FU4zAWJvL._AC_UY218_.jpg"
        alt=""
      />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
