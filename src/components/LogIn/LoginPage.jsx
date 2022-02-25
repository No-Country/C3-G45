import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPass } from '../../actions/auth';

import '../Register/register.css';
import './LogIn.css';
import { useIsFormValid } from '../../validation/useIsFormValid';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isFormValidLogin } = useIsFormValid();

    const [formValues, handleInputChange] = useForm({
        uid: uuidv4(),
    });

    const { uid, email, password } = formValues;

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin(navigate));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValidLogin(email, password)) {
            dispatch(startLoginEmailPass(uid, email, password));

            navigate('/home');
        }
    }
    return (
        <div className="container-fluid container-form">
            <div className="row row-form justify-content-center">
                <div className="col col-lg-8 mt-5 mb-5">
                    <form className="form-style" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <h2 className=' title-login'>Login with your account</h2>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleInputChange} />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary form-control"
                        >
                            Login
                        </button>

                        <div className="social-networks mt-5">
                            <p>Login with social networks</p>

                            <div className="google-btn"
                                onClick={handleGoogleLogin}>

                                <i className='fab fa-google google-icon fa-lg'></i>
                                <div className='container-btn-text'>
                                    <p className="btn-text">Sign in with google</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 register-section">
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