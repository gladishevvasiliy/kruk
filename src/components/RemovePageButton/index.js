import React, { PureComponent } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePage, removePage } from '../../actions'

class RemovePageButton extends PureComponent {
  removePage = (e, pageIndex) => {
    const { actions } = this.props
    actions.changePage(pageIndex)
    actions.removePage(pageIndex)
    e.stopPropagation()
  }

  render() {
    const { pageIndex } = this.props
    return (
      <button
        name={pageIndex}
        onClick={e => this.removePage(e, pageIndex)}
        className="page-remove-button"
      >
        <i className="icon-bin" />
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ removePage, changePage }, dispatch) })
export default connect(() => ({}), mapDispatchToProps)(RemovePageButton)

RemovePageButton.propTypes = {
  pageIndex: PropTypes.number,
  actions: PropTypes.object,
}
