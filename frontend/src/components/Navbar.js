import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

const Navbar =() => {
    return(
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                <img className="card-img-right" src={require('./images/MicrosoftTeams-image (1).png')} alt="Card image cap" style={{ height: '3%', width:'5%'}}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* <ul className={"nav flex-column nav-pills"} >*/}

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink className="nav-link" to="/about">About</NavLink>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;