import React, { Component } from 'react'
import './style.css'

class InputSymbol extends Component {
  constructor(props) {
    super(props)

    this.state = {
      symbols: [
        { id: 1, name: 'Параклит' },
        { id: 2, name: 'Стопица' },
        { id: 3, name: 'Крюк' },
        { id: 4, name: 'Борзый го лубчик' }],
      options: [
        { id: 1, name: 'Подчашие' },
        { id: 2, name: 'Подвертка' },
        { id: 3, name: 'Тихая помета' }],
      pitch: [
        { id: 1, name: 'Ут' },
        { id: 2, name: 'Ре' },
        { id: 3, name: 'Ми' },
        { id: 4, name: 'Фа' },
        { id: 5, name: 'Соль' },
        { id: 6, name: 'Ля' },
        { id: 7, name: 'Фа выс' },
        { id: 8, name: 'Соль выс' },
        { id: 9, name: 'Ля выс' },
      ],
      currentNameOfSymbol: '',
      currentOptionsOfSymbol: '',
      currentPitchOfSymbol: '',
    }

    this.handleInputChangeSymbolOptions = this.handleInputChangeSymbolOptions.bind(this)
    this.handleInputChangeSymbolName = this.handleInputChangeSymbolName.bind(this)
    this.handleInputChangeSymbolPitch = this.handleInputChangeSymbolPitch.bind(this)
  }

  handleInputChangeSymbolName(event) {
    this.setState({ currentNameOfSymbol: event.target.value })
  }

  handleInputChangeSymbolOptions(event) {
    this.setState({ currentOptionsOfSymbol: event.target.value })
  }

  handleInputChangeSymbolPitch(event) {
    this.setState({ currentPitchOfSymbol: event.target.value })
  }

  render() {
    const {
      symbols,
      options,
      pitch,
      currentNameOfSymbol,
      currentOptionsOfSymbol,
      currentPitchOfSymbol,
    } = this.state

    const { getDataForSearch } = this.props

    return (
      <div className="InputSymbol">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="symbol" >Крюк
            <input
              type="text"
              list="symbols"
              value={currentNameOfSymbol}
              onChange={this.handleInputChangeSymbolName}
            />
            <datalist id="symbols">
              {symbols.map(({ id, name }) => (<option key={id}>{name}</option>))}
            </datalist>
          </label>
          <label htmlFor="options">Опции
            <input
              type="text"
              list="options"
              value={currentOptionsOfSymbol}
              onChange={this.handleInputChangeSymbolOptions}
            />
            <datalist id="options">
              {options.map(({ id, name }) => (<option key={id}>{name}</option>))}
            </datalist>
          </label>
          <label htmlFor="pitch">Помета
            <input
              type="text"
              list="pitch"
              value={currentPitchOfSymbol}
              onChange={this.handleInputChangeSymbolPitch}
            />
            <datalist id="pitch">
              {pitch.map(({ id, name }) => (<option key={id}>{name}</option>))}
            </datalist>
          </label>
        </form>
        <button onClick={() => { getDataForSearch({ currentNameOfSymbol, currentOptionsOfSymbol, currentPitchOfSymbol }) }}>Отправить</button>
      </div>
    )
  }
}

export default InputSymbol
