import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { isNil } from 'lodash'
import { moveSyllable } from '../../actions'


import Bucvica from '../../containers/Bucvica'
import Syllable from '../../containers/Syllable'
import Loading from '../../utils/Loading'
import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

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
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="paperMargin">
                <Bucvica />
                <Droppable droppableId="droppable-1" direction="horizontal">
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable"
                    >
                      {syllables.map(({ value, text }, index) => (
                        <Syllable value={value} text={text} key={index} index={index} />  // eslint-disable-line
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </div>
        </div>
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
