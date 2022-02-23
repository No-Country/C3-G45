import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './register.css';

const RegisterPage = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: "Luca",
        lastName: "Rojas Massey",
        userName: "LucaRM95",
        email: "lucasrojas95@gmail.com",
        password: "1234567"
    });

    const { name, lastName, userName, email, password } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log( name, lastName, userName, email, password );
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
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={ handleInputChange } value={ name }/>
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