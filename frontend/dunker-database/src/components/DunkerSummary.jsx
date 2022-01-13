import React from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'



const DunkerSummary = ({ summary, instagram, youtube }) => {
    
        return (
            <div className='primary dunker-body'>
                <h3>Summary</h3>
                <p>{summary}</p>
                <a href={instagram} target='_blank'><Button className='primary dunker-button'>Instagram</Button></a>
                <a href={youtube} target='_blank'><Button className='primary dunker-button'>YouTube</Button></a>
            </div>
        )
    
}

DunkerSummary.defaultProps = {
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rerum, non at nobis voluptas voluptates consequatur illo exercitationem animi reprehenderit, tempore alias officia doloremque dolor. Esse laborum nemo sit quisquam!'
}

export default DunkerSummary
