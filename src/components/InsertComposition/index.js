import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

import { RFReactSelect } from '../../utils/RFReactSelect'
import { COMPOSITIONS } from '../../res/'

import { addSyllable } from '../../actions'

class InsertComposition extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  changeName = (e) => {
    const { actions } = this.props
    e.value.value.map(item => actions.addSyllable({ value: item, text: '-' }))
  }

  render() {
    return (
      <div className="paperStyle text-left">
        <h4>Вставить попевку</h4>
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
      </div>
    )
  }
}

const InsertCompositionWithForm = reduxForm({
  form: 'compostitionForInsert',
})(InsertComposition)

const mapStateToProps = state => ({
  compositions: state.compositions,
})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ addSyllable }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InsertCompositionWithForm)

InsertComposition.propTypes = {
  actions: PropTypes.object,
}
