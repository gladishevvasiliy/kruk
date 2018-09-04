import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { removeSyllablebyIndex, changePage } from '../../actions'

class ButtonRemove extends Component {
  removeLastSyllable() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.removeSyllablebyIndex(index)
  }
  render() {
    const { index, className } = this.props
    return (
      <button name={index} onClick={e => this.removeLastSyllable(e)} className={className}><i className="icon-bin" /></button>
    )
  }
}

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({
    removeSyllablebyIndex,
    changePage,
  }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRemove)

ButtonRemove.propTypes = {
  actions: PropTypes.object,
  index: PropTypes.number,
  pageIndex: PropTypes.number,
  className: PropTypes.string,
}
