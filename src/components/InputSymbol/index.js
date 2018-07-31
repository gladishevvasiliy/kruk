import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import ChooseName from '../ChooseName'
import './style.css'
import { KRUKI } from '../../res/index'


class InputSymbol extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className="InputSymbol">
        <ChooseName data={KRUKI} getDataForInsert={this.props.getDataForInsert} />
      </div>
    )
  }
}

InputSymbol.propTypes = {
  getDataForInsert: PropTypes.func,
}

export default InputSymbol
