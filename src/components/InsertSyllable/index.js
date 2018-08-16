import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
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
  RFReactSelect,
  RFReactMultiSelect,
} from '../../utils/RFReactSelect'

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
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { symbols, actions } = this.props
      const onlyValues = map(symbols.symbolsFilteredByPitch, ({ value }) => ({ value }))
      onlyValues[0].text = e.target.value
      actions.addSyllable(onlyValues[0])
      actions.getSymbols()
    }
  }

  handleChangeName(item) {
    const { actions } = this.props
    actions.filterSymbolsByName(item.label)
    actions.filterSymbolsByOptions([])
  }

  handleChangeOptions(options) {
    const { actions } = this.props
    delete options.preventDefault // eslint-disable-line
    const currentOptions = values(options).map(item => item.label)
    actions.filterSymbolsByOptions(currentOptions)
  }

  handleChangePitch(item) {
    const { actions } = this.props
    actions.filterSymbolsByPitch(item.label)
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
            <Field
              name="name"
              list="symbols"
              options={SYMBOLS}
              onChange={this.handleChangeName}
              component={RFReactSelect}
              className="input"
              ref={this.NameRef}
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Опции</label>
            <Field
              name="options"
              list="options"
              options={OPTIONS}
              onChange={this.handleChangeOptions}
              component={RFReactMultiSelect}
              className="input"
              ref={this.OptionsRef}
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Помета</label>
            <Field
              label="Помета"
              name="pitch"
              options={PITCH}
              onChange={this.handleChangePitch}
              component={RFReactSelect}
              className="input"
            />
          </div>
          <form onKeyPress={this.handleKeyPress}>  {/* eslint-disable-line */}
            <div className="field" >
              <label htmlFor="Name">Текст</label>
              <Field
                label="Слог"
                name="syllable"
                component="input"
                className="inputTextUCS"
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

const InsertSyllableWithForm = reduxForm({
  form: 'syllableForInsert',
})(InsertSyllable)

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

export default connect(mapStateToProps, mapDispatchToProps)(InsertSyllableWithForm)
