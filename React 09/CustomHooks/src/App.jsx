import React, { useState, useEffect } from 'react';


function App(){
  const [render,setRender] = useState(true);

 useEffect(() => {
  setTimeout(() => {
    setRender(false);
  }, 10000); 
 }, [])
 
console.log("helo")
  return (
    <>
    {render ? <MyComponent></MyComponent> : <div> This is another div</div>} 
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted ")
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("Component unmounted")
    };
  }, []);

  // Render UI
  return <div>
    From inside the component
  </div>
}


export default App;