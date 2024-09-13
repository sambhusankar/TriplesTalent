import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './assigned-projects.css';
import { useSelector } from 'react-redux';

function AssignedProjects() {
    const owner = useSelector((data) => data.loged_user.user);
    const ref = useRef(null);
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
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

    // Calculate time ago
    const time_ago = (project) => {
        const dt = new Date(project.updated_at);
        const now = new Date();

        const yearsDiff = now.getFullYear() - dt.getFullYear();
        if (yearsDiff >= 1) return yearsDiff + ' Years Ago';

        const monthsDiff = now.getMonth() - dt.getMonth();
        if (monthsDiff >= 1) return monthsDiff + ' Months Ago';

        const daysDiff = now.getDate() - dt.getDate();
        if (daysDiff >= 1) return daysDiff + ' Days Ago';

        const hoursDiff = now.getHours() - dt.getHours();
        if (hoursDiff >= 1) return hoursDiff + ' Hours Ago';

        const minutesDiff = now.getMinutes() - dt.getMinutes();
        if (minutesDiff >= 1) return minutesDiff + ' Minutes Ago';

        return 'Just Now';
    };

    // Open project details
    function openProj(id) {
        navigate(`/project/${id}`);
    }

    // Get projects assigned to the current user
    const assignedProjects = projects.filter(
        proj => proj.assigned_with.includes(owner.id) && proj.status === 'open'
    );

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error fetching projects: {error}</p>;

    return (
        <div className='all-project' ref={ref}>
            {assignedProjects.length > 0 ? (
                assignedProjects.map((proj) => (
                    <div key={proj.id} className='project' onClick={() => openProj(proj.id)}>
                        <h2>{proj.title}</h2>
                        <span>₹ {proj.budget} INR</span>
                        <p className='proj-desc'>{proj.description}</p>
                        <h3>
                            {proj.skills_required.map((skill) => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </h3>
                        <p className='update-time'>{time_ago(proj)}</p>
                    </div>
                ))
            ) : (
                <p>Not assigned to any project</p>
            )}
        </div>
    );
}

export default AssignedProjects;
