import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
    return (
        <div className="container-fluid container-form">
            <div className="row row-form justify-content-center">
                <div className="col-lg-4 video-link">
                    <i className="fas fa-angle-down"></i>
                    <h2>
                        <p>SIGN</p>
                        <p>IN</p>
                    </h2>
                    <p>If you have an account, just login!!</p>
                    <Link className="btn btn-primary" to="/login" >Login</Link>
                </div>
                <div className="col col-lg-8">
                    <form className="form-style" >
                        <div className="mb-4">
                            <h2>Register your account</h2>
                        </div>
                        <div className="mb-4">
                            <p>hola</p>
                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" id="userName" placeholder="User Name" />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;