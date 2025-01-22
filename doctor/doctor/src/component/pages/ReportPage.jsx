import React from 'react'
import Report from '../Report'
import Dosidenav from '../Dosidenav'
import "./reportpage.css"

const ReportPage = () => {
  return (
   <>
    <div className="reporthome">
    
    <div className="reporthomeleft">
        <Dosidenav/>
    </div>
    <div className="reporthomeright">
    <Report/>
    </div>
    
</div>
   
   </>
  )
}

export default ReportPage
