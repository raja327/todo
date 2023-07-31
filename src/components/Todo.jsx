import {RiDeleteBin7Line}  from 'react-icons/ri'

const Todo = ({ todo,id,handleDelTodo,handleStatus }) => {
  return (
    <li key={id} style={{}}>
      <input
        type="checkbox"
        onChange={() => handleStatus(id)}
        checked={todo.isCompleted}
      />
      {todo.title}
      <button className="sm-btn" onClick={()=>handleDelTodo(id)}><RiDeleteBin7Line style={{fontSize:"20px",color:"#dc2626"}}/></button>
    </li>
  );
};

export default Todo;
