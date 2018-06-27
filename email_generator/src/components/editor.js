import React from 'react';

import ClosingImage from './closingImage';
import Quote from './quote';
import Hero from './hero';
import Meetings from './meetings';
import News from './news';
import Testimonials from './testimonials';
import Reminders from './reminders';
import Weather from './weather';
import './editor.css';

const Editor = (props) => {

    return (
        <div className="editor">
            <h1>Email Generator</h1>
            <Weather handleChange={props.handleChange} handleSelect={props.handleSelect} temp={props.temp} value={props.weatherIcon} />
            <Hero handleSelect={props.handleHero} heroNames={props.state.heroNames} heroUrl={props.state.heroUrl} value={props.state.hero} uploadHero={props.uploadHero} />
            <Quote handleChange={props.handleChange} state={props.state} />
            <Meetings
                addMeeting={props.addMeeting}
                convertTime={props.convertTime}
                handleChange={props.handleMeetingChange}
                handleSelect={props.handleSelect}
                meetings={props.meetings}
                removeMeeting={props.removeMeeting}
                room={props.room}
            />
            <News addItem={props.addItem} handleChange={props.handleNewsChange} news={props.news} removeNews={props.removeNews} />
            <Testimonials handleChange={props.handleChange} state={props.state} />
            <Reminders state={props.state} addReminder={props.addReminder} employeeNames={props.state.employeeNames} eventType={props.eventType} handleChange={props.handleRemindersChange} handleSelect={props.handleSelect} reminders={props.reminders} removeReminder={props.removeReminder} />
            <ClosingImage closingNames={props.state.closingNames} handleSelect={props.handleClosing} value={props.state.closingImage} />
            <div className="button-wrapper">
                <button className="copy-html" onClick={props.copyToClipboard}>Copy</button>
            </div>
       </div>
    )
}

export default Editor;
