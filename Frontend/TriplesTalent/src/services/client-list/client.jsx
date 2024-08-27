import React, { useEffect, useState }  from 'react'
import './all-project.css'
function AllClients(){
    const [project, setProject] = useState(null);
    const time = new Date()
    // Fetch data when the component mounts
    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch('http://localhost:8000/api/Client/');
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }

        fetchProject();
    }, []);

    return(
        <div className = 'all-project'>
            {project ? (
                <div>
                    {
                    project.map(proj => (
                        <div key={proj.id} className = 'project'>
                           
                            <h2>{proj.title}</h2>
                            <span>₹ {proj.budget} INR</span>
                            <p className = 'proj-desc'>{proj.description}</p>
                            <h3>{
                            proj.skills_required.map((skill) => {
                                return <p key = {skill}>{skill}</p>
                            })
                                }

                            </h3>
                            
                            <p className = 'update-time' >{proj.created_at}</p>
                        </div>
                    ))} 
                
                </div>
            ) : (
                <p>Loading projects...</p>
            )} 
        </div>
    )
}

export default AllClients