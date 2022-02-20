import React,{ useState } from "react";


export default function TodoForm(Props){
    //state
const [input,setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        Props.addTask({
            id: Math.floor(Math.random()* 10000000),
            text:input,
            isComplete: false
        }) 
        setInput('')
    }

    return(
        <form className="todo-form">
            <input type = "text" placeholder = "Add a text" autoComplete="off" onChange = {handleChange} className="todo-input" name="text" value ={input} />
            <button type = "submit" onClick = {handleSubmit} className="btn">ADD</button>
        </form>
        );
    }
