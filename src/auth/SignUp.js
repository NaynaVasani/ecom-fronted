import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../assert/css/form.css'
import { toast } from "react-toastify";

const SignUp = () => {
    const history = useHistory();

    const [signUp, setsignUp] = useState({
        data: {
            username: '',
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
                history.push('/login')
            })
            .catch((error) => {
                toast.error("Enter valid Email and Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    const cancelHandler = () => {
        history.push({
            pathname: "/login",
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div>
                        <form className="container form-signin" onSubmit={(event) => submitHandler(event)}>
                            <center> <h1> Sign Up </h1> </center>
                            <div className="form-group  input-box">
                                <label >Name : </label>
                                <div>
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={signUp.data.username}
                                        name="username"
                                        placeholder="Enter Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group  input-box">
                                <label >Email : </label>
                                <div>
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={signUp.data.email}
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
                                        value={signUp.data.password}
                                        placeholder="Enter Password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="red_btn mr-4">Save</button>
                                <button className="red_btn" onClick={cancelHandler}> Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default SignUp