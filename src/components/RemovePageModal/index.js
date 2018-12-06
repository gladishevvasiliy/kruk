import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap' // eslint-disable-line

import { toggleModalDeletePage, removePage } from '../../actions'

class RemovePageModal extends Component { // eslint-disable-line

  yes = () => {
    console.log("yes")
    const { actions, indexOfDeletingPage } = this.props
    actions.removePage(indexOfDeletingPage)
    actions.toggleModalDeletePage()
  }

  cancel = () => {
    const { actions } = this.props
    actions.toggleModalDeletePage()
  }

  render() {
    const { showModalDeletePage } = this.props
    return (
      <Modal isOpen={showModalDeletePage}>
        <ModalHeader toggle={this.cancel}>Удаление страницы</ModalHeader>
        <ModalBody>
          <p>Вы уверены что хотите удалить эту страницу?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.yes}>Да</Button>
          <Button color="secondary" onClick={this.cancel}>Отмена</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  indexOfDeletingPage: state.paper.indexOfDeletingPage,
  showModalDeletePage: state.paper.showModalDeletePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleModalDeletePage,
    removePage,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(RemovePageModal)

RemovePageModal.propTypes = {
  showModalDeletePage: PropTypes.bool,
  actions: PropTypes.object,
  indexOfDeletingPage: PropTypes.number,
}
