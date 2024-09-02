import React, { useState } from 'react';

import './Header.css';

const Header = (props) => {
    const [weatherInfo, setWeatherInfo] = props.value;
    const setBtnClick = props.setBtnClick;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState('');
    console.log(weatherInfo);

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