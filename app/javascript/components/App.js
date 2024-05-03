import React from 'react'
import Tasks from './Tasks/Tasks'

function App() {
    return (
        <div className="page_wrapper">
            <h1>TO-DO LIST:</h1>
            <p>Add a task at the bottom or edit a current task by clicking it and pressing Enter.</p>
            <Tasks/>
        </div>
    )
}

export default App