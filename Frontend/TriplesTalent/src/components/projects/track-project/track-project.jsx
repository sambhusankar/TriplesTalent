import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './track-project.css'
import Nav from '../../layout/header/nav/nav'

function TrackProject() {
    const user = useSelector((data) => data.loged_user.user)
    const userType = useSelector((data) => data.login_user.value).slice(3)
   
    const [projects, setProjects] = useState([])
    const [freelancers, setFreelancers] = useState([])

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('http://localhost:8000/api/Project/')
                const data = await response.json()
                const filteredProjects = data.filter((proj) =>{ 
                    if(userType === 'Client'){
                        return proj.posted_by === user.id && proj.status === 'assigned' }
                    if(userType === 'Freelancer'){
                        return proj.assigned_with.includes(user.id) && proj.status === 'accepted'
                    }
                })
 
                setProjects(filteredProjects)
         
            } catch (error) {
                console.error('Error fetching projects:', error)
            }
        }

        if (user) {
            fetchProjects()
        }
    }, [user, userType])

    useEffect(() => {
        async function fetchFreelancers() {
            try {
                const response = await fetch('http://localhost:8000/api/Freelancer/')
                const data = await response.json()
                const assignedFreelancers = data.filter(flnr => 
                    projects.some(proj => proj.assigned_with.includes(flnr.id))
                )
                setFreelancers(assignedFreelancers)
             
            } catch (error) {
                console.error('Error fetching projects:', error)
            }
        }

        if (user) {
            fetchFreelancers()
        }
    }, [projects])

    async function handleStart(id){
        try {
            const response = await fetch(`http://localhost:8000/api/Project/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        'status': 'accepted'
                })
            });
    
            if (response.ok) {
                // Navigate to the client dashboard only if the request was successful
                console.log(response);
            } else {
                const errorData = await response.json();
                console.error('Failed to assign project:', response.statusText, errorData);
            }
        } catch (error) {
            console.error('Error assigning project:', error);
        }
    }
    console.log(user, projects)
    return (
        <div className="track-project">
      
            <h1>Track Your Projects</h1>
            {projects.length > 0 ? (
                projects.map((proj) => (
                    <div key={proj.id} className='tracks'>
                        <h2>{proj.title}</h2>
                        <span>status: {proj.status}</span>
                        <p>{proj.description}</p>
                        <div className = 'assigns'>
                            <p style = {{textDecoration:'underline', fontWeigh:'bold'}}>Assigned with</p>
                        {
                            freelancers.map((flncr) => {
                                if(proj.assigned_with.includes(flncr.id)){
                                return  <p key = {flncr.id}>{flncr.first_name + ' ' + flncr.last_name}</p>
                                }
                            })
                        }
                        </div>
                        {
                            userType === 'Client' && <button onClick = {() => handleStart(proj.id)}>Start project with the team</button>
                        }
                        {
                            userType === 'Freelancer' && <button>Start the Work</button>
                        }
                        
                    </div>
                ))
            ) : (
                <p>No projects found</p>
            )}
        </div>
    )
}

export default TrackProject
