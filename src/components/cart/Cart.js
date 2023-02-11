import React, { useEffect } from 'react';
import "./cart.css";
import Footer from '../footer/Footer';
import Header from '../header/Header';

import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementItem, decrementItem, toggleCart } from '../../store/slices/cartSlice';

const Cart = () => {
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    }

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    }

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    }

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    }

    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        )
    }, [isCartOpen])

    const cartQuantity = cartItems?.length;

    // const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue )=>prevValue + currValue ,0)
    return (
        <>
            <Header />
            {cartQuantity === 0 ? (
                cartItems.map(item => {
                    const { id, img, title, price, quantity } = item;
                    const itemTotal = price * quantity;

                    return (
                        <div className="cart_items" key={id}>
                            <figure className="cart_items_img">
                                <img src={img} alt="product-img" />
                            </figure>

                            <div className="cart_items_info">
                                <h4>{title}</h4>
                                <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                            </div>

                            <div className="cart_items_quantity">
                                <span onClick={() => handleDecrement(id)}>&#8722;</span>
                                <b>{quantity}</b>
                                <span onClick={() => handleIncrement(id)}>&#43;</span>
                            </div>

                            <div
                                title="Remove Item"
                                className="cart_items_delete"
                                onClick={() => handleRemove(id)}
                            >
                                <span>&times;</span>
                            </div>
                        </div>
                    );
                })
            )
                :
                (
                    <main className="main page-404">
                        <div className="page-content pt-150 pb-150">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                                        <p className="mb-20"><img src="/static/assets/imgs/page/empty.png" alt="" className="hover-up" /></p>
                                        <h1 className="display-2 mb-30">Your Cart is Empty.</h1>
                                        <p className="font-lg text-grey-700 mb-30">
                                            Add something to make us happy :)<br />
                                            Start<a href="/shop/"> <span> shopping</span></a> or <a href="/login/"><span>login</span></a> to view products in your cart</p>
                                        <a className="btn btn-default submit-auto-width font-xs hover-up mt-30" href="/"><i className="fi-rs-home mr-5"></i> Back To Home Page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                )
            }

            <Footer />
        </>
    )
}

export default Cart