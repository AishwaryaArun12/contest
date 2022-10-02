
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
const [text,setText]=useState('');
function buttonClick(){
  setText(text=>text+value)
}
const value='';
function changeInput(e){
  value=e.target.value;
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
