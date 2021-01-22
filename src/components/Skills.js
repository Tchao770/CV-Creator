import React, { Component } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';

class SkillInfo extends Component {
    constructor() {
        super();
        this.state = {
            skill: "Javascript",
            level: "5",
            editMode: true
        };
        this.temp = {
            skill: "",
            level: "",
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
        const { skill, level, yearsWorked } = this.temp;
        this.setState({
            skill: skill,
            level: level,
            yearsWorked: yearsWorked,
            editMode: false
        });
    }

    removeButton() {
        this.props.handleRemove(this.props.itemId);
    }

    renderDisplay() {
        const { skill, level } = this.state;
        return (
            <div className="eduDisplay" onClick={this.toggleEdit}>
                <h3>Skill: {skill}</h3>
                <p><b>level: </b> {level}</p>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { skill, level } = this.state;
        return (
            <div className={classname}>
                <input name="skill" placeholder="Company"
                    value={skill} onChange={this.handleChange} /><br />
                <input name="level" placeholder="level"
                    value={level} onChange={this.handleChange} /><br />
                <button onClick={this.handleSave}><MdDone /></button>
                <button onClick={this.handleCancel}><MdClear /></button>
                <button onClick={this.removeButton}><MdDelete /></button>
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

export default SkillInfo;