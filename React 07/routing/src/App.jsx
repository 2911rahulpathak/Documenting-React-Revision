import { Suspense, lazy } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const  Dashboard = React.lazy(()=> import('./components/Dashboard'))
const  Landing = React.lazy(()=> import('./components/Landing'))


function App() {
  //const navigate = useNavigate()

  return (
    <div>
    <BrowserRouter>
     <Appbar/>
      <Routes>
        <Route path="/dashboard" element={ <Suspense  fallback={"loading..."}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path="/" element={ <Suspense fallback={"loading..."}><Landing></Landing></Suspense>}></Route>
      </Routes>      
    </BrowserRouter>
    </div>
  )
}


function Appbar(){

  const navigate = useNavigate()
  
  return <div>
    <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
        navigate("/dashboard")
        }}>Dashboard Page</button>
      </div>
  </div>
}

export default App
