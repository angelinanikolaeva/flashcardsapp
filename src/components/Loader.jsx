import styles from "./Loader.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.dot3}></div>
    </div>
  );
};

export default Loading;
