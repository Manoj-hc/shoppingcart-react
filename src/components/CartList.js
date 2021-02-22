import React from 'react';
import CartItem from "./CartItem";

function CartList({ products, total, totalAmount, setTotal, setTotalAmount }) {

    var renderItems = () =>
        products.map(item => {
            return (
                <CartItem
                    key={item.id}
                    item={item}
                    add={addToTotal}
                    remove={removeFromTotal}
                />
            );
        });

    var addToTotal = addAmount => {
        setTotal(++total);
        setTotalAmount((totalAmount = totalAmount + addAmount));
    };

    var removeFromTotal = removeAmount => {
        setTotal(--total);
        setTotalAmount((totalAmount = totalAmount - removeAmount));
    };

    return (
        <div className="items">
            <div className="container">{renderItems()}</div>
        </div>
    )
}

export default CartList;