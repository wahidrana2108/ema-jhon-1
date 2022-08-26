import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const productPrice = cart.reduce((total, prd) => total + prd.price,0);
    let shippingCost = 0;
    if(productPrice <= 0){
        shippingCost = 0;
    }
    else{
        if (productPrice < 35) {
            shippingCost = 2.99;
        }
        if(productPrice < 100){
            shippingCost = 1.99;
        }
        if(productPrice > 100){
            shippingCost = 0.99
        }
    }

    let tax = 0;
    tax = (productPrice * 0.15).toFixed(2);
    console.log(cart);

    let totalCost = 0;
    totalCost =  (productPrice + shippingCost + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {productPrice}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Vat + tax: {tax}</p>
            <p>Total Cost: {totalCost}</p>
        </div>
    );
};

export default Cart;