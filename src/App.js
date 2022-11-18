import './App.css';

import { useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

function App() {
  const [containCount, setContainCount] = useState("");
  const [timer, setTimer] = useState('');


  const startCountDown = () => {
    let date = new Date('Mon Dec 19 2022 16:30:00 GMT+01')
    
    let timer2 = parseInt(timer, 10)
    timer2 = timer2 * 1000;
    
    console.log(timer2)

    setContainCount(
      <div>
        <main>
          <Countdown
            date={Date.now() + timer2}
            renderer={({ days, hours, minutes, seconds }) => {
              return (
                <div>
                  <p className='days'> {minutes} Minutes, {seconds} Secondes</p>
                </div>
              );
            }} />
        </main>
      </div>
    )
  }

  const handleChangeTimer = (e) => {
    setTimer(e.target.value)
  }

  return (
    <div>
      <input value={timer} type="number" placeholder="enter time" onChange={handleChangeTimer} />

      <button onClick={startCountDown}>start</button>

      {containCount !== "" ?
        <div>
          {containCount}
        </div>
        :
        ""
      }

    </div>
  );
}

export default App;
