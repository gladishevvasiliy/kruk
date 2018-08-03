// import React, { PropTypes } from 'react'
import React, { Component } from 'react'
import Select from 'react-select'

const RFReactSelect = ({ input/*, options/*, multi, className */ }) => {
  const { name, value, onBlur, onChange, onFocus } = input
  // const transformedValue = transformValue(value, options, multi);
  return (
    <Select
      valueKey="value"
      name={name}
      value={value}
      // options={options}
      onChange={onChange}
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
    />
  )
}

/**
 * onChange from Redux Form Field has to be called explicity.
 */
// const singleChangeHandler = func => value => func(value ? value.value : '')


/**
 * onBlur from Redux Form Field has to be called explicity.
 */
// const multiChangeHandler = func => values => func(values.map(value => value.value))

/**
 * For single select, Redux Form keeps the value as a string, while React Select 
 * wants the value in the form { value: "grape", label: "Grape" }
 * 
 * * For multi select, Redux Form keeps the value as array of strings, while React Select 
 * wants the array of values in the form [{ value: "grape", label: "Grape" }]
 */
// function transformValue(value, options, multi) {
//   if (multi && typeof value === 'string') return [];

//   const filteredOptions = options.filter(option => {
//     return multi 
//       ? value.indexOf(option.value) !== -1
//       : option.value === value;
//   });

//   return multi ? filteredOptions : filteredOptions[0];
// }

export default RFReactSelect


// RFReactSelect.defaultProps = {
//     multi: false,
//     className: ""
//   };
  
//   RFReactSelect.propTypes = {
//     input: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//       onBlur: PropTypes.func.isRequired,
//       onChange: PropTypes.func.isRequired,
//       onFocus: PropTypes.func.isRequired,
//     }).isRequired,
//     options: PropTypes.array.isRequired,
//     multi: PropTypes.bool,
//     className: PropTypes.string
//   };