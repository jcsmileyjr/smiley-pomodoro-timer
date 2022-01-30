
import './App.css';
import React, {useState, useEffect} from 'react';
import Refresh from "./image/refresh.png";
import Play from "./image/play.png";
import Pause from "./image/pause.png";
import Mouse from "./image/mouse-animal.png";
const Messages =require("./data/data");

// have an interval function decrease by 1 second from 60 to 0, 
// then start back at 60 and decrease by 1 minute from 25 to 0.
// Each second and minute is saved and displayed


function App() {
  const [startTimer, setTimer] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [content, setContent] = useState([]);
  const [currentContentIndex, setIndex] = useState(0);

  // Run the inteval for one second every time the app repaints over and over again
  useEffect(() => {
    if(startTimer){
      const interval = setInterval(() => {
        countdown();
      }, 1000);
      return ()=> clearInterval(interval);
    }
  },);

  useEffect(()=> {
    updateContent();
  },[])

  // Countdown the seconds and minutes
  const countdown = () => {
    if(seconds === 1 && minutes === 0){pause()} //End countdown

    //Determines when to restart seconds and reduce minutes
    if(seconds === 0){
      setSeconds(59)
      setMinutes(prevMin => prevMin -1);
    }else{
      setSeconds(prevSec => prevSec -1);
    }
    if(seconds % 2 === 0){
      updateMessage();
    }
  }

  const updateContent = () => {
    fetch("./data/data.json")
      .then((response) => {response.json()
      })
      .then((data) => {
        if(!data){
          setContent(Messages.getMessages());
        }else{
          setContent(data);
        }
      });
  };

  const updateMessage = () => {
    if(content.length <= currentContentIndex + 1){
      setIndex(0)
    }else{
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const start = () => {setTimer(true);}

  const pause = () => {setTimer(false);}

  const refresh = () => {setSeconds(0); setMinutes(25)}
  

  return (
    <div className="App">
      <section className='test'></section>
      <main>
        <section className='control'>
          <button type="button" className='control__button' onClick={()=> {refresh()}}>
            <img src={Refresh} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button' onClick={()=> {start()}}>
            <img src={Play} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button' onClick={()=> {pause()}}>
            <img src={Pause} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
        </section>
        <section className='content'>
          <h1 className='content__timer'>{minutes === 0?``:`${minutes}:`}{seconds < 10?`0${seconds}`:seconds}</h1>
          <p className='content__message'>{content[currentContentIndex]}</p>
        </section>
        <section className='animation'>
          <img src={Mouse} alt="" className='animation__animal--style' />
        </section>
      </main>
    </div>
  );
}

export default App;
