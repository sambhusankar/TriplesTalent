import React, { useEffect, useState }  from 'react'
import './client.css'
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
    console.log(project)
    return(
        <div className = 'all-project'>
            {project ? (
                <div>
                    {
                    project.map(proj => (
                        <div key={proj.id} className = 'project'>
                           
                            <h2>{proj.first_name}</h2>
                            <span>{proj.company} </span>
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