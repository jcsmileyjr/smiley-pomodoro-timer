
import './App.css';
import React, {useState, useEffect} from 'react';
import Refresh from "./image/refresh.png";
import Play from "./image/play.png";
import Pause from "./image/pause.png";
import Mouse from "./image/mouse-animal.png";

// have an interval function decrease by 1 second from 60 to 0, 
// then start back at 60 and decrease by 1 minute from 25 to 0.
// Each second and minute is saved and displayed


function App() {
  const [startTimer, setTimer] = useState(false)
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      //setSeconds(prevSec => prevSec -1);
      play();
    }, 1000);
    return ()=> clearInterval(interval);
  },);

  const play = () => {
    if(seconds === 0){
      setSeconds(10)
      setMinutes(prevMin => prevMin -1);
    }else{
      setSeconds(prevSec => prevSec -1);
    }

  }
  

  return (
    <div className="App">
      <section className='test'></section>
      <main>
        <section className='control'>
          <button type="button" className='control__button'>
            <img src={Refresh} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button' onClick={()=> {}}>
            <img src={Play} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button'>
            <img src={Pause} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
        </section>
        <section className='content'>
          <p className='content__timer'>{minutes}:{seconds === 0?`00`:seconds}</p>
          <p className='content__message'>You may delay, but time will not</p>
        </section>
        <section className='animation'>
          <img src={Mouse} alt="" className='animation__animal--style' />
        </section>
      </main>
    </div>
  );
}

export default App;
