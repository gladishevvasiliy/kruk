import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { isNil } from 'lodash'

import './style.css'


class InputText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textToInsert: '',
    }

    this.handleInputText = this.handleInputText.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    const { data, getDataForInsert } = this.props
    if (e.key === 'Enter') {
      e.preventDefault()
      data[0].text = this.state.textToInsert
      getDataForInsert(data[0])
    }
  }

  handleInputText(event) {
    this.setState({
      textToInsert: event.target.value,
    })
  }

  render() {
    const { data } = this.props
    if (isNil(data) || data === '' || data === []) return null
    console.log(data)
    const { textToInsert } = this.state

    return (
      <div className="InputSymbol">
        <form >
          <label htmlFor="pitch">Слог
            <input
              type="text"
              value={textToInsert}
              onChange={this.handleInputText}
              onKeyPress={this.handleKeyPress}
            />
          </label>
        </form>
      </div>
    )
  }
}

InputText.propTypes = {
  data: PropTypes.array,    
}

export default InputText
