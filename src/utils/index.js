import React, { Component } from 'react'
import ChooseOptions from '../components/ChooseOptions'


class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
  }

  render() {
    return (
      <ChooseOptions ref={this.textInput} />
    )
  }
}

export default AutoFocusTextInput
