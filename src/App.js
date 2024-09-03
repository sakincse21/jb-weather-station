import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';



function App() {
  const [btnClick, setBtnClick] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [forecast, setForecast] = useState([]);
  return (
    <div className="outerDiv">
      <div className='innerDiv'>
        {
          btnClick?<></>:<Header setWeatherInfo={setWeatherInfo} setBtnClick={setBtnClick} setForecast={setForecast} ></Header>
        }
        <Weather value={[weatherInfo, setWeatherInfo]} forecast={forecast} setBtnClick={setBtnClick} btnClick={btnClick}></Weather>
      </div>
    </div>
  );
}

export default App;