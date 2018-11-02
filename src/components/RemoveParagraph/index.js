import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap' // eslint-disable-line

import { hideModalDeleteParagraph, deleteParagraph } from '../../actions'

class RemoveParagraph extends Component { // eslint-disable-line

  yes = () => {
    const { actions, indexOfDeletingParagraph } = this.props
    actions.deleteParagraph(indexOfDeletingParagraph)
    actions.hideModalDeleteParagraph()
  }

  cancel = () => {
    const { actions } = this.props
    actions.hideModalDeleteParagraph()
  }

  render() {
    const { showModalDeleteParagraph } = this.props
    return (
      <Modal isOpen={showModalDeleteParagraph}>
        <ModalHeader toggle={this.cancel}>Удаление параграфа</ModalHeader>
        <ModalBody>
          <p>Вы уверены что хотите удалить этот параграф?</p>
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
  indexOfDeletingParagraph: state.paper.indexOfDeletingParagraph,
  showModalDeleteParagraph: state.paper.showModalDeleteParagraph,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    hideModalDeleteParagraph,
    deleteParagraph,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(RemoveParagraph)

RemoveParagraph.propTypes = {
  showModalDeleteParagraph: PropTypes.bool,
  actions: PropTypes.object,
  indexOfDeletingParagraph: PropTypes.number,
}
