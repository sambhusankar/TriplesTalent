import React, { useState } from 'react';
import Nav from '../../layout/header/nav/nav' // Adjust the import based on your folder structure
import './manager-dash.css'
import AllProject from '../../projects/all-project/all-project'
import TrackProject from '../../projects/track-project/track-project'
import AllFreelancer from '../../clients/all-client/all-freelancer'
function ManagerDashboard() {
    // State to track which section is active
    const [activeSection, setActiveSection] = useState('Projects');

    // Functions to update the active section
    const showProjects = () => setActiveSection('Projects');
    const showFreelancers = () => setActiveSection('Freelancers');
    const showTrackProgress = () => setActiveSection('Track Progress');
    const manager_props = {
        'showProjects': showProjects,
        'showFreelancers': showFreelancers,
        'showTrackProgress': showTrackProgress
    }
 
    return (
        <div className="client-dashboard">
            <Nav managerProp = {manager_props}/>
            <div className="dashboard-content">
                {activeSection === 'Projects' && <div><AllProject /></div>}
                {activeSection === 'Freelancers' && <div><AllFreelancer /></div>}
                {activeSection === 'Track Progress' && <div><TrackProject /></div>}
            
            </div>
        </div>
    );
}

export default ManagerDashboard;
