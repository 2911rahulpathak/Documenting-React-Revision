
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  //const navigate = useNavigate()

  return (
    <div>
    <BrowserRouter>
     <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
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
