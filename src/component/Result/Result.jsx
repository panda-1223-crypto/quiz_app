import styles from "./Result.module.css";
import Confetti from "react-confetti";

export default function Result({ maxQuizLen, correctNum }) {
  return (
    <>
      <div className={styles.result}>
        あなたの正解数は...
        <span
          className={styles.resultHighlight}
        >{`全${maxQuizLen}門中、${correctNum}門正解でした。`}</span>
        でした！
      </div>
      <Confetti/>
    </>
  );
}
