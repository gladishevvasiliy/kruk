import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import Select from 'react-select'
import { map, assignIn, clone } from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSymbols, filterSymbolsByName, filterSymbolsByOptions, filterSymbolsByPitch, addTextToSyllable, addSyllable, setSyllables } from '../../actions'
// import RFReactSelect from '../../utils/index'
import { NAMES_OF_SYMBOLS } from '../../constants'


import './style.css'

const renderField = field => (
  <div className="input-row">
    <input {...field.input} type="text" list={field.list} />
    <datalist id={field.list}>
      { NAMES_OF_SYMBOLS.map(symbol => <option value={symbol.name} />) }
    </datalist>
  </div>
)

const list = [
  { value: 1, label: 'Параклит' },
  { value: 2, label: 'Крюк' },
  { value: 3, label: 'Запятая' },
  { value: 4, label: 'Стопица' },
  { value: 5, label: 'Челюстка' },
  { value: 6, label: 'Ключ' },
  { value: 7, label: 'Подчашие' },
  { value: 8, label: 'Палка' },
  { value: 9, label: 'Скамейца' },
  { value: 10, label: 'Дербица' },
  { value: 11, label: 'Переводка' },
  { value: 12, label: 'Голубчик борзый' },
  { value: 13, label: 'Голубчик тихий' },
  { value: 14, label: 'Чашка' },
  { value: 15, label: 'Статья' },
  { value: 16, label: 'Статья светлая' },
  { value: 17, label: 'Статья с запятой' },
  { value: 18, label: 'Статья мрачная' },
  { value: 19, label: 'Малая закрытая' },
  { value: 20, label: 'Средняя закрытая' },
  { value: 21, label: 'Крыж' },
  { value: 22, label: 'Рог' },
  { value: 23, label: 'Сложитие' },
  { value: 24, label: 'Сложитие с купной' },
  { value: 25, label: 'Сложитие с запятой' },
  { value: 26, label: 'Полукулизма' },
  { value: 27, label: 'Два в челну' },
  { value: 28, label: 'Труба' },
  { value: 29, label: 'Дуда' },
  { value: 30, label: 'Мечник' },
  { value: 31, label: 'Стрела мрачная' },
  { value: 32, label: 'Стрела крыжевая' },
  { value: 33, label: 'Стрела поводная' },
  { value: 34, label: 'Стрела светлая' },
  { value: 35, label: 'Статья тресветлая' },
  { value: 36, label: 'Стрела светлотихая' },
  { value: 37, label: 'Стрела поездная' },
  { value: 38, label: 'Стрела громная' },
  { value: 39, label: 'Стрела громосветлая' },
  { value: 40, label: 'Стрела громотресветлая' },
  { value: 41, label: 'Стрела возводная' },
  { value: 42, label: 'Стрела громокрыжная' },
  { value: 43, label: 'Стрела трясосветлая' },
  { value: 44, label: 'Хамило' },
  { value: 45, label: 'Паук малый' },
  { value: 46, label: 'Паук большой' },
  { value: 47, label: 'Фита' },
  { value: 48, label: 'Полукулизма малая' },
  { value: 49, label: 'Фотиза' },
  { value: 50, label: 'Змийца' },
]

const RFReactSelect = ({ input, options }) => {
  const { name, value, onBlur, onChange, onFocus } = input
  return (
    <Select
      valueKey="value"
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
    />
  )
}

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

  handleChange(item) {
    const { actions } = this.props
    actions.filterSymbolsByName(item.label)
  }

  render() {
    return (
      <React.Fragment>
        <form className="inputForm" onKeyPress={this.handleKeyPress}>
          <Field name="name" onChange={this.handleChange} component={RFReactSelect} list="symbols" options={list} />
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
