import React from 'react';

const KitchenDuty = (props) => {

    const dropdown = props.employeeNames.map(file => `<option className="form--dropdown__input--option">${file}</option>`);

    dropdown.unshift('<option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>')

    return (
        <form onSubmit={props.addReminder}>
            <div className="dropdown-wrapper">
                <label htmlFor="name" className="form--dropdown--label label">Name</label>
                <select className="form--dropdown__input--select" dangerouslySetInnerHTML={{__html: dropdown }} id="name" name="emloyee-dropdown" onChange={props.handleChange} value={props.reminders[props.reminders.length-1].name} />
            </div>
            <button className="add-item" type="submit">ADD</button>
        </form>
    )
}

export default KitchenDuty;
