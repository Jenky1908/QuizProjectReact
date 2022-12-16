import React, { useRef } from "react";
import "../styles/Quiz.css";
import { useEffect, useState } from "react";
import Confettis from "./Confettis";
import axios from "axios";

export default function Quiz({ path }) {

    const [quiz, setQuiz] = useState({});
    const [id, setId] = useState(1);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);

    let api_url = 'http://localhost:4002/';

    switch (path) {
        case "foot/":
            api_url += path;
            break;
        case "genshin/":
            api_url += path;
            break;
        case "hg/":
            api_url += path;
            break;
        case "manga/":
            api_url += path;
            break;
        default:
            break;
    }

    const getQuiz = async () => {
        // data (propriété d'axios) est la réponse en json
        const { data } = await axios.get(api_url + id);
        setQuiz(data);
    }

    useEffect(() => {
        getQuiz();
    }, [id]);

    const compter = () => {
        setCounter(counter => counter);
    }

    const clearCounter = () => {
        setCounter(15);
        if (ref.current) clearInterval(ref.current);
        const id = setInterval(() => { compter() }, 1000);
        ref.current = id;
    }

    useEffect(() => {
        clearCounter();
    }, []);

    if (counter < 0) {
        if (id < 6) {
            setId(id+1)
        }
        else {
            setShowScore(true);
        }
        clearCounter();
    }

    let x = 1;
    let nbConf = 1;
    let emoji;

    let phrase;

    switch (score) {
        case 0:
            phrase = "... Vas là bas !";
            nbConf = 10;
            emoji = <p>&#128169;</p>;
            break;
        case 1:
        case 2:
            phrase = "L'importance c'est de participer... (phrase de perdant)";
            nbConf = 50;
            emoji = <p>&#x1F480;</p>;
            break;
        case 3:
            phrase = "Tu fais partie de la moyenne";
            nbConf = 200;
            emoji = <p>&#x1F610;</p>;
            break;
        case 4:
        case 5:
            phrase = "Tu maitrises le quiz ! :p";
            nbConf = 700;
            emoji = <p>&#x1F409;</p>
            break;
        case 6:
            phrase = "Le seul qui puisse me battre, c'est moi-même !";
            nbConf = 2000;
            emoji = <p>&#x1F3C6;</p>
            break;
    }

    console.log(quiz);
    console.log(api_url + id);

    return (
        <div className="app">
            {(showScore) ? (
                <section className="showScore-section">
                    <div className="emoji">{emoji}</div>
                    <Confettis nbConfetti={nbConf}/>
                    Ton score est : {score}/6
                    <div className="phrase">
                        {phrase}
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
                                    Question {id}/6
                                </h1>
                                <h2>{counter}</h2>
                                <p>{quiz.questionText}</p>
                                <div>
                                    {quiz.answerOptions.map(item => (
                                        <button className="btnReponse" Key={x++} onClick={() => {
                                            if (item.isCorrect) {
                                                setScore(score + 1);
                                            }

                                            clearCounter();

                                            let nextQuestion = id + 1;
                                            if (nextQuestion <= 6) {
                                                setId(id+1);
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