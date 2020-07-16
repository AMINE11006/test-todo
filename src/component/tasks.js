import React, { useState } from 'react';



const AddTask = ({getTask}) =>{
    const [value, SetValue] = useState("");

    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            getTask = {value};
        }}>
            <input type="text" placeholder="Your Task here" defaultValue={value}></input>
            <br/>
            <br/>
            <button type="submit" onClick={()=>SetValue(value)}>Add</button>
        </form>
    );
};

export default AddTask;