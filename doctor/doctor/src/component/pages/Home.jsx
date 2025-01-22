import React from 'react'
import Dosidenav from '../Dosidenav'
import Doctorboard from '../Doctorboard'
import "./home.css"

const Home = () => {
  return (
   <>
   <div className="home">
    <div className="homeleft">
            <Dosidenav/>
    </div>
    <div className="homeright">
        <Doctorboard/>
    </div>
   </div>
   </>
  )
}

export default Home