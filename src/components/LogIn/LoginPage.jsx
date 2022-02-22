import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/register.css';
import '../../assets/scss/google-btn.css';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/auth';

const LoginPage = () => {
    
    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: "lucasrojas95@gmail.com",
        password: "1234567"
    });

    const { email, password } = formValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( login(123415, "LucaRM") );
    }

    return (
        <div className="container-fluid container-form">
            <div className="row row-form justify-content-center">
                <div className="col col-lg-8 mt-5 mb-5">
                    <form className="form-style" onSubmit={ handleLogin }>
                        <div className="mb-4">
                            <h2>Login with your account</h2>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={ handleInputChange } />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={ handleInputChange } />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >
                            Login
                        </button>

                        <div className="auth__social-networks mt-5">
                            <p>Login with social networks</p>

                            <div
                                className="google-btn"
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                        </div>
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