import React from 'react';

import Meeting from './meeting';
import './meetingRoom.css';

const MeetingRoom = (props) => {
    const meetings = props.meetings.map((obj, index) => {
        if (obj.timeslot || obj.desc) {
            return <Meeting removeMeeting={props.removeMeeting} desc={obj.desc} timeslot={obj.timeslot} index={props.index} meetingIndex={index} />;
        };
        return '';
    });

    const getId = (string) => {
        return `${string.toLowerCase().split(' ').join('-')}`;
    }

    return (
        <div className="meeting-room">
            <h2 className="meeting-room__name">{props.name}</h2>
            {meetings}
            <div className="form-wrapper">
                <div className="form--text__input">
                    <input
                        id={`${getId(props.name)}-time-slot`}
                        className="form--text__input--input"
                        name={`${props.index}-${props.meetings.length - 1}-timeslot`}
                        onChange={props.handleChange}
                        placeholder="11a 1130a"
                        type="text"
                        value={props.meetings[props.meetings.length - 1].timeslot}
                    />
                    <label
                        htmlFor={`${getId(props.name)}-time-slot`}
                        className="form--text__input--label label"
                    >
                        Time slot
                    </label>
                </div>
                <div className="form--text__input">
                    <input
                        id={`${getId(props.name)}-time-desc`}
                        className="form--text__input--input"
                        name={`${props.index}-${props.meetings.length - 1}-desc`}
                        onChange={props.handleChange}
                        placeholder="JJ Ballesteros SM Call"
                        type="text"
                        value={props.meetings[props.meetings.length - 1].desc}
                    />
                    <label
                        htmlFor={`${getId(props.name)}-time-desc`}
                        className="form--text__input--label label"
                    >
                        Description
                    </label>
                </div>
            </div>
            <button className="add-meeting" onClick={() => props.addMeeting(props.index)} >ADD</button>
        </div>
    )
}

export default MeetingRoom;
