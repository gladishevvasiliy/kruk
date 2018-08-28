import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'react-proptypes'
import { connect } from 'react-redux'
import { isNil } from 'lodash'

import { removeLastSyllable } from '../../actions'
import './style.css'

class CurrentSymbols extends Component { //eslint-disable-line
  render() {
    const { currentSymbols } = this.props
    return (
      <div className="currentSymbols text-left">
        <h4>Подходящие знамена</h4>
        { isNil(currentSymbols) ?
          <p>Подходящих знамен нет</p>
          : <div className="currentSymbolsArea">{ currentSymbols.map(({ value }) => <div className="previewSymbol" dangerouslySetInnerHTML={{ __html: value }} />) }</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentSymbols: state.symbols.currentSymbols,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeLastSyllable,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSymbols)

CurrentSymbols.propTypes = {
  currentSymbols: PropTypes.array,
}
