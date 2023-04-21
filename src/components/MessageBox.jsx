import styles from "./messageBox.module.css";

function MessageBox({ author, message }) {

  return (
    <div className={styles.container}>
      <div className={styles.author}>
        {author}
        <span> - </span>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

export default MessageBox;
