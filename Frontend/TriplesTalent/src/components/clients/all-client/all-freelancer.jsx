import React, { useEffect, useState, useRef }  from 'react'
import {useNavigate} from 'react-router-dom'
import './all-freelancer.css'
import axios from 'axios'
import profile from '../../../assets/profile.jpg'
function AllFreelancers({proj}){
    const ref = useRef(null)
    const navigate = useNavigate()
    const [freelancer, setFreelancer] = useState(null);
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
  
    // Fetch data when the component mounts
    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch('http://localhost:8000/api/Freelancer/');
                const data = await response.json();
                setFreelancer(data);
                
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }

        fetchProject();
        
    }, []);
   
    async function assign(freelancer) {
        
        
        try {
            const response = await fetch(`http://localhost/api/Project/${proj.id}`, {
                method: 'PUT',
                
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assigned_with: freelancer
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Project assigned successfully:', data);
    
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    


    return(
        <div className = 'all-freelancer' ref = {ref}>
            <h3>Assign the project with someone</h3>
            {freelancer ? (
                <div>
                    {
                    freelancer.map(worker => (
                        <div key={worker.id} className = 'freelancer' onClick = {() => assign(worker)}>
                            <img src = {worker.profile_picture} alt = 'profile' onError = {(e) => e.target.src = profile}></img>
                            <h2>{worker.first_name + worker.last_name}</h2>
                            <p>{worker.email}</p>
                            <p>{worker.phone_number}</p>
                            {/* Display skills as a list */}
                            <div>
                                {worker.skills !== null ? worker.skills.map((skill, index) => (
                                <span key={index} style = {{margin:'5px', border:'1px solid blue', padding: '5px'}}>{skill}</span>
                                )): ''}
                            </div>
                        </div>
                    ))} 
                
                </div>
            ) : (
                <p>Loading projects...</p>
            )} 

        </div>
    )
}

export default AllFreelancers