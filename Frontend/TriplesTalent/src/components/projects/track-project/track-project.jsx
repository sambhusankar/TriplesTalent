import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/logo-white.png'
import {useSelector} from 'react-redux'
import './track-project.css'
import Nav from '../../layout/header/nav/nav'
function TrackProject(){
    const user = useSelector((data) => data.loged_user.value)
    console.log(user)
    return(
        <div className = "track-project">
           
           Sankar
        </div>
    )
}

export default TrackProject