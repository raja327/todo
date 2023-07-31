import { useState } from "react"

const FormAddTodo = ({AddtoList}) => {

const [title,setTitle]=useState("")
const handleChange=(e)=>{
    e.preventDefault()
    if(!title) return;
    const newAdd={
        id:Math.floor(Math.random()*100000),
        title,
        isCompleted:false
    }
    // console.log(newAdd)
    AddtoList(newAdd)
    setTitle("")
    // console.log({title});
}
  return (
    <form 
    action="" 
    className="form-addtodo"
    onSubmit={handleChange}>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="enter todo" value={title}/>
        <button type="submit" className="btn">Add</button>
    </form>
  )
}

export default FormAddTodo
