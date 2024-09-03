import React, {useState} from 'react'
import  Nav  from '../../layout/header/nav/nav'
import './client-dash.css'
import {useSelector} from 'react-redux'
import Post from '../../../pages/Post-Project/post'
import AllProject from '../../projects/all-project/all-project'
function Clie_Dash(){
    const user = useSelector((data) => data.loged_user.value)
    // State to track which section is active
    const [activeSection, setActiveSection] = useState('Projects');

    // Functions to update the active section
    const showProjects = () => setActiveSection('Projects');
    const shoManagers = () => setActiveSection('Managers');
    const showTrackProgress = () => setActiveSection('Track Progress');
    const showPostProject = () => setActiveSection('Post Project');

    const client_props = {
        'showProjects': showProjects,
        'showManagers': shoManagers,
        'showTrackProgress': showTrackProgress,
        'showPostProject': showPostProject
    }
 
    return(
        
        <div className = "client-dash"> 
            <Nav clientProp = {client_props} />
            <div className="dashboard-content">
                {activeSection === 'Projects' && <div><AllProject /></div>}
                {activeSection === 'Managers' && <div>Managers Content</div>}
                {activeSection === 'Track Progress' && <div>Track Progress Content</div>}
                {activeSection === 'Post Project' && <div><Post /></div>}
            </div>
        </div>
    )
}
export default Clie_Dash