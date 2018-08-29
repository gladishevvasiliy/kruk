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
        <label htmlFor="bucvica">Буквица</label>
        <Field
          name="bucvica"
          type="text"
          className="form-control"
          component="input"
          id="bucvica"
          maxLength="1"
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
        <label htmlFor="sizeOfPage">Ширина страницы</label>
        <Field
          name="sizeOfPage"
          type="range"
          className="custom-range"
          component={RangeInput}
          id="sizeOfPage"
          min="700"
          max="1600"
        />
        {/* <label htmlFor="marginLine">Межстрочный интервал</label>
        <Field
          name="marginLine"
          type="range"
          className="custom-range"
          component={RangeInput}
          id="marginLine"
          min="10"
          max="50"
        /> */}
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
  () => ({ initialValues: { fontSize: 40, sizeOfBucvica: 50, sizeOfPage: 900 } }),
)(PaperStyleWithForm)

export default InitializePaperStyleWithForm
