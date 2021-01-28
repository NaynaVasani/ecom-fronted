import React from 'react'
import '../assert/css/style.css'
import logo from '../assert/images/logo.png'

const CardHeader = () => {
    return (
        <>
            <div className="menu_full">
                <div id="mein-menu" className="container">
                    <nav className="navbar navbar-inverse">
                        <div id="navbarCollapse" className="collapse navbar-collapse d-flex">
                            <ul className="nav navbar-nav flex-row">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Our Method</a></li>
                            </ul>

                            <ul className="nav navbar-nav flex-row navbar-right">
                                <li><a href="#">Who we are</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand logo-w">
                                <img src={logo} alt="null" /></a>
                            <li className="cart-ca" style={{ fontSize: 25 }}>
                                <a href="#" >
                                    <i className="icon-hed-fas  fa fa-shopping-cart" >
                                    </i>
                                </a>
                            </li>
                            <li className="wishlist" style={{ fontSize: 25 }}><a href="#"><i className="icon-hed-fas fa fa-heart-o" ></i></a></li>
                        </div>
                    </nav>
                </div>
            </div>


        </>
    )
}

export default CardHeader
