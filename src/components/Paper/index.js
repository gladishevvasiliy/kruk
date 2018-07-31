import React, { Component } from 'react'
import { isNil } from 'lodash'
import InputSymbol from '../InputSymbol'
import AreaOfSymbols from '../AreaOfSymbols'
import PaperContext from '../../context'
import './style.css'


class Paper extends Component {
  constructor(props) {
    super(props)

    this.getDataForInsert = (dataForInsert) => {
      if (!isNil(dataForInsert)) {
        this.setState(prevState => ({
          dataOfArea: [...prevState.dataOfArea, dataForInsert],
        }))
      }
    }

    this.state = {
      dataOfArea: [],
      getDataForInsert: this.getDataForInsert,
    }
  }

  render() {
    return (
      <PaperContext.Provider value={this.state}>
        <React.Fragment>
          <div className="Paper">
            <AreaOfSymbols symbols={this.state.dataOfArea} />
            <InputSymbol getDataForInsert={this.getDataForInsert} />
          </div>
        </React.Fragment>
      </PaperContext.Provider>
    )
  }
}

export default Paper
