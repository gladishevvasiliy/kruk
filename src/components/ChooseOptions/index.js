import React, { Component } from 'react'
import { isNil, map, remove, uniq, split, trim, filter, join } from 'lodash'
import PropTypes from 'react-proptypes'
import ChoosePitch from '../ChoosePitch'

// import './style.css'

class ChooseOptions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOptionsOfSymbol: '',
      currentArrayForChoosePitch: '',
      nameInput: '',
    }

    this.inputOptions = React.createRef()
    this.handleInputChangeSymbolOptions = this.handleInputChangeSymbolOptions.bind(this)
  }

  componentDidMount() {
    if (!isNil(this.inputOptions.current)) {
      this.inputOptions.current.focus()
    }
  }

  handleInputChangeSymbolOptions(event) {
    this.setState({ currentOptionsOfSymbol: event.target.value })
  }


  render() {
    const { currentOptionsOfSymbol } = this.state
    const { data } = this.props
    const currentOptionsAsArray = map(split(this.state.currentOptionsOfSymbol, ',', 2), item => trim(item))

    if (isNil(data)) return <h1>Loading...</h1>
    const options = map(data.value, 'opts')
    remove(options, item => item.length === 0)

    return (
      <div className="chooseOptions">
        <form>
          <label htmlFor="options">Опции
            <input
              type="text"
              list="options"
              value={currentOptionsOfSymbol}
              onChange={this.handleInputChangeSymbolOptions}
              ref={this.inputOptions}
            />
            <datalist id="options">
              {/* eslint-disable-next-line */}
              {(uniq(map(options, item => item.join(', ')))).map((name, index) => (<option key={index}>{name}</option>))}
            </datalist>
          </label>
        </form>
        <ChoosePitch data={filter(data.value, item => join(item.opts, ',') === join(currentOptionsAsArray, ','))} getDataForInsert={this.props.getDataForInsert} />
        {/* eslint-disable-next-line max-len */}
      </div>
    )
  }
}

ChooseOptions.propTypes = {
  data: PropTypes.object,
  getDataForInsert: PropTypes.func,
}

export default ChooseOptions
