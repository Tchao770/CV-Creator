import React, { Component } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

class SkillInfo extends Component {
    constructor() {
        super();
        this.state = {
            skill: "",
            level: 0,
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
        event.preventDefault();
        if (event.target[0].value === "") {
            alert("Please fill out all fields in Skills section")
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
                editMode: false
            });
        }
    }

    handleCancel(event) {
        const { skill, level } = this.temp;
        this.setState({
            skill: skill,
            level: level,
            editMode: false
        });
    }

    removeButton() {
        this.props.handleRemove(this.props.itemId);
    }

    renderDisplay() {
        const { skill, level } = this.state;
        const rating = [];

        for (let i = 0; i < level; i++) {
            rating.push("O");
        }

        return (
            <div className="eduDisplay" onClick={this.toggleEdit}>
                <h3>- {skill}</h3>
                {/*<p><b></b> {rating}</p>*/}
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { skill } = this.state;
        return (
            <form className={classname} onSubmit={this.handleSave}>
                <label>Skill</label><br />
                <input name="skill" placeholder="C++, Python, etc."
                    value={skill} onChange={this.handleChange} /><br />
                {/*<label>Level (Out of 10)</label><br />
                <input type="number" name="level"
                value={level} onChange={this.handleChange} /><br />*/}
                <IconContext.Provider value={{ size: "2em" }}>
                    <button type="submit"><MdDone className="buttons" /></button>
                    <button><MdClear className="buttons" onClick={this.handleCancel} /></button>
                    <button><MdDelete className="buttons" onClick={this.removeButton} /></button>
                </IconContext.Provider>
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

export default SkillInfo;