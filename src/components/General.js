/*
    // Idiot's implementation of something that can be done with a single line of code...
    // This was how I implemented it on the other files as well ahahaha...

    const toggleEdit = () => {
        const labels = ["fullName", "email", "number"];
        temp.current = [fullName, email, number].map(
            (ref, index) => {
                return temp.current[index] = { [labels[index]]: ref };
            }
        );
        setEditMode(true);
    }


    const handleCancel = () => {
        const tObj = {};
        temp.current.forEach((t) => {
            Object.assign(tObj, t)
        });
        setGeneralFields(tObj);
        setEditMode(false);
    }
*/

import React, { useState, useReducer, useRef } from 'react';
import { MdDone, MdClear, MdPhone, MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function GeneralInfo(props) {
    const temp = useRef();
    const [editMode, setEditMode] = useState(true);
    const [generalFields, setGeneralFields] = useReducer
        ((state, action) => ({ ...state, ...action }),
            {
                fullName: "",
                email: "",
                number: ""
            }
        );

    const toggleEdit = () => {
        temp.current = generalFields;
        setEditMode(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGeneralFields({
            [name]: value
        });
    }

    const handleSave = (event) => {
        event.preventDefault();
        const [name, email, number] = event.target;
        const options = [name.value, email.value, number.value]
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in General Section")
        }
        else {
            setEditMode(false);
        }
    }

    const handleCancel = () => {
        setGeneralFields(temp.current);
        setEditMode(false);
    }

    const { fullName, email, number } = generalFields;
    function renderDisplay() {
        return (
            <div className="genDisplay" onClick={toggleEdit}>
                <h1 id="fullName">{fullName}</h1>
                <p id="email"><MdEmail value={{ size: "200em" }} />
                    {email}
                </p>
                <p id="phone"><MdPhone />
                    {number}
                </p>
            </div>
        );
    }

    function FancyButtons() {
        return (
            <IconContext.Provider value={{ size: "2em" }}>
                <button type="submit">
                    <MdDone className="buttons" />
                </button>
                <button>
                    <MdClear className="buttons" onClick={handleCancel} />
                </button>
            </IconContext.Provider>
        )
    }

    function renderEdit() {
        const { classname } = props;
        return (
            <form className={classname} onSubmit={handleSave}>
                <h2 style={{ textAlign: "left" }}>General</h2>
                <label>Full Name</label><br />
                <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleChange} /><br />
                <label>E-mail</label><br />
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleChange} /><br />
                <label>Phone Number</label><br />
                <input
                    name="number"
                    placeholder="(XXX)XXX-XXXX"
                    value={number}
                    onChange={handleChange} /><br />
                <FancyButtons />
            </form>
        );
    }

    return (editMode) ? renderEdit() : renderDisplay();
}