import React, { useRef } from "react";
import "../styles/Quiz.css";
import { useEffect, useState } from "react";
// import axios from "axios";

export default function Quiz({ path }) {

    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [counter, setCounter] = useState(0);
    const [arrayTrue, setArrayTrue] = useState([]);
    const [i, setI] = useState(0);
    const ref = useRef(null);

    let api_url = 'http://localhost:4002/';

    switch (path) {
        case "foot":
            api_url += path;
            break;
        case "genshin":
            api_url += path;
            break;
        case "hg":
            api_url += path;
            break;
        case "manga":
            api_url += path;
            break;
        default:
            break;
    }

    console.log(path, api_url);

    const getQuiz = () => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => setQuiz(data));
    }

    useEffect(() => {
        getQuiz();
    }, []);

    const compter = () => {
        setCounter(counter => counter - 1);
    }

    const clearCounter = () => {
        setCounter(10);
        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => { compter() }, 1000);
        ref.current = id;
    }

    useEffect(() => {
        clearCounter();
    }, []);

    if (counter < 0) {
        if (currentQuestion + 1 < quiz.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setShowScore(true);
        }
        clearCounter();
    }

    let x = 1;

    return (
        <div className="app">
            {(showScore) ? (
                <section className="showScore-section">
                    Your score is {score}/{quiz.length}
                    <div>
                        {arrayTrue}
                    </div>
                </section>
            ) : (
                <section className="quiz">
                    {
                        (quiz !== quiz) ?
                            <p></p>
                            :
                            <div>
                                <h1>
                                    Question {currentQuestion + 1}/{quiz.length}
                                </h1>
                                <h2>{counter}</h2>
                                <p>{quiz[currentQuestion].questionText}</p>
                                <div>
                                    {quiz[currentQuestion].answerOptions.map(item => (
                                        <button className="btnReponse" Key={x++} onClick={() => {
                                            if (item.isCorrect) {
                                                setScore(score + 1);
                                            }

                                            setArrayTrue(arrayTrue[i] = item.answerText);
                                            setI(i+1);
                                            console.log(item.answerText);
                                            clearCounter();

                                            let nextQuestion = currentQuestion + 1;
                                            if (currentQuestion + 1 < quiz.length) {
                                                setCurrentQuestion(nextQuestion);
                                            } else {
                                                setShowScore(true);
                                            }
                                        }}>
                                            {item.answerText}
                                        </button>
                                    ))}
                                </div>
                            </div>
                    }
                </section>
            )}
        </div>
    )
}

{/* <h1>
                        Question {currentQuestion + 1}/{quiz.length}
                    </h1>
                    <h2>{counter}</h2>
                    <p>{quiz[currentQuestion].questionText}</p>
                    <div>
                        {quiz[currentQuestion].answerOptions.map(item => (
                            <button className="btnReponse" Key={x++} onClick={() => {
                                if (item.isCorrect) {
                                    setScore(score + 1);
                                }

                                clearCounter();

                                let nextQuestion = currentQuestion + 1;
                                if (currentQuestion + 1 < quiz.length) {
                                    setCurrentQuestion(nextQuestion);
                                } else {
                                    setShowScore(true);
                                }
                            }}>
                                {item.answerText}
                            </button>
                        ))}
                    </div> */}