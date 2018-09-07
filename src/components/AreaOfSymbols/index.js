import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'reactstrap' // eslint-disable-line
import { isNil } from 'lodash'
import { moveSyllable, hideModal, changePage, removePage, addPage } from '../../actions'
import EditText from '../EditText'
import EditSyllable from '../EditSyllable'
import Bucvica from '../../containers/Bucvica'
import Text from '../../containers/Text'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'
import RemovePageButton from '../RemovePageButton'


import './style.css'

class AreaOfSymbols extends Component { // eslint-disable-line

  changePage = (pageIndex) => {
    const { actions } = this.props
    actions.changePage(pageIndex)
  }

  renderPages = () => {
    const { syllables } = this.props
    let pageTemplate = null

    if (syllables) {
      pageTemplate = syllables.map((item, pageIndex) => (
        <div className="a4" key={pageIndex} onClick={() => this.changePage(pageIndex)}>
          {pageIndex !== 0 ?
            <RemovePageButton pageIndex={pageIndex} />
            : null}
          <div className="page">
            {this.renderSyllables(item, pageIndex)}
          </div>
        </div>
      ))
    }
    return pageTemplate
  }

  renderSyllables = (item, pageIndex) => {
    const syllablesTemplate = item.map(({ value, text, type }, index) => (
    /* eslint-disable */
      type === 'KRUK' ? <Syllable value={value} text={text} key={index} index={index} pageIndex={pageIndex} /> : 
      type === 'BUCVICA' ? <Bucvica text={text} index={index} pageIndex={pageIndex}/> : 
      type === 'TEXT' ? <Text text={text} index={index} pageIndex={pageIndex}/> : 
      type === 'BREAK' ? <hr className="break"/> : null
      /* eslint-enable */
    ))
    return syllablesTemplate
  }

  render() {
    const { form, actions } = this.props


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
              {this.renderPages()}
              <Button
                color="primary"
                className="add-page"
                onClick={actions.addPage}
              >
                Добавить страницу
              </Button>
            </div>
          </div>
        </div>
        <EditSyllable />
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
