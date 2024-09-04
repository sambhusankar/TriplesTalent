import React, { useEffect, useState, useRef }  from 'react'
import {useNavigate} from 'react-router-dom'
import './all-manager.css'
import axios from 'axios'
import profile from '../../assets/profile.jpg'
function AllManagers({proj}){
    const ref = useRef(null)
    const navigate = useNavigate()
    const [managers, setManagers] = useState(null);

  
    // Fetch data when the component mounts
    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch('http://localhost:8000/api/Manager/');
                const data = await response.json();
                setManagers(data);
                
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }

        fetchProject();
        
    }, []);

    
    console.log(managers)

    return(
        <div className = 'all-freelancer' ref = {ref}>
            <h3>Assign the project with someone</h3>
            {managers ? (
                <div>
                    {
                    managers.map(worker => (
                        <div key={worker.id} className = 'freelancer'>
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

export default AllManagers