import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import './style.css'

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

class PaperStyle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="paperStyle text-left">
        <h4>Настройки</h4>
        <label htmlFor="fontRange">Размер знамен и текста</label>
        <Field
          name="fontSize"
          type="range"
          className="custom-range"
          component={RangeInput}
          id="fontRange"
          min="30"
          max="80"
          step="10"
        />
        <label htmlFor="sizeOfBucvica">Размер буквицы</label>
        <Field
          name="sizeOfBucvica"
          type="range"
          className="custom-range"
          component={RangeInput}
          id="sizeOfBucvica"
          min="50"
          max="180"
        />
      </div>
    )
  }
}

RangeInput.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
}

const PaperStyleWithForm = reduxForm({
  form: 'paperStyle',
})(PaperStyle)

const InitializePaperStyleWithForm = connect(
  () => ({ initialValues: { fontSize: 40, sizeOfBucvica: 72, sizeOfPage: 900 } }),
)(PaperStyleWithForm)

export default InitializePaperStyleWithForm

