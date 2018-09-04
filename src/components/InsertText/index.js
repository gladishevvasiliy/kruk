import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

import { addSyllable } from '../../actions'

class InsertText extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addBucvica = (e) => {
    if (e.key === 'Enter') {
      const { actions } = this.props
      e.preventDefault()
      actions.addSyllable({ value: '', text: e.target.value, type: 'BUCVICA' })
    }
  }

  addText = (e) => {
    if (e.key === 'Enter') {
      const { actions } = this.props
      e.preventDefault()
      actions.addSyllable({ value: '', text: e.target.value, type: 'TEXT' })
    }
  }

  render() {
    return (
      <div className="insert-text text-left">
        <h4>Вставить текст</h4>
        <form onKeyPress={this.addBucvica}>  {/* eslint-disable-line */}
          <div className="field" >
            <label htmlFor="Name">Вставить буквицу</label>
            <input
              label="Буквица"
              name="bucvica"
              className="form-control"
            />
          </div>
        </form>
        <form onKeyPress={this.addText}>  {/* eslint-disable-line */}
          <div className="field" >
            <label htmlFor="Name">Вставить текст</label>
            <input
              label="Текст"
              name="text"
              className="form-control"
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  compositions: state.compositions,
})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ addSyllable }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(InsertText)

InsertText.propTypes = {
  actions: PropTypes.object,
}
