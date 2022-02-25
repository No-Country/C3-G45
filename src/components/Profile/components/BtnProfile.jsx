import React from "react"
import { Link } from "react-router-dom";
import './BtnProfile.css'

const BtnProfile = (props) => {
    return (
        <Link to={props.linkTo} className="link-change">
            <div className="div-change">
                <div className="container-change">
                    <i className={props.iconClassNames}></i>
                </div>
                <div className="text-change">
                    <p className="p-change">{props.title}</p>
                </div>
            </div>
        </Link>
    )
}
export default BtnProfile;
