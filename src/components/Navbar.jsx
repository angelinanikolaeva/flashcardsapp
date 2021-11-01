import { useState } from "react";
import "../components/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const handleMenu = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="wrapper">
      <nav>
        <button className="menu-icon" onClick={handleMenu}>
          <MenuIcon fontSize="large" />
        </button>
        <div className="logo">
          <Link to="/">VocaVoca</Link>
        </div>
        <div className={dropdown ? "content dropdown" : "content"}>
          <ul className="links">
            <button className="close-icon" onClick={handleMenu}>
              <CloseIcon fontSize="large" />
            </button>
            <li>
              <Link onClick={handleMenu} to="/dictionary">
                Dictionary
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} to="/game">
                Learning
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile">
          <Link to="/login">
            <AccountCircle fontSize="large" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
