import React, { useState, useReducer, useRef } from 'react';
import { MdDone, MdClear } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function EducationInfo(props) {
    const temp = useRef();
    const [editMode, setEditMode] = useState(true);
    const [educationFields, setEducationFields] = useReducer
        (
            (state, newState) => ({
                ...state, ...newState
            }),
            {
                schoolName: "",
                major: "",
                gradDate: "",
            }
        )

    const toggleEdit = () => {
        temp.current = educationFields;
        setEditMode(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEducationFields({
            [name]: value,
        })
    }

    const handleSave = (event) => {
        event.preventDefault();
        const [school, major, date] = event.target;
        const options = [school.value, major.value, date.value]
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in Educational section");
        }
        else {
            setEditMode(false);
        }
    }

    function handleCancel() {

        setEducationFields(temp.current);
        setEditMode(false);
    }

    const { schoolName, major, gradDate } = educationFields;
    function renderDisplay() {
        return (
            <div className="eduDisplay" onClick={toggleEdit}>
                <h3>{major}</h3>
                <p>{schoolName}</p>
                <p>Graduation: {gradDate}</p>
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
                <label>Institution</label><br />
                <input
                    name="schoolName"
                    placeholder="University"
                    value={schoolName}
                    onChange={handleChange} /><br />
                <label>Major</label><br />
                <input
                    name="major"
                    placeholder="BS/AA, Major"
                    value={major}
                    onChange={handleChange} /><br />
                <label>Graduation Date</label><br />
                <input
                    name="gradDate"
                    placeholder="Expected MM/YYYY, or MM/YYYY"
                    value={gradDate}
                    onChange={handleChange} /><br />
                <FancyButtons />
            </form>
        );
    }

    return (editMode) ? renderEdit() : renderDisplay();
}
