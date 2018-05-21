import React from 'react';

import Quote from './quote';
import Hero from './hero';
import MeetingRoom from './meetingRoom';
import './editor.css';

const Editor = (props) => {
    const rooms = props.meetings.map((obj, index) => 
        <MeetingRoom 
            addMeeting={props.addMeeting}
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
        </div>
    )
}

export default Editor;
