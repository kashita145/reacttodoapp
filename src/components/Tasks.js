import {useState} from 'react'
import Task from './Task'
import '/Users/kashita/todoapp/src/index.css';

const Tasks = ({ tasks , onDelete, onToggle  }) => {
        return (
        <div style={{backgroundColor:"red"}}>
            {tasks.map((task,index)=> (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}

        </div>
    )
}

export default Tasks

