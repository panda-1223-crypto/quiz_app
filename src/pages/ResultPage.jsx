import { Link, useLocation } from "react-router-dom"
import { PATH } from "../const";
import Result from "../component/Result/Result";
import Loading from "../component/Loading/Loading";
import { useEffect, useState } from "react";
import Button from "../component/Button/Button";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNum = location.state.correctNum

  // 今回は初回表示後に１度だけ発火すればいいため、空配列を設定
  useEffect(() =>{
    setTimeout(() =>{setActive(true)}, 3000);
  }, [])
  return (
    <div>
      <Loading active={active}/>
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNum={correctNum}/>
      <br/>
      <Link to={PATH.HOME}>再度チャレンジする！！</Link>
      <Button onClick={() => navigation(PATH.HOME)}>
        合格
      </Button>
    </div>
  )
}

// 流れ
// 1 
