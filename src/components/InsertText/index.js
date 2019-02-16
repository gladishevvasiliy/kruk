import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

import { changeParagraph, addSyllable, toggleShowPagination } from '../../actions'

class InsertText extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addBucvica = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { actions } = this.props
      const bucvica = { value: '', text: e.target.value, type: 'BUCVICA' }
      actions.addSyllable(bucvica)
    }
  }

  addText = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { actions } = this.props
      const text = { value: '', text: e.target.value, type: 'TEXT' }
      actions.addSyllable(text)
    }
  }

  newParagraph = () => {
    const { actions, syllables, currentPageNum, currentParagraphNum } = this.props
    if (syllables[currentPageNum][currentParagraphNum] === undefined) {
      return
    }
    const numOfLastParagraphOnPage = syllables[currentPageNum].length - 1
    const newParagraphNum = numOfLastParagraphOnPage + 1
    actions.changeParagraph(newParagraphNum)
  }

  toggleShowPagination = () => {
    const { actions } = this.props
    actions.toggleShowPagination()
  }

  render() {
    return (
      <div className="insert-text text-left">
        <h4>Вставка текста</h4>
        <form onKeyPress={this.addText}>  {/* eslint-disable-line */}
          <div className="field field-insert-text" >
            <label htmlFor="Name">Вставить текст</label>
            <input
              label="Текст"
              name="text"
              className="form-control ucs-text"
            />
          </div>
        </form>
        <form onKeyPress={this.addBucvica}>  {/* eslint-disable-line */}
          <div className="field field-insert-bucvica" >
            <label htmlFor="Name">Вставить буквицу</label>
            <input
              label="Буквица"
              name="bucvica"
              className="form-control"
            />
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.newParagraph}
        >
          Новый абзац
        </button>
        <div className="toggleShowPagination custom-control custom-checkbox">
          <input
            type="checkbox"
            defaultChecked
            className="custom-control-input"
            id="showPagination"
            onChange={this.toggleShowPagination}
          />
          <label
            className="custom-control-label"
            htmlFor="showPagination"
          >
          Отображать номера страниц
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  compositions: state.compositions,
  currentParagraphNum: state.paper.currentParagraphNum,
  currentPageNum: state.paper.currentPageNum,
  syllables: state.paper.syllables,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeParagraph,
    addSyllable,
    toggleShowPagination,
  },
  dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(InsertText)

InsertText.propTypes = {
  actions: PropTypes.object,
  currentParagraphNum: PropTypes.number,
  currentPageNum: PropTypes.number,
  syllables: PropTypes.array,
}
