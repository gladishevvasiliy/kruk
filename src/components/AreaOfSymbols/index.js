import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSyllables } from '../../actions'


import './style.css'

class AreaOfSymbols extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
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

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setSyllables }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(AreaOfSymbols)
