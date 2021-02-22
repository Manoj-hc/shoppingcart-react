import React, { useState } from "react";
import AddQuantity from "./AddQuantity";
import RemoveQuantity from "./RemoveQuantity";

function CartItem({ item, add, remove }) {
  var [number, setNumber] = useState(0);

  var addToCart = () => {
    setNumber(++number);
    add(item.price);
  };

  var addItem = () => {
    setNumber(++number);
    add(item.price);
  };

  var removeItem = () => {
    if (number > 0) {
      setNumber(--number);
      remove(item.price);
    }
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <div className="image-wrapper">
          <img src={item.image_url} alt={item.product_name} />
          <div className="offer-text">
            <div className="offer-content">{item.offer_text}% OFF</div>
          </div>
        </div>
      </div>
      <div className="item-details">
        <div className="brand-name">{item.brand_name}</div>
        <div className="product-name">{item.product_name}</div>
        <div className="amount">{item.quantity}</div>
        <div className="item-mrp">MRP {item.mrp}</div>
        <div className="item-price">Rs {item.price}</div>
        <div className="actions">
          <AddQuantity handleClick={addToCart} />
          <RemoveQuantity
            quantity={number}
            addOne={addItem}
            removeOne={removeItem}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
