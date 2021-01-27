import React, { useState, useRef } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function SkillInfo(props) {
    const temp = useRef("");
    const [skill, setSkill] = useState("");
    const [editMode, setEditMode] = useState(true);

    const toggleEdit = () => {
        temp.current = skill
        setEditMode(true);
    }

    const handleChange = (event) => {
        const { value } = event.target
        setSkill(value);
    }

    const handleSave = (event) => {
        event.preventDefault();
        if (event.target[0].value === "") {
            alert("Please fill out all fields in Skills section")
        }
        else {
            setEditMode(false);
        }
    }

    const handleCancel = () => {
        setSkill(temp.current);
        setEditMode(false);
    }

    const removeButton = () => {
        props.handleRemove(props.itemId);
    }

    function renderDisplay() {
        return (
            <div className="eduDisplay" onClick={toggleEdit}>
                <h3>- {skill}</h3>
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
                <button>
                    <MdDelete className="buttons" onClick={removeButton} />
                </button>
            </IconContext.Provider>
        )
    }

    function renderEdit() {
        const { classname } = props;
        return (
            <form className={classname} onSubmit={handleSave}>
                <label>Skill</label><br />
                <input name="skill" placeholder="C++, Python, etc."
                    value={skill} onChange={handleChange} /><br />

                <FancyButtons />
            </form>
        );
    }

    return (editMode) ? renderEdit() : renderDisplay();
}

