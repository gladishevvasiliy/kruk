import React, { Component } from 'react'
import Select from 'react-select'

export const RFReactSelect = ({ input, options, className, ref }) => {
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
      ref={ref}
    />
  )
}

export const RFReactMultiSelect = ({ input, options, className }) => {
  const { name, value, onBlur, onChange, onFocus, ref } = input
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
      ref={ref}
    />
  )
}
