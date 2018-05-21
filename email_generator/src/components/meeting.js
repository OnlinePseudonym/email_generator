import React from 'react';

import './meeting.css';

const Meeting = (props) => {
    const start = props.convertTime(props.timeslot.start),
            end = props.convertTime(props.timeslot.end),
       timeslot = ( start || end ) ? `${start} - ${end}` : '';
    return (
        <div className="meeting">
            <p className="time-slot">{timeslot}</p>
            <p className="desc">{props.desc}</p>
            <button className="remove-item" onClick={ () => props.removeMeeting(props.index, props.meetingIndex) } >X</button>
        </div>
    )
}

export default Meeting;
