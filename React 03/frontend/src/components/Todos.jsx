/* 
todos=[{title:"abc", description:"go to gym"}]
*/


/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
/* 
In this file Todos.jsx -> you'll not have them as static -> dynamic 
for that you need to take those todos as input -> props
*/


/* 
Way 1:
export function Todos(props){
    const todos = props.todos;

    better way is object destructuring
*/