import React from 'react'
import DunkerTitle from './DunkerTitle'
import LeagueTitle from './LeagueTitle'
import DunkerAvatar from './DunkerAvatar'
import DunkerSummary from './DunkerSummary'
import DunkerAttributes from './DunkerAttributes'
import { Col, Row } from 'react-bootstrap'


const DunkerFullProfile = ({ name, league, avatar, instagram, youtube, attributes }) => {
    return (
        <div>
          {/* <h1 className='text-warning'>{JSON.stringify(props)}</h1> */}
            <Row>
           <Col md="9">
             <DunkerTitle name={name}/>
           </Col>
           <Col md="3">
             <LeagueTitle league={league}/>
           </Col>
         </Row>
         <Row>
           <Col xl="4">
             <DunkerAvatar avatar={avatar}/>
           </Col>
           <Col xl="4">
            <DunkerSummary instagram={instagram} youtube={youtube}/>
           </Col>
           <Col xl="4">
            <DunkerAttributes attributes={attributes}/>
           </Col>
         </Row>
        </div>
    )
}

export default DunkerFullProfile
