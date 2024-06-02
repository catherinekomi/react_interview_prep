import React, { useState } from 'react';

//1. Show/ Hide stuff
//create useState
// when onClick button it hides h1 and then second click it shows h1

const UseStateTextChallenge = () => {
  const [text, setText] = useState('Welcome to React Challenges ho ho ho');

  function handleClick() {
    setText((currentText) =>
      currentText === '' ? 'Welcome to React Challenges' : ''
    );
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Show/Hide</button>
    </div>
  );
};

export default UseStateTextChallenge;
