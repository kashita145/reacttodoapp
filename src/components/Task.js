import { FaTimes } from 'react-icons/fa'
import '/Users/kashita/todoapp/src/index.css';


const Task = ({task , onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ' '}`}  onDoubleClick={()=>onToggle(task.id)}>
            <h1>{task.text}  
            <FaTimes 
                onClick={()=> onDelete(task.id)}
                style={{color:"red", cursor:'pointer'}} /> </h1>
                
            
            <h2> {task.day}</h2>
           
        </div>
    )
}

export default Task
