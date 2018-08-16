import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Select from 'react-select'
import { map, values } from 'lodash'
import {
  getSymbols,
  filterSymbolsByName,
  filterSymbolsByOptions,
  filterSymbolsByPitch,
  addTextToSyllable,
  addSyllable,
  removeSyllable,
  setSyllables,
} from '../../actions'

import {
  SYMBOLS,
  OPTIONS,
  PITCH,
} from '../../constants'

import './style.css'

class InsertSyllable extends Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeOptions = this.handleChangeOptions.bind(this)
    this.handleChangePitch = this.handleChangePitch.bind(this)
    this.handleRemoveSyllable = this.handleRemoveSyllable.bind(this)

    this.inputNameRef = React.createRef()
    this.inputOptionsRef = React.createRef()
    this.inputPitchRef = React.createRef()
    this.inputTextRef = React.createRef()
  }

  componentDidMount() {
    this.inputNameRef.current.focus()
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { symbols, actions } = this.props
      const onlyValues = map(symbols.symbolsFilteredByPitch, ({ value }) => ({ value }))
      onlyValues[0].text = e.target.value
      actions.addSyllable(onlyValues[0])
      actions.getSymbols()
      this.inputNameRef.current.focus()
    }
  }

  handleChangeName(item) {
    const { actions } = this.props
    actions.filterSymbolsByName(item.label)
    actions.filterSymbolsByOptions([])
    this.inputOptionsRef.current.focus()
  }

  handleChangeOptions(options) {
    const { actions } = this.props
    delete options.preventDefault // eslint-disable-line
    const currentOptions = values(options).map(item => item.label)
    actions.filterSymbolsByOptions(currentOptions)
    this.inputPitchRef.current.focus()
  }

  handleChangePitch(item) {
    const { actions } = this.props
    actions.filterSymbolsByPitch(item.label)
    this.inputTextRef.current.focus()
  }

  handleRemoveSyllable() {
    const { actions } = this.props
    actions.removeSyllable()
  }

  render() {
    return (
      <React.Fragment>
        <div className="inputForm">
          <div className="field" >
            <label htmlFor="Name">Крюк</label>
            <Select
              name="name"
              list="symbols"
              options={SYMBOLS}
              onChange={this.handleChangeName}
              className="input"
              valueKey="value"
              ref={this.inputNameRef}
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Опции</label>
            <Select
              name="options"
              list="options"
              options={OPTIONS}
              onChange={this.handleChangeOptions}
              isMulti
              className="input"
              valueKey="value"
              ref={this.inputOptionsRef}
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Помета</label>
            <Select
              label="Помета"
              name="pitch"
              options={PITCH}
              onChange={this.handleChangePitch}
              className="input"
              ref={this.inputPitchRef}
            />
          </div>
          <form onKeyPress={this.handleKeyPress}>  {/* eslint-disable-line */}
            <div className="field" >
              <label htmlFor="Name">Текст</label>
              <input
                label="Слог"
                name="syllable"
                className="inputTextUCS"
                ref={this.inputTextRef}
              />
            </div>
          </form>
          <div className="rmButton">
            <div />
            <button onClick={this.handleRemoveSyllable} >Удалить слог</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  paper: state.paper,
  symbols: state.symbols,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getSymbols,
    filterSymbolsByName,
    filterSymbolsByOptions,
    filterSymbolsByPitch,
    addTextToSyllable,
    addSyllable,
    removeSyllable,
    setSyllables,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InsertSyllable)
