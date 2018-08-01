import Select from 'react-select'
import React, { Component } from 'react'

import './style.css'

const multiSelect = (field) => {
  return (
    <div>
      <Select
        name={field.name}
        {...field.input}
        className="field"
        multi={true}
        options={field.options}
      />
    </div>
  )
}

export default multiSelect
