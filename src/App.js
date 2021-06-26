import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import Button from './components/Button'
import AddTask from './components/AddTask'

function App() {
  const [tasks,setTasks]=useState([
    {id:0, text:'task1', day:"monday", reminder:false}, {id:1, text:'task2', day:"tuesday", reminder:true},
  ])  

 const[showAddTask,setShowAddTask]= useState(false);


  const addTask =(task)=>{
    const id= Math.floor(Math.random() * 10000) +1;
    const newTask={id, ...task};

    setTasks([...tasks,newTask]);

  }
  //to delete the task
 const deleteTask =(id)=>{
    setTasks(tasks.filter( (task)=> task.id !== id))
 }
    
    //to make border green for reminder 
    const toggleReminder=(id) =>{
      console.log("toggling");
      setTasks(tasks.map( (task)=> 
      task.id === id ? {...task, reminder: !task.reminder } 
      :task
      ))
    }
    
    return (
      <div className="App" >
      <Header 
      onAdd= {() => setShowAddTask
        (!showAddTask)} 
      title={"kashitas todo app"} 
      showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} /> }
        
      {tasks.length>0?
          <Tasks tasks ={tasks}  onDelete={deleteTask} onToggle={toggleReminder} />
        : <h1> no tasks left </h1>
      }
      
    </div>
  );
}

export default App;
