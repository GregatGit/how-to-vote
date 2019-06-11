import React from 'react'
import { displayName } from '../helpers/helpers'

const CandidateCard = ({ name, img, party, choice, position }) => {
  return (
    <div className="card">
    <div className="content">
      <img width="70" height="70" className="right floated mini ui image" src={img} alt={displayName(name)}/>
      <div className="header">
        {displayName(name)}
      </div>
      <div className="meta">
        {party}
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
      {position === 0? <button onClick={choice} className="ui huge blue button">Vote</button>: <button className="ui huge button">{position}</button> }
      </div>
    </div>
  </div>
  )
}

export default CandidateCard
