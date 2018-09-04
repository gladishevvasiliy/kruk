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

  addBreak = () => {
    const { actions } = this.props
    actions.addSyllable({ value: '', text: '', type: 'BREAK' })
  }

  render() {
    return (
      <div className="insert-text text-left">
        <h4>Вставка текста</h4>
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
              className="form-control ucs-text"
            />
          </div>
        </form>
        <button type="button" className="btn btn-primary" onClick={this.addBreak} >Вставить перенос строки</button>
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
