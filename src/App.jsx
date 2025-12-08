import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { PATH } from "./const";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.QUIZ} element={<QuizPage />} />
        <Route path={PATH.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
