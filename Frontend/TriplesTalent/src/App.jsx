import { useState } from 'react'
import Welcome from './pages/Welcome/welcome'
import Register from './components/auth/register/register';
import Login from './components/auth/login/login';
import Post from './pages/Post-Project/post'
import Dashboard from './components/dashboards/client/client-dash'

import './App.css'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Welcome />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/signup" element = {<Register />}></Route>
        <Route path = "/post-project" element = {<Post />}></Route>
        <Route path = "/client-dashboard" element = {<Dashboard />}></Route>
     </Routes>
    </>
  )
}

export default App
