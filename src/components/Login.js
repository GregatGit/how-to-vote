import React, { Component } from 'react'

const myStyle = {
  width: '100%',
  opacity: 0.9
}

class Login extends Component {
  state = { name: '', checked: false }

  onNameChange = event => {
    this.setState({ name: event.target.value, checked: false })
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  render() {
    let message = `Your name please`
    if (!this.state.checked && this.state.name !== '') {
      message = `Swear below`
    }

    return (
      <div className="ui raised segment" style={myStyle}>
        <h2>WELCOME!</h2>
        <p>
          It is time for the people to choose who shall sit on the Iron Throne.
        </p>
        <p>Vote wisely</p>
        <div className="ui input">
          <input
            onChange={this.onNameChange}
            type="text"
            placeholder="your name here..."
          />
        </div>
        <div>
          {this.state.checked ? (
            <button
              style={{ margin: 20 }}
              onClick={() => this.props.func(this.state.name)}
              className="ui button"
            >
              THAT BE I
            </button>
          ) : (
            <button style={{ margin: 20 }} className="ui button">
              {message}
            </button>
          )}
        </div>
        {this.state.name !== '' ? (
          <div className="ui segment">
            <p>
              Do you swear by the the Old Gods and New that you are:{' '}
              {this.state.name}
            </p>
            <div className="ui checkbox" >
              <input
                onChange={this.handleCheckboxChange}
                type="checkbox"
                name="swear"
                checked={this.state.checked}
              />
              <label>I SWEAR</label>
            </div>
          </div>
        ) : (
          ''
        )}
        <div style={{ margin: 20 }} className="ui fitted divider" />
      </div>
    )
  }
}

export default Login
