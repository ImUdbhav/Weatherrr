import React from 'react'
import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion"
import "./forecast.css"
import WeatherIcons from '../WeatherIcons/WeatherIcons'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const ForecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <div>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, id) => (
                    <AccordionItem key={id}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-items">
                                    <div className='icon-small'>
                                    <WeatherIcons description={item.weather[0].main}/></div>

                                    <label className='day'>{ForecastDays[id]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='minmax'>{Math.round(item.main.temp_min)}°C /
                                        {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>
    )
}

export default Forecast
