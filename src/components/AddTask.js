
import {useState} from 'react'



const AddTask = ({onAdd}) => {
    const [text, setText] = useState(" ")
    const [day, setDay] = useState(" ")
    const [rem, setRem] = useState(false)

    const onSubmit =(e)=>{
        e.preventDefault();
        if(!text){
            alert("add task");
            return ;
        }
    
        onAdd({text,day,rem});
        
        //RESETIING
        setText('');
        setDay(' ');
        setRem(false);
    }

    return (
            <form className="add-form" onSubmit={onSubmit}> 
            <div className="form-control">
                <label> Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} ></input>
            </div>
            <div className="form-control">
                <label> Day</label>
                <input type="text" placeholder="Add day" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label> reminder</label>
                <input type="checkbox" value={rem} onChange={(e) => setRem(e.currentTarget.checked)}></input>
            </div>

            <div>
                <button type="submit"> add task </button>
            </div>

            </form>
    )
}

export default AddTask
