import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* Logo Below */}
      <Link to = "/">
        <img
        className="header__logo"
        src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        />
      </Link>
      

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" name="" id="" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Navigation Buttons */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
