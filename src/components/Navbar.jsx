import React from "react";
import "../components/Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import ArrowIcon from "@material-ui/icons/ArrowRightAlt";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          .
        </label>
        <div className="content">
          <div className="logo">
            <a href="#">VocaVoca</a>
          </div>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" className="desktop-link">
                Features
              </a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features">Features</label>
              <ul>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-link">
                Services
              </a>
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">Services</label>
              <ul>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
                <li>
                  <a href="#" className="desktop-link">
                    More Items
                  </a>
                  <input type="checkbox" id="show-items" />
                  <label htmlFor="show-items">More Items</label>
                  <ul>
                    <li>
                      <a href="#">Sub Menu 1</a>
                    </li>
                    <li>
                      <a href="#">Sub Menu 2</a>
                    </li>
                    <li>
                      <a href="#">Sub Menu 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Feedback</a>
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
