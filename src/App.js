import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';



function App() {
  const [btnClick, setBtnClick] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  return (
    <div className="outerDiv">
      <div className='innerDiv'>
        {
          btnClick?<></>:<Header value={[weatherInfo, setWeatherInfo]} setBtnClick={setBtnClick} ></Header>
        }
        <Weather value={[weatherInfo, setWeatherInfo]} setBtnClick={setBtnClick} btnClick={btnClick}></Weather>
      </div>
    </div>
  );
}

export default App;