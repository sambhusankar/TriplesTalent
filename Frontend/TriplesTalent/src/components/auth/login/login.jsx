import React, { useState , useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-dark.png'
import "./login.css"
function Login(){
    const login_ref = useRef(null)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let users = {}
    async function handleLogin(){
        users = await fetch("http://localhost:8000/api/clients/").then((res) => res.json()).then((res) => res)
        users.forEach((user) =>{
            if( user.email === email && user.password === password){
                console.log("login success")
                navigate('/client-dashboard')
            }else{
                const element = login_ref.current.querySelector(".showInfo")
                element.style.display = "block"
            }
        })
    }
    return(
        <div className = "login" ref = {login_ref}>
            <div className = "log-left">
                <img src = { logo }></img>
                <h1>Welcome Back</h1>
                <hr style = {{color: 'black'}}></hr>
                <input type = "email" placeholder = "Email" value = {email} onChange = {(e)=> setEmail(e.target.value)}></input>
                <input type = "password" placeholder = "Password" value = {password} onChange = {(e)=> setPassword(e.target.value)}></input>
                <p><input type = "checkbox"></input>
                Remember Me <Link>Forgot password</Link></p>
                <div className = "showInfo">Incorect email or password !!</div>
                <button onClick = {handleLogin}>Log In</button>
                <hr style = {{color: 'black'}}></hr>
                <p>Dont't have an account? <Link to = '/signup'>signup</Link></p>
            </div>
            <div className = "log-right">
                <img src = "https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"></img>
            </div>
        </div>
    )
}
export default Login