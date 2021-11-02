import { useState } from "react";
import { useHistory } from "react-router";
import "../components/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { Alert } from "@mui/material";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const handleMenu = () => {
    setDropdown(!dropdown);
  };
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <div className="wrapper">
      <nav>
        <button
          className={dropdown ? "menu-icon close-icon" : "menu-icon"}
          onClick={handleMenu}
        >
          {dropdown ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
        <div className="logo">
          <Link to="/">VocaVoca</Link>
        </div>
        <div className={dropdown ? "content dropdown" : "content"}>
          <ul className="links">
            {currentUser ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <Link onClick={handleMenu} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={handleMenu} to="/howto">
                    How To Use
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/flashcardsapp/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="profile">
          {currentUser ? (
            <Button onClick={handleLogout}>Log out</Button>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
      </nav>
    </div>
  );
}

export default Navbar;
