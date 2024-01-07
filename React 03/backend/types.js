//npm install zod
const zod = require("zod");
/* write the types using zod for all 3 endpoints: 
{
    title:string
    description:string

}
for 2nd one we just need to return the todos
for 3rd one -> user needs to Id
{
    id:string -> for the specific todo that they want to mark as completed
}
*/

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

//for 2nd one
const updateTodo = zod.object({
  id: zod.string(),
});

//to export these types
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
