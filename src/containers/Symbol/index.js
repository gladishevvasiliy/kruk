import React, { Component } from 'react'
import PropTypes from 'react-proptypes'

class Symbol extends Component { // eslint-disable-line

  render() {
    const { value, pitch, name } = this.props
    return (
      <React.Fragment>
        <div
          className="previewSymbol"
          dangerouslySetInnerHTML={{ __html: value }}
          data-toggle="tooltip"
          data-html="true"
          title={`${name}, помета: ${pitch}`}
        />
        <div>
          {value}
        </div>
      </React.Fragment>
    )
  }
}

export default Symbol

Symbol.propTypes = {
  value: PropTypes.string,
  pitch: PropTypes.string,
  name: PropTypes.string,
}
