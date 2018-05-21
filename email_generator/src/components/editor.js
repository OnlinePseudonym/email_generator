import React from 'react';

import Quote from './quote';
import Hero from './hero';
import MeetingRoom from './meetingRoom';
import News from './news';
import Reminders from './reminders';
import './editor.css';

const Editor = (props) => {
    const rooms = props.meetings.map((obj, index) => 
        <MeetingRoom 
            addMeeting={props.addMeeting}
            convertTime={props.convertTime}
            handleChange={props.handleMeetingChange}
            index={index}
            meetings={obj.meetings}
            name={obj.name}
            removeMeeting={props.removeMeeting}
        />
    )

    return (
        <div className="editor">
            <Hero handleChange={props.handleChange} value={props.state.hero} />
            <Quote handleChange={props.handleChange} state={props.state} />
            {rooms}
            <News addItem={props.addItem} handleChange={props.handleNewsChange} news={props.news} removeNews={props.removeNews} />
            <Reminders addReminder={props.addReminder} eventType={props.eventType} handleChange={props.handleRemindersChange} handleSelect={props.handleSelect} reminders={props.reminders} removeReminder={props.removeReminder} />
        </div>
    )
}

export default Editor;
