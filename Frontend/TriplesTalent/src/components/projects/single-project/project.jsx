import React,{useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './project.css'
import Nav from '../../layout/header/nav/nav'
import AllFreelancer from '../../clients/all-freelancer/all-freelancer'
import {useSelector} from 'react-redux'
function SingleProject(){
    const id = useParams()
    const userType = useSelector((data) => data.login_user.value).slice(3)
    const navigate = useNavigate()
    const [project, setProject] = useState(null);
    const ref = useRef()
 
    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch(`http://localhost:8000/api/Project/${id.id}/`);
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }
        fetchProject();

    }, [id]);

    async function handleEdit(){
       console.log('edit')
    }
    async function handleDelete(id){
   
        try {
            const response = await fetch(`http://localhost:8000/api/Project/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            navigate('/Client-dashboard')
        } catch (error) {
            console.error('Error fetching project:', error);
        }
  
    }

    function handleAssign(){
        const proj = ref.current.querySelector(".project")
        const freelancer = ref.current.querySelector(".freelancers")
        proj.style.display = 'none'
        freelancer.style.display = 'block'
     }

    async function handleAccept(){
        try {
            const response = await fetch(`http://localhost:8000/api/Project/${id.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        'status': 'assigned'
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

    return(
        <div className = "si-proj" ref = {ref}>
           
            {
                project ? (
                    <div>
                        <div className = 'project'>
                        
                        <input type = 'text' value = {project.title} className = 'title'/>
                        <p>{project.updated_at} </p>
                        <input type = 'text' value = {project.description} />
                        <input type = 'text' value = {project.deadline} />
                        <h3>{
                            project.skills_required.map((skill) => {
                                return <p key = {skill}>{skill}</p>
                            })
                                }

                            </h3>
                        </div>
                        {userType === 'Client' && <>
                            <button onClick = {handleEdit}>Edit Project</button>
                            <button onClick = { () => handleDelete(project.id)}>Delete Project</button>
                        </>
                        }
                        {userType === 'Manager' && <>
                            <button onClick = { () => handleAssign(project.id)}>Assign Project With</button>
                        </>
                        }
                        {
                        userType === 'Freelancer' && <>
                            <button onClick = { () => handleAccept(project.id)}>Accept Project</button>
                        </>
                        }
                        
                    </div>
                ) : <p>loading</p>
            }
            <div className = 'freelancers' style = {{display:'none'}}>
                <AllFreelancer proj = {project} />
            </div>
            
        </div>
    )   
}
export default SingleProject