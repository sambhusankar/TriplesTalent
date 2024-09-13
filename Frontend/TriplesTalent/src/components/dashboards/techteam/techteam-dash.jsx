import React, {useState} from 'react'
import  Nav  from '../../layout/header/nav/nav'
import './techteam-dash.css'
import {useSelector} from 'react-redux'
import Works from './works'
import AllFreelancers from '../../clients/all-freelancer/all-freelancer'

function Tech_Dash(){
  const user = useSelector((data) => data.loged_user.value)
  const work = useSelector((data) => data.techTeamWork.value)
  console.log(work)
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Projects');

  // Functions to update the active section
  const showProjects = () => setActiveSection('Projects');
  const showFreelancers = () => setActiveSection('Freelancers');
  const showTrackProgress = () => setActiveSection('Track Progress');
  const techteam_props = {
      'showProjects': showProjects,
      'showTrackProgress': showTrackProgress,
      'showFreelancers': showFreelancers,
  }
    return(
         
        <div className = "client-dash"> 
            <Nav techteamProp = {techteam_props}/>
            <div className="dashboard-content">
                {activeSection === 'Projects' && <div><Works /></div>}
                {activeSection === 'Freelancers' && <div><AllFreelancers /></div>}
                {activeSection === 'Track Progress' && <div>Track Progress Content</div>}
            
            </div>
        </div>
    )
}
export default Tech_Dash