import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Task from './Task'
import Modal from '../Modal'
import addIcon from "../images/plus_icon.png";

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [openModal, setOpenModal] = useState(false)

    function getTasks() {
        axios.get('/api/v1/tasks')
            .then(resp => {
                let sorted = resp.data.sort((a,b) => a.id - b.id)
                setTasks(sorted)
            })
            .catch(resp => console.log(resp))
    }

    function getCSRFToken() {
        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    }

    useEffect(() => {
        getCSRFToken()
        getTasks();
    }, [])

    function handleFormChange(e) {
        e.preventDefault()
        setTask(Object.assign({}, task, {[e.target.name]: e.target.value, done: false}))
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        getCSRFToken()
        axios.post('/api/v1/tasks', task)
            .then(resp => {
                getTasks()
                setOpenModal(false)
            })
            .catch((error) => {
                console.error(error);
            })
        e.target.reset()
    }

    function handleEdit(e, index) {
        let value = e.target.value
        setTasks(tasks => [
            ...tasks.slice(0, index),
            { ...tasks[index], description: value },
            ...tasks.slice(index + 1)
        ])
        handleEditSubmit(tasks[index].id, value)
    }

    function handleEditSubmit(taskId, value) {
        getCSRFToken()
        axios.patch('/api/v1/tasks/'+ taskId, {
            description: value
        })
            .then((resp) => {
                getTasks()
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handleCheckboxChange(taskId, done) {
        getCSRFToken()
        axios.patch('/api/v1/tasks/'+ taskId, {
            done: done
        })
            .then((resp) => {
                getTasks()
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handleDelete(taskId) {
        getCSRFToken()
        axios.delete('/api/v1/tasks/' + taskId)
            .then((resp) => {
                getTasks()
            })
            .catch((error) => {
                console.error(error);
            });
    }



    const list = tasks.map( (item, index) => {
        return (
            <Task key={item.id}
                  index={index}
                  taskId={item.id}
                  description={item.description}
                  done={item.done}
                  handleCheckboxChange={handleCheckboxChange}
                  handleEdit={e => handleEdit(e, index)}
                  handleDelete={handleDelete}
            />
        )
    })

    return (
        <div className="container">
            <ul>{list}</ul>
            <div>
                <button onClick={() => setOpenModal(true)} className='modal_button'>
                    <img src={addIcon} alt="add icon"/>
                </button>
                <Modal handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange} open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </div>
    )
}

export default Tasks