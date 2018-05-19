import React, { Component } from 'react';

import Preview from './preview';
import Editor from './editor';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            /* photographer: 'Ricardo DeAratahna, Los Angeles Times',
            quoteTitle: 'Taking it Seriously',
            quote: 'Anything you suck at should make you nervous.',
            quoteAttribution: 'Chris Rock', */
            photographer: '',
            quoteTitle: '',
            quote: '',
            quoteAttribution: '',
            quotePhoto: '',
            weather: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setDate();
        this.setWeather();
    }

    handleChange(e) {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    setDate = () => {
        const day_key = { 0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday' };
        const month_key = { 0:'January', 1:'February', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'Decemeber' };
        const date = new Date(Date.now());

        const date_markup = `<tr><td align="center" valign="top" width="550" style="color:#999999; font-family:Arial,sans-serif; font-size:18px; font-weight:100; min-width:550px; width:550px;"> <p style="padding:0; margin:0;">${day_key[date.getDay()]}, ${month_key[date.getMonth()]} ${date.getDate() + 1}, ${date.getFullYear()}</p><div height="16" style="font-size:16px; height:16px; line-height:16px;">&nbsp;</div></td></tr>`

        this.setState({ date: date_markup, });
    }

    setWeather = () => {
        const API_KEY = '1dc63f64495010fa14c55e32f2639709',
                  LAT = '33.5109647',
                  LON = '-112.0221439',
             ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial&lat=${LAT}&lon=${LON}`,
         FIVE_DAY_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial&units=imperial&lat=${LAT}&lon=${LON}`,
             ICON_URL = 'https://openweathermap.org/img/w/';

        fetch(ROOT_URL).then(function(res) {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network response was not ok: ' + res.statusText);
        }).then(data => {
            const weather = `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-left:24px"> <tbody> <tr> <td align="right" height="26" width="25" style="border-right:1px solid #999999; font-size:26px; height:26px; line-height:26px; padding-right:16px;"> <img src="${ICON_URL}${data.weather[0].icon}.png" alt="sunny"> </td><td height="26" width="13" style="font-size:26px; height:26px; line-height:26px; padding-left:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/thermometer_icon_13x26.png" alt=""> </td><td style="color:#777777; font-size:18px; padding-left:8px;">${Math.round(data.main.temp)}&deg;</td></tr></tbody> </table> <div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div></td></tr>`;
            this.setState({ weather, });
        })
    }

    render() {
        return (
            <div className="app">
                <Editor handleChange={this.handleChange} state={this.state} />
                <Preview quote={this.state.quote} state={this.state} />
            </div>
        )
    }
}

export default App;