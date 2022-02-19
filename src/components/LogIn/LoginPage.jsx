import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/register.css';

const LoginPage = () => {
    return (
        <div className="container-fluid container-form">
            <div className="row row-form justify-content-center">
                <div className="col col-lg-8">
                    <form className="form-style" >
                        <div className="mb-4">
                            <h2>Login with your account</h2>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                <div className="col-lg-4 video-link">
                    <i className="fas fa-angle-down"></i>
                    <h2>
                        <p>JOIN</p>
                        <p>US</p>
                    </h2>
                    <p>Do you haven't an account?</p>
                    <Link className="btn btn-primary mb-5" to="/register" >Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;