import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { map, values } from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSymbols, filterSymbolsByName, filterSymbolsByOptions, filterSymbolsByPitch, addTextToSyllable, addSyllable, setSyllables } from '../../actions'
import { RFReactSelect, RFReactMultiSelect } from '../../utils/RFReactSelect'
import { SYMBOLS, OPTIONS, PITCH } from '../../constants'

import './style.css'

class ChooseName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNameOfSymbol: '',
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeOptions = this.handleChangeOptions.bind(this)
    this.handleChangePitch = this.handleChangePitch.bind(this)
    // this.handleChangeText = this.handleChangeText.bind(this)
    this.inputName = React.createRef()
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

  // handleChangeText(item) {
  //   const { symbols, actions } = this.props
  //   const onlyValues = map(symbols.symbolsFilteredByPitch, ({ value }) => ({ value }))
  //   onlyValues[0].text = item.lable
  //   actions.addSyllable(onlyValues[0])
  // }

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
                className="input"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const ChooseNameWithForm = reduxForm({
  form: 'syllableForInsert',
})(ChooseName)

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
    setSyllables,
  }, dispatch) })


ChooseName.propTypes = {
  symbols: PropTypes.obj,
  actions: PropTypes.func,
}


export default connect(mapStateToProps, mapDispatchToProps)(ChooseNameWithForm)
