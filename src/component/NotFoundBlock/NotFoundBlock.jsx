import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>404</h1>
      <h2>К сожалению ничего не найдено (</h2>
    </div>
  );
};
export default NotFoundBlock;
