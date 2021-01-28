import React, { useState } from 'react'
import Header from './Header'

import checkOut from '../assert/images/product image/Mask Group 10.png'
import Footer from './Footer'

const CheckOut = () => {
    const [counte, setcounte] = useState(1)
    const addValue = () => {
        setcounte(counte => counte + 1)
    }
    const minusValue = () => {
        counte > 1 && setcounte(counte => counte - 1)
    }
    const [counte1, setcounte1] = useState(1)
    const addValue1 = () => {
        setcounte1(counte1 => counte1 + 1)
    }
    const minusValue1 = () => {
        counte1 > 1 && setcounte1(counte1 => counte1 - 1)
    }

    return (
        <div>
            <Header />
            <section>
                <div className="container">
                    <div className=" had-pro-col">
                        <div id="product">
                            <div className="row">
                                <div className="col-md-6 col-sm-4 col-xl-4">
                                    <div className="pro_title">
                                        <h4>Product</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Price</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Quantity</h4>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-2 col-xl-2">
                                    <div className="pro_title">
                                        <h4>Subtotal</h4>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div id="pro-1">

                        <div className="row prod-col-con">
                            <div className="col-md-6 col-sm-4 col-xl-4">
                                <div className=" col-md-12 col-sm-9 col-xl-9">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <a href="" className="close">X</a>
                                        </div>
                                        <div className="col-md-3">
                                            <img src={checkOut} />
                                        </div>
                                        <div className="col-md-7"> <h3 className="car_title">TERRE SICILIANE RAMÍ</h3></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_total">
                                    <p>$ 90.05</p>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title1">
                                    <div className="num-block skin-2">
                                        <div className="num-in">
                                            <span className="minus dis" onClick={minusValue}></span>
                                            <input type="text" className="in-num" value={counte} readOnly="" />
                                            <span className="plus" onClick={addValue}></span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_total">
                                    <p>$ {90.05 * counte}</p>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="fa-icon">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="pro-1">
                        <div className="row prod-col-con">
                            <div className="col-md-6 col-sm-4 col-xl-4">
                                <div className=" col-md-12 col-sm-9 col-xl-9">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <a href="" className="close">X</a>
                                        </div>
                                        <div className="col-md-3">
                                            <img src={checkOut} />
                                        </div>
                                        <div className="col-md-7">
                                            <h3 className="car_title">VERDICCHIO DI MATELICAÍ</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_total">
                                    <p>$ 95.05</p>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_title1">
                                    <div className="num-block skin-2">
                                        <div className="num-in">
                                            <span className="minus dis" onClick={minusValue1}></span>
                                            <input type="text" className="in-num" value={counte1} readOnly="" />
                                            <span className="plus" onClick={addValue1}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="pro_total">
                                    <p>$ {95.05 * counte1}</p>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-2 col-xl-2">
                                <div className="fa-icon">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="hr_color" />
                    <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5">
                            <div>
                                <h3 className="totals_title">CART TOTALS</h3>
                            </div>

                            <table className="table_border">
                                <tr>
                                    <td className="totals_padd">Subtotal</td>
                                    <td className="li_col totals_padd">${(counte * 90.05) + (counte1 * 95.05)}</td>
                                </tr>
                                <tr>
                                    <td className="totals_padd">Total</td>
                                    <td className="li_col totals_padd"> ${(counte * 90.05) + (counte1 * 95.05)}</td>
                                </tr>
                            </table>
                            <a href="" className="product_chek">PROCEED TO CHECKOUT</a>
                        </div>

                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default CheckOut
