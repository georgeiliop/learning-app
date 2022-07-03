import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import Classes from "./Pages/Classes.js";
import Quiz from "./Pages/Quizes.js";
import Guide from "./Pages/Guide.js";
import { useEffect } from "react";

function App() {
  var localScore = JSON.parse(localStorage.getItem("score"));

  if (localScore !== null) {
    localScore=parseInt(localScore);
  } else {
    localScore=0;
  }
  const [score, setScore] = useState(localScore);
  console.log("rendering app")
  var localQuizesNumber = JSON.parse(localStorage.getItem("quizNum"));
  if (localQuizesNumber !== null) {
    localQuizesNumber=parseInt(localQuizesNumber);
  } else {
    localQuizesNumber=0;
  }
  
  const [quizesTaken, setQuizesTaken] = useState(localQuizesNumber);

  const handleScore = () => {
      setScore(prevScore => prevScore + 1);
  }

  const handleScoreOnChecked = () => {
    setScore(prevScore => prevScore + 5);
  }
  const handleScoreOnUnchecked =() => {
    // setScore(prevScore => prevScore - 5);
    alert("Έχεις διαβάσει ήδη το κεφάλαιο!")
  }

  useEffect( () => {
    localStorage.setItem("score" , JSON.stringify(score))
  },[score]);

  const handleQuizesTaken= () => {
    setQuizesTaken(prevQuizes => prevQuizes+ 1);
  } ;

  useEffect( () => {
    localStorage.setItem("quizNum" , JSON.stringify(quizesTaken))
  },[quizesTaken]);
  


  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar--style fixed-top navbar-expand-sm navbar-light bg-light shadow" >
          <div class="container">
          <a href="/" class="navbar-brand mb-0 h1">
          <Link class="navbar-brand mb-0 h1 home--button" to="/">Εφαρμογή Πληροφορικής</Link>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center customnav"
              id="navbarNav"
            >
              <ul class="navbar-nav ">
                <li class="nav-item active">
                  <Link class="nav-link color" to="/classes">Μαθήματα</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link color" to="/quiz">Quiz</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link color" to="/profile">Προφίλ</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link color" to="/guide">Εγχειρίδιο</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile
                                            score={score}
                                            quizesTaken={quizesTaken}/>} />
          <Route path="/classes" element={<Classes 
                                            score={score} 
                                            handleScoreOnChecked={handleScoreOnChecked}
                                            handleScoreOnUnchecked={handleScoreOnUnchecked}/>} />
          <Route path="/quiz" element={<Quiz quizesTaken={quizesTaken}
                                            score={score} 
                                            handleScore={handleScore}
                                            handleQuizesTaken={handleQuizesTaken}/>}/>
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
