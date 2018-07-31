import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { symbols } = this.props
    return (
      <div className="areaOfSymbols">
        {symbols.map(item =>
          (<div>
            <div className="symbol" dangerouslySetInnerHTML={{ __html: item.value }} />
            <br />
            <div className="text" dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>),
        )}
      </div>
    )
  }
}

AreaOfSymbols.propTypes = {
  symbols: PropTypes.array,
}


export default AreaOfSymbols
