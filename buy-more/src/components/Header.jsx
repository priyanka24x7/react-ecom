import React from 'react';
import logo from '../assets/logo.png';
import { 
 
  Link
  
} from "react-router-dom";

function Header() {
  
  return (

    <div className="header-wrapper">
        <img src={logo} alt="buy more logo"/>
        <div className="top-nav">
            <ul>
                <li>
                  <Link to="/test">Wishlist</Link>
                </li>
                <li>Login</li>
                <li>Register</li>
                <li>Order History</li>
                <li>Shipping</li>
            </ul>


           
        </div>
    </div>
  );
}

export default Header;
