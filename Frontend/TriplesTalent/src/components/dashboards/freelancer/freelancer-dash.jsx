import React from 'react'
import  Nav  from '../../common/nav/nav'
import './client-dash.css'
import {useSelector} from 'react-redux'
function Dashboard(){
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
export default Dashboard