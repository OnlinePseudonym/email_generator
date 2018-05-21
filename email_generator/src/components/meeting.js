import React from 'react';

import './meeting.css';

const Meeting = (props) => {
    return (
        <div className="meeting">
            <p className="time-slot">{props.timeslot}</p>
            <p className="desc">{props.desc}</p>
            <button className="remove-meeting" onClick={ () => props.removeMeeting(props.index, props.meetingIndex) } >X</button>
        </div>
    )
}

export default Meeting;
