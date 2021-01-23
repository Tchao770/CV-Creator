import React, { Component } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';

class PracticalInfo extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "Mount Olympus",
            position: "Pointious, God of Pointers",
            yearsWorked: "3 years",
            task: "",
            relevantTasks: [],
            editMode: true
        };
        this.temp = {
            companyName: "",
            position: "",
            yearsWorked: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.removeButton = this.removeButton.bind(this);
    }

    toggleEdit() {
        Object.assign(this.temp, this.state);
        this.setState({
            editMode: true
        });
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSave(event) {
        this.setState({
            [event.target.name]: event.target.value,
            editMode: false
        });
        event.preventDefault();
    }

    handleCancel(event) {
        const { companyName, position, yearsWorked } = this.temp;
        this.setState({
            companyName: companyName,
            position: position,
            yearsWorked: yearsWorked,
            editMode: false
        });
    }

    removeButton() {
        this.props.handleRemove(this.props.itemId);
    }

    renderDisplay() {
        const { companyName, position, yearsWorked } = this.state;
        return (
            <div className="eduDisplay" onClick={this.toggleEdit}>
                <h3>{companyName}</h3>
                <p><b>Position: </b> {position}</p>
                <p><b>Years worked: </b> {yearsWorked}</p>
                <ul>
                    <li>Work</li>
                    <li>Pace</li>
                </ul>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { companyName, position, yearsWorked } = this.state;
        return (
            <div className={[classname, "pracDisplay"].join(' ')}>
                <input name="companyName" placeholder="Company"
                    value={companyName} onChange={this.handleChange} /><br />
                <input name="position" placeholder="Position"
                    value={position} onChange={this.handleChange} /><br />
                <input name="yearsWorked" placeholder="Years Worked"
                    value={yearsWorked} onChange={this.handleChange} /><br />
                <textarea name="task" placeholder="Tasks" cols="45"/><br/>
                <MdDone className="buttons" onClick={this.handleSave}/>
                <MdClear className="buttons" onClick={this.handleCancel}/>
                <MdDelete className="buttons" onClick={this.removeButton}/>
            </div>
        );
    }

    render() {
        if (this.state.editMode)
            return this.renderEdit();
        else
            return this.renderDisplay();
    }
}

export default PracticalInfo;