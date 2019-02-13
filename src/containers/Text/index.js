import React from 'react'
import PropTypes from 'react-proptypes'
import ButtonRemove from '../../components/ButtonRemove'

import './style.css'

const Text = ({ text, index, pageIndex }) => (
  <div className="text-line">
    {text}
    <ButtonRemove
      index={index}
      pageIndex={pageIndex}
      className="text-remove-button"
    />
  </div>
)

export default Text

Text.propTypes = {
  text: PropTypes.string,
  pageIndex: PropTypes.number,
  index: PropTypes.number,
}
