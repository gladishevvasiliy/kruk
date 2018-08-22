import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isNil } from 'lodash'
import { moveSyllable } from '../../actions'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


import Bucvica from '../../containers/Bucvica'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'

import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);

    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd(result) { // eslint-disable-line
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const { actions } = this.props
    actions.moveSyllable({ source, destination })
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { syllables, form } = this.props

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
        <Button color="danger" onClick={this.toggle}>LOL</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({ moveSyllable }, dispatch) }
)

const mapStateToProps = state => ({ syllables: state.paper.syllables, form: state.form })

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
