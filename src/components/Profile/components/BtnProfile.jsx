import React from "react"
import { Link } from "react-router-dom";
import './BtnProfile.css'

const BtnProfile = ( { linkTo, iconClassNames, title, click } ) => {
    return (
        <Link to={linkTo} className="link-change" onClick={ click }>
            <div className="div-change">
                <div className="container-change">
                    <i className={iconClassNames}></i>
                </div>
                <div className="text-change">
                    <p className="p-change">{title}</p>
                </div>
            </div>
        </Link>
    )
}
export default BtnProfile;
