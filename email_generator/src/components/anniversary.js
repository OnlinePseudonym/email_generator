import React from 'react';

const Anniversary = (props) => {

    const employeeDropdown = props.employeeNames.map(file => `<option className="form--dropdown__input--option">${file}</option>`);
    const yearDropdown = [...Array(50).keys()].map(number => `<option className="form--dropdown__input--option">${number}</option>`);

    employeeDropdown.unshift('<option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>')
    yearDropdown.unshift('<option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>')

    return (
        <form onSubmit={props.addReminder}>
            <div className="form-wrapper">
                <div className="dropdown-wrapper">
                    <label htmlFor="name" className="form--dropdown--label label">Name</label>
                    <select className="form--dropdown__input--select" dangerouslySetInnerHTML={{__html: employeeDropdown }} id="name" name="name" onChange={props.handleChange} value={props.reminders[props.reminders.length-1].name} />
                </div>
                <div className="dropdown-wrapper">
                    <label htmlFor="years" className="form--dropdown--label label">Years</label>
                    <select className="form--dropdown__input--select" dangerouslySetInnerHTML={{__html: yearDropdown }} id="years" name="years" onChange={props.handleChange} value={props.reminders[props.reminders.length-1].years} />
                </div>
            </div>
            <button className="add-item" type="submit">ADD</button>
        </form>
    )
}

export default Anniversary;
