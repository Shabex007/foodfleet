import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import logo from "../../assets/foodfleet.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <div className="search-bar-wrapper">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
