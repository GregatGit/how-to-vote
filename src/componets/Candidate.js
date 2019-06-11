import React from 'react'
import { displayName } from '../helpers/helpers'

const Candidate = ({ name, img, party, choice, position }) => {
  return (
    <div className="item">
      <div>
        <div width="50" height="50">
          <h2>{position === 0? <button onClick={choice} className="ui huge blue button">Vote</button>: <button className="ui huge button">{position}</button> }</h2>
        </div>
      </div>
      <div className="ui tiny bordered image">
        <img width="100" height="100" src={img} className="ui image" alt={name} />
      </div>
      <div className="content">
        <div className="header">{displayName(name)}</div>
        <div className="description">
          <h3>{party}</h3>
        </div>
      </div>
    </div>
  )
}

export default Candidate
