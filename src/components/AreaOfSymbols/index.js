import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { isNil } from 'lodash'
import { moveSyllable, hideModalEdit } from '../../actions'
import InsertSyllable from '../InsertSyllable'


import Bucvica from '../../containers/Bucvica'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'

import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) { // eslint-disable-line
    super(props)
  }

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
            <div className="paperMargin">
              <Bucvica />
              {syllables.map(({ value, text }, index) => (
                <Syllable value={value} text={text} key={index} index={index} />  // eslint-disable-line
              ))}
            </div>
          </div>
        </div>
        <Modal isOpen={showModalEdit}>
          <ModalHeader toggle={actions.hideModalEdit}>Редактировать крюк</ModalHeader>
          <ModalBody>
            <InsertSyllable />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Сохранить</Button>{' '}
            <Button color="secondary" onClick={actions.hideModalEdit}>Отмена</Button>
          </ModalFooter>
        </Modal>
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
  { actions: bindActionCreators({ moveSyllable, hideModalEdit }, dispatch) }
)

const mapStateToProps = state => ({
  syllables: state.paper.syllables,
  form: state.form,
  showModalEdit: state.paper.showModalEdit,
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
