import React, { useEffect, useState } from 'react'
import '../assert/css/style.css'
import { Badge, Modal } from 'antd';
import 'antd/dist/antd.css';

import { Link, useHistory } from 'react-router-dom';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from './Button';

import axios from "axios";
import '../assert/css/form.css'
import { toast } from "react-toastify";
import constant from "../constants"

import '../assert/css/style.css'

const Header = ({isLogin, hideLogin}) => {
    const [count, setCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('cart'));
        data && setCount(data.length)

    },[localStorage.getItem('cart')])

    const [show, setShow] = useState(false);
    const onSignUp = (e) => {
        e.preventDefault();
        setShow(true)
        setShow1(false)
    }

    const handleClose = () => setShow(false);

    const [signUp, setsignUp] = useState({
        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
    })

    const changeHandler = (event) => {
        setsignUp({
            ...signUp,
            data: {
                ...signUp.data,
                [event.target.name]: event.target.value,
            },
        })
    }


    const submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/users/signUp', signUp.data)
            .then((response) => {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_CENTER
                });
                setShow1(true);
                setShow(false)
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    const [signIn, setSignIn] = useState({
        login: {
            email: '',
            password: ''
        },
    })
    const changeHandler1 = (event) => {
        setSignIn({
            ...signIn,
            login: {
                ...signIn.login,
                [event.target.name]: event.target.value,
            },
        })
    }

    const submitHandler1 = (event) => {
        event.preventDefault();
        let user = {
            'email': signIn.login.email,
            'password': signIn.login.password,
        };

        axios.post(`${constant.REACT_APP_API_URL}/users/login`, signIn.login, {
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('UserId', response.data?.login?._id)
                if (response.data) {
                    history.push({
                        pathname: '/'
                    })
                    setShow1(false)
                }
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    const [show1, setShow1] = useState(false);
    const Login = (e) => {
        e.preventDefault();
        setShow1(true)
        setShow(false)
    }

    const handleClose1 = () => setShow1(false);


    return (
        <div>
            {/* <div className="header_blacvk">
                <div className="container ">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header header1">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand ">OTTIMO VINO</a>
                            <li className="cart-ca" onClick={() => { history.push({ pathname: "/cart" }) }}><a href="#" style={{ fontSize: 25 }}><Badge style={{ backgroundColor: '#b0976d' }} count={count}><i className="icon-hed-fas m-0 fa fa-shopping-cart" ></i></Badge></a></li>
                            </div>
                            <div id="navbarCollapse" className ="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right flex-row " style={{ paddingTop: 10 }}>
                                <li className="navItem"><Link to='/' >HOME</Link></li>
                                <li className="navItem navHover" ><a href="#shop-wines">DISCOVER</a></li>
                                <li className="navItem navHover"><a href="#testimonial" >TESTIMONIALS</a></li>
                                <li onClick={Login} style={{ paddingLeft: 10 }}><a href="" className="ank_border"  >LOG IN</a></li>
                                <li onClick={(e) => SignUp(e)}><a href="" className="ank_border_bg">SIGN UP</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div> */}
            <div className="header_blacvk">
                <div className="container ">
                    <Navbar collapseOnSelect expand="lg" color="black" variant="dark">
                        <a href="#"  className="navbar-brand "><Link to='/' style={{ color: "white"}}>OTTIMO VINO</Link></a>
                        <li className="cart-ca" onClick={() => { history.push({ pathname: "/cart" }) }}><a href="#" style={{ fontSize: 25 }}><Badge style={{ backgroundColor: '#b0976d' }} count={count}><i className="icon-hed-fas m-0 fa fa-shopping-cart" ></i></Badge></a></li>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><Link to='/' className="navItem navHover"  >HOME</Link></Nav.Link>
                                <Nav.Link href="#shop-wines" className="navItem">DISCOVER</Nav.Link>
                                <Nav.Link href="#testimonial" className="navItem">TESTIMONIALS</Nav.Link>
                                <div className="nav-div" onClick={Login} style={{ paddingLeft: 10, marginTop: 10 }}><a href=""  className="ank_border text-white"  >LOG IN</a></div>
                                <div className="nav-div1" onClick={(e) => onSignUp(e)} style={{ marginTop: 10 }} ><a href="" className="ank_border_bg text-white">SIGN UP</a></div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

            <Modal visible={show}  style={{ borderRadius: 14 }} closable footer={null} onCancel={()=>{setShow(false)}}>
                    <div className="container font-vida">
                        <div className="font-weight-bold text-center" style={{ fontSize: 28 }} >SIGN UP</div>
                        <div >
                            <div>
                                <form className="container " onSubmit={(event) => submitHandler(event)}>
                                    <div className="row justify-content-between">
                                        <div className="form-group  input-box col-md-5">
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={changeHandler}
                                                    value={signUp.data.firstName}
                                                    name="firstName"
                                                    placeholder="FIRST NAME"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group  input-box col-md-5">
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={changeHandler}
                                                    value={signUp.data.lastName}
                                                    name="lastName"
                                                    placeholder="LAST NAME"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group  input-box col-md-12">
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={changeHandler}
                                                    value={signUp.data.email}
                                                    name="email"
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group  input-box col-md-12">
                                            <div>
                                                <input
                                                    type="password"
                                                    onChange={changeHandler}
                                                    value={signUp.data.password}
                                                    placeholder="PASSWORD*"
                                                    name="password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <Button title="Register" largebutton="largebutton" />
                                        </div>
                                        <div className="ml-5">
                                            ALREADY HAVE A ACCOUNT?
                                            <a href="" style={{ color: '#B0976D', textDecoration: "underline"}} onClick={Login}> lOG IN</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </Modal>

            <Modal visible={isLogin || show1}  style={{ borderRadius: 14 }} closable footer={null} onCancel={()=>{setShow1(false); hideLogin && hideLogin();}}>
                <div className="font-weight-bold text-center font-vida" style={{ fontSize: 28 }} >LOG IN</div>
                    <div className="container font-vida">
                        <div >
                            <div>
                                <form className="container " onSubmit={(event) => submitHandler1(event)}>
                                    <div className="row">
                                        <div className="form-group  input-box col-md-12">
                                            <div>
                                                <input
                                                    type="text"
                                                    onChange={changeHandler1}
                                                    value={signIn.login.email}
                                                    name="email"
                                                    placeholder="EMAIL ADDRESS"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group  input-box col-md-12">
                                            <div>
                                                <input
                                                    type="password"
                                                    onChange={changeHandler1}
                                                    value={signIn.login.password}
                                                    placeholder="PASSWORD"
                                                    name="password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <Button title="Login" largebutton="largebutton" />
                                        </div>
                                        <div className="ml-5">
                                            ALREADY HAVE A ACCOUNT?
                                            <a href="" style={{ color: '#B0976D', textDecoration: "underline" }} onClick={onSignUp}> SIGN UP</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>
    )
}

export default Header
