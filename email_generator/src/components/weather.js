import React from 'react';

const Weather = (props) => {

    return (
        <div className="form--dropdown__input">
            <h2>Weather Icon</h2>
            <label className="form-dropdown__input--label" for="weather-icon">Icon</label>
            <div className="form-wrapper">
                <div>
                    <select className="form--dropdown__input--select" id="dropdown" name="weather-icon" onChange={props.handleSelect} value={props.value} >
                        <option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>
                        <option className="form--dropdown__input--option">Microburst</option>
                        <option className="form--dropdown__input--option">Partly Cloudy</option>
                        <option className="form--dropdown__input--option">Rainy</option>
                        <option className="form--dropdown__input--option">Sunny</option>
                        <option className="form--dropdown__input--option">Windy</option>
                    </select>
                </div>
                <div className="form--text__input">
                    <input id="temp" className="form--text__input--input" name="temp" onChange={props.handleChange} placeholder="105" type="text" value={props.temp} />
                    <label htmlFor="temp" className="form--text__input--label label">Temp</label>
                </div>
            </div>
        </div>
    )
}

export default Weather;