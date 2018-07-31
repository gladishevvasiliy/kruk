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
        {symbols.map(({ value, text }, index) => (
          // eslint-disable-next-line
          <div key={index} className="syllable"> 
            <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>
    )
  }
}

AreaOfSymbols.propTypes = {
  symbols: PropTypes.array,
}


export default AreaOfSymbols
