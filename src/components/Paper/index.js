import React, { Component } from 'react'
import './style.css'
import InputSymbol from '../InputSymbol'
import AreaOfSymbols from '../AreaOfSymbols'

class Paper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataForSeach: {
        currentNameOfSymbol: '',
        currentOptionsOfSymbol: '',
        currentPitchOfSymbol: '',
      },
    }

    this.getDataForSearch = this.getDataForSearch.bind(this)
  }

  getDataForSearch(value) {
    this.setState({ dataForSeach: value })
  }

  render() {
    const { dataForSeach: { currentNameOfSymbol, currentOptionsOfSymbol, currentPitchOfSymbol } } = this.state
    return (
      <div className="Paper">
        <AreaOfSymbols />
        <InputSymbol getDataForSearch={this.getDataForSearch} />
        <div>
          <h1>{currentNameOfSymbol}</h1>
          <h2>{currentOptionsOfSymbol}</h2>
          <h2>{currentPitchOfSymbol}</h2>
        </div>
      </div>
    )
  }
}

export default Paper
