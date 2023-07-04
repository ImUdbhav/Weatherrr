import React from 'react'
import sunnyIcon from './Icons/day.svg';
import cloudyIcon from './Icons/cloudy.svg';
import rainyIcon from './Icons/rainy-5.svg';
import snowyIcon from './Icons/snowy-1.svg';

const WeatherIcons = ({description}) => {
   
  const WeatherIcons = {
        Clear: sunnyIcon,
        Clouds: cloudyIcon,
        Rain: rainyIcon,
        Snow: snowyIcon,
    }
  
    const weatherIcon = WeatherIcons[description] || null;

  return (
    <div>
         { weatherIcon ? <img src={weatherIcon} alt="Weather Icon" /> : null}
    </div>
  )
}

export default WeatherIcons
