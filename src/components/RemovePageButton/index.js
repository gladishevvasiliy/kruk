import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removePage } from '../../actions'

class RemovePageButton extends PureComponent {
  removePage = (e, pageIndex) => {
    const { actions } = this.props
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

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ removePage }, dispatch) })
const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RemovePageButton)


RemovePageButton.propTypes = {
  pageIndex: PropTypes.number,
  actions: PropTypes.object,
}
