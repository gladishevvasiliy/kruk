import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import EditButtons from '../../components/EditButtons'
import {
  showModalEditText,
  changePage,
} from '../../actions'

import './style.css'

class Syllable extends Component {
  editText() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.showModalEditText(index)
  }

  render() {
    const { form, value, text, index, pageIndex, paragraphIndex } = this.props
    return (
      <div className={`syllable size${form.paperStyle.values.fontSize}`}>
        <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
        <div id={index} className="text" onClick={e => this.editText(e)} dangerouslySetInnerHTML={{ __html: text }} />
        <EditButtons index={index} pageIndex={pageIndex} paragraphIndex={paragraphIndex} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ form: state.form })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({
    showModalEditText,
    changePage,
  }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Syllable)

Syllable.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
  value: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
  pageIndex: PropTypes.number,
  paragraphIndex: PropTypes.number,
}
