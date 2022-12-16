import "../styles/Confettis.css";
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";

const Confettis = ({nbConfetti}) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <div className="App">
      <div className="confettie-wrap" ref={confetiRef}>
        <Confetti numberOfPieces={nbConfetti} width={2000} height={1000} />
      </div>
    </div>
  );
}

export default Confettis;