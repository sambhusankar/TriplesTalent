import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-dark.png'
import "./register.css"
function Register(){
    return(
        <div className = "register">
            <div className = "reg-left">
                <img src = { logo }></img>
                <h1>Sign Up</h1>
                <hr style = {{color: 'black'}}></hr>
                <input type = "text" placeholder = "First Name"></input>
                <input type = "text" placeholder = "Last Name"></input>
                <input type = "email" placeholder = "Email"></input>
                <input type = "password" placeholder = "Password"></input>
                
                <p><input type = "checkbox"></input>
                I agree to the TriplesTalent User Agreement and Privacy Policy.</p>
                <button>Join TriplesTalent</button>
                <hr style = {{color: 'black'}}></hr>
                <p>Already have an acccount? <Link to = '/login'>login</Link></p>
            </div>
            <div className = "reg-right">
                <img src = "https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"></img>
            </div>
        </div>
    )
}
export default Register