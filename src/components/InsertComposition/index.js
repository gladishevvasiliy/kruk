import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filter } from 'lodash'
import './style.css'

import { RFReactSelect } from '../../utils'
import { COMPOSITIONS } from '../../res'

import { addSyllable, createToneList, getCompositions } from '../../actions'

class InsertComposition extends Component {
  changeName = (e) => {
    const { actions } = this.props
    actions.getCompositions()
    actions.createToneList(e.value)
  }

  changeTone = (e) => {
    const { actions, compositions } = this.props
    const symbolsFilteredByPitch = filter(compositions, ({ tone }) => tone === e.label)
    symbolsFilteredByPitch[0].value.map(item => actions.addSyllable({ value: item, text: '-', type: 'KRUK' }))
  }

  render() {
    const { tones } = this.props
    return (
      <div className="insertComposition text-left">
        <h4 className="text-left">Вставить попевку</h4>
        <div className="field" >
          <label htmlFor="Name">Название</label>
          <Field
            name="name"
            list="compositions"
            options={COMPOSITIONS}
            onChange={this.changeName}
            component={RFReactSelect}
            className="input"
          />
        </div>
        <div className="field" >
          <label htmlFor="Name">Глас</label>
          <Field
            name="tone"
            list="tones"
            options={tones}
            onChange={this.changeTone}
            component={RFReactSelect}
            className="input"
          />
        </div>
      </div>
    )
  }
}

const InsertCompositionWithForm = reduxForm({
  form: 'compostitionForInsert',
})(InsertComposition)

const mapStateToProps = state => ({
  compositions: state.symbols.compositions,
  tones: state.symbols.tones,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addSyllable,
    createToneList,
    getCompositions,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InsertCompositionWithForm)

InsertComposition.propTypes = {
  actions: PropTypes.object,
  compositions: PropTypes.array,
  tones: PropTypes.array,
}
