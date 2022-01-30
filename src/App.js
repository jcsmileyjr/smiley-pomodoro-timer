
import './App.css';
import Refresh from "./image/refresh.png";
import Play from "./image/play.png";
import Pause from "./image/pause.png";
import Mouse from "./image/mouse-animal.png";

function App() {
  return (
    <div className="App">
      <main>
        <div className='control'>
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
        </div>
        <div className='content'>
          <p className='content__timer'>25:00</p>
          <p className='content__message'>"You may delay, but time will not"</p>
          <div className='content__animation--container'>
            <img src={Mouse} alt="" className='content__animal--style' />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
