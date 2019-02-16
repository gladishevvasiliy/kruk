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
  createPitchList,
  hideModal,
} from '../../actions'

import {
  RFReactSelect,
  RFReactMultiSelect,
  Loading,
} from '../../utils'
import { KRUKI } from '../../res/'

import './style.css'

class InsertSyllable extends Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeOptions = this.handleChangeOptions.bind(this)
    this.handleChangePitch = this.handleChangePitch.bind(this)
    this.handleremoveLastSyllable = this.handleremoveLastSyllable.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { symbols, actions, editableSyllable, indexToInsert, paper } = this.props

      // if (isNil(paper.syllables[paper.currentPageNum])) {
      //   return
      // }

      if (isNil(symbols.symbolsFilteredByPitch)) {
        return
      }

      const onlyValues = map(symbols.symbolsFilteredByPitch, ({ value }) => ({ value }))

      const syllableForInsert = onlyValues[0]
      syllableForInsert.text = e.target.value
      syllableForInsert.type = 'KRUK'

      if (!isNil(editableSyllable)) {
        actions.changeSyllable(editableSyllable, syllableForInsert)
        actions.hideModal()
        return
      } if (!isNil(indexToInsert)) {
        actions.insertSyllable(indexToInsert, syllableForInsert)
        actions.hideModal()
      } else {
        actions.addSyllable(syllableForInsert)
        actions.hideModal()
      }
    }
  }

  handleChangeName(item) {
    if (isNil(item.label)) {
      return
    }
    const { actions } = this.props
    actions.getSymbols()
    actions.filterSymbolsByName(item.label)
    actions.filterSymbolsByOptions([])
    actions.createOptionsList(item.label)
    actions.createPitchList()
  }

  handleChangeOptions(options) {
    const { actions, syllableForInsert } = this.props

    delete options.preventDefault // eslint-disable-line
    const currentOptions = values(options).map(item => item.label)
    actions.filterSymbolsByOptions(currentOptions)
    actions.createPitchList()

    if (isNil(syllableForInsert.values.pitch)) {
      return
    }

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
    const { symbols, paper } = this.props
    const options = symbols.options
    const pitchs = symbols.pitchs
    if (isNil(symbols)) return <Loading />
    return (
      <React.Fragment>
        <div className="inputForm">
          <h4 className="text-left">Введите знамя</h4>
          <div className="field" >
            <label htmlFor="Name">Крюк</label>
            <Field
              name="name"
              list="symbols"
              options={KRUKI}
              onChange={this.handleChangeName}
              component={RFReactSelect}
              className="input input-name"
            />
          </div>
          <div className="field" >
            <label htmlFor="Options">Опции</label>
            <Field
              name="options"
              list="options"
              options={options}
              onChange={this.handleChangeOptions}
              component={RFReactMultiSelect}
              className="input input-option"
            />
          </div>
          <div className="field" >
            <label htmlFor="Pitch">Помета</label>
            <Field
              name="pitch"
              list="pitchs"
              options={pitchs}
              onChange={this.handleChangePitch}
              component={RFReactSelect}
              className="input input-pitch"
            />
          </div>
          <form onKeyPress={this.handleKeyPress}>  {/* eslint-disable-line */}
            <div className="field" >
              <label htmlFor="Name">Текст</label>
              <input
                label="Слог"
                name="syllable"
                className="inputTextUCS form-control"
                disabled={symbols.currentSymbols.length !== 1 || isNil(paper.syllables[paper.currentPageNum])}
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
    createPitchList,
    hideModal,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)

InsertSyllable.propTypes = {
  symbols: PropTypes.object,
  actions: PropTypes.object,
  editableSyllable: PropTypes.number,
  indexToInsert: PropTypes.number,
  syllableForInsert: PropTypes.object,
}
