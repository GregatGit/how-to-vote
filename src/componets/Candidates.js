import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
//import Candidate from './Candidate'
import DisplayChoice from './DisplayChoice'
import CandidateCard from './CandidateCard'
import { addCandidate, resetCandidates } from '../actions/index'
import _ from 'lodash'

class Candidates extends Component {
  state = { positions: [], showBallot: false }

  componentDidMount() {
    const nums = []
    for (let i = 0; i < this.props.candidates.length; i++) {
      nums.push(i + 1)
    }
    const ladder = _.mapKeys(this.props.candidates, 'name')
    this.setState({ positions: nums, resetPositions: nums, ladder })
  }

  pickCandidate = name => {
    const arr = [...this.state.positions]
    let position = arr.shift()
    const ladder = { ...this.state.ladder }
    ladder[name].position = position
    this.setState({ positions: arr, ladder })
    return position
  }

  theReset = () => {
    const newLadder = { ...this.state.ladder }
    const names = Object.keys(newLadder)
    names.forEach(name => (newLadder[name].position = 0))
    this.setState({ positions: this.state.resetPositions, ladder: newLadder })
    this.props.resetCandidates()
  }

  displayCanidates = candidatesArr => {
    return candidatesArr.map(candidate => {
      let { name, img, party } = candidate
      return (
        <CandidateCard
          choice={() => {
            this.props.addCandidate(candidate)
            this.pickCandidate(name)
          }}
          key={name}
          name={name}
          img={img}
          party={party}
          position={this.state.ladder[name].position}
        />
      )
    })
  }

  showBallotChoice = () => {
    this.setState({ showBallot: true })
    //console.log(this.props.candidateList)
  }
  redoAll = () => {
    this.theReset()
    this.props.redo()
  }

  render() {
    if (!this.state.showBallot) {
      return (
        <div>
          <h2>
            WELCOME <b>{this.props.user}!</b> PICK
          </h2>
          <h2>Candidates</h2>
          <div className="ui one cards">
            {this.state.ladder
              ? this.displayCanidates(this.props.candidates)
              : ''}
          </div>
          <button onClick={this.theReset} className="ui button">
            RESET
          </button>
          {this.state.positions.length !== 0 ? (
            <div>select all</div>
          ) : (
            <button
              onClick={() => this.showBallotChoice()}
              className="ui button"
            >
              CAST YOUR BALLOT
            </button>
          )}
          <div className="ui fade reveal">
            <div onClick={this.redoAll} className="visible content ui button">
              RESET EVERYTHING
            </div>
            <div className="hidden content ui button">CLICK TO START AGAIN</div>
          </div>
        </div>
      )
    } else {
      return (
        <Fragment>
          <DisplayChoice user={this.props.user} />
          <div className="ui fade reveal">
            <div onClick={this.redoAll} className="visible content ui button">
              RESET EVERYTHING
            </div>
            <div className="hidden content ui button">CLICK TO START AGAIN</div>
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    candidates: state.canditates,
    candidateList: state.candidateList,
  }
}

export default connect(
  mapStateToProps,
  { addCandidate, resetCandidates }
)(Candidates)
