import React , { useRef } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Logo from '../../../../assets/logo-white.png'
import profile from '../../../../assets/profile.jpg'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nav({ managerProp, clientProp, freelancerProp, techteamProp }) {
    const ref = useRef(null);
    const userType = useSelector((data) => data.login_user.value).slice(3);
    const user = useSelector((data) => data.loged_user.user);
    console.log(clientProp)
    function openMsg(){
        const element = ref.current.querySelector('.msg-bx')
        element.style.display = 'block'
    }
    function clsMsg(){
        const element = ref.current.querySelector('.msg-bx')
        element.style.display = 'none'
    }

    return (
        <div className="nav" ref={ref}>
            <img src={Logo} alt="Logo" />
            <ul className='nav-btns'>
                {userType === 'Freelancer' && <>
                    <li><button onClick={freelancerProp.showProjects}>Assigned Projects</button></li>
                    <li><button onClick={freelancerProp.showTrackProgress}>Track Work</button></li>
                </>}
                {userType === 'Manager' && <>
                    <li><button onClick={managerProp.showProjects}>Projects</button></li>
                    <li><button onClick={managerProp.showFreelancers}>Freelancers</button></li>
                    <li><button onClick={managerProp.showTrackProgress}>Track Progress</button></li>
                </>}
                {userType === 'Client' && <>
                    <li><button onClick={clientProp.showProjects}>Projects</button></li>
                    <li><button onClick={clientProp.showManagers}>Managers</button></li>
                    <li><button onClick={clientProp.showTrackProgress}>Track Progress</button></li>
                    <li><button onClick={clientProp.showPostProject}>Post Project</button></li>
                </>}
                {userType === 'TechTeam' && <>
                    <li><button onClick={techteamProp.showProjects}>Projects</button></li>
                    <li><button onClick={techteamProp.showFreelancers}>Freelancers</button></li>
                    <li><button onClick={techteamProp.showTrackProgress}>Track Progress</button></li>
                </>}
                <li><FontAwesomeIcon icon={faBell} className='icon' /></li>
                <li><FontAwesomeIcon icon={faEnvelope} className='icon' onClick={openMsg} /></li>
                <li>
                    <button class = 'profile'>
                        {userType !== 'Manager' ? <><img src={user.profile_picture} onError={(e) => e.target.src = profile} />{user.email}</> : 'Admin'}
                    </button>
                </li>
            </ul>
            <div className='msg-bx'>
                <input type='text' placeholder='Search for person' />
                <button onClick={clsMsg} className='cls-msg-btn'>x</button>
                <div className='sending'>
                    <input type='text' className='msg' placeholder='Type something to send' />
                    <button className='send-btn'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Nav;
