Learnings:

Initially when you install react
First file-> index.html that is rendering
Main.jsx is imported in index.html
Inside Main.jsx you'll find the App component

Structure of React(App.jsx):
Imports
Component(JS function code)
export (For using it we export it )

App.jsx structure
import './App.css'

//Component - App() - JS function
function App() {
//write JS code
return (

   <div>
    
   </div>
  )
//what we want to return/ Display on Webpage can mention in return statement
//You can also write JS 
}

export default App


################################################################################################
Props:
################################################################################################

props -> short form of properties, & it is a fundamental concept used to pass data from one component to another component

(Ps: Think of Props as JS object->key:value, where keys are the names of the props)
Props as: Component(function) argument

