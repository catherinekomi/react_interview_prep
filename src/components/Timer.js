import React, { useState, useEffect, useRef } from 'react';
//2. Timer, implement start, stop, reset button
// add a state for a timer [timer, setTimer] = useState(0)
// then add interval with useRef(null) hook stores the interval ID in intervalRef,
// ensuring it persists across re-renders without causing re-renders itself.

const Timer = () => {
  // logic for num 2
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <div>
      <h1>Timer MUST GO OOON</h1>
      <span>{minutes} minutes </span>
      <span>{seconds} seconds</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
