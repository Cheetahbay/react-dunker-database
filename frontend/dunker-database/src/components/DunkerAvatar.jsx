import React from 'react'

const DunkerAvatar = ({ avatar }) => {
        return (
            <div>
                <div className="primary dunker-body avi">
                <img className='dunker-avatar' src={avatar} alt='dunker avatar'></img>
                
                </div>
            </div>
        )    
}

export default DunkerAvatar;