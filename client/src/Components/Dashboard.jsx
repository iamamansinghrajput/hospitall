import React from 'react'
import Dashboardtop from './Dashboardtop'
import Dashboardbottom from './Dashboardbottom'
import {userdata} from './data/user'
import "./dashboard.css"

const Dashboard = () => {

   
  return (
    <>
    <div className="dashboard container">
    <Dashboardtop value={userdata} ></Dashboardtop>
    <Dashboardbottom></Dashboardbottom>

    </div>
    </>
    
    
  )
}

export default Dashboard