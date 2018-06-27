import React from 'react';

import MeetingRoom from './meetingRoom';

import './meetings.css';

const Meetings = (props) => {

    return (
        <div class="form--dropdown__input meetings">
            <h2>Meetings</h2>
            <label class="form-dropdown__input--label" for="room">Meeting Room</label>
            <div>
                <select class="form--dropdown__input--select" id="room" name="room" onChange={props.handleSelect} value={props.room} >
                    <option class="form--dropdown__input--option" disabled selected value> -- select an option -- </option>
                    <option class="form--dropdown__input--option">The Showroom</option>
                    <option class="form--dropdown__input--option">The Factory</option>
                    <option class="form--dropdown__input--option">The Theater</option>                    
                    <option class="form--dropdown__input--option">The Sun Room</option>
                    <option class="form--dropdown__input--option">The Quiet Room</option>
                    <option class="form--dropdown__input--option">The Situation Room</option>
                    <option class="form--dropdown__input--option">The Corner Office</option>
                </select>
            </div>
            <MeetingRoom addMeeting={props.addMeeting} convertTime={props.convertTime} handleChange={props.handleChange} meetings={props.meetings} removeMeeting={props.removeMeeting} room={props.room} />
        </div>
    )
}

export default Meetings;
