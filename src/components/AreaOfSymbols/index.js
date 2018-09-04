import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap' // eslint-disable-line
import { isNil } from 'lodash'
import { moveSyllable, hideModal, changePage, removePage, addPage } from '../../actions'
import InsertSyllable from '../InsertSyllable'
import EditText from '../EditText'


import Bucvica from '../../containers/Bucvica'
import Text from '../../containers/Text'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'

import './style.css'

class AreaOfSymbols extends Component { // eslint-disable-line
  constructor(props) {
    super(props)

    this.changePage = this.changePage.bind(this)
    this.removePage = this.removePage.bind(this)
  }

  changePage(pageIndex) {
    const { actions } = this.props
    actions.changePage(pageIndex)
  }

  removePage(e, pageIndex) {
    const { actions } = this.props
    actions.removePage(pageIndex)
    e.stopPropagation()
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
          <div className="areaOfSymbols mx-auto">
            <div className="paperMargin" >
              {syllables.map((item, pageIndex) => ( //eslint-disable-line
                <div className="a4" key={pageIndex} onClick={() => this.changePage(pageIndex)}>
                  {pageIndex !== 0 ?
                    <button
                      name={pageIndex}
                      onClick={e => this.removePage(e, pageIndex)}
                      className="page-remove-button"
                    >
                      <i className="icon-bin" />
                    </button>
                    : null}
                  <div className="page">
                    <Bucvica />
                    {
                      item.map(({ value, text, type }, index) => (
                        /* eslint-disable */
                        type === 'KRUK' ? <Syllable value={value} text={text} key={index} index={index} pageIndex={pageIndex} /> : 
                        type === 'BUCVICA' ? <Bucvica text={text} index={index} pageIndex={pageIndex}/> : 
                        type === 'TEXT' ? <Text text={text} index={index} pageIndex={pageIndex}/> : 
                        type === 'BREAK' ? <hr className="break"/> : null
                        /* eslint-enable */
                      ))
                    }
                  </div>
                </div>
              ))
              }
              <Button color="primary" className="add-page" onClick={actions.addPage}>Добавить страницу</Button>
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
  { actions: bindActionCreators({
    moveSyllable,
    hideModal,
    changePage,
    removePage,
    addPage,
  }, dispatch) }
)

const mapStateToProps = state => ({
  syllables: state.paper.syllables,
  form: state.form,
  showModalEdit: state.paper.showModalEdit,
  showModalEditText: state.paper.showModalEditText,
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
