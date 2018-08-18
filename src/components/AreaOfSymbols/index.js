import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isNil } from 'lodash'
import { setSyllables, removeSyllablebyIndex } from '../../actions'
import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  removeLastSyllable(e) {
    const { actions } = this.props
    actions.removeSyllablebyIndex(e.target.name)
  }

  render() {
    const { syllables, form } = this.props
    if (isNil(form.paperStyle)) {
      return (
        <React.Fragment>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">Loading...</span>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div className="areaOfSymbols">
          <div
            className="bucvica"
            style={{
              fontSize: form.paperStyle.values.sizeOfBucvica + 'pt', // eslint-disable-line
              height: form.paperStyle.values.sizeOfBucvica * 0.9,
            }}
            dangerouslySetInnerHTML={{
              __html: form.paperStyle.values.bucvica,
            }}
          />
          {syllables.map(({ value, text }, index) => (
            // eslint-disable-next-line
            <div key={index} className={`syllable size${form.paperStyle.values.fontSize}`}>
              <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
              <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
              <button name={index} onClick={e => this.removeLastSyllable(e)} className="remove"><i className="fa fa-trash" /></button>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

AreaOfSymbols.propTypes = {
  syllables: PropTypes.array,
  actions: PropTypes.object,
  form: PropTypes.object,
}

const mapStateToProps = state => ({ syllables: state.paper.syllables, form: state.form })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({ setSyllables, removeSyllablebyIndex }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
