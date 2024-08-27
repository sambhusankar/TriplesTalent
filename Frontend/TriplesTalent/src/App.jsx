import { useState } from 'react'
import Welcome from './pages/Welcome/welcome'
import Register from './components/auth/register/register';
import Login from './components/auth/login/login';
import Post from './pages/Post-Project/post'
import Clie_Dash from './components/dashboards/client/client-dash'
import Mana_Dash from './components/dashboards/manager/manager-dash'
import Tech_Dash from './components/dashboards/techteam/techteam-dash'
import Free_Dash from './components/dashboards/freelancer/freelancer-dash'
import TrackProject from './components/projects/track-project/track-project'
import { Provider } from 'react-redux'
import { Store } from './Redux/store'
import './App.css'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Provider store = {Store}>
      <Routes>
        <Route path = "/" element = {<Welcome />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/signup" element = {<Register />}></Route>
        <Route path = "/post-project" element = {<Post />}></Route>
        <Route path = "/Client-dashboard" element = {<Clie_Dash />}></Route>
        <Route path = "/Freelancer-dashboard" element = {<Free_Dash />}></Route>
        <Route path = "/Manager-dashboard" element = {<Mana_Dash />}></Route>
        <Route path = "/Techteam-dashboard" element = {<Tech_Dash />}></Route>
        <Route path = "/track-project" element = {<TrackProject />}></Route>
      
     </Routes>
     </Provider>
    </>
  )
}

export default App
