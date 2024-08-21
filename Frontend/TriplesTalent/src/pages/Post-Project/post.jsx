import React, { useState } from 'react'
import './post.css'
import logo from '../../assets/logo-dark.png'
function Post(){
    document.title = "Post-Project"
    const [text, setText ] = useState('')
    return(
        <div className = "post-project">
            <div className = "post-left">
                <img src = {logo}></img>
                <h1>Tell us what you need <span>done.</span></h1>
                <p>We'll guide you to create the perfect brief. The more detail the better.</p>
                <textarea value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Enter a few bullet point for a full description"></textarea>
                <button>Next</button>
                <p>Freelancer connects over 75 million professionals globally</p>
                <ul>
                    <li>From ₹100 tasks to ₹100 million projects, we've got you covered</li>
                    <li>Connect with skilled freelancers in seconds</li>
                    <li>Only pay freelancers once you are happy with their work</li>
                </ul>

            </div>
            <div className = "post-right">
                <img src = "https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"></img>
            </div>
        </div>
    )
}
export default Post