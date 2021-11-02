import { Link } from "react-router-dom";
import "./Welcome.scss";
import image from "../../assets/images/park.png";
import DoneIcon from "@mui/icons-material/Done";
import { useAuth } from "../../contexts/AuthContext";

const Welcome = () => {
  const { currentUser } = useAuth();
  return (
    <div className="welcome-container">
      <div className="welcome-row">
        <div className="welcome-block-text">
          <div className="welcome-text">
            Welcome to <h1>VocaVoca!</h1>
          </div>
          <div className="welcome-list">
            <ul>
              <li className="welcome-list-element">
                <span className="welcome-list-icon">
                  <DoneIcon />
                </span>
                <span className="welcome-list-text">Improve your English</span>
              </li>
              <li className="welcome-list-element">
                <span className="welcome-list-icon">
                  <DoneIcon />
                </span>
                <span className="welcome-list-text">Add new words</span>
              </li>
              <li className="welcome-list-element">
                <span className="welcome-list-icon">
                  <DoneIcon />
                </span>
                <span className="welcome-list-text">
                  Check progress in card game
                </span>
              </li>
            </ul>
          </div>
          <Link
            to={currentUser ? "/dictionary" : "/login"}
            className="welcome-button"
          >
            START
          </Link>
        </div>
        <div className="welcome-block-image">
          <img src={image} width="700px" height="700px" alt="welcome page" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
