import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap' // eslint-disable-line

import { hideModalEditText, editText } from '../../actions'


class EditText extends Component { // eslint-disable-line

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { actions } = this.props
      console.log(e.target.value)
      actions.editText(e.target.value)
    }
  }

  render() {
    const { showModalEditText, actions } = this.props
    return (
      <Modal isOpen={showModalEditText}>
        <ModalHeader toggle={actions.hideModalEditText}>Изменить текст</ModalHeader>
        <ModalBody>
          <p>Введите новый текст и нажмите Enter</p>
          <form onKeyPress={this.handleKeyPress}> {/* eslint-disable-line */}
            <input type="text" name="name" className="inputTextUCS form-control" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={actions.hideModalEditText}>Отмена</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  indexOfEditableText: state.paper.indexOfEditableText,
  showModalEditText: state.paper.showModalEditText,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    hideModalEditText,
    editText,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(EditText)

EditText.propTypes = {
  showModalEditText: PropTypes.bool,
  actions: PropTypes.object,
}
