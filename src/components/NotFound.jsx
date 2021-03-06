import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => (
  <div className={styles.div}>
    <h1 className={styles.h1}>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
