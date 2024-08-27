import React from 'react'
import  Nav  from '../../layout/header/nav/nav'
import './techteam-dash.css'
import {useSelector} from 'react-redux'
function Tech_Dash(){
    const user = useSelector((data) => data.loged_user.value)
    return(
        
        <div className = "client-dash"> 
            <Nav />
            <div className = "main">
                <h1>Welcome back {user.first_name} {user.last_name}</h1>
            </div>
        </div>
    )
}
export default Tech_Dash