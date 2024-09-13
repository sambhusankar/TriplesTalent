import React, { useEffect, useState, useRef }  from 'react'
import {useNavigate} from 'react-router-dom'
import './all-freelancer.css'
import axios from 'axios'
import profile from '../../../assets/profile.jpg'
import {useDispatch} from 'react-redux'
import {getTechteamWork} from '../../../Redux/techTeamslice'
function AllFreelancers({proj}){
    const ref = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [freelancer, setFreelancer] = useState(null); 
    const [oldJob, setOldJob] = useState([])
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
   
    async function assignWork(worker) {
        const olds = await fetch('http://localhost:8000/api/TechTeam/1/').then((res) => res.json()).then((res) => res )
        let assigned_work = olds.assigned_work ? olds.assigned_work : []
        try {
            const response = await fetch(`http://localhost:8000/api/TechTeam/1/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'assigned_work': [...assigned_work, {
                        'project': proj,  // Ensure proj.id is defined in your component scope
                        'freelancer': worker
                }]
                })
            });
    
            if (response.ok) {
                // Navigate to the client dashboard only if the request was successful
                console.log(response)
                navigate('/Manager-dashboard');
            } else {
                const errorData = await response.json();
                console.error('Failed to assign project:', response.statusText, errorData);
            }
        } catch (error) {
            console.error('Error assigning project:', error);
        }
    }
    
    return(
        <div className = 'all-freelancer' ref = {ref}>
            <h3>Assign the project with someone</h3>
            {freelancer ? (
                <div>
                    {
                    freelancer.map(worker => (
                        <div key={worker.id} className = 'freelancer' onClick = {() => assignWork(worker)}>
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