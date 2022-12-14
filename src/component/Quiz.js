import React from "react";
import "../styles/Quiz.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz() {
    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const api_url = 'http://localhost:4000/quiz';

    const getQuiz = async () => 
    {
        const {data} = await axios.get(api_url);
        setQuiz(data);
    }

    useEffect(() => {
        getQuiz();
    }, []);

    // const handleClick = () => {
    //     if (isCorrect) {
    //         setScore(score++);
    //     }

    //     let nextQuestion = currentQuestion + 1;
    //     if (nextQuestion < quiz.length) {
    //         setCurrentQuestion(nextQuestion);
    //     } else {
    //         setShowScore(true);
    //     }
    // };

    let x = 1;

    return (
        <div className="app">
            {showScore ? (
                <section className="showScore-section">
                    Your score is {score}/{quiz.length}
                </section>
            ) : (
                <>
                    <section className="question-section">
                        <h1>
                            Question {currentQuestion + 1}/{quiz.length}
                        </h1>
                        <p>{quiz[currentQuestion].questionText}</p>
                    </section>

                    <section>
                        {quiz[currentQuestion].answerOptions.map(item => (
                            <button Key={x++} onClick={() => {
                                if (item.isCorrect) {
                                    setScore(score + 1);
                                }

                                let nextQuestion = currentQuestion + 1;
                                if (nextQuestion < quiz.length) {
                                    setCurrentQuestion(nextQuestion);
                                } else {
                                    setShowScore(true);
                                }
                            }}>
                                {item.answerText}
                            </button>
                        ))}
                    </section>
                </>
            )}
        </div>
    )
}

{/* <div className="answer-section">
                        {quiz[currentQuestion].answerOptions.map(item => (
                            <button Key={x++} onClick={handleClick(item.isCorrect)}>
                                {item.answerText}
                            </button>
                        ))}
                    </div>                    */}