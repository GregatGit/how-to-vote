import React, { Component } from 'react'
import { connect } from 'react-redux'
import CandidateChosen from './CandidateChosen'

class DisplayChoice extends Component {
  showCandidates = list => {
    return list.map(({ name, img, party, position }) => {
      return (
        <CandidateChosen
          key={name}
          name={name}
          img={img}
          party={party}
          position={position}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <h2>You </h2>
        <h2>{this.props.user} of Westeros </h2>
        <h2>Have choosen</h2>
        <div className="ui link items">
          {this.showCandidates(this.props.list)}
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.candidateList,
  }
}
export default connect(mapStateToProps)(DisplayChoice)
