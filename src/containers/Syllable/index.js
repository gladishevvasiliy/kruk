import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { Draggable } from 'react-beautiful-dnd'
import { removeSyllablebyIndex, repeatSyllableByIndex } from '../../actions'

class Syllable extends Component {
  removeLastSyllable(e) {
    const { actions } = this.props
    actions.removeSyllablebyIndex(e.target.name)
  }

  repeatSyllableByIndex(e) {
    const { actions } = this.props
    actions.repeatSyllableByIndex(e.target.name)
  }

  render() {
    const { form, value, text, index } = this.props
    return (
      <Draggable key={index} draggableId={index} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={`syllable size${form.paperStyle.values.fontSize}`}>
              <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
              <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
              <button name={index} onClick={e => this.removeLastSyllable(e)} className="syllable-button remove"><i className="fa fa-trash" /></button>
              <button name={index} onClick={e => this.repeatSyllableByIndex(e)} className="syllable-button repeat"><i className="fa fa-plus" /></button>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}


const mapStateToProps = state => ({ form: state.form })

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({ removeSyllablebyIndex, repeatSyllableByIndex }, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Syllable)

Syllable.propTypes = {
  form: PropTypes.object,
  actions: PropTypes.object,
  value: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
}
