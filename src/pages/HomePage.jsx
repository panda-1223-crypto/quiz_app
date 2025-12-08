import { Link } from "react-router-dom"
import { PATH } from "../const"

export default function HomePage() {
  return (
    <div>
        <h1>Quiz App</h1>
        <Link to={PATH.QUIZ}>Start!</Link>
    </div>
  )
}

