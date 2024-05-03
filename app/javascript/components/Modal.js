import React from 'react'
import deleteIcon from "./images/delete_icon.png";

function Modal({handleFormSubmit, handleFormChange, open, onClose}) {

    if (!open) return null;
    return (
        <div onClick={(e) => {e.stopPropagation();}} className='modal_container'>
            <button className="delete_icon" onClick={onClose}>
                <img src={deleteIcon} alt="close modal icon"/>
            </button>
            <form onSubmit={handleFormSubmit}>
                <h3>Add a new task</h3>
                <input onChange={handleFormChange} type="text" autoFocus name="description"/>
                <button className="task_submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Modal