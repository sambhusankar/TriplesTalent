import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './my-projects.css';
import { useSelector } from 'react-redux';

function MyProjects() {
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
                const filteredProjects = data.filter((d) => d.posted_by.id === owner.id);
                setProjects(filteredProjects);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, [owner.id]);

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

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error fetching projects: {error}</p>;

    return (
        <div className='all-project' ref={ref}>
            {projects.length > 0 ? (
                projects.map((proj) => (
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
                <p>No projects you have posted yet.</p>
            )}
        </div>
    );
}

export default MyProjects;
