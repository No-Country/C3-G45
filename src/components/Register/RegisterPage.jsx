import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import { startRegister } from 'actions/auth';
import { useForm } from 'hooks/useForm';
import './register.css';
import { useSelector } from 'react-redux';
import { useIsFormValid } from 'validation/useIsFormValid';

const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ui } = useSelector(state => state);

    const { isFormValidRegister } = useIsFormValid();

    const [formValues, handleInputChange] = useForm({
        uid: uuidv4()
    });

    const { firstName, lastName, userName, email, password } = formValues;


    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValidRegister(firstName, lastName, userName, email, password)) {
            dispatch(startRegister(firstName, userName, lastName, email, password, navigate));
        }
    }

    return (
        <div className="container-fluid container-form">
            <div className="row row-form justify-content-center">
                <div className="col-lg-4 login-section">
                    <i className="fas fa-angle-down"></i>
                    <h2>
                        <p>SIGN</p>
                        <p>IN</p>
                    </h2>
                    <p>If you have an account, just login!</p>
                    <Link className="btn btn-primary" to="/login" >Login</Link>
                </div>
                <div className="col col-lg-8 mt-5 mb-5">
                    <form className="form-style" onSubmit={handleRegister}>
                        <div className="mb-4">
                            <h2 className='title-register'>Register your account</h2>
                        </div>
                        {
                            (ui.msgError !== null)
                                ?
                                <div className="mb-4 auth__alert-error">
                                    <strong>{ui.msgError}</strong>
                                </div>
                                :
                                <div></div>
                        }
                        <div className="mb-4">
                            <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="userName" placeholder="User Name" onChange={handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;