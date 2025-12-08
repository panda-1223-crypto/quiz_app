import { useEffect, useState } from "react";
import Button from "../component/Button/Button";
import Display from "../component/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { PATH } from "../const";

export default function QuizPage() {
  const [ quizIndex, setQuizIndex ] = useState(0);
  const [ answerLogs, setAnsewerLogs ] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnsewerLogs(prev => [...prev, true]);
    } else {
      setAnsewerLogs(prev => [...prev, false]);
    }
    // 次の問題に進む
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(answer => answer === true)
      navigation(PATH.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNum: correctNum.length,
        },
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  return (
    <div>
      {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
      <br/>
      {quizData[quizIndex] && quizData[quizIndex].options.map((option, buttonIndex) => {
        return (
          <Button
            key={`option-${buttonIndex}`}
            onClick={() => handleClick(buttonIndex)}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
