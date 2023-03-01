import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <section id="header">
    <a href="#"><img src="different/logo.png" class="logo" alt=""/></a>
    <div>
        <ul id="navbar">
            <li><Link to="/Header">Home</Link></li>
            <li><Link to="/Contact ">Contact</Link></li>
            <li><Link to="/Register">Login/Register</Link></li>
            <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li>
            <a href="#" id="close"><i class="far fa-times"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>
    </div>
</section>

  );
}

export default Navbar;
