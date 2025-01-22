import React from 'react'
import "./sidenav.css"

const Sidenav = () => {
  return (
    <div className="sidebar">
        <div className="sidebartop">
            <div className="board">
                Dashboard
            </div>
            <div className="board">
                My Repoets
            </div>
            <div className="board">
                Appointments
            </div>
            <div className="board">
                Shared With Me
            </div>
            <div className="board">
                Setting
            </div>

        </div>

        <div className="sidebarbottom">
            <div className="boardhead">
                   Quick access 
            </div>
            <div className="board">
                    Calendar
            </div>
            <div className="board">
                    Statisti...
            </div>

        </div>

    </div>
  )
}

export default Sidenav