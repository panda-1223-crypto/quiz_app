import styles from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <button type="button" className={styles.answerButton} onClick={onClick}>
      <span className={styles.answerButtonInnner}>{children}</span>
    </button>
  );
}
