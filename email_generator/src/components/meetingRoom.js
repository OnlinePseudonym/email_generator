import React from 'react';

import Meeting from './meeting';

const MeetingRoom = (props) => {
    if (!props.room) return <div></div>;

    const getId = (string) => {
        return `${string.toLowerCase().split(' ').join('-')}`;
    }
    
    const index = props.meetings.findIndex(obj => obj.name === props.room )
    const currMeetings = props.meetings[index].meetings;
    /* console.log(props.meetings, index);
    console.log(currMeetings); */

    const displayMeetings = currMeetings.slice(0,-1);
    if (displayMeetings.length > 1) {
        displayMeetings.sort( (a,b) => new Date(`1970/01/01 ${a.timeslot.start}`) - new Date(`1970/01/01 ${b.timeslot.start}`));
    }

    const meetings = displayMeetings.map((obj, i) => {        
        if (i < displayMeetings.length) {
            if (obj.timeslot || obj.desc) {
                return <Meeting convertTime={props.convertTime} removeMeeting={props.removeMeeting} desc={obj.desc} timeslot={obj.timeslot} index={index} meetingIndex={i} />;
            };
        }
        return '';
    });

    return (
        <div className="meeting-room">
            <h3 className="meeting-room__name">{props.room}</h3>
            {meetings}
            <form onSubmit={(e) => props.addMeeting(index, e)}>
                <div className="form-wrapper">
                    <div className="timeslot">
                        <div className="form--text__input">
                            <input
                                id={`${getId(props.room)}-time-slot`}
                                className="form--text__input--input current-start"
                                name={`${index}-${currMeetings.length - 1}-start`}
                                onChange={props.handleChange}
                                placeholder="11a 1130a"
                                type="time"
                                value={currMeetings[currMeetings.length - 1].timeslot.start}
                            />
                            <label
                                htmlFor={`${getId(props.room)}-time-slot`}
                                className="form--text__input--label label"
                            >
                                Start
                            </label>
                        </div>
                        <div className="form--text__input">
                            <input
                                id={`${getId(props.room)}-time-slot`}
                                className="form--text__input--input"
                                name={`${index}-${currMeetings.length - 1}-end`}
                                onChange={props.handleChange}
                                placeholder="11a 1130a"
                                type="time"
                                value={currMeetings[currMeetings.length - 1].timeslot.end}
                            />
                            <label
                                htmlFor={`${getId(props.room)}-time-slot`}
                                className="form--text__input--label label"
                            >
                                End
                            </label>
                        </div>
                    </div>
                    <div className="form--text__input">
                        <input
                            id={`${getId(props.room)}-time-desc`}
                            className="form--text__input--input"
                            name={`${index}-${currMeetings.length - 1}-desc`}
                            onChange={props.handleChange}
                            placeholder="JJ Ballesteros SM Call"
                            type="text"
                            value={currMeetings[currMeetings.length - 1].desc}
                        />
                        <label
                            htmlFor={`${getId(props.room)}-time-desc`}
                            className="form--text__input--label label"
                        >
                            Description
                        </label>
                    </div>
                </div>
                <button className="add-item" type="submit" >ADD</button>
            </form>
        </div>
    )
    /* const getId = (string) => {
        return `${string.toLowerCase().split(' ').join('-')}`;
    } */

    /* const meetings = props.meetings.map((obj, index) => {        
        if (index < props.meetings.length - 1) {
            if (obj.timeslot || obj.desc) {
                return <Meeting convertTime={props.convertTime} removeMeeting={props.removeMeeting} desc={obj.desc} timeslot={obj.timeslot} index={props.index} meetingIndex={index} />;
            };
        }
        return '';
    }); */

    /* if (!props.name) return '';

    return (
        <div className="meeting-room">
            <h3 className="meeting-room__name">{props.name}</h3>
            {meetings}
            <form onSubmit={(e) => props.addMeeting(props.index, e)}>
                <div className="form-wrapper">
                    <div className="timeslot">
                        <div className="form--text__input">
                            <input
                                id={`${getId(props.name)}-time-slot`}
                                className="form--text__input--input"
                                name={`${props.index}-${props.meetings.length - 1}-start`}
                                onChange={props.handleChange}
                                placeholder="11a 1130a"
                                type="time"
                                value={props.meetings[props.meetings.length - 1].timeslot.start}
                            />
                            <label
                                htmlFor={`${getId(props.name)}-time-slot`}
                                className="form--text__input--label label"
                            >
                                Start
                            </label>
                        </div>
                        <div className="form--text__input">
                            <input
                                id={`${getId(props.name)}-time-slot`}
                                className="form--text__input--input"
                                name={`${props.index}-${props.meetings.length - 1}-end`}
                                onChange={props.handleChange}
                                placeholder="11a 1130a"
                                type="time"
                                value={props.meetings[props.meetings.length - 1].timeslot.end}
                            />
                            <label
                                htmlFor={`${getId(props.name)}-time-slot`}
                                className="form--text__input--label label"
                            >
                                End
                            </label>
                        </div>
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
                <button className="add-item" type="submit" >ADD</button>
            </form>
        </div>
    ) */
}

export default MeetingRoom;
