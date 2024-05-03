import React, {useState} from 'react'

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(true)
    }

    function handleKeyPress(e){
        if (e.key === "Enter") {
            setIsEditing(false)
            props.handleEdit()
        }
    }

    return (
        <div className="list_item">
            <label className="checkbox_container">
                <input
                    key={props.taskId}
                    type="checkbox"
                    checked={props.done}
                    onChange={() => {
                        props.handleCheckboxChange(props.taskId, !props.done)}
                    }
                />
            </label>
            {isEditing ? (
                <input
                    autoFocus
                    key={props.taskId}
                    value={props.description}
                    onChange={(e) => props.handleEdit(e, props.index)}
                    onKeyDown={handleKeyPress}
                    type="text"
                />
            ) : (
                <span onClick={() => handleClick()}>{props.description}</span>
            )}
            <button type="button" onClick={() => {props.handleDelete(props.taskId)}}>Delete</button>
        </div>
    )
}

export default Task