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
  changeParagraph,
  checkParagraphIsEmpty,
} from '../../actions'

class EditButtons extends Component {
  removeSyllablebyIndex() {
    const { actions, index, pageIndex, paragraphIndex } = this.props
    actions.changePage(pageIndex)
    actions.changeParagraph(paragraphIndex)
    actions.removeSyllablebyIndex(index)
    actions.checkParagraphIsEmpty()
  }

  repeatSyllableByIndex() {
    const { actions, index, pageIndex, paragraphIndex } = this.props
    actions.changePage(pageIndex)
    actions.changeParagraph(paragraphIndex)
    actions.repeatSyllableByIndex(index)
  }

  editSyllable() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.showModalEdit(index)
  }

  insertSyllable() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.showModalInsert(index)
  }

  render() {
    const { index } = this.props
    return (
      <div>
        <React.Fragment>
          <button name={index} onClick={e => this.removeSyllablebyIndex(e)} className="syllable-button remove"><i className="icon-bin" /></button>
          <button name={index} onClick={e => this.repeatSyllableByIndex(e)} className="syllable-button repeat"><i className="icon-copy" /></button>
          <button name={index} onClick={e => this.insertSyllable(e)} className="syllable-button insert"><i className="icon-plus" /></button>
          <button name={index} onClick={e => this.editSyllable(e)} className="syllable-button edit"><i className="icon-pen" /></button>
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({ form: state.form })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeSyllablebyIndex,
    repeatSyllableByIndex,
    showModalEdit,
    showModalInsert,
    showModalEditText,
    changePage,
    changeParagraph,
    checkParagraphIsEmpty,
  }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(EditButtons)

EditButtons.propTypes = {
  actions: PropTypes.object,
  index: PropTypes.number,
  pageIndex: PropTypes.number,
  paragraphIndex: PropTypes.number,
}
