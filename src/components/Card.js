import React from 'react'
import logo from '../assert/images/logo.png'
import CardHeader from './CardHeader'
import Footer from './Footer'
const Card = () => {
    return (
        <>
            <CardHeader />
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
                <div id="pro-1">

                    <div className="row prod-col-con">

                        <div className="col-md-4 col-sm-4 col-xl-4">
                            <div className="row">
                                <div className=" col-md-9 col-sm-9 col-xl-9">
                                    <img src={logo} />
                                </div>

                                <div className="col-md-3 col-sm-3 col-xl-3">
                                    <h3 className="steve">STEVE JOBS</h3>
                                    <h6 className="waiter">waiter lsacson</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_total">
                                <h4>30.05$</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_title1">
                                <h4>QUANTITY</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_total">
                                <h4>30.05$</h4>
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

                        <div className="col-md-4 col-sm-4 col-xl-4">
                            <div className="row">
                                <div className=" col-md-9 col-sm-9 col-xl-9">
                                    <img src={logo} />
                                </div>

                                <div className="col-md-3 col-sm-3 col-xl-3">
                                    <h3 className="steve">STEVE JOBS</h3>
                                    <h6 className="waiter">waiter lsacson</h6>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_total">
                                <h4>30.05$</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_title1">
                                <h4>QUANTITY</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="pro_total">
                                <h4>30.05$</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-2 col-xl-2">
                            <div className="fa-icon">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </div>
                        </div>

                    </div>
                </div>

                <hr></hr>
                <div id="sub-total">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12 col-xl-12 text-right">
                                <h3>SUBTOTAL :<span className="sub"> 60.05$</span></h3>
                                <h6>SHOPPING TEXT DISCOUNT WILL BE AT CHEAKOUT</h6>
                            </div>

                            <div className="col-md-12 col-sm-12 col-xl-12 text-right">

                                <div className="button-4  col-md-12 col-sm-12 col-xl-12 text-right">
                                    <div className="eff-4"></div>
                                    <a className="subbtn" href="#"> COUNTINUE SHOPPING </a>
                                </div>

                                <div className="button-4 col-md-12 col-sm-12 col-xl-12 text-right">
                                    <div className="eff-4"></div>
                                    <a className="subbtn" href="#"> UPDATE CART </a>
                                </div>

                                <div className="button-4  col-md-12 col-sm-12 col-xl-12 text-right">
                                    <div className="eff-4"></div>
                                    <a className="subbtn" href="#"> CHECK CART </a>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Card
