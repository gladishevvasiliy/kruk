
import React, { PureComponent } from 'react'
import PropTypes from 'react-proptypes'

import './style.css'

class Bucvica extends PureComponent {
  removeLastSyllable() {
    const { removeSyllablebyIndex, changePage, index, pageIndex } = this.props
    changePage(pageIndex)
    removeSyllablebyIndex(index)
  }

  render() {
    const { form, text, index } = this.props
    return (
      <div
        className="bucvica"
        style={{
          fontSize: form.paperStyle.values.sizeOfBucvica + 'pt', // eslint-disable-line
          height: form.paperStyle.values.sizeOfBucvica * 0.9,
        }}
      >
        {text}
        <button name={index} onClick={e => this.removeLastSyllable(e)} className="bucvica-button"><i className="icon-bin" /></button>
      </div>
    )
  }
}


export default Bucvica

Bucvica.propTypes = {
  form: PropTypes.object,
  text: PropTypes.string,
  pageIndex: PropTypes.number,
  index: PropTypes.number,
  removeSyllablebyIndex: PropTypes.func,
  changePage: PropTypes.func,
}

