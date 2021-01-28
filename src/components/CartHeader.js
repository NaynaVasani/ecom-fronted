import React from 'react'

import { useHistory } from 'react-router-dom';

const CartHeader = () => {
    const history = useHistory();
    const Login = () => {
        history.push({
            pathname: "/login",
        })
    }
    const SignUp = () => {
        history.push({
            pathname: "/signUp",
        })
    }
    return (
        <div>
            <div className="header_blacvk">
                <div className="container ">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header header1">
                            <a href="#" className="navbar-brand ">OTTIMO VINO</a>
                            <li className="cart-ca" onClick={() => {history.push({ pathname: "/cart" })}}><a href="#" style={{ fontSize: 25 }}><i className="icon-hed-fas  fa fa-shopping-cart" ></i></a></li>

                            {/* <div id="navbarCollapse" className ="collapse navbar-collapse d-flex"> */}
                            <ul className="nav navbar-nav navbar-right flex-row">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#shop-wines">DISCOVER</a></li>
                                <li><a href="#testimonial">TESTIMONIALS</a></li>
                                <li onClick={Login}><a  href="" className="ank_border" >LOG IN</a></li>
                                <li onClick={SignUp}><a href="" className="ank_border_bg">SIGN UP</a></li>
                            </ul>
                            {/* </div> */}
                        </div>

                    </nav>
                </div>
            </div>

        </div>
    )
}

export default CartHeader
