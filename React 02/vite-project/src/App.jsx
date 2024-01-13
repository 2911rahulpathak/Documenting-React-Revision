import { useState } from "react";

function App() {

  //array of objects in state variable now is complex
  const [todos,setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:false
  },{title:"Study DSA ",
  description:"Study DSA from 9-11",
  completed:true
  }]);

  function addTodo(){
    //spread operator ... takes before todos and new setTodo 
    setTodos([...todos,{
      title:"New Todo",
      description:"new description"
    }])
  }

  return (
//here if you just do {todo} -> its an array of object you need to Stringyfy it -> {JSON.stringify(todos)}
    <div>
      <button onClick={addTodo}> Add a Random Todo</button>
   {/*  <Todo title={todos[0].title} description = {todos[0].description}></Todo> */}
    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </div>
  )
}


//you can pass some input to this Todo
/* title:,description,complete  */
function Todo(props){

  //render a single Todo

  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>

  </div>
}

export default App
