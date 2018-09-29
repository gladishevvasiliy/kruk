
import React, { PureComponent } from 'react'
import PropTypes from 'react-proptypes'
import ButtonRemove from '../../components/ButtonRemove'

import './style.css'

class Text extends PureComponent {
  render() {
    const { text, index, pageIndex } = this.props
    console.log("Text")
    console.log(pageIndex)
    return (
      <React.Fragment>
        <div
          className="text-line"
          // style={{
          //   fontSize: form.paperStyle.values.sizeOfText + 'pt', // eslint-disable-line
          //   height: form.paperStyle.values.sizeOfBucvica * 0.9,
          // }}
        >
          {text}
          <ButtonRemove index={index} pageIndex={pageIndex} className="text-remove-button" />
        </div>
      </React.Fragment>

    )
  }
}

export default Text

Text.propTypes = {
  text: PropTypes.string,
  pageIndex: PropTypes.number,
  index: PropTypes.number,
}

