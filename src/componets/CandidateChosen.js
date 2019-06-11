import React from 'react'
import { displayName } from '../helpers/helpers'

const CandidateChosen = ({name, img, party, position}) => {
  let size = '100'
  if (position === 1) size = 200
  return (
    <div className="item">
      <div className="ui tiny bordered image">
        <img
          width={size}
          height={size}
          src={img}
          className="ui image"
          alt={name}
        />
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

export default CandidateChosen
