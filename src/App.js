
import './App.css';
import Refresh from "./image/refresh.png";
import Play from "./image/play.png";
import Pause from "./image/pause.png";
import Mouse from "./image/mouse-animal.png";

function App() {
  return (
    <div className="App">
      <main>
        <section className='control'>
          <button type="button" className='control__button'>
            <img src={Refresh} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button'>
            <img src={Play} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
          <button type="button" className='control__button'>
            <img src={Pause} alt="" className='control__button--style' />
            <label>Restart</label>
          </button>
        </section>
        <section className='content'>
          <p className='content__timer'>25:00</p>
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
