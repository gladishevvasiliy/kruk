import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { RangeInput } from '../../utils'
import './style.css'

const PaperStyle = () => (
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

const PaperStyleWithForm = reduxForm({
  form: 'paperStyle',
})(PaperStyle)

const InitializePaperStyleWithForm = connect(
  () => ({ initialValues: { fontSize: 40, sizeOfBucvica: 72, sizeOfPage: 900 } }),
)(PaperStyleWithForm)

export default InitializePaperStyleWithForm

