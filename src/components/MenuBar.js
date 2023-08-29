import React from "react";
import "./Components.css";
import Logo from "./Logo";
import Search from "./Search";

const MenuBar = () => {
  return (
    <header >
      <span className="menu-bar">
        <div className="logo-section">
          <Logo />
        </div>
        <div className="search-section">
          <Search />
        </div>
      </span>
    </header>
  );
};

export default MenuBar;
