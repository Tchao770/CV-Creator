import React, { Component } from 'react';

class EducationalInfo extends Component {
    constructor() {
        super();
        this.state = {
            schoolName: "Sample University",
            major: "Computer Science",
            gradDate: "06/2020",
            editMode: true
        };
        this.temp = {
            schoolName: "",
            major: "",
            gradDate: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
        const { schoolName, major, gradDate } = this.temp;
        this.setState({
            schoolName: schoolName,
            major: major,
            gradDate: gradDate,
            editMode: false
        });
    }

    renderDisplay() {
        const { schoolName, major, gradDate } = this.state;
        return (
            <div className="eduDisplay" onClick={this.toggleEdit}>
                <h3>{schoolName}</h3>
                <p><b>Major: </b> {major}</p>
                <p><b>Graduation Date: </b> {gradDate}</p>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { schoolName, major, gradDate } = this.state;
        return (
            <div className={classname}>
                <input name="schoolName" placeholder="Institution"
                    value={schoolName} onChange={this.handleChange} /><br />
                <input name="major" placeholder="Major"
                    value={major} onChange={this.handleChange} /><br />
                <input name="gradDate" placeholder="Graduation Date"
                    value={gradDate} onChange={this.handleChange} /><br />
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
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

export default EducationalInfo;