import React, { useState, useReducer } from 'react';
import { MdDone, MdClear, MdPhone, MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function GeneralInfo(props) {
    const [editMode, setEditMode] = useState(true);
    // useReducer enables storing multiple states into a single variable to keep DRY
    const [generalFields, setGeneralFields] = useReducer
        (
            (state, newState) => ({
                ...state, ...newState
            }),
            {
                fullName: "",
                email: "",
                number: "",
            }
        );
    const temp =
    {
        fullName: "",
        email: "",
        number: "",
    }
    // Destructured since it is used in a good majority of the functions passed
    const { fullName, email, number } = generalFields;

    const toggleEdit = () => {
        temp.fullName = fullName;
        temp.email = email;
        temp.number = number;
        setEditMode(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGeneralFields({
            [name]: value
        });
    }


    function handleSave(event) {
        event.preventDefault();
        console.log("Edit Saved");
        const [name, email, number] = event.target;
        const options = [name.value, email.value, number.value]
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in General Section")
        }
        else {
            setEditMode(false);
        }
    }

    function handleCancel(event) {
        event.preventDefault();
        console.log("Edit Canceled");
        const { name } = event.target;
        setGeneralFields({
            [name]: temp[name],
        });
        setEditMode(false);
    }


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
                <IconContext.Provider value={{ size: "2em" }}>
                    <button type="submit">
                        <MdDone className="buttons" />
                    </button>
                    <button>
                        <MdClear className="buttons" onClick={handleCancel} />
                    </button>
                </IconContext.Provider>
            </form>
        );
    }

    return (editMode) ? renderEdit() : renderDisplay();
}