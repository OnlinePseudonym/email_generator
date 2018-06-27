import React, { Component } from 'react';
import axios from 'axios';

import {htmlHead, htmlClose, meetingHeader, contentClose } from './markup';
import Preview from './preview';
import Editor from './editor';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            closingImage: '',
            closingList: [],
            closingNames: [],
            closingUrl: '',
            date: {},
            employeeList: [],
            employeeNames: [],
            eventType: null,
            hero: '',
            heroList: [],
            heroNames: [],
            heroUrl: '',
            meetingRooms: [
                { 
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/showroom_icon_23x27.png', 
                    color: '#6D8AC4', 
                    name: 'The Showroom',
                    meetings: [
                        {
                            timeslot: {
                                start: '',
                                end: '',
                            },
                            desc: '',
                        },
                    ],
                },
                { 
                    icon:'http://files.lavidgeinteractive.com/lavidge/images/icons/factory_icon_27x28.png', 
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
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/theater_icon_25x31.png', 
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
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/sunroom_icon_23x25.png', 
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
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/quietroom_icon_25x21.png', 
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
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/situation_icon_16x22.png', 
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
                    icon: 'http://files.lavidgeinteractive.com/lavidge/images/icons/corner_icon_19x19.png', 
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
                tagline: '',
                details: '',
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
                    fileName: '',
                    name: '',
                    type: '',
                    years: '',
                },
            ],
            room: null,
            temp: '',
            testimonialAttribution: '',
            testimonialContent: '',
            testimonialHeadline: '',
            testimonialSubHeadline: '',
            weatherIcon: 'Sunny',
        };

        this.addReminder = this.addReminder.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClosing = this.handleClosing.bind(this);
        this.handleHero = this.handleHero.bind(this);
        this.handleMeetingChange = this.handleMeetingChange.bind(this);
        this.handleNewsChange = this.handleNewsChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleRemindersChange = this.handleRemindersChange.bind(this);
        this.addMeeting = this.addMeeting.bind(this);
        this.removeMeeting = this.removeMeeting.bind(this);
        this.removeReminder = this.removeReminder.bind(this);
        this.uploadClosing = this.uploadClosing.bind(this);
    }

    componentDidMount() {
        this.setClosingList();
        this.setDate();
        this.setEmployeeList();
        this.setHeroList();
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

    copyToClipboard() {

        window.getSelection().selectAllChildren( document.querySelector('.preview') );
        document.execCommand('copy');

    };

    handleSelect(e) {
        const toCamelCase = (string) => {
            const output = string.split('-')
                .map(str => str[0].toUpperCase().concat(str.slice(1)))
                .join('');

            return output[0].toLowerCase().concat(output.slice(1))
        }
        
        e.preventDefault();

        const newState = {};
        newState[toCamelCase(e.target.name)] = e.target.value;

        this.setState( newState );
    }

    handleChange(e) {
        e.preventDefault();

        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleClosing(e) {
        e.preventDefault();

        const fileName = this.state.closingList[this.state.closingNames.indexOf(e.target.value)];
        const url = `http://files.lavidgeinteractive.com/lavidge/images/media/closing_images/${fileName.split(' ').join('%20')}`

        this.setState({
            closingImage: e.target.value,
            closingUrl: url,
        });
    }

    handleHero(e) {
        e.preventDefault();

        const fileName = this.state.heroList[this.state.heroNames.indexOf(e.target.value)];
        const url = `http://files.lavidgeinteractive.com/lavidge/images/media/heroes/${fileName.split(' ').join('%20')}`

        this.setState({
            hero: e.target.value,
            heroUrl: url,
        });
    }

    convertTime(time) {
        if (!time) return '';

        let modifiedTime = parseInt(time.split(':').join(''),10);

        if (modifiedTime > 1159) {
            if (modifiedTime > 1259) {
                if (modifiedTime % 100 === 0) {
                    return `${ ((modifiedTime % 1200) / 100).toString() }p`
                }
                return `${(modifiedTime % 1200).toString()}p`
            }
            if (modifiedTime % 100 === 0) {
                return `${ (modifiedTime / 100).toString() }p`
            }
            return `${modifiedTime.toString()}p`
        } else {
            if (modifiedTime < 100) {
                modifiedTime += 1200;
            }
            if (modifiedTime % 100 === 0) {
                return `${ (modifiedTime/100).toString() }a`
            }
            return `${modifiedTime.toString()}a`
        }
    }

    handleMeetingChange(e) {
        e.preventDefault();

        const [index, meetingIndex, name] = [ ...e.target.name.split('-')];
        let currMeeting;
        
        /* begin nesting depending on whether target is a time */

        if (name !== 'desc') {
            const currTimeslot = { ...this.state.meetingRooms[parseInt(index,10)].meetings[parseInt(meetingIndex,10)].timeslot };

            currTimeslot[name] = e.target.value;

            currMeeting = { ...this.state.meetingRooms[parseInt(index,10)].meetings[parseInt(meetingIndex,10)] };

            currMeeting.timeslot = currTimeslot;

        } else {
            currMeeting = { ...this.state.meetingRooms[parseInt(index,10)].meetings[parseInt(meetingIndex,10)] };

            currMeeting[name] = e.target.value;
        }

        /* make new nested state */

        const newMeetings = [ ...this.state.meetingRooms[parseInt(index,10)].meetings ];
        
        newMeetings[parseInt(meetingIndex,10)] = currMeeting;

        const newRoom = { ...this.state.meetingRooms[parseInt(index,10)] };
        newRoom.meetings = newMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index,10)] = newRoom;
        
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
        const newReminder = { ...this.state.reminders[this.state.reminders.length-1] };
        newReminder[e.target.id] = e.target.value;

        if (e.target.id === 'name') {
            newReminder.fileName = this.state.employeeList[this.state.employeeNames.indexOf(e.target.value)];
        }

        newReminder.type = this.state.eventType;

        const newReminders = [ ...this.state.reminders ];
        newReminders[this.state.reminders.length-1] = newReminder;

        const newState = { ...this.state };
        newState.reminders = newReminders;

        this.setState( newState );
    }

    addItem = (e) => {
        e.preventDefault();
        const newNews = [ ...this.state.news ];

        newNews.push({ details: '', tagline: '',})

        const newState = { ...newNews };
        newState.news = newNews;

        document.querySelector('#news').focus();

        this.setState( newState );
    }

    addMeeting = (index, e) => {
        e.preventDefault();
        const newMeetings = [ ...this.state.meetingRooms[parseInt(index,10)].meetings ];

        /* const sortedMeetings = newMeetings.slice(0,-1); */
        let sortedMeetings;
        if (newMeetings.length > 1) {
            sortedMeetings = newMeetings.sort( (a,b) => {
                return new Date(`1970/01/01 ${a.timeslot.start}`) - new Date(`1970/01/01 ${b.timeslot.start}`)
            });
        } else {
            sortedMeetings = newMeetings;
        }

        sortedMeetings.push({ timeslot: { start: '', end: '' }, desc: ''});

        const newRoom = { ...this.state.meetingRooms[parseInt(index,10)] };
        newRoom.meetings = sortedMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index,10)] = newRoom;
        
        const newState = { ...this.state };
        newState.meetingRooms = newRooms;

        document.querySelector('.current-start').focus();
        
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

    setEmployeeList = () => {
        /* axios.get("https://cors-anywhere.herokuapp.com/http://files.lavidgeinteractive.com/media/employees/") */
        axios.get("http://files.lavidgeinteractive.com/media/employees/")
            .then(res => {
                const template = document.createElement('template'),
                          html = res.request.response.trim();

                template.innerHTML = html;
                
                const nodeArray = [...template.content.querySelectorAll('a')];
                const fileNames = [];
                const names = [];

                nodeArray.forEach(node => {
                    if (node.href.match(/\.(jpe?g|png|gif)$/)) {
                        fileNames.push(node.innerText);
                        names.push(node.innerText.slice(0,node.innerText.indexOf('.'))
                                                 .split('_')
                                                 .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
                                                 .join(' '));
                    }
                })
                
                this.setState( {
                    employeeList: fileNames,
                    employeeNames: names,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    setHeroList = () => {
        /* axios.get("https://cors-anywhere.herokuapp.com/http://files.lavidgeinteractive.com/media/heroes/") */
        axios.get("http://files.lavidgeinteractive.com/media/heroes/")
            .then(res => {
                const template = document.createElement('template'),
                          html = res.request.response.trim();

                template.innerHTML = html;
                
                const nodeArray = [...template.content.querySelectorAll('a')];
                const fileNames = [];
                const names = [];

                nodeArray.forEach(node => {
                    if (node.href.match(/\.(jpe?g|png|gif)$/)) {
                        fileNames.push(node.innerText);
                        names.push(node.innerText.slice(0,node.innerText.indexOf('.'))
                                                 .split('_')
                                                 .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
                                                 .join(' '));
                    }
                })
                
                this.setState( {
                    heroList: fileNames,
                    heroNames: names,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    setClosingList = () => {
        /* axios.get("https://cors-anywhere.herokuapp.com/http://files.lavidgeinteractive.com/media/closing_images/") */
        axios.get("http://files.lavidgeinteractive.com/media/closing_images/")
        .then(res => {
            const template = document.createElement('template'),
                      html = res.request.response.trim();

            template.innerHTML = html;
            
            const nodeArray = [...template.content.querySelectorAll('a')];
            const fileNames = [];
            const names = [];

            nodeArray.forEach(node => {
                if (node.href.match(/\.(jpe?g|png|gif)$/)) {
                    fileNames.push(node.innerText);
                    names.push(node.innerText.slice(0,node.innerText.indexOf('.'))
                                                 .split('_')
                                                 .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
                                                 .join(' '));
                }
            })
            
            this.setState( {
                closingList: fileNames,
                closingNames: names,
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    setWeather = () => {
        const LAT = '33.5109647',
              LON = '-112.0221439',
         ROOT_URL = `https://cors-anywhere.herokuapp.com/https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?lat=${LAT}&lon=${LON}&format=24+hourly&numDays=2`;

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                handleRes(this);
            }
        };
        xhttp.open("GET", ROOT_URL, true);
        xhttp.send();

        const handleRes = (xml) => {
            const xmlDoc = xml.responseXML;
            const nodeList = xmlDoc.getElementsByTagName("temperature");
            const array = [ ...nodeList ];
            if (array.length === 0) return;

            const maxTemp = array.filter( node => node.attributes.type.value === 'maximum')[0]
                .getElementsByTagName("value")[0]
                .textContent;

            this.setState({ temp: maxTemp })
        }

        /* Open weather map api, no daily max */
        /*
        const API_KEY = '1dc63f64495010fa14c55e32f2639709',
                  LAT = '33.5109647',
                  LON = '-112.0221439',
             ROOT_URL = `https://cors-anywhere.herokuapp.com/https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?lat=${LAT}&lon=${LON}&format=24+hourly&numDays=1`,
             ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial&lat=${LAT}&lon=${LON}`,
         FIVE_DAY_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial&units=imperial&lat=${LAT}&lon=${LON}`,
             ICON_URL = 'https://openweathermap.org/img/w/'; 
        
        fetch(ROOT_URL)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok: ' + res.statusText);
            }).then(data => {
                this.setState({
                    weather: { 
                        icon: `${ICON_URL}${data.weather[0].icon}`,
                        temp: `${Math.round(data.main.temp_max)}`,
                    },
                });
            }
        ) */
    }

    getClosingImage(url) {
        if (this.state.closingImage === '') return '';

        return `</tbody></table><div height="64" style="height:64px; line-height:64px;">&nbsp;</div></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td align="center"><img src="${url}" alt="" style="display:block;max-width:500px"><div height="64" style="height:64px; line-height:64px;">&nbsp;</div></td></tr>`
    }

    getDate(obj) {

        const getOrdinalNum = (n) => {
            return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
        };

        return `<table style="background-color:#ECECEC;min-width:550px;width:550px;" align="center" bgcolor="#ECECEC" border="0" cellpadding="0" cellspacing="0" width="550"><tbody><tr><td style="color:#AAAAAA; font-family:Arial, sans-serif; font-size:13px;min-width:550px;width:550px;" align="center" valign="top" width="550"><div style="height:20px; line-height:20px;">&nbsp;</div>${obj.month} ${getOrdinalNum(obj.day)} LAVIDGE Morning Email<div style="height:20px; line-height:20px;">&nbsp;</div></td></tr></tbody></table><table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FFFFFF; color:#000000; font-family:Arial, sans-serif; font-size:20px; width:100%;"><tbody><tr><td> <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="550" style="min-width:550px; width:550px;"><tbody> <tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><div style="height:38px; line-height:38px;">&nbsp;</div><a title="Lavidge.com" href="http://www.lavidge.com/" target="_blank"><img alt="Lavidge" border="0" src="http://CustomerWebData.goolara.net/lavidge/assets/logo.png" align="top" height="66" width="149" style="color:#F57E4D; display:block; height:66px; width:149px;"/></a></td></tr><tr><td><div height="18" style="height:18px; line-height:18px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table><div height="18" style="height:18px; line-height:18px;">&nbsp;</div></td></tr><tr><td align="center" valign="top" width="550" style="color:#999999; font-family:Arial,sans-serif; font-size:18px; font-weight:100; min-width:550px; width:550px;"> <p style="padding:0; margin:0;">${obj.weekday}, ${obj.month} ${obj.day}, ${obj.year}</p><div height="16" style="font-size:16px; height:16px; line-height:16px;">&nbsp;</div></td></tr>`
    }
    
    getHero(url) {
        return `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><a href="http://www.lavidge.com/" target="_blank"><img alt="" border="0" src="${url}" align="top" width="550" style="display:block;"/></a><div style="height:23px; line-height:23px;">&nbsp;</div></td></tr>`;
    }
    
    getMeetings(meetingRoomArr) {
        const noMeetings = '<tr><td align="center" valign="top" width="500" style="border-bottom:1px solid #CACACA; color:#777777; font-family:Arial,sans-serif; font-size:14px; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div>No Meetings Scheduled today.<div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';

        return meetingRoomArr.map(obj => {
            let timeslots = '';
            const meetings = obj.meetings.slice(0,-1);
            
            if (meetings.length === 0) {
                timeslots = noMeetings;
            }else {
                meetings.sort( (a,b) => new Date(`1970/01/01 ${a.timeslot.start}`) - new Date(`1970/01/01 ${b.timeslot.start}`))

                timeslots = meetings.map(obj => {
                    if (obj.timeslot.start || obj.timeslot.end || obj.desc) return this.getTimeslot(obj);
                    return '';
                }).join('');
            };
            
            return `${this.getRoom(obj)}${timeslots}`
        }).join('');
    }
    
    getNews(news) {
        if (news.length === 2) return '';
        const newsHeader = '</tbody></table><div style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="450" style="min-width:450px; width:450px"><tbody><tr><td><div height="48" style="height:48px; line-height:48px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/megaphone_icon_31x21.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic;" >3rd Floor News</h2></td></tr></tbody></table><div height="18" style="font-size:18px; height:18px; line-height:18px;">&nbsp;</div></td></tr>';
        const divider = '</tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table></td></tr>'

        return `${newsHeader}${news.map(obj => this.getNewsItem(obj)).join('')}${divider}`;
    }
    
    getNewsItem(obj) {
        const tagline = obj.tagline ? `${obj.tagline}:` : '';
        return `<tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" width="450" style="padding-left:24px;"><tbody><tr style="color:#888888; font-family:Arial,sans-serif; font-size:14px;"><td valign="top" width="150"><p style="font-weight:700; margin:0">${tagline}</p></td><td valign="top" width="300"><p style="margin:0">${obj.details}</p></td></tr></tbody></table><div height="18" style="font-size:18px; height:18px; line-height:18px;">&nbsp;</div></td></tr>`
    }
    
    getQuote = (obj) => {
        const title = obj.quoteTitle ? `<h2 style="color:#F57E4D; font-size:16px; font-weight:700;">${obj.quoteTitle}</h2>` : '';
        const quote = obj.quote ? `<p style="font-size:15px;">${obj.quote}</p>` : '';
        const attribution = obj.quoteAttribution ? `<p style="font-size:15px;">- ${obj.quoteAttribution}</p>` : '';
        const photographer = obj.photographer ? `<p style="font-size:12px; font-style:italic;">Photo: ${obj.photographer}</p>` : '';

    return `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><table align="center" valign="top" width="400" style="min-width:400px; width:400px;"><tbody><tr><td align="center" valign="top" width="400" style="color:#555555; font-family:Arial,sans-serif; min-width:400px; width:400px;">${title}${quote}${attribution}${photographer}</td></tr></tbody></table></td></tr>`;
    }
    
    getReminders(arr) {

        if (arr.length === 1 && arr[0].name === '' && arr[0].years === '' ) return '';
        
        const remindersHeader = '</tbody></table><div style="font-size:80px; height:80px; line-height:80px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/reminder_icon_22x34.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic; margin:0;" >Reminders</h2></td></tr></tbody></table></td></tr>';
        const divider = `</tbody></table><div height="32" style="height:32px; line-height:32px;">&nbsp;</div></td></tr><tr><td><div height="32" style="height:32px; line-height:32px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="150" style="border-bottom:1px dashed #888888; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table></td></tr>`;
        const sectionDivider = '</tbody></table><div style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><div height="32" style="height:32px; line-height:32px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table></td></tr>';

        const imageKey = {
            'Birthday': 'http://files.lavidgeinteractive.com/lavidge/images/icons/happy_birthday_135x115.png',
            'Anniversary': 'http://files.lavidgeinteractive.com/lavidge/images/icons/anniversary_200x60.png',
            'Kitchen Duty': `http://files.lavidgeinteractive.com/lavidge/images/icons/kitchen_duty_160x80.png`, 
        };
        
        const getReminder = (obj, index) => {
            const imageMarkup = obj.type === 'Anniversary' ? `<table><tbody><tr><td><img src="${imageKey[obj.type]}" alt=""></td></tr><tr><td align="center" style="color:#F57E4D; font-family:Arial,sans-serif; font-size:30px; font-weight:700; padding-right:6px; text-align:center; text-transform:uppercase;">${obj.years} years</td></tr></tbody></table>` : `<img src="${imageKey[obj.type]}" alt="">`
            
            
            return `<tr><td><div height="24" style="height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="220">${imageMarkup}</td><td valign="top" style="padding-left:16px;"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #F47C4B; padding:0 16px;"><img src="http://files.lavidgeinteractive.com/lavidge/images/media/employees/${obj.fileName}" alt="" ></td></tr><tr><td style="color:#F57E4D; font-family:Arial,sans-serif; font-size:16px; font-style:italic; font-weight:700; text-align:center;"><div height="8" style="height:8px; line-height:8px;">&nbsp;</div>${obj.name}</td></tr></tbody></table></td></tr>${ index < arr.length - 2 ? divider : arr[arr.length - 1].type === '' ? '' : divider}`
        }
        
        return `${remindersHeader}${arr.map((obj, index) => {
            if (index === arr.length) return '';
            if (obj.type || obj.name ) {
                return getReminder(obj, index);
            }
            return '';
        }).join('')}${sectionDivider}`;
    }
    
    getRoom(obj) {
        return `</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:8px; font-size:8px; line-height:8px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="${obj.icon}" alt=""/></td><td style="padding-left:8px;"><h2 style="color:${obj.color}; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">${obj.name}</h2></td></tr></tbody></table><div style="height:8px; font-size:8px; line-height:8px;">&nbsp;</div></td></tr>`;
    }

    getTestimonial(obj) {
        if (obj.testimonialHeadline === '' && obj.testimonialSubHeadline === '' && obj.testimonialContent === '' && obj.testimonialAttribution === '') return '';
        return `</tbody></table><div style="font-size:64px; height:64px; line-height:64px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://files.lavidgeinteractive.com/lavidge/images/icons/colorwheel_icon_20x20.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic; margin:0;" >${obj.testimonialHeadline}</h2></td></tr></tbody></table></td></tr><tr><td align="center"><div height="12" style="height:12px; line-height:12px;">&nbsp;</div><h3 style="color:#888888; font-family:Arial,sans-serif; font-size:14px; font-weight:700; margin:0;">${obj.testimonialSubHeadline}</h3><div height="16" style="height:16px; line-height:16px;">&nbsp;</div></td></tr><tr><td align="center" style="color:#888888; font-family:Arial,sans-serif; font-size:14px; line-height:22px; text-align:center; width:425px"><p style=" margin:0;">${obj.testimonialContent}</p><div height="4" style="height:4px; line-height:4px;">&nbsp;</div><p style="margin:0;"><em>${obj.testimonialAttribution}</em></p></td></tr></tbody></table><div height="32" style="height:32px; line-height:32px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table></td></tr>`
    }
    
    getTimeslot(obj) {

        const start = this.convertTime(obj.timeslot.start),
        end = this.convertTime(obj.timeslot.end),
        timeslot = ( start || end ) ? `${start} - ${end}` : '';
        return `<tr><td align="center" valign="top" width="500" style="border-bottom:1px solid #CACACA; min-width:500px; width:500px;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="left" valign="top"><div style="font-size:8px; height:8px; line-height:8px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="right" height="16" width="200" style="color:#777777; font-family:Arial,sans-serif; font-size:14px; height:16px; line-height:16px; padding-right:16px; width:200px;"><div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div>${timeslot}<div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div></td><td height="16" width="300" style="border-left:1px solid #CACACA; color:#777777; font-family:Arial,sans-serif; font-size:14px; height:16px; line-height:16px; padding-left:16px; width:300px;"><div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div>${obj.desc}<div style="font-size:12px; height:12px; line-height:12px;">&nbsp;</div></td></tr></tbody></table><div style="font-size:8px; height:8px; line-height:8px;">&nbsp;</div></td></tr></tbody></table></td></tr>`
    }
    
    getWeather() {
        const formatString = (string) => {
            if (!string) return '';
            return string.split(' ').join('_').toLowerCase();
        }
        return `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-left:24px"> <tbody> <tr> <td align="right" height="26" width="25" style="border-right:1px solid #999999; font-size:26px; height:26px; line-height:26px; padding-right:16px;"> <img src="http://files.lavidgeinteractive.com/lavidge/images/temp_icons/${formatString(this.state.weatherIcon)}.png" alt=""> </td><td height="26" width="13" style="font-size:26px; height:26px; line-height:26px; padding-left:16px;"> <img src="http://files.lavidgeinteractive.com/lavidge/images/icons/thermometer_icon_13x26.png" alt=""> </td><td style="color:#777777; font-size:18px; padding-left:8px;">${this.state.temp}&deg;</td></tr></tbody> </table> <div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div></td></tr>`;
    }
    
    removeMeeting = (index, meetingIndex) => {
        if (this.state.meetingRooms[parseInt(index,10)].meetings.length <= 1) return;

        const newMeetings = [ ...this.state.meetingRooms[parseInt(index,10)].meetings ];

        const removedMeetings = newMeetings.slice(0,parseInt(meetingIndex,10)).concat(newMeetings.slice(parseInt(meetingIndex,10)+1));

        const newRoom = { ...this.state.meetingRooms[parseInt(index,10)] };
        newRoom.meetings = removedMeetings;

        const newRooms = [ ...this.state.meetingRooms ];
        newRooms[parseInt(index,10)] = newRoom;
        
        const newState = { ...this.state };
        newState.meetingRooms = newRooms;
        
        this.setState( newState );
    }
    
    removeNews = (index) => {
        console.log('remove?')
        if (this.state.news.length <= 1) return;

        console.log('yes');
        const newItems = [ ...this.state.news ];

        const removedItems = newItems.slice(0,parseInt(index,10)).concat(newItems.slice(parseInt(index,10)+1));

        const newState = { ...this.state };
        newState.news = removedItems;
        console.log(this.state);
        console.log(newState);
        this.setState( newState );
    }
    
    removeReminder(index) {
        if (this.state.reminders.length <= 1) return;
        
        const newReminders = [ ...this.state.reminders ];
        
        const removedReminders = newReminders.slice(0,parseInt(index,10)).concat(newReminders.slice(parseInt(index,10)+1));

        const newState = { ...this.state };
        newState.reminders = removedReminders;

        this.setState( newState );
    }

    uploadClosing(e) {
        e.preventDefault();

        const data = new FormData();

        data.append('api_key','295117919363841');
        data.append('file', this.state.closingImage);
        data.append('public_id', this.state.closingImage.name);
        data.append('timestamp', Date.now()/1000);
        data.append('upload_preset', 'gxblkqay');

        axios.post('https://api.cloudinary.com/v1_1/kreynolds/image/upload', data)
            .then(res => {
                this.setState({ closingUrl: res.data.secure_url })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const markup = `${this.getDate(this.state.date)}${this.getWeather()}${this.getHero(this.state.heroUrl)}${this.getQuote(this.state)}${meetingHeader}${this.getMeetings(this.state.meetingRooms)}${this.getNews(this.state.news)}${this.getTestimonial(this.state)}${this.getReminders(this.state.reminders)}${this.getClosingImage(this.state.closingUrl)}${contentClose}`;

        return (
            <div className="app">
                <Editor
                    addItem={this.addItem}
                    addMeeting={this.addMeeting}
                    addReminder={this.addReminder}
                    convertTime={this.convertTime}
                    copyToClipboard={this.copyToClipboard}
                    eventType={this.state.eventType}
                    handleChange={this.handleChange}
                    handleClosing={this.handleClosing}
                    handleHero={this.handleHero}
                    handleMeetingChange={this.handleMeetingChange}
                    handleMeetingSelect={this.handleMeetingSelect}
                    handleNewsChange={this.handleNewsChange}
                    handleSelect={this.handleSelect}
                    handleRemindersChange={this.handleRemindersChange}
                    meetings={this.state.meetingRooms}
                    news={this.state.news}
                    reminders={this.state.reminders}
                    removeMeeting={this.removeMeeting}
                    removeNews={this.removeNews}
                    removeReminder={this.removeReminder}
                    room={this.state.room}
                    state={this.state}
                    temp={this.state.temp}
                    uploadClosing={this.uploadClosing}
                    uploadHero={this.uploadHero}
                    weatherIcon={this.state.weatherIcon}
                />
                <Preview markup={markup} />
            </div>
        )
    }
}

export default App;