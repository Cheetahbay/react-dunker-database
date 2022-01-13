import React from 'react'
import '../App.css'

const DunkerTitle = ({ name }) => {

        return (
            <div>
                <div className="dunker-title primary" style={{float: "left"}}>
                    <h1>{name}</h1>
                </div>
            </div>
        )  
    
}


export default DunkerTitle
