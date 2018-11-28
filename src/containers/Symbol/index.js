import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import './style.css'

class Symbol extends Component { // eslint-disable-line

  addSyllable = (value) => {
    const { addSyllable } = this.props
    const syllableForInsert = { value }
    syllableForInsert.text = '-'
    syllableForInsert.type = 'KRUK'

    addSyllable(syllableForInsert)
  }

  render() {
    const { value, pitch, name } = this.props
    return (
      <div className="previewItem" onClick={() => this.addSyllable(value)}>
        <div
          className="previewKruk"
          dangerouslySetInnerHTML={{ __html: value }}
          data-toggle="tooltip"
          data-html="true"
          title={`${name}, помета: ${pitch}`}
        />
        <div className="sourceHtml">
          {value}
        </div>
      </div>
    )
  }
}

export default Symbol

Symbol.propTypes = {
  value: PropTypes.string,
  pitch: PropTypes.string,
  name: PropTypes.string,
}
