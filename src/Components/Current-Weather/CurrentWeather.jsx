import React from 'react'
import "./CurrentWeather.css"
import WeatherIcons from '../WeatherIcons/WeatherIcons';

const CurrentWeather = ({ data }) => {

    const description = data.weather[0].main;


    return (
        <div className="weather">
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <div className='weather-icon'> <WeatherIcons description={description} /> </div>
                
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='para-row'>
                        <span className='para-label top'>Details</span>
                    </div>
                    <div className='para-row'>
                        <span className='para-label'>Feels like</span>
                        <span className='para-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='para-row'>
                        <span className='para-label'>Wind Speed</span>
                        <span className='para-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='para-row'>
                        <span className='para-label'>Humidity</span>
                        <span className='para-value'>{data.main.humidity} %</span>
                    </div>
                    <div className='para-row'>
                        <span className='para-label'>Pressure</span>
                        <span className='para-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CurrentWeather 
