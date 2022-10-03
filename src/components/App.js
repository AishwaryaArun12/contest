
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
const [text,setText]=useState('');
 const [inputValue,setInputValue]=useState('');
function buttonClick(e){
 e.preventDefault();
 setInputValue('');
  setText(text=>text+value)
}

function changeInput(e){
  setInputValue(e.target.value);
}
 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
