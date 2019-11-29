import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSet } from '../store'

export class NameEntry extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value: name } = e.target;
    this.props.userSet(name)
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor='name'>Your name:</label>
        <input name='name' onChange={this.handleChange} value={this.props.userName} />
      </React.Fragment>
    )
  }
}

const mapSatateToProps = (state) => ({
  userName: state.user
})

const mapDispatchToProps = (dispatch) => ({
  userSet: (name) => dispatch(userSet(name))
})

export default connect(mapSatateToProps, mapDispatchToProps)(NameEntry)
