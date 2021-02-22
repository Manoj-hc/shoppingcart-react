import React, { useState, useEffect } from "react";
import FixedFooter from "./FixedFooter";
import Modal from "./Modal";
import successImg from "../images/success.png";
import Spinner from "./Spinner";
import CartList from "./CartList";

function ShoppingCart() {
  var [total, setTotal] = useState(0);
  var [totalAmount, setTotalAmount] = useState(0);
  var [show, setShow] = useState(false);
  var [products, setProducts] = useState([]);

  useEffect(() => {
    var URL = "ProductsList.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  var openModal = () => {
    setShow(true);
  };

  var closeModal = () => {
    setShow(false);
  };

  return (
    <div className="shopping-cart">
      {products.length ? (
        <>
          <CartList products={products} total={total} totalAmount={totalAmount} setTotal={setTotal} setTotalAmount={setTotalAmount} />
          <FixedFooter
            totalItems={total}
            totalQuantity={totalAmount}
            openModal={openModal}
          />
          <Modal show={show} closeModal={closeModal}>
            <img src={successImg} className="modal-image" alt="success" />
            <div className="modal-total">Total Price: {totalAmount}</div>
            <div>Transaction Successful</div>
          </Modal>
        </>
      ) : (
          <Spinner />
        )}
    </div>
  );
}

export default ShoppingCart;
