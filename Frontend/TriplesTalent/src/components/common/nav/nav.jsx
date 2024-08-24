import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import Logo from '../../../assets/logo-white.png'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nav(){
    const user = useSelector((data) => data.loged_user.value)
    return(
        <div className = "nav">
            <img src = {Logo}></img>
            <ul className = 'nav-btns'>
                <li><Link to = "/track-project">Track Project</Link></li>
                <li><Link to = "/post-project">Post Project</Link></li>
                <li><FontAwesomeIcon icon={faBell} className = 'icon' /></li>
                <li><FontAwesomeIcon icon={faEnvelope} className = 'icon' /></li>
                <li><button><img src = {user.profile_picture}></img>{user.email}</button></li>
            </ul>
        </div>
    )
}
 
export default Nav