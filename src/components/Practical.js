import React, { Component } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';

class PracticalInfo extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "",
            position: "",
            timeBegin: "",
            timeEnd: "",
            task: "",
            editMode: true
        };
        this.temp = {
            companyName: "",
            position: "",
            timeBegin: "",
            timeEnd: "",
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
        const { companyName, position, timeBegin, timeEnd } = this.temp;
        this.setState({
            companyName: companyName,
            position: position,
            timeBegin: timeBegin,
            timeEnd: timeEnd,
            editMode: false
        });
    }

    removeButton() {
        this.props.handleRemove(this.props.itemId);
    }



    renderDisplay() {
        const { companyName, position, timeBegin, timeEnd, task } = this.state;
        const taskArr = task.split(/\r?\n/);

        return (
            <div className="eduDisplay" onClick={this.toggleEdit}>
                <h3>{position}</h3>
                <p>{companyName}, {timeBegin} - {timeEnd}</p>
                <ul>
                    {
                        taskArr.map(task => {
                            return <li>{task}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { companyName, position, timeBegin, timeEnd, task } = this.state;
        return (
            <div className={[classname, "pracDisplay"].join(' ')}>
                <label>Company Name</label><br />
                <input name="companyName" placeholder="Name of Company"
                    value={companyName} onChange={this.handleChange} /><br />
                <label>Position</label><br />
                <input name="position" placeholder="Fullstack Developer, etc."
                    value={position} onChange={this.handleChange} /><br />
                <label>First Month of Employment</label><br />
                <input name="timeBegin" placeholder="MM/YYYY"
                    value={timeBegin} onChange={this.handleChange} /><br />
                <label>Last Month of Employment</label><br />
                <input name="timeEnd" placeholder="MM/YYYY or Current"
                    value={timeEnd} onChange={this.handleChange} /><br />
                <label>Relevant Tasks</label><br/>
                <textarea name="task" placeholder="Press enter for new task" value={task} rows="10" cols="22" onChange={this.handleChange} /><br />
                <MdDone className="buttons" onClick={this.handleSave} />
                <MdClear className="buttons" onClick={this.handleCancel} />
                <MdDelete className="buttons" onClick={this.removeButton} />
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