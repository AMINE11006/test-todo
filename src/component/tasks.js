import React, { useState } from 'react';




const AddTask = ({getTask}) =>{
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

const AddValue = e =>{
    setValue(e.target.value);
};
const sendValue = () =>{
    setTasks(value);
}
    return( 
        <div>
          <form onSubmit={(e) =>{
            e.preventDefault();
            getTask = {value};
        }}>
            <input placeholder="Your Task here" onChange={AddValue}></input>
            <br/>
            <br/>
            <button type="submit" onClick={sendValue}>Add</button>
        </form>  
        <div>
            {tasks.map((e)=>(
                <ul key={e.id}>
                    <li>{e.tasks}</li>
                </ul>
            ))}
        </div>
        </div>
    );
};

export default AddTask;