import React, { PureComponent } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { changePage, toggleModalDeletePage } from '../../actions'

class RemovePageButton extends PureComponent {
  removePage = (e, pageIndex) => {
    const { actions } = this.props
    actions.changePage(pageIndex)
    actions.toggleModalDeletePage(pageIndex)
    e.stopPropagation()
  }

  render() {
    const { pageIndex } = this.props
    return (
      <Button
        color="danger"
        name={pageIndex}
        onClick={e => this.removePage(e, pageIndex)}
        className="page-remove-button"
      >
        Удалить страницу
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ toggleModalDeletePage, changePage }, dispatch) })
export default connect(() => ({}), mapDispatchToProps)(RemovePageButton)

RemovePageButton.propTypes = {
  pageIndex: PropTypes.number,
  actions: PropTypes.object,
}
