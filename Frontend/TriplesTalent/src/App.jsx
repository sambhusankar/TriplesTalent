import { useState } from 'react'
import Welcome from './pages/Welcome/welcome'
import Register from './components/auth/register/register'
import './App.css'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Welcome />}></Route>
        <Route path = "/signup" element = {<Register />}></Route>
     </Routes>
    </>
  )
}

export default App
