import React, { useState } from 'react';

import './Header.css';

const Header = (props) => {
    const setWeatherInfo = props.setWeatherInfo;
    const setForecast=props.setForecast;
    const setBtnClick = props.setBtnClick;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState('');

    const handleCity = (e) => {
        setCity(e.target.value.toLowerCase());
        e.preventDefault();
    };

    const getLatLon = async () => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${apiKey}`)
                    .then(resp => resp.json())
                    .then(data => {
                        setWeatherInfo(data);
                        console.log(data);
                        setBtnClick(true);
                        //sessionStorage.setItem(city, JSON.stringify(weatherInfo));
                    });
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${apiKey}`)
                .then(res=>res.json())
                .then(data=>{
                    const newData=data.list.slice(0,6);
                    let tempForecast=[];
                    newData.map(ti=>{
                        const info={
                            time: `${ti.dt_txt.slice(11,15)}`,
                            temp: `${parseFloat(ti.main.temp)}`
                        }
                        tempForecast.push(info);
                    })
                    setForecast(tempForecast);
                    console.log(tempForecast);
                    
                });
                
            })
    }
    return (
        <div className='header'>
            <div className='text-center mb-3' >
                <h2 className='fs-2'>JB Weather Station</h2>
            </div>
            <div className='my-3'>
                <div className="input-group justify-content-center">
                    <div className="form-outline search-box text-center" data-mdb-input-init>
                        <input id="searchTerm" type="search" placeholder='Enter City...' onChange={handleCity} />
                        <button type="button" className="bg-opacity-25 text-white" onClick={getLatLon} data-mdb-ripple-init>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;