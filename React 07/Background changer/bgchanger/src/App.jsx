import { useState } from "react"


function App() {

  const [color,setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200 bg-black" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
          <button onClick={()=>{
            setColor("red")
          }} className="outline-none px-4 py-1 rounded-full bg-red-500 text-black shadow-lg">Red</button>
          <button onClick={()=>{
            setColor("yellow")
          }} className="outline-none px-4 py-1 rounded-full bg-yellow-500 text-black shadow-lg">Yellow</button>
          <button onClick={()=>{
            setColor("orange")
          }} className="outline-none px-4 py-1 rounded-full bg-orange-500 text-black shadow-lg">Orange</button>
         <button onClick={()=>{
            setColor("black")
          }} className="outline-none px-4 py-1 rounded-full bg-black-500 text-black shadow-lg">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
