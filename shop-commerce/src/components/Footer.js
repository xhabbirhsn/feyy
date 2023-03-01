import React from 'react'

function Footer() {
  return (
    <footer className="section-p1">
        <div className="col">
            <img  className="logo" src="different/logo.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> Arya College of Engineering & IT</p>
            <p><strong>Phone:</strong> (+91) 9155802141</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pintrest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>Phones</h4>
            <a href="#">OnePlus 11R 5G</a>
            <a href="#">Nothing (1)</a>
            <a href="#">Xioami 13 Pro 5G</a>
            <a href="#">Redmi 12 Pro 5G</a>
            <a href="#">Iphone 14 Pro</a>
        </div>

        <div className="col">
            <h4>My Accounts</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="img/pay/app.jpg" alt=""/>
                <img src="img/pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateway</p>
            <img src="img/pay/pay.png" alt=""/>
        </div>

        <div className="copyright">
            <p>@ 2023,MobileSelling-Website </p>
        </div>
    </footer>
  )
}

export default Footer