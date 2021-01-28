import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Home from './components/Home';
import Product from './components/Product';
import Address from './components/Address';

const MainRouter = () => {
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/CheckOut" component={CheckOut} />
                    <Route exact path="/address" component={Address} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter