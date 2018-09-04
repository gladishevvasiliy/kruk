
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'react-proptypes'
import { removeSyllablebyIndex, changePage } from '../../actions'


import './style.css'

class Bucvica extends PureComponent {
  removeLastSyllable() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.removeSyllablebyIndex(index)
  }

  render() {
    const { form, text, index } = this.props
    return (
      <div
        className="bucvica"
        style={{
          fontSize: form.paperStyle.values.sizeOfBucvica + 'pt', // eslint-disable-line
          height: form.paperStyle.values.sizeOfBucvica * 0.9,
        }}
      >
        {text}
        <button name={index} onClick={e => this.removeLastSyllable(e)} className="bucvica-button"><i className="icon-bin" /></button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ form: state.form })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({
    removeSyllablebyIndex,
    changePage,
  }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Bucvica)

Bucvica.propTypes = {
  form: PropTypes.object,
  text: PropTypes.string,
  actions: PropTypes.object,
  pageIndex: PropTypes.number,
  index: PropTypes.number,
}

