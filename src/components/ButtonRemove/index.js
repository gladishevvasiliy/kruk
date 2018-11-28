import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { removeSyllablebyIndex, checkParagraphIsEmpty, changePage } from '../../actions'

class ButtonRemove extends Component {
  removeSyllable() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.removeSyllablebyIndex(index)
    actions.checkParagraphIsEmpty()
  }
  render() {
    const { index, className } = this.props
    return (
      <button name={index} onClick={e => this.removeSyllable(e)} className={className}><i className="icon-bin" /></button>
    )
  }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({
    removeSyllablebyIndex,
    changePage,
    checkParagraphIsEmpty,
  }, dispatch) }
)

export default connect(() => ({ }), mapDispatchToProps)(ButtonRemove)

ButtonRemove.propTypes = {
  actions: PropTypes.object,
  index: PropTypes.number,
  pageIndex: PropTypes.number,
  className: PropTypes.string,
}
