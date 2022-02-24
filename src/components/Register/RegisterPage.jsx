import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import './register.css';

const RegisterPage = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        firstName: "Luca",
        lastName: "Rojas Massey",
        userName: "LucaRM95",
        email: "lucasrojas95@gmail.com",
        password: "1234567"
    });

    const { firstName, lastName, userName, email, password } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ){
            console.log("Formulario correcto!");
            console.log( firstName, lastName, userName, email, password );
        }
    }

    const isFormValid = () => {
        
        if ( firstName.trim().length <= 1 ) {
            dispatch( setError("First name is required and should be at least 2 characters") )
            return false;
        } else if ( lastName.trim().length <= 1 ) {
            dispatch( setError("Last name is required and should be at least 2 characters") )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError("Email is not valid") )
            return false;
        } else if ( userName.trim().length <= 3 ) {
            dispatch( setError("User name is required and should be at least 3 characters") )
            return false;
        } else if ( password.length < 5 ) {
            dispatch( setError("Password should be at least 6 characters") )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

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
                <div className="col col-lg-8 mt-5 mb-5">
                    <form className="form-style" onSubmit={ handleRegister }>
                        <div className="mb-4">
                            <h2>Register your account</h2>
                        </div>
                        <div className="mb-4">
                            <p>hola</p>
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={ handleInputChange } value={ firstName }/>
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={ handleInputChange } value={ lastName }/>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={ handleInputChange } value={ email }/>
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="userName" placeholder="User Name" onChange={ handleInputChange } value={ userName }/>
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={ handleInputChange } value={ password }/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;