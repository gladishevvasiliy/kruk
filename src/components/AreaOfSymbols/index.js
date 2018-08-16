import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
    const { syllables } = this.props
    return (
      <div className="areaOfSymbols">
        {syllables.map(({ value, text }, index) => (
          // eslint-disable-next-line
          <div key={index} className="syllable">
            <div className="symbol" dangerouslySetInnerHTML={{ __html: value }} />
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
            <button name={index} onClick={e => this.removeLastSyllable(e)} className="remove">x</button>
          </div>
        ))}
      </div>
    )
  }
}

AreaOfSymbols.propTypes = {
  syllables: PropTypes.array,
}

const mapStateToProps = state => ({ syllables: state.paper.syllables })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setSyllables, removeSyllablebyIndex }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
