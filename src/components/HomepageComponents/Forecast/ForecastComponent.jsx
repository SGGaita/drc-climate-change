import React from 'react'
import './forecastElement.scss'
import { icons } from '../../../constants'

export const ForecastComponent = () => {
  return (
    <div className='forecast-container'>
      <div className="wrapper">
        <div className="item">
          <div className="top">
            Average temperature
          </div>
          <div className="bottom">
          <span className="icon"><img src={icons.upArrow} alt="" height={40} width={40} /></span>
            25 Celcius
          </div>
        </div>

        <div className="item">
          <div className="top">
            Average Precipitation
          </div>
          <div className="bottom">
          <span className="icon"><img src={icons.upArrow} alt="" height={40} width={40} /></span>
            125 mm
          </div>
        </div>

        <div className="item">
          <div className="top">
            Forest Cover
          </div>
          <div className="bottom">
            <span className="icon"><img src={icons.downArrow} alt="" height={40} width={40} /></span>
            4%
          </div>
        </div>
      </div>
    </div>
  )
}
