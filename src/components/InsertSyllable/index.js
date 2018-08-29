import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { map, values, isNil } from 'lodash'

import {
  getSymbols,
  filterSymbolsByName,
  filterSymbolsByOptions,
  filterSymbolsByPitch,
  addTextToSyllable,
  addSyllable,
  removeLastSyllable,
  setSyllables,
  checkError,
  ErrorNoDefineSymbol,
  changeSyllable,
  insertSyllable,
  createOptionsList,
} from '../../actions'

import {
  RFReactSelect,
  RFReactMultiSelect,
} from '../../utils/RFReactSelect'

import Loading from '../../utils/Loading'

import {
  OPTIONS,
  PITCH,
} from '../../constants'

import { KRUKI } from '../../res/'


import './style.css'

class InsertSyllable extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   error: '',
    // }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeOptions = this.handleChangeOptions.bind(this)
    this.handleChangePitch = this.handleChangePitch.bind(this)
    this.handleremoveLastSyllable = this.handleremoveLastSyllable.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { symbols, actions, editableSyllable, indexToInsert } = this.props

      if (isNil(symbols.symbolsFilteredByPitch)) {
        return
      }

      const onlyValues = map(symbols.symbolsFilteredByPitch, ({ value }) => ({ value }))
      onlyValues[0].text = e.target.value

      if (!isNil(editableSyllable)) {
        actions.changeSyllable(editableSyllable, onlyValues[0])
        return
      } if (!isNil(indexToInsert)) {
        actions.insertSyllable(indexToInsert, onlyValues[0])
      } else {
        actions.addSyllable(onlyValues[0])
      }
    }
  }

  handleChangeName(item) {
    const { actions } = this.props
    actions.getSymbols()
    actions.filterSymbolsByName(item.label)
    actions.filterSymbolsByOptions([])
    actions.createOptionsList(item.label)
  }

  handleChangeOptions(options) {
    const { actions, syllableForInsert } = this.props
    delete options.preventDefault // eslint-disable-line
    const currentOptions = values(options).map(item => item.label)
    actions.filterSymbolsByOptions(currentOptions)
    if (syllableForInsert.values.pitch.label !== '') {
      actions.filterSymbolsByPitch(syllableForInsert.values.pitch.label)
    }
  }

  handleChangePitch(item) {
    const { actions } = this.props
    actions.filterSymbolsByPitch(item.label)
  }

  handleremoveLastSyllable() {
    const { actions } = this.props
    actions.removeLastSyllable()
  }

  render() {
    const { symbols } = this.props
    console.log(symbols.options)
    if (isNil(symbols)) return <Loading />
    return (
      <React.Fragment>
        <h4>Введите знамя</h4>
        <div className="inputForm">
          <div className="field" >
            <label htmlFor="Name">Крюк</label>
            <Field
              name="name"
              list="symbols"
              options={KRUKI}
              onChange={this.handleChangeName}
              component={RFReactSelect}
              className="input"
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Опции</label>
            <Field
              name="options"
              list="options"
              options={symbols.options}
              onChange={this.handleChangeOptions}
              component={RFReactMultiSelect}
              className="input"
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
              <input
                label="Слог"
                name="syllable"
                className="inputTextUCS form-control"
                disabled={symbols.currentSymbols.length !== 1}
              />
            </div>
          </form>

        </div>
      </React.Fragment>
    )
  }
}

const InsertSyllableWithForm = reduxForm({
  form: 'syllableForInsert',
})(InsertSyllable)

const InitializeFromStateForm = connect(
  () => ({
    initialValues: { pitch: { label: '' } },
  }),
)(InsertSyllableWithForm)

const mapStateToProps = state => ({
  paper: state.paper,
  symbols: state.symbols,
  error: state.symbols.error,
  editableSyllable: state.paper.editableSyllable,
  indexToInsert: state.paper.indexToInsert,
  syllableForInsert: state.form.syllableForInsert,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getSymbols,
    filterSymbolsByName,
    filterSymbolsByOptions,
    filterSymbolsByPitch,
    addTextToSyllable,
    addSyllable,
    removeLastSyllable,
    setSyllables,
    checkError,
    ErrorNoDefineSymbol,
    changeSyllable,
    insertSyllable,
    createOptionsList,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)

InsertSyllable.propTypes = {
  symbols: PropTypes.object,
  actions: PropTypes.object,
  editableSyllable: PropTypes.string,
  indexToInsert: PropTypes.string,
  syllableForInsert: PropTypes.object,
}
