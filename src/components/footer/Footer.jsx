import './footer.css';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="row align-items-center ">

                <div className="col-md-12 mt-3">
                    <a href="https://www.instagram.com/dualipa/?hl=es">
                        <i className="fab fa-instagram me-3 ms-3"></i>
                    </a>
                    <a href="https://www.facebook.com/DuaLipa">
                        <i className="fab fa-facebook me-3 ms-3"></i>
                    </a>
                    <a href="https://twitter.com/duachileoficial">
                        <i className="fab fa-twitter me-3 ms-3"></i>
                    </a>
                </div>
                <div className="col-md-12 ">
                    <p> &copy; 2022 All rigths reserved</p>
                    <p>Warranty | Claims</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
