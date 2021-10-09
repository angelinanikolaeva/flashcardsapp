import styles from "./Error.module.scss";

const Error = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.message}</p>
    </div>
  );
};

export default Error;
