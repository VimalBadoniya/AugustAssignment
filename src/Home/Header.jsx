import React from "react";
import "./homeStyle.css";

const Header = () => {
  return (
    <div className="d-flex align-items-center bg-dark p-3">
      <form className="d-flex align-items-center">
        <input placeholder="Product....." className="searchInput" />
        <button
          type="submit"
          className="searchBtn"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Search
        </button>
      </form>
      <nav className="p-2">
        <a href="/" className="a">
          Mobiles
        </a>
        <a href="/" className="a">
          Electronics
        </a>
        <a href="/" className="a">
          Home & Kitchen
        </a>
        <a href="/" className="a">
          Computers
        </a>
        <a href="/" className="a">
          Books
        </a>
        <a href="/" className="a">
          Best Seller
        </a>
        <a href="/" className="a">
          Today's Deal
        </a>
      </nav>
      =
    </div>
  );
};

export default Header;
