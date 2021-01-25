import React, { Component } from 'react';
import { MdDone, MdClear } from 'react-icons/md';

class EducationalInfo extends Component {
    constructor() {
        super();
        this.state = {
            schoolName: "",
            major: "",
            gradDate: "",
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
        event.preventDefault();
        const [school, major, date] = event.target;
        const options = [school.value, major.value, date.value]
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in Educational section")
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
                editMode: false
            });
        }
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
                <h3>{major}</h3>
                <p>{schoolName}</p>
                <p>Graduation: {gradDate}</p>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { schoolName, major, gradDate } = this.state;
        return (
            <form className={classname} onSubmit={this.handleSave}>
                <label>Institution</label><br />
                <input name="schoolName" placeholder="University"
                    value={schoolName} onChange={this.handleChange} /><br />
                <label>Major</label><br />
                <input name="major" placeholder="BS/AA, Major"
                    value={major} onChange={this.handleChange} /><br />
                <label>Graduation Date</label><br />
                <input name="gradDate" placeholder="Expected MM/YYYY, or MM/YYYY"
                    value={gradDate} onChange={this.handleChange} /><br />
                <button type="submit"><MdDone className="buttons"/></button>
                <MdClear className="buttons" onClick={this.handleCancel} />
            </form>
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