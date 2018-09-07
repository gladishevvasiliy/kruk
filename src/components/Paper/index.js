import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  InsertSyllable,
  AreaOfSymbols,
  PaperStyle,
  InsertComposition,
  CurrentSymbols,
  InsertText,
} from '../'

import { Header } from '../../utils'
import { removeLastSyllable } from '../../actions'

import '../../res/bootstrap/css/bootstrap.min.css'
import './style.css'

class Paper extends Component {
  handleremoveLastSyllable = () => {
    const { actions } = this.props
    actions.removeLastSyllable()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="Paper">
          <AreaOfSymbols />
          <div className="control">
            <div className="InputSymbol control-block">
              <InsertSyllable />
              <div className="removeLast">
                <div />
                <button
                  type="button"
                  className="removeButton btn btn-danger"
                  onClick={this.handleremoveLastSyllable}
                >
                  <i className="icon-bin" />
                  Удалить последний слог
                </button>
              </div>
            </div>
            <div className="control-block">
              <CurrentSymbols />
            </div>
            <div className="control-block">
              <InsertComposition />
              <PaperStyle />
            </div>
            <div className="control-block control-block-last">
              <InsertText />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  paper: state.paper,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeLastSyllable,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Paper)

Paper.propTypes = {
  actions: PropTypes.object,
}

