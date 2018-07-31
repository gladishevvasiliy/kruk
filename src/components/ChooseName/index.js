import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { find } from 'lodash'


import ChooseOptions from '../ChooseOptions'

import './style.css'

class ChooseName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      namesOfSymbols: [
        { id: 1, name: 'Параклит' },
        { id: 2, name: 'Крюк' },
        { id: 3, name: 'Запятая' },
      ],
      currentNameOfSymbol: '',
    }

    this.handleInputChangeSymbolName = this.handleInputChangeSymbolName.bind(this)
    this.inputName = React.createRef()
  }

  componentDidMount() {
    this.inputName.current.focus()
  }

  handleInputChangeSymbolName(event) {
    this.setState({ currentNameOfSymbol: event.target.value })
  }

  /*  eslint-disable */
  handleKeyPress(e) { 
    if (e.key === 'Enter'){
      e.preventDefault()
      console.log('do validate');
    }
  } 
  /*  eslint-enable */

  render() {
    const { namesOfSymbols, currentNameOfSymbol } = this.state
    const { data } = this.props

    return (
      <div className="InputSymbol">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="symbol" >Крюк
            <input
              type="text"
              list="symbols"
              value={currentNameOfSymbol}
              onChange={this.handleInputChangeSymbolName}
              onKeyPress={this.handleKeyPress}
              ref={this.inputName}
            />
            <datalist id="symbols">
              {/* eslint-disable-next-line */}
              {namesOfSymbols.map(({ name }, index) => (<option key={index}>{name}</option>))}
            </datalist>
          </label>
        </form>
        <ChooseOptions
          data={find(data, item => item.name === currentNameOfSymbol)}
        />
      </div>
    )
  }
}

ChooseName.propTypes = {
  data: PropTypes.array,
  getDataForInsert: PropTypes.func,
}

export default ChooseName
