import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            number: "",
            editMode: true
        };
        this.temp = {
            fullName: "",
            email: "",
            number: "",
            editMode: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    toggleEdit() {
        this.temp = Object.assign(this.temp, this.state);
        this.setState({
            editMode: true
        });
    }

    handleChange(event) {
        this.setState({
            //...this.state,
            [event.target.name]: event.target.value
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
            <div>
                <h1 id="fullName">{fullName}</h1>
                <p>{email}</p>
                <p>{number}</p>
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { fullName, email, number } = this.state;
        return (
            <div className={classname}>
                <h2>General</h2>
                <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={this.handleChange} /><br />
                <input name="email" type="email" placeholder="E-mail" value={email} onChange={this.handleChange} /><br />
                <input name="number" placeholder="Phone Number" value={number} onChange={this.handleChange} /><br />
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

export default GeneralInfo;