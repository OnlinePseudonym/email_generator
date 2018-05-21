import React, { Component } from 'react';

import {header, meetingHeader, newsHeader, testimonialHeader, remindersHeader, contentClose } from './markup';
import Preview from './preview';
import Editor from './editor';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: {},
            eventType: null,
            hero: '',
            /* photographer: 'Ricardo DeAratahna, Los Angeles Times',
            quoteTitle: 'Taking it Seriously',
            quote: 'Anything you suck at should make you nervous.',
            quoteAttribution: 'Chris Rock', */
            meetingRooms: [
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/showroom_icon_23x27.png', 
                    color: '#6D8AC4', 
                    name: 'The Showroom',
                    meetings: [{
                        timeslot: {
                            start: '10:00',
                            end: '11:30',
                        },
                        desc: 'JJ Ballesteros SM Call',
                    },{
                        timeslot: {
                            start: '12:30',
                            end: '13:30',
                        },
                        desc: 'GOYFF Status Call',
                    },{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon:'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/factory_icon_27x28.png', 
                    color: '#B8D03F', 
                    name: 'The Factory',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/theater_icon_25x31.png', 
                    color: '#F47C4B', 
                    name: 'The Theater',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/sunroom_icon_23x25.png', 
                    color: '#C95E62', 
                    name: 'The Sun Room',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/quietroom_icon_25x21.png', 
                    color: '#50BCBC', 
                    name: 'The Quiet Room',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/situation_icon_16x22.png', 
                    color: '#6D8AC4', 
                    name: 'The Situation Room',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
                { 
                    icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/corner_icon_19x19.png', 
                    color: '#B8D03F', 
                    name: 'The Corner Office',
                    meetings: [{
                        timeslot: {
                            start: '',
                            end: '',
                        },
                        desc: '',
                    },],
                },
            ],
            news: [{
                tagline: 'Lights',
                details: 'West-side lights will be turned off again until noon. No shenanigans.',
            },{
                tagline: '',
                details: '',
            }],
            photographer: '',
            quoteTitle: '',
            quote: '',
            quoteAttribution: '',
            quotePhoto: '',
            reminders: [
                {
                    name: 'Melanee Arnett',
                    type: 'Birthday',
                    years: '',
                },{
                    name: 'Michelle Corley',
                    type: 'Kitchen Duty',
                    years: '',
                },{
                    name: '',
                    type: '',
                    years: '',
                }
            ],
            weather: {
            },
        };

        this.addReminder = this.addReminder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMeetingChange = this.handleMeetingChange.bind(this);
        this.handleNewsChange = this.handleNewsChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleRemindersChange = this.handleRemindersChange.bind(this);
        this.addMeeting = this.addMeeting.bind(this);
        this.removeMeeting = this.removeMeeting.bind(this);
        this.removeReminder = this.removeReminder.bind(this);
    }

    componentDidMount() {
        this.setDate();
        this.setWeather();
    }

    addReminder(e) {
        e.preventDefault();

        const newReminders = [ ...this.state.reminders ];
        newReminders.push({ name: '', type: '', years: '', })

        const newState = { ...this.state };
        newState.reminders = newReminders;

        this.setState( newState );
    }

    handleSelect(e) {
        e.preventDefault();
        this.setState({ eventType: e.target.value });
    }

    handleChange(e) {
        e.preventDefault();
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    convertTime(time) {
        if (!time) return '';

        const modifiedTime = parseInt(time.split(':').join(''));
        if (modifiedTime % 100 === 0) {
            if (modifiedTime > 1159) {
                if (modifiedTime < 1300) {
                    return `${(modifiedTime/100).toString()}p`
                }
                return `${((modifiedTime/100) % 12).toString()}p`;
            }
        }
        if (modifiedTime > 1159) {
            if (modifiedTime < 1300) {
                return `${modifiedTime.toString()}p`
            }
            return `${(modifiedTime % 1200).toString()}p`
        }
        return `${modifiedTime}a`;
    }

    handleMeetingChange(e) {
        e.preventDefault();

        const [index, meetingIndex, name] = [ ...e.target.name.split('-')];
        let currMeeting;
        
        /* begin nesting depending on whether target is a time */

        if (name !== 'desc') {
            const currTimeslot = { ...this.state.meetingRooms[parseInt(index)].meetings[parseInt(meetingIndex)].timeslot };

            currTimeslot[name] = e.target.value;

            currMeeting = { ...this.state.meetingRooms[parseInt(index)].meetings[parseInt(meetingIndex)] };

            currMeeting.timeslot = currTimeslot;

        } else {
            currMeeting = { ...this.state.meetingRooms[parseInt(index)].meetings[parseInt(meetingIndex)] };

            currMeeting[name] = e.target.value;
        }

        /* make new nested state */

        const newMeetings = [ ...this.state.meetingRooms[parseInt(index)].meetings ];
        newMeetings[parseInt(meetingIndex)] = currMeeting;

        const newRoom = { ...this.state.meetingRooms[parseInt(index)] };
        newRoom.meetings = newMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index)] = newRoom;
        
        const newState = { ...this.state };
        newState.meetingRooms = newRooms;
        
        this.setState( newState );
    }

    handleNewsChange(e) {
        e.preventDefault();

        const newItem = { ...this.state.news[this.state.news.length - 1] }
        newItem[e.target.name] = e.target.value;

        const newNews = [ ...this.state.news ];
        newNews[this.state.news.length-1] = newItem;

        const newState = { ...newNews };
        newState.news = newNews;

        this.setState( newState );
    }

    handleRemindersChange(e) {
        e.preventDefault();

        const newReminder = { ...this.state.reminders[this.state.reminders.length-1] }
        newReminder[e.target.id] = e.target.value;
        newReminder.type = this.state.eventType;

        const newReminders = [ ...this.state.reminders ];
        newReminders[this.state.reminders.length-1] = newReminder;

        const newState = { ...this.state };
        newState.reminders = newReminders;

        this.setState( newState );
    }

    addItem = () => {
        const newNews = [ ...this.state.news ];

        newNews.push({ details: '', tagline: '',})

        const newState = { ...newNews };
        newState.news = newNews;

        this.setState( newState );
    }

    removeNews = (index) => {
        console.log('remove?')
        if (this.state.news.length <= 1) return;

        console.log('yes');
        const newItems = [ ...this.state.news ];

        const removedItems = newItems.slice(0,parseInt(index)).concat(newItems.slice(parseInt(index)+1));

        const newState = { ...this.state };
        newState.news = removedItems;
        console.log(this.state);
        console.log(newState);
        this.setState( newState );
    }

    addMeeting = (index) => {
        const newMeetings = [ ...this.state.meetingRooms[parseInt(index)].meetings ];
        newMeetings.push({ timeslot: { start: '', end: '' }, desc: ''});

        const newRoom = { ...this.state.meetingRooms[parseInt(index)] };
        newRoom.meetings = newMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index)] = newRoom;
        
        const newState = { ...this.state };
        newState.meetingRooms = newRooms;
        
        this.setState( newState );
    }

    removeMeeting = (index, meetingIndex) => {
        if (this.state.meetingRooms[parseInt(index)].meetings.length <= 1) return;

        const newMeetings = [ ...this.state.meetingRooms[parseInt(index)].meetings ];

        const removedMeetings = newMeetings.slice(0,parseInt(meetingIndex)).concat(newMeetings.slice(parseInt(meetingIndex)+1));

        const newRoom = { ...this.state.meetingRooms[parseInt(index)] };
        newRoom.meetings = removedMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index)] = newRoom;
        
        const newState = { ...this.state };
        newState.meetingRooms = newRooms;
        
        this.setState( newState );
    }

    setDate = () => {
        const day_key = { 0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday' };
        const month_key = { 0:'January', 1:'February', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'Decemeber' };
        const date = new Date(Date.now());
        const weekday = day_key[date.getDay()];
        const month = month_key[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        this.setState({ 
            date: {
                weekday,
                month,
                day,
                year,
            }
        });
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
            this.setState({
                weather: { 
                    icon: `${ICON_URL}${data.weather[0].icon}`,
                    temp: `${Math.round(data.main.temp)}`,
                },
            });
        })
        /* this.setState({
            weather: { 
                icon: `${ICON_URL}01d`,
                temp: `92`,
            },
        }); */
    }

    getDate(obj) {
        return `<tr><td align="center" valign="top" width="550" style="color:#999999; font-family:Arial,sans-serif; font-size:18px; font-weight:100; min-width:550px; width:550px;"> <p style="padding:0; margin:0;">${obj.weekday}, ${obj.month} ${obj.day}, ${obj.year}</p><div height="16" style="font-size:16px; height:16px; line-height:16px;">&nbsp;</div></td></tr>`
    }

    getWeather(obj) {
        return `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-left:24px"> <tbody> <tr> <td align="right" height="26" width="25" style="border-right:1px solid #999999; font-size:26px; height:26px; line-height:26px; padding-right:16px;"> <img src="${obj.icon}.png" alt="sunny"> </td><td height="26" width="13" style="font-size:26px; height:26px; line-height:26px; padding-left:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/thermometer_icon_13x26.png" alt=""> </td><td style="color:#777777; font-size:18px; padding-left:8px;">${obj.temp}&deg;</td></tr></tbody> </table> <div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div></td></tr>`;
    }

    getHero(url) {
        return `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><a href="http://www.lavidge.com/" target="_blank"><img alt="" border="0" src="${url}" align="top" width="550" style="display:block;"/></a><div style="height:23px; line-height:23px;">&nbsp;</div></td></tr>`;
    }

    getNewsItem(obj) {
        const tagline = obj.tagline ? `${obj.tagline}:` : '';
        return `<tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="450" style="padding-left:24px;"><tbody><tr style="color:#888888; font-family:Arial,sans-serif; font-size:14px;"><td valign="top" width="150"><p style="font-weight:700; margin:0">${tagline}</p></td><td valign="top" width="300"><p style="margin:0">${obj.details}</p></td></tr></tbody></table><div height="18" style="font-size:18px; height:18px; line-height:18px;">&nbsp;</div></td></tr>`
    }

    getNews(news) {
        return news.map(obj => this.getNewsItem(obj)).join('');
    }

    getQuote = (obj) => {
        return `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">${obj.quoteTitle}</h2><p style="font-size:15px;">${obj.quote}</p><p style="font-size:15px;">- ${obj.quoteAttribution}</p><p style="font-size:12px; font-style:italic;">Photo: ${obj.photographer}</p></td></tr>`;
    }

    getReminders(arr) {
        const getFirstName = (string) => {
            return string.split(' ')[0].toLowerCase();
        }
        const imageKey = {
            'Birthday': 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/happy_birthday_135x115.png',
            'Anniversary': 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/anniversary_200x60.png',
            'Kitchen Duty': `http://CustomerWebData.goolara.net/lavidge/2018MorningMail/kitchen_duty_160x80.png`, 
        };

        const getReminder = (obj) => {
            const imageMarkup = obj.type === 'Anniversary' ? `<table><tbody><tr><td><img src="${imageKey[obj.type]}" alt=""></td></tr><tr><td align="center" style="color:#F57E4D; font-family:Arial,sans-serif; font-size:30px; font-weight:700; padding-right:6px; text-align:center; text-transform:uppercase;">${obj.years} years</td></tr></tbody></table>` : `<img src="${imageKey[obj.type]}" alt="">`


            return `<tr><td><div height="24" style="height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-right:16px;">${imageMarkup}</td><td valign="top" style="padding-left:16px;"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #F47C4B;"><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/${getFirstName(obj.name)}.jpg" alt=""></td></tr><tr><td style="color:#F57E4D; font-family:Arial,sans-serif; font-size:16px; font-style:italic; font-weight:700; text-align:center;"><div height="8" style="height:8px; line-height:8px;">&nbsp;</div>${obj.name}</td></tr></tbody></table></td></tr></tbody></table><div height="32" style="height:32px; line-height:32px;">&nbsp;</div></td></tr><tr><td><div height="32" style="height:32px; line-height:32px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="150" style="border-bottom:1px dashed #888888; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table></td></tr>`
        }

        return arr.map(obj => {
            if (obj.type || obj.name ) {
                return getReminder(obj);
            }
            return;
        }).join('');
    }
    
    getRoom(obj) {
        return `</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="${obj.icon}" alt=""/></td><td style="padding-left:8px;"><h2 style="color:${obj.color}; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">${obj.name}</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>`;
    }

    getTimeslot(obj) {
        const start = this.convertTime(obj.timeslot.start),
                end = this.convertTime(obj.timeslot.end),
           timeslot = ( start || end ) ? `${start} - ${end}` : '';
        return `<tr><td align="center" valign="top" width="500" style="border-bottom:1px solid #CACACA; min-width:500px; width:500px;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="left" valign="top"><div style="font-size:8px; height:8px; line-height:8px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="right" height="16" width="200" style="color:#777777; font-family:Arial,sans-serif; font-size:14px; height:16px; line-height:16px; padding-right:16px; width:200px;"><div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div>${timeslot}<div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div></td><td height="16" width="300" style="border-left:1px solid #CACACA; color:#777777; font-family:Arial,sans-serif; font-size:14px; height:16px; line-height:16px; padding-left:16px; width:300px;"><div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div>${obj.desc}<div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div></td></tr></tbody></table><div style="font-size:8px; height:8px; line-height:8px;">&nbsp;</div></td></tr></tbody></table></td></tr>`
    }

    getMeetings(meetingRoomArr) {
        return meetingRoomArr.map(obj => {
            let timeslots = '';

            if (obj.meetings.length > 0) {
                timeslots = obj.meetings.map(obj => {
                    if (obj.timeslot.start || obj.timeslot.end || obj.desc) return this.getTimeslot(obj);
                }).join('');
            };

            return `${this.getRoom(obj)}${timeslots}`
        }).join('');
    }

    removeReminder(index) {
        if (this.state.reminders.length <= 1) return;

        const newReminders = [ ...this.state.reminders ];

        const removedReminders = newReminders.slice(0,parseInt(index)).concat(newReminders.slice(parseInt(index)+1));

        const newState = { ...this.state };
        newState.reminders = removedReminders;

        this.setState( newState );
    }

    render() {
        const markup = `${header}${this.getDate(this.state.date)}${this.getWeather(this.state.weather)}${this.getHero(this.state.hero)}${this.getQuote(this.state)}${meetingHeader}${this.getMeetings(this.state.meetingRooms)}${newsHeader}${this.getNews(this.state.news)}${testimonialHeader}${remindersHeader}${this.getReminders(this.state.reminders)}${contentClose}`;

        return (
            <div className="app">
                <Editor
                    addItem={this.addItem}
                    addMeeting={this.addMeeting}
                    addReminder={this.addReminder}
                    convertTime={this.convertTime}
                    eventType={this.state.eventType}
                    handleChange={this.handleChange}
                    handleMeetingChange={this.handleMeetingChange}
                    handleNewsChange={this.handleNewsChange}
                    handleSelect={this.handleSelect}
                    handleRemindersChange={this.handleRemindersChange}
                    meetings={this.state.meetingRooms}
                    reminders={this.state.reminders}
                    news={this.state.news}
                    removeMeeting={this.removeMeeting} state={this.state}
                    removeNews={this.removeNews}
                    removeReminder={this.removeReminder} />
                <Preview markup={markup} />
            </div>
        )
    }
}

export default App;