import React, { useState } from "react";

function Cart(props) {


    return (
        <li className="d-shop-cart">
            <a href="#">
                <i className="fas fa-shopping-cart" />
                <span className="cart-count">{props.data.length}</span>
            </a>
            <ul className="minicart">
                {props.data.map((elm) => {
                    return (
                        <li key={elm.name}>
                            <div className="cart-img">
                                <a href="#">
                                    <img src={elm.imageURL} alt="" />
                                </a>
                            </div>
                            <div className="cart-content">
                                <h3>
                                    <a href="#">{elm.name}</a>
                                </h3>
                                <div className="cart-price">
                                    <span className="new">$ {elm.priceMax}</span>
                                    <span>
                                        <del>${elm.price}</del>
                                    </span>
                                </div>
                            </div>
                            <div className="del-icon">
                                <a onClick={() => props.onRemoveCart(elm.id)}>
                                    <i className="far fa-trash-alt" />
                                </a>
                            </div>
                        </li>
                    );
                })}

                <li>
                    <div className="total-price">
                        <span className="f-left">Total:</span>
                        <span className="f-right">{
                            props.data.reduce((totalPrice, product) => {
                                return totalPrice  += product.price * product.quantity
                            }, 0)
                        }</span>
                    </div>
                </li>

                <li>
                    <div className="checkout-link">
                        <a href="#">Shopping Cart</a>
                        <a className="red-color" href="#">
                            Checkout
            </a>
                    </div>
                </li>
            </ul>
        </li>
    );
}

export default Cart;