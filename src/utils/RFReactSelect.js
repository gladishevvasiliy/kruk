import React from 'react'
import Select from 'react-select'
import PropTypes from 'react-proptypes'

export const RFReactSelect = ({ input, options, className }) => {
  const { name, value, onBlur, onChange, onFocus } = input
  return (
    <Select
      valueKey="value"
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
      className={className}
    />
  )
}

RFReactSelect.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  className: PropTypes.string,

}

export const RFReactMultiSelect = ({ input, options, className }) => {
  const { name, value, onBlur, onChange, onFocus } = input
  return (
    <Select
      valueKey="value"
      name={name}
      value={value}
      isMulti
      options={options}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
      className={className}
    />
  )
}

RFReactMultiSelect.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  className: PropTypes.string,

}

