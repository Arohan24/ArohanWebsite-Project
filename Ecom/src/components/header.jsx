import React from 'react';

const Header = () => {
  return (
    <section id="header">
      <a href="#"><img src="img1/logo/logo1.png" alt="Logo" /></a>
      <i className="fa-solid fa-circle-user" id="loginbtn"></i>
      <div>
        <ul id="navbar">
          <li id="search">
            <input placeholder="Search" type="text" />
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          </li>
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="wish.html">Wishlist</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li id="lg-cart"><a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a></li>
          <a href="#" id="close"><i className="fa-regular fa-circle-xmark"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
        <i id="bar" className="fa-solid fa-bars"></i>
      </div>
      <div className="logform">
        <ul className="tab-group">
          <li id="signbutton" className="tab active"><a href="#signup">Sign Up</a></li>
          <li id="logbutton" className="tab"><a href="#login">Log In</a></li>
        </ul>
        <div className="tab-content">
          <div id="signup">
            <h1>Sign Up for Free</h1>
            <form action="/" method="post">
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>
                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>
              </div>
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>
              <div className="field-wrap">
                <label>
                  Set A Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>
              <button type="submit" className="button button-block">Get Started</button>
            </form>
          </div>
          <div id="login">
            <h1>Welcome Back!</h1>
            <form action="/" method="post">
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>
              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>
              <p className="forgot"><a href="#">Forgot Password?</a></p>
              <button className="button button-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
