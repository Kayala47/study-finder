import React, { useState } from 'react';
import { BrowserRouter, Link, Redirect, Switch, Route } from 'react-router-dom';

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        alert('Submission accepted - waiting on backend');

    }

    // const rd = { redirect: <RegistrationForm /> };

    const handleRedirectToRegister = (e) => {
        return <Redirect to="/" />
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>


                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Login
                </button>

            </form>
            <br />

            <small> Don't have an account? </small>
            <button
                type="go-to-register"
                className="btn btn-primary"

            >
                Go Register!
                </button>



        </div >

    )
}

export default RegistrationForm;