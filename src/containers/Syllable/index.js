import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { removeSyllablebyIndex, repeatSyllableByIndex, showModalEdit, showModalInsert } from '../../actions'

import './style.css'

class Syllable extends Component {
  removeLastSyllable(e) {
    const { actions } = this.props
    actions.removeSyllablebyIndex(e.target.name)
  }

  repeatSyllableByIndex(e) {
    const { actions } = this.props
    actions.repeatSyllableByIndex(e.target.name)
  }

  editSyllable(e) {
    const { actions } = this.props
    console.log(e.target.name)
    actions.showModalEdit(e.target.name)
  }

  insertSyllable(e) {
    const { actions } = this.props
    actions.showModalInsert(e.target.name)
  }

  render() {
    const { form, value, text, index } = this.props
    return (
      <div className={`syllable size${form.paperStyle.values.fontSize}`}>
        <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
        <button name={index} onClick={e => this.removeLastSyllable(e)} className="syllable-button remove"><i className="fa fa-trash" /></button>
        <button name={index} onClick={e => this.repeatSyllableByIndex(e)} className="syllable-button repeat"><i className="far fa-copy" /></button>
        <button name={index} onClick={e => this.insertSyllable(e)} className="syllable-button insert"><i className="fas fa-plus" /></button>
        <button name={index} onClick={e => this.editSyllable(e)} className="syllable-button edit"><i className="fa fa-pen" /></button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ form: state.form })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({
    removeSyllablebyIndex,
    repeatSyllableByIndex,
    showModalEdit,
    showModalInsert,
  }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Syllable)

Syllable.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
  value: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
}
