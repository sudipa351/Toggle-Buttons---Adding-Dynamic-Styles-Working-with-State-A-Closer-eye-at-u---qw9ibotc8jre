import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [current, setCurrent] = useState('OFF');
  const [current2, setCurrent2] = useState('ON');

  const handleClick = (event) => {

    if (event.target.id == 'btn1') {
      if (event.target.innerText == 'ON' && event.target.id == 'btn1') {
        setCurrent(() => 'OFF');
        setCurrent2(() => 'ON');
      }
      else {
        setCurrent(() => 'ON');
        setCurrent2(() => 'OFF');
      }
    }
    else {
      if (event.target.value == 'OFF') {
        setCurrent(() => 'OFF');
        setCurrent2(() => 'ON');
      }
      else {
        setCurrent(() => 'ON');
        setCurrent2(() => 'OFF');
      }
    }

  }

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick} value={current}  >
        {current}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick} value={current2}   >
        {current2}
      </button>
    </div>
  );
}


export default App;