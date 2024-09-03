import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Weather.css';
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const Weather = (props) => {
    const value = props.value;
    const btnClick = props.btnClick;
    const setBtnClick = props.setBtnClick;
    const weatherInfo = value[0];
    const forecast = props.forecast;

    //const setWeatherInfo = value[1];
    return (
        (btnClick) === true ?
            (
                < div className='my-5 mx-auto text-center outerBox row d-flex p-3 gap-2 gap-md-3 justify-content-center align-items-center' >
                    <div className="mainInfo specialDiv col-12 row d-flex justify-content-center align-items-center">
                        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center ">
                            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`} alt="info" width={'120px'} />
                            <h3>{weatherInfo.weather[0].main}</h3>
                            <p>{weatherInfo.weather[0].description}</p>
                        </div>
                        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                            <h2 className='fw-bold my-sm-4'>{weatherInfo.main.temp} °C</h2>
                            <h5 className='mb-4 mb-sm-0'>{weatherInfo.name}, {weatherInfo.sys.country}</h5>
                        </div>

                        <div className="col-12 mx-0 pr-4 myGraph">
                            <ResponsiveContainer width={"100%"} height={'auto'} aspect={3}>
                                <LineChart data={forecast} >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="temp" stroke="red" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Min Temp</h6>
                        <h5 className='fw-bold'>{weatherInfo.main.temp_min} °C</h5>
                    </div>
                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Max Temp</h6>
                        <h5 className='fw-bold'>{weatherInfo.main.temp_max} °C</h5>
                    </div>
                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Humidity</h6>
                        <h5 className='fw-bold'>{weatherInfo.main.humidity} %</h5>
                    </div>
                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Feels Like</h6>
                        <h5 className='fw-bold'>{weatherInfo.main.feels_like} °C</h5>
                    </div>
                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Speed</h6>
                        <h5 className='fw-bold'>{weatherInfo.wind.speed} km/h</h5>
                    </div>
                    <div className="col-sm-5 px-1 py-3 specialDiv">
                        <h6>Pressure</h6>
                        <h5 className='fw-bold'>{weatherInfo.main.pressure} hPa</h5>
                    </div>
                    <div className="col-12">
                        <button className='myBtn specialDiv fw-bold py-2 px-md-5 px-auto' onClick={() => { setBtnClick(false) }}>Reset</button>
                    </div>
                </div >
            ) : (
                < div className='text-center pt-4'>
                    <p>Search Your City Now...</p>
                </div>
            )

    );
};

export default Weather;