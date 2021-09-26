import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div class={styles.container}>
      <div class={styles.dot1}></div>
      <div class={styles.dot2}></div>
      <div class={styles.dot3}></div>
    </div>
  );
};

export default Loading;
