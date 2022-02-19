import './footer.css';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="row align-items-center ">
                <div className="col-md-6 ">
                    <p> &copy; 2022 Todos los derechos reservados </p>
                    <p>Política de Garantías | Libro de reclamos</p>
                </div>
                <div className="col-md-6 ">
                    <a href="https://www.instagram.com">
                        <i className="fab fa-instagram me-3 ms-3"></i>
                    </a>
                    <a href="https://www.facebook.com">
                        <i className="fab fa-facebook me-3 ms-3"></i>
                    </a>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-twitter me-3 ms-3"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
