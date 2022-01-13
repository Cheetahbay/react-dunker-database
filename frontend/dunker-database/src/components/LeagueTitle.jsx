import React from 'react'
import '../App.css'

const LeagueTitle = ({ league }) => {
    
        return (
            <div className="dunker-league secondary" style={{float: "right"}}>
                <h1>{league}</h1>
            </div>
        )
    
    
}

export default LeagueTitle
