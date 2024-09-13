import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './works.css'
import { useSelector } from 'react-redux';

function Works() {
    const work = useSelector((data) => data.techTeamWork.value)

    const ref = useRef(null);
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [jobs, setJobs] = useState([])

    // Fetch data when the component mounts
    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('http://localhost:8000/api/Project/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setProjects(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    // Open project details
    function openProj(id) {
        navigate(`/project/${id}`);
    }

    //getting the assigned works to a techteam
    async function works(){
        await fetch('http://localhost:8000/api/TechTeam/1/').then((res) => res.json().then((res) => setJobs(res.assigned_work)))
    }
    works()
    async function assign(id, worker) {
        const members = await fetch(`http://localhost:8000/api/Project/${id}/`).then((res) => res.json()).then((res) => res.assigned_with)
        console.log(members)
        try {
            const response = await fetch(`http://localhost:8000/api/Project/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
      
                        'assigned_with': [...members, worker]
                  
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


    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error fetching projects: {error}</p>;
 
    return (
        <div className='all-project' ref={ref}>
           {
                jobs.length > 0 ? jobs.map((job, index) => (
                    <div key={index} className="task" onClick = {() => assign(job.project.id, job.freelancer.id)}>
                        <p>{job.project.title}</p>
                        <p>{job.freelancer.first_name + " " + job.freelancer.last_name}</p>
                    </div>
                )) : <p>No assigned works found.</p>
            }
        </div>
    );
}

export default Works;
