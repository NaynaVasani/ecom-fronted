import React, { useState, useEffect } from 'react'
import CartField from "./CartField";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from './Footer';
import Header from "./Header";
const Cart = (props) => {
    const [cart, setCart] = useState([]);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        getCartData();
        window.scroll(1,1);
    }, []);

    const hideLogin = () => {
        setLogin(false);
    }
    const getCartData = () => {
        const data = localStorage.getItem('cart');
        if (data) {
            setCart(JSON.parse(data));
        }
    };

    const handleRemove = (index) => {
        let data = cart;
        data.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(data));
        getCartData();
    };
    const updateCart = (event) => {
        event.preventDefault();
        if(localStorage.getItem('UserId') === null){
            setLogin(true);
        } else {
            if (JSON.parse(localStorage.getItem('cart')).length <= 0) {
                props.history.push('/');
            } else {
                let user_id = localStorage.getItem('UserId')
                axios.post('http://localhost:8000/cart/Create', {data: cart, user_id: user_id})
                    .then((response) => {
                        toast.success("Order successfully placed", {
                            position: toast.POSITION.TOP_CENTER
                        });

                    })
                    .catch((error) => {
                        toast.error("Enter valid Email and Password", {
                            position: toast.POSITION.TOP_CENTER
                        });
                    })
            }
        }

    }

    const handleQuantityUpdate = (index, count) => {
        let data = cart;
        data[index].quantity = count;
        localStorage.setItem('cart', JSON.stringify(data));
        getCartData();
    }

    return (
        <>
            <Header isLogin={isLogin} hideLogin={hideLogin} />
            <div className="shop-car">
                <div className="container">
                    <div id="cart" >
                        <div className="row">
                            <div className="cart-text">
                                <h2>YOUR SHOPPING CART</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" had-pro-col">
                    <div id="product">

                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xl-4">
                                <div className="pro_title">
                                    <h4>PRODUCT</h4>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title">
                                    <h4>PRICE</h4>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title">
                                    <h4>QUANTITY</h4>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title">
                                    <h4>TOTAL</h4>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title">
                                    <h4>REMOVE</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <>
                    {cart.length > 0 ?
                        (cart && cart.map((item, index) => {
                            return (
                                <CartField key={index} item={item} index={index} handleQuantityUpdate={handleQuantityUpdate} handleRemove={handleRemove} />
                            )
                        })) : (<p>You have not anything in your cart</p>)
                    }
                </>
                <hr></hr>
                <div id="sub-total">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-7"></div>
                                <div className="col-md-5">
                                    <div>
                                        <h3 className="totals_title">CART TOTALS</h3>
                                    </div>

                                    <table className="table_border">
                                        <tbody>
                                        <tr>
                                            <td className="totals_padd">Subtotal</td>
                                            <td className="li_col totals_padd">${(cart.map(item => {
                                                return (item.price * item.quantity)
                                            }).reduce((a, b) => a + b, 0)).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="totals_padd">Total</td>
                                            <td className="li_col totals_padd"> ${(cart.map(item => {
                                                return (item.price * item.quantity)
                                            }).reduce((a, b) => a + b, 0)).toFixed(2)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                            <div className="col-md-12 col-sm-12 col-xl-12">
                                <div className="button-4 mb-4 col-md-12 col-sm-12 col-xl-12 text-right">
                                    <a onClick={updateCart} className=" button-brow text-white border-0" href="#"> PROCEED TO CHECKOUT </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart
