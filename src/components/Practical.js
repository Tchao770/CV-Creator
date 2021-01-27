import React, { useState, useReducer, useRef } from 'react';
import { MdDone, MdClear, MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function PracticalInfo(props) {
    const temp = useRef();
    const [editMode, setEditMode] = useState(true);
    const [practicalFields, setPracticalFields] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            companyName: "",
            position: "",
            timeBegin: "",
            timeEnd: "",
            task: "",
        }
    );

    const toggleEdit = () => {
        temp.current = practicalFields;
        setEditMode(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setPracticalFields({
            [name]: value
        });
    }

    const handleSave = (event) => {
        event.preventDefault();
        const [company, position, timeB, timeE] = event.target;
        const options = [company.value, position.value, timeB.value, timeE.value];
        if (options.indexOf("") > -1) {
            alert("Please fill out all fields in Practical Experience section")
        }
        else {
            setEditMode(false);
        }
    }

    const handleCancel = () => {
        setPracticalFields(temp.current);
        setEditMode(false);
    }

    const removeButton = () => props.handleRemove(props.itemId);


    const { companyName, position, timeBegin, timeEnd, task } = practicalFields;
    function renderDisplay() {
        const taskArr = task.split(/\r?\n/);

        return (
            <div className="eduDisplay" onClick={toggleEdit}>
                <h3>{position}</h3>
                <p>{companyName}, {timeBegin} - {timeEnd}</p>
                <ul>
                    {
                        taskArr.map(task => {
                            return <li>{task}</li>
                        })
                    }
                </ul>
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
                <label>Company Name</label><br />
                <input
                    name="companyName"
                    placeholder="Name of Company"
                    value={companyName}
                    onChange={handleChange} /><br />
                <label>Position</label><br />
                <input
                    name="position"
                    placeholder="Fullstack Developer, etc."
                    value={position}
                    onChange={handleChange} /><br />
                <label>First Month of Employment</label><br />
                <input
                    name="timeBegin"
                    placeholder="MM/YYYY"
                    value={timeBegin}
                    onChange={handleChange} /><br />
                <label>Last Month of Employment</label><br />
                <input
                    name="timeEnd"
                    placeholder="MM/YYYY or Current"
                    value={timeEnd}
                    onChange={handleChange} /><br />
                <label>Relevant Tasks</label><br />
                <textarea name="task" placeholder="Press enter for new task" value={task} rows="5" cols="33" onChange={handleChange} /><br />
                <FancyButtons />
            </form>
        );
    }

    return (editMode) ? renderEdit() : renderDisplay();
}