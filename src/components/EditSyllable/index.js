import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { hideModal } from '../../actions'
import { InsertSyllable } from '../index'


class EditSyllable extends Component {
  hideModal = () => {
    const { actions } = this.props
    actions.hideModal()
  }

  render() {
    const { showModalEdit, actions } = this.props
    return (
      <Modal isOpen={showModalEdit}>
        <ModalHeader toggle={this.hideModal}>Редактирование</ModalHeader>
        <ModalBody>
          <InsertSyllable />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={actions.hideModal}>Отмена</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ hideModal }, dispatch) })
const mapStateToProps = state => ({ showModalEdit: state.paper.showModalEdit })

export default connect(mapStateToProps, mapDispatchToProps)(EditSyllable)

EditSyllable.propTypes = {
  actions: PropTypes.object,
  showModalEdit: PropTypes.bool,
}
