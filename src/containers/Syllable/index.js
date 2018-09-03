import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { 
  removeSyllablebyIndex,
  repeatSyllableByIndex,
  showModalEdit,
  showModalInsert,
  showModalEditText,
  changePage,
} from '../../actions'

import './style.css'

class Syllable extends Component {
  removeLastSyllable() {
    const { actions, index, pageIndex } = this.props
    // TODO при удалении с конкретной стр менять номер currentPageNum на это стр
    console.log(pageIndex)
    actions.changePage(pageIndex)
    actions.removeSyllablebyIndex(index)
  }

  repeatSyllableByIndex() {
    const { actions, index, pageIndex } = this.props
    console.log(pageIndex)
    actions.changePage(pageIndex)
    actions.repeatSyllableByIndex(index)
  }

  editSyllable() {
    const { actions, index, pageIndex } = this.props
    console.log(pageIndex)
    actions.changePage(pageIndex)
    actions.showModalEdit(index)
  }

  insertSyllable() {
    const { actions, index, pageIndex } = this.props
    console.log(pageIndex)
    actions.changePage(pageIndex)
    actions.showModalInsert(index)
  }

  editText() {
    const { actions, index, pageIndex } = this.props
    console.log(pageIndex)
    actions.changePage(pageIndex)
    actions.showModalEditText(index)
  }

  render() {
    const { form, value, text, index } = this.props
    return (
      <div className={`syllable size${form.paperStyle.values.fontSize}`}>
        <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
        <div id={index} className="text" onClick={e => this.editText(e)} dangerouslySetInnerHTML={{ __html: text }} />
        <button name={index} onClick={e => this.removeLastSyllable(e)} className="syllable-button remove"><i className="icon-bin" /></button>
        <button name={index} onClick={e => this.repeatSyllableByIndex(e)} className="syllable-button repeat"><i className="icon-copy" /></button>
        <button name={index} onClick={e => this.insertSyllable(e)} className="syllable-button insert"><i className="icon-plus" /></button>
        <button name={index} onClick={e => this.editSyllable(e)} className="syllable-button edit"><i className="icon-pen" /></button>
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
    showModalEditText,
    changePage,
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
