import React from "react";
import "../components/Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import ArrowIcon from "@material-ui/icons/ArrowRightAlt";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <MenuIcon />
        </label>
        <div className="content">
          <div className="logo">
            <Link to="/">VocaVoca</Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/game" className="desktop-link">
                Game
              </Link>
              <input type="checkbox" id="show-game" />
              <label htmlFor="show-game">Game</label>
              <ul>
                <li>
                  <Link to="/">Drop Menu 1</Link>
                </li>
                <li>
                  <Link to="/">Drop Menu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/serv" className="desktop-link">
                Services
              </Link>
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">Services</label>
              <ul>
                <li>
                  <Link to="/">Drop Menu 1</Link>
                </li>
                <li>
                  <Link to="/">Drop Menu 2</Link>
                </li>
                <li>
                  <Link to="/" className="desktop-link">
                    More Items
                  </Link>
                  <input type="checkbox" id="show-items" />
                  <label htmlFor="show-items">More Items</label>
                  <ul>
                    <li>
                      <Link to="/">Sub Menu 1</Link>
                    </li>
                    <li>
                      <Link to="/">Sub Menu 2</Link>
                    </li>
                    <li>
                      <Link to="/">Sub Menu 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <SearchIcon fontSize="large" style={{ color: "#4f3a75" }} />
        </label>
        <form action="#" className="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" className="go-icon">
            <ArrowIcon fontSize="large" style={{ color: "#4f3a75" }} />
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
