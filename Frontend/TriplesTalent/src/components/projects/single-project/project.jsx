import React,{useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './project.css'
import Nav from '../../layout/header/nav/nav'
import AllFreelancer from '../../clients/all-client/all-freelancer'
function SingleProject(){
    const id = useParams()
    const [project, setProject] = useState(null);
    const navigate = useNavigate()
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

    function handleAssign(){
       const proj = ref.current.querySelector(".project")
       const freelancer = ref.current.querySelector(".freelancers")
       proj.style.display = 'none'
       freelancer.style.display = 'block'
    }

    return(
        <div className = "si-proj" ref = {ref}>
           
            {
                project ? (
                    <div className = 'project'>
                        <div>
                        <h1>{project.posted_by.first_name}</h1>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>{project.deadline}</p>
                        </div>
                        <button onClick = {handleAssign}>Assign this project</button>
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