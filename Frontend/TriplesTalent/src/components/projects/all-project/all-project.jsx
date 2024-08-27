import React, { useEffect, useState }  from 'react'
import './all-project.css'
function AllProjects(){
    const [project, setProject] = useState(null);
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    
    const minute = now.getMinutes()
    let updated;
    // Fetch data when the component mounts
    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch('http://localhost:8000/api/Project/');
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }

        fetchProject();
    }, []);
    
    const time_ago = (project) => {
        const dt = new Date(project.updated_at)
        if(year - dt.getFullYear() >= 1){
            return year - dt.getFullYear() + ' Years Ago'
        }
        if(month - dt.getMonth() >= 1){
            return month - dt.getMonth() + ' Months Ago'
        }
        if(day - dt.getDay() >= 1){
            return day - dt.getDay() + ' Days Ago'
        }
        if(now.getHours() - dt.getHours() >= 1){
            return now.getHours() - dt.getHours() + ' Hours Ago'
        }
        if(minute - dt.getMinutes() >= 1){
            return minute - dt.getMinutes() + ' Minutes Ago'
        }
        
    }
  
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
                            
                            <p className = 'update-time' >{time_ago(proj)}</p>
                        </div>
                    ))} 
                
                </div>
            ) : (
                <p>Loading projects...</p>
            )} 
        </div>
    )
}

export default AllProjects