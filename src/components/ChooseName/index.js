import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
// import Select from 'react-select'
import { map, assignIn, clone } from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSymbols, filterSymbolsByName, filterSymbolsByOptions, filterSymbolsByPitch, addTextToSyllable, addSyllable, setSyllables } from '../../actions'
// import multiSelect from '../../utils/multiSelect/index.js'
import { NAMES_OF_SYMBOLS } from '../../constants'


import './style.css'

class ChooseName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNameOfSymbol: '',
    }

    this.handleInputChangeSymbolName = this.handleInputChangeSymbolName.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputName = React.createRef()
  }


  handleInputChangeSymbolName(event) {
    this.setState({ currentNameOfSymbol: event.target.value })
  }


  /*  eslint-disable */
  handleKeyPress(e) { 
    if (e.key === 'Enter'){
      e.preventDefault()
      switch (e.target.name) {
        case 'name': {
          const { syllableForInsert, actions } = this.props
          actions.filterSymbolsByName(syllableForInsert.values.name)
          break;
        }
        
        case 'options': {
          const { syllableForInsert, actions } = this.props
          actions.filterSymbolsByOptions(syllableForInsert.values.options)
          break;
        }
        
        case 'pitch': {
          const { syllableForInsert, actions } = this.props
          actions.filterSymbolsByPitch(syllableForInsert.values.pitch)
          break;
        }

        case 'syllable': {
          
          const { symbols, actions, syllableForInsert } = this.props
          const onlyValues = map( symbols, ({ value }) => ({ value: value }))
          onlyValues[0].text = syllableForInsert.values.syllable
          console.log(onlyValues[0])
          console.log(symbols)
          actions.addSyllable(onlyValues[0])
          actions.getSymbols()
          
          
          break;
        }

        default:
          break;
      }
      
    }
  } 
  /*  eslint-enable */

  handleChange() {
    // console.log(this.props.syllableForInsert)
  }

  render() {
    const options = ['lol', 'kek']

    return (
      <React.Fragment>
        <form className="inputForm" onKeyPress={this.handleKeyPress}>
          <div className="field" >
            <label htmlFor="Name">Крюк</label>
            <Field
              name="name"
              options={NAMES_OF_SYMBOLS}
              onBlur={this.onBlur}
              onChange={this.handleChange}
              component="input"
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Опции</label>
            <Field
              label="Опции"
              name="options"
              component="input"
              type="text"
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Помета</label>
            <Field
              label="Помета"
              name="pitch"
              component="input"
              type="text"
            />
          </div>
          <div className="field" >
            <label htmlFor="Name">Текст</label>
            <Field
              label="Слог"
              name="syllable"
              component="input"
              type="text"
            />
          </div>
        </form>
      </React.Fragment>
    )
    // return (
    //   <div className="InputSymbol">
    //     <form onSubmit={this.handleSubmit}>
    //       <label htmlFor="symbol" >Крюк
    //         <input
    //           type="text"
    //           list="symbols"
    //           value={currentNameOfSymbol}
    //           onChange={this.handleInputChangeSymbolName}
    //           onKeyPress={this.handleKeyPress}
    //           ref={this.inputName}
    //         />
    //         <datalist id="symbols">
    //           {/* eslint-disable-next-line */}
    //           {namesOfSymbols.map(({ name }, index) => (<option key={index}>{name}</option>))}
    //         </datalist>
    //       </label>
    //     </form>
    //     <ChooseOptions
    //       data={find(data, item => item.name === currentNameOfSymbol)}
    //     />
    //   </div>
    // )
  }
}

ChooseName.propTypes = {
  data: PropTypes.array,
}

const ChooseNameWithForm = reduxForm({
  form: 'syllableForInsert',
})(ChooseName)

const mapStateToProps = state => ({ syllableForInsert: state.form.syllableForInsert, paper: state.paper, symbols: state.symbols.symbols })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ getSymbols, filterSymbolsByName, filterSymbolsByOptions, filterSymbolsByPitch, addTextToSyllable, addSyllable, setSyllables }, dispatch) }) // eslint-disable-line max-len


export default connect(mapStateToProps, mapDispatchToProps)(ChooseNameWithForm)
