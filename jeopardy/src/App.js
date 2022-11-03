import {useState, useEffect} from 'react'

function App() {
  const [question, setQuestion] = useState(null)
  const [score, setScore] = useState(0);
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
      getQuestion()
  }, [])

  const getQuestion = async () => {
    try {
        const res = await fetch('http://jservice.io/api/random')
        const data = await res.json()
        console.log("data: ", data)
        console.log("answer: ", data[0].category.title)

        setQuestion(data)
    } catch (error) {
        console.log(error)
    }
}

  const handleShow = () => {
     setIsHidden(!isHidden)
  }
  const handleScoreIncrease = () => {
    setScore(score + question[0].value);
  };

  const handleScoreDecrease = () => {
    setScore(score - question[0].value);
  };

  const handleReset = () => {
    setScore(0);
  };


  


   
  return (
    <div className="App">
                <h1 className='title'>Welcome to Jeopardy</h1>
                 <div> <h2>Question </h2><p>{question[0].question}</p> <button onClick={getQuestion} >
        Get Question
      </button> </div>
                <div > <h2 >Answer</h2>  <button onClick = {handleShow} >{isHidden? "Show" : "Hide"} </button> {question == null ? (
                  ""
                ) : (
                  <p >{question[0].answer} </p> 
                )}</div>
                 <div> <h2> Category </h2><p>{question[0].category.title}</p> </div>
                <div> <h2>Points</h2><p>{score}</p>
                <button  onClick={handleScoreIncrease}>
                 Increase
           </button>
             <button onClick={handleScoreDecrease}>
             Decrease
         </button>
         <button  onClick={handleReset}>
        Reset
      </button></div>  
                
    </div>
  );
}

export default App;
