import React from "react";

const Footer = () => {
  return (
    <div className="d-flex align-items-center justify-content-evenly bg-dark p-3">
      <nav className="p-2">
        <a href="/" className="a">
          Your Account
        </a>
        <a href="/" className="a">
          Cart
        </a>
        <a href="/" className="a">
          Orders & Returns
        </a>
        <a href="/" className="a">
          Help
        </a>
        <a href="/" className="a">
          Customer Care
        </a>
        <a href="/payment" className="a">
          Payments
        </a>
        <a href="/form" className="a">
          Feedback Form
        </a>
      </nav>
    </div>
  );
};

export default Footer;
