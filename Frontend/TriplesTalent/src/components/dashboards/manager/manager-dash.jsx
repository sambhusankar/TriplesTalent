import React , { useEffect, useState } from 'react'
import  Nav  from '../../layout/header/nav/nav'
import './manager-dash.css'
import {useSelector} from 'react-redux'
import AllProject from '../../projects/all-project/all-project'
function Mana_Dash(){
    
    return(
         
        <div className = "manager-dash"> 
            <Nav />
            <div className = "main">
                <AllProject />
            </div>
        </div>
    )
}
export default Mana_Dash