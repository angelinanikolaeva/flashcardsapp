import React from "react";
import "../components/Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
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
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/game" className="desktop-link">
                Игра
              </Link>
              <input type="checkbox" id="show-game" />
              <label htmlFor="show-game">Игра</label>
              <ul>
                <li>
                  <Link to="/">Выпадающее1</Link>
                </li>
                <li>
                  <Link to="/">Выпадающее2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/serv" className="desktop-link">
                Services
              </Link>
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">Услуги</label>
              <ul>
                <li>
                  <Link to="/">Выпадающее1</Link>
                </li>
                <li>
                  <Link to="/">Выпадающее2</Link>
                </li>
                <li>
                  <Link to="/" className="desktop-link">
                    Еще
                  </Link>
                  <input type="checkbox" id="show-items" />
                  <label htmlFor="show-items">Еще</label>
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
              <Link to="/">Контакты</Link>
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
