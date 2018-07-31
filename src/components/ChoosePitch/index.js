import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { isNil, filter } from 'lodash'
import PaperContext from '../../context'
import InputText from '../InputText'

import './style.css'


class ChoosePitch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPitchOfSymbol: '',
      itemToInsert: '',
    }

    this.handleInputChangeSymbolPitch = this.handleInputChangeSymbolPitch.bind(this)
  }


  handleInputChangeSymbolPitch(event) {
    this.setState({
      currentPitchOfSymbol: event.target.value,
    })
  }

  render() {
    const { data } = this.props
    if (isNil(data) || data === '' || data === []) return null

    const { currentPitchOfSymbol } = this.state

    return (
      <PaperContext.Consumer>
        {context =>
          (<div className="InputSymbol">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="pitch">Помета
                <input
                  type="text"
                  list="pitch"
                  value={currentPitchOfSymbol}
                  onChange={this.handleInputChangeSymbolPitch}
                />
                <datalist id="pitch">
                  {/* eslint-disable-next-line */}
                  {data.map(({ pitch }, index) => (<option key={index}>{pitch}</option>))} 
                </datalist>
              </label>
            </form>
            <InputText getDataForInsert={context.getDataForInsert} data={filter(this.props.data, ({ pitch }) => pitch === this.state.currentPitchOfSymbol)} />
          </div>)
        }
      </PaperContext.Consumer>
    )
  }
}

ChoosePitch.propTypes = {
  data: PropTypes.array,
}

export default ChoosePitch
