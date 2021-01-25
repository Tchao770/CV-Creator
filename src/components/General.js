import React, { Component } from 'react';
import { MdDone, MdClear, MdPhone, MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

class GeneralInfo extends Component {
    constructor() {
        super();
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
        const [name, email, number] = event.target.parentNode;
        const options = [name.value, email.value, number.value]
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in General Section")
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
                editMode: false
            });
        }
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
                <p id="email"><MdEmail value={{ size: "200em" }} /> {email}</p>
                <p id="phone"><MdPhone /> {number}</p>
            </div>
        );
    }

    renderEdit() {
        const { classname } = this.props;
        const { fullName, email, number } = this.state;
        return (
            <form className={classname}>
                <h2 style={{ textAlign: "left" }}>General</h2>
                <label>Full Name</label><br />
                <input name="fullName" type="text" placeholder="Full Name"
                    value={fullName} onChange={this.handleChange} /><br />
                <label>E-mail</label><br />
                <input name="email" type="email" placeholder="E-mail"
                    value={email} onChange={this.handleChange} /><br />
                <label>Phone Number</label><br />
                <input name="number" placeholder="(XXX)XXX-XXXX"
                    value={number} onChange={this.handleChange} /><br />
                <IconContext.Provider value={{ size: "2em" }}>
                    <MdDone className="buttons" onClick={this.handleSave} />
                    <MdClear className="buttons" onClick={this.handleCancel} />
                </IconContext.Provider>
            </form>
        );
    }

    render() {
        return (this.state.editMode) ? this.renderEdit() : this.renderDisplay();
    }
}

export default GeneralInfo;