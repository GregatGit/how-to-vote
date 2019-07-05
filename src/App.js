import React, { Component, Fragment } from 'react'
import './components/App.css'

import Candidates from './components/Candidates'
import Login from './components/Login'

class App extends Component {
  state = { user: 'none', users: [] }

  chooseUser = name => {
    const theUsers = [...this.state.users]
    if (this.state.users.indexOf(name) > -1) {
      theUsers.push(name)
    }
    this.setState({ user: name, users: theUsers })
  }

  handleRedo = () => {
    console.log('hi')
    this.setState({ user: 'none' })
  }

  render() {
    return (
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>THE IRON THRONE</h1>
        {this.state.user === 'none' ? (
          <div style={{ margin: "15%"}} >
            <Login func={this.chooseUser} />
          </div>
        ) : (
          <Candidates redo={this.handleRedo} user={this.state.user} />
        )}
      </Fragment>
    )
  }
}

export default App
