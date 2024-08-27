import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-dark.png'
import "./register.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
function Register(){
    const users = useSelector((state) => state.login_user.value).slice(3)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function postData(){
        const userData = {
            first_name: fname,
            last_name: lname,
            email: email,
            password: password
        };
    
        try {
            const response = await axios({
                method: 'POST',
                url: `http://localhost:8000/api/${users}/`,
                data:  userData,

            });
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
            } else {
                console.error('Error message:', error.message);
            }
        }
    }
    
    return(
        <div className = "register">
            <div className = "reg-left">
                <img src = { logo }></img>
                <h1>Sign Up as a {users}</h1>
                <hr style = {{color: 'black'}}></hr>
                <input type = "text" placeholder = "First Name" value = {fname} onChange = {(e)=> setFname(e.target.value)}></input>
                <input type = "text" placeholder = "Last Name" value = {lname} onChange = {(e)=> setLname(e.target.value)}></input>
                <input type = "email" placeholder = "Email" value = {email} onChange = {(e)=> setEmail(e.target.value)}></input>
                <input type = "password" placeholder = "Password" value = {password} onChange = {(e)=> setPassword(e.target.value)}></input>
                <p><input type = "checkbox"></input>
                I agree to the TriplesTalent User Agreement and Privacy Policy.</p>
                <button onClick = {postData}>Join TriplesTalent</button>
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