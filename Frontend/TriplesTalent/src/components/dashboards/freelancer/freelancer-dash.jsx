import React, { useState, useEffect, useRef } from 'react';
import Nav from '../../layout/header/nav/nav';
import './freelancer-dash.css';
import { useSelector } from 'react-redux';
import AssignedProjects from '../../projects/assigned-projects/assigned-projects'
import TrackProject from '../../projects/track-project/track-project'
function Free_Dash() {
  const user = useSelector((data) => data.loged_user.value);
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Projects');

  // Functions to update the active section
  const showProjects = () => setActiveSection('Projects');
  const showTrackProgress = () => setActiveSection('Track Progress');
  const freelancer_props = {
      'showProjects': showProjects,
      'showTrackProgress': showTrackProgress
  }
  return (
    <div className="client-dash">
      <Nav freelancerProp = {freelancer_props}/>
            <div className="dashboard-content">
                {activeSection === 'Projects' && <div><AssignedProjects /></div>}
                {activeSection === 'Track Progress' && <div>< TrackProject /></div>}
            
            </div>
    </div>
  );
}

export default Free_Dash;
