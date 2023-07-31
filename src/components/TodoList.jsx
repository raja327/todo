import FormAddTodo from "./FormAddTodo";
import FilterOptions from "./FilterOptions";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./design/header.css";
import "./design/main.css";
import Todo from "./Todo";
import FooterCalc from "./FooterCalc";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [searchquery, setSearchquery] = useState("");
  const [filteroption, setFilteroption] = useState("all");
  const [todoFinalList,setTodoFinalList]=useState(todos)
  //  add to list
  const handleAddtoList = (todo) => {
    setTodos([...todos, todo]);
  };
  // delete list of todo
  const DelTodo=(id)=>{setTodos(todos=>todos.filter(todo=>(todo.id!==id)))}

  const onChangeOpt = (value) => {
    setFilteroption(value);
  };
  const handleSearchChange=(searchvalue)=>{
    setSearchquery(searchvalue)
    console.log(searchquery.trim())
  }

  useEffect(()=>{
    const todoFinalList=todos.filter(todo=>{
      if(filteroption==="incomplete")
      {return !todo.isCompleted}
    else if(filteroption==="complete")
    {return todo.isCompleted}
    else
    {return true}
  })
  const finalSrchAndSrhOption=todoFinalList.filter(todofin=>todofin.title.toLowerCase().includes(searchquery.toLowerCase()))
  setTodoFinalList(finalSrchAndSrhOption)
  },[filteroption,todos,searchquery])
  
  const onCheckToggle = (id) => {
    setTodos(todos=>todos.map(todo=>todo.id===id ? {...todo,isCompleted:!todo.isCompleted}:todo))
  };
  // console.log({todos});
  return (
    <>
      <header>
          <div className="headerTodo">
            <div className="logoArea">
              <h1 className="tile">
                Todo <span>App</span>
              </h1>
            </div>
            <div className="FilterArea">
              <SearchBar searchChange={handleSearchChange}/>
              <FilterOptions option={filteroption} onChangeOpt={onChangeOpt} />
            </div>
          </div>
      </header>
      <section className="main">
        <FormAddTodo AddtoList={handleAddtoList} />
        <div className="listoftodo">
        <ul>
							{todoFinalList.map((todoitem)=>(
                <Todo todo={todoitem} 
                id={todoitem.id} 
                handleDelTodo={DelTodo} 
                handleStatus={onCheckToggle}/>
              ))}
						
					</ul>
        </div>
      </section>
      <div className="footer">
        <FooterCalc todos={todos}/>
      </div>
    </>
  );
};

export default TodoList;
