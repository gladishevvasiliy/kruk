import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap' // eslint-disable-line
import { isNil } from 'lodash'
import { moveSyllable, hideModal } from '../../actions'
import InsertSyllable from '../InsertSyllable'
import EditText from '../EditText'


import Bucvica from '../../containers/Bucvica'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'

import './style.css'

class AreaOfSymbols extends Component { // eslint-disable-line

  render() {
    const { syllables, form, showModalEdit, actions } = this.props

    if (isNil(form.paperStyle)) {
      return (
        <Loading />
      )
    }

    return (
      <React.Fragment>
        <div className="paperArea">
          <div
            className="areaOfSymbols mx-auto"
            style={{
              width: form.paperStyle.values.sizeOfPage + 'px', // eslint-disable-line
            }}
          >
            <div
              className="paperMargin"
              style={{
                width: form.paperStyle.values.sizeOfPage + 'px', // eslint-disable-line
              }}
            >
              <Bucvica />
              {syllables.map(({ value, text }, index) => (
                <Syllable value={value} text={text} key={index} index={index} />  // eslint-disable-line
              ))}
            </div>
          </div>
        </div>
        <Modal isOpen={showModalEdit}>
          <ModalHeader toggle={actions.hideModal}>Заменить крюк</ModalHeader>
          <ModalBody>
            <InsertSyllable />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={actions.hideModal}>Отмена</Button>
          </ModalFooter>
        </Modal>
        <EditText />
      </React.Fragment>
    )
  }
}

AreaOfSymbols.propTypes = {
  syllables: PropTypes.array,
  form: PropTypes.object,
  actions: PropTypes.object,
  showModalEdit: PropTypes.bool,
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({ moveSyllable, hideModal }, dispatch) }
)

const mapStateToProps = state => ({
  syllables: state.paper.syllables,
  form: state.form,
  showModalEdit: state.paper.showModalEdit,
  showModalEditText: state.paper.showModalEditText,
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
