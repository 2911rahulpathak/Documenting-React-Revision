import { useCallback, useState } from "react";
import { memo } from "react";
import { useEffect } from "react";

function App() {
const [counter, setCounter] = useState(0);
  //when passed variable it's not changing as the value is not changed
 // var a = 1;
 //If we change it to function It will think that Its new function & there is diff as new refernce of function is created
/* function a(){
  console.log("hi there")
 }*/
//Using callBack solve this 
//Instead of defining the function in way func a(){}
//define it like this:
const a = useCallback(function(){
  console.log("hi there")
},[])
 //IF we dont use Callback It causes unnecessary re-renders


 return <div>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
    <Demo a={a} ></Demo>
  </div>
 
}

//memo -> only actually re-render if I pass something which has actually changed
const Demo = memo(function({a}){
  console.log("rerender")
  return <div>
    hi there
  </div>
})

export default App;