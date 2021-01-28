import Button from '../components/Button.js';
import React, { useState } from 'react'
import constant from "../constants"

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import '../assert/css/form.css'
// import Home from '../page/Home';

const Login = () => {
    const history = useHistory();

    const [signIn, setSignIn] = useState({
        login: {
            email: '',
            password: ''
        },
    })
    const changeHandler = (event) => {
        setSignIn({
            ...signIn,
            login: {
                ...signIn.login,
                [event.target.name]: event.target.value,
            },
        })
    }

    const submitHandler = (event) => {
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
                    // history.goBack()
                }
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    const signUp = () => {
        history.push({
            pathname: "/signUp",
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div>
                        <form className="container form-signin" onSubmit={(event) => submitHandler(event)}>
                            <center> <h1> Login </h1> </center>
                            <div className="form-group  input-box">
                                <label >Email : </label>
                                <div>
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={signIn.login.email}
                                        name="email"
                                        placeholder="Enter Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group  input-box">
                                <label>Password : </label>
                                <div>
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input
                                        type="password"
                                        onChange={changeHandler}
                                        value={signIn.login.password}
                                        placeholder="Enter Password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="red_btn mr-4">Submit</button>
                                <button className="red_btn" onClick={signUp}> Registration</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default Login