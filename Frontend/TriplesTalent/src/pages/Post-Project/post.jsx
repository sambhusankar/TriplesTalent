import React, { useState, useRef } from 'react'
import './post.css'
import logo from '../../assets/logo-dark.png'
import {useSelector,  useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Post(){
    const post_ref = useRef(null)
    const navigate = useNavigate()
    const user = useSelector((data) => data.loged_user.value)
    document.title = "Post-Project"
    const [title, setTitle ] = useState('')
    const [description, setDescription ] = useState('')
    const [deadline, setDeadline ] = useState('')
    const [budget, setBudget ] = useState('')
    const [skills, setSkills] = useState('')
  
    //posting the project data to server
    async function postProject(){
        const project_data = {
            title: title,
            description: description,
            budget: parseFloat(budget),
            deadline: deadline,
            status: 'open',
            skills_required: skills.split(' ').map(skill => skill.trim()),  // Assuming skills are comma-separated
            posted_by: user.id
        }
        
        try{
            await axios({
                method: 'POST',
                url: "http://localhost:8000/api/Project/",
                data: project_data
            })
            const element = post_ref.current.querySelector(".post-success")
            element.style.display = "block"
            navigate(`/`)
        }
        catch (err){
            console.log(err)
        }
        
    }
    return(
        <div className = "post-project" ref = {post_ref}>
            <div className = "post-left">
                <img src = {logo}></img>
                <h1>Tell us what you need <span>done.</span></h1>
                <p>We'll guide you to create the perfect brief. The more detail the better.</p>
                <input type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)} placeholder = "Enter the Title of your Project"></input>
                <textarea value = {description} onChange = {(e) => setDescription(e.target.value)} placeholder = "Enter a few bullet point for a full description"></textarea>
                <input type = "date" value = {deadline} onChange = {(e) => setDeadline(e.target.value)} placeholder = "Enter the deadline of your project"></input>
                <input type = "text" value = {budget} onChange = {(e) => setBudget(e.target.value)} placeholder = "Enter the budget of your project"></input>
                <h3>What skills are required?</h3>
                <p>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>
                <input type = "text" value = {skills} onChange = {(e) => setSkills(e.target.value)} placeholder = "Enter the skills here..."></input>
                
                <button onClick = {postProject}>Next</button>
                <p>Freelancer connects over 75 million professionals globally</p>
                <ul>
                    <li>From ₹100 tasks to ₹100 million projects, we've got you covered</li>
                    <li>Connect with skilled freelancers in seconds</li>
                    <li>Only pay freelancers once you are happy with their work</li>
                </ul>
                <p className = 'post-success'>Your project added Successfully..</p>
            </div>
            <div className = "post-right">
                <img src = "https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"></img>
            </div>
        </div>
    )
}
export default Post