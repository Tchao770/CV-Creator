import React, { Component } from 'react';
import { MdDone, MdClear } from 'react-icons/md';

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Sample Name",
            email: "example@gmail.com",
            number: "(123) 456-7890",
            editMode: true
        };
        this.temp = {
            fullName: "",
            email: "",
            number: "",
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
        const { fullName, email, number } = this.temp;
        this.setState({
            fullName: fullName,
            email: email,
            number: number,
            editMode: false
        });
    }

    renderDisplay() {
        const { fullName, email, number } = this.state;
        return (
            <div className="genDisplay" onClick={this.toggleEdit}>
                <h1 id="fullName">{fullName}</h1>
                <p id="email"><b>E-mail:</b> {email}</p>
                <p id="phone"><b>Mobile:</b> {number}</p>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { fullName, email, number } = this.state;
        return (
            <div className={classname}>
                <h2>General</h2>
                <input name="fullName" type="text" placeholder="Full Name"
                    value={fullName} onChange={this.handleChange} /><br />
                <input name="email" type="email" placeholder="E-mail"
                    value={email} onChange={this.handleChange} /><br />
                <input name="number" placeholder="Phone Number"
                    value={number} onChange={this.handleChange} /><br />
                <MdDone className="buttons" onClick={this.handleSave}/>
                <MdClear className="buttons" onClick={this.handleCancel}/>
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

export default GeneralInfo;