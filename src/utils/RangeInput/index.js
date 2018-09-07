import React from 'react'
import PropTypes from 'react-proptypes'

const RangeInput = ({ input, type, className, id, min, max, step }) => (
  <input
    type={type}
    onChange={input.onChange}
    className={className}
    id={id}
    min={min}
    max={max}
    step={step}
  />
)

export default RangeInput

RangeInput.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
}
