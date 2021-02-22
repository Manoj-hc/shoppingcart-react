import React from "react";

function FixedFooter({ totalItems, totalQuantity, openModal }) {
  return (
    <div className="bottom-fixed-bar">
      <div className="container">
        <div className="totals">
          <div className="total-items">Qty {totalItems}</div>
          <div className="total-quantity">Total {totalQuantity}</div>
        </div>
        <div className="checkout-container">
          <button className="checkout" onClick={openModal}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default FixedFooter;
