import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { isNil } from 'lodash'
import Tour from 'reactour'

import {
  InsertSyllable,
  AreaOfSymbols,
  PaperStyle,
  InsertComposition,
  CurrentSymbols,
  InsertText,
} from '../'

import { Attention } from '../../containers/'

import { Header, getDataFromServer } from '../../utils'
import { removeLastSyllable, setSymbols } from '../../actions'
import { GUIDE_STEPS } from '../../res/'

import '../../res/bootstrap/css/bootstrap.min.css'
import './style.css'

class Paper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTourOpen: false,
    }
  }

  handleremoveLastSyllable = () => {
    const { actions } = this.props
    actions.removeLastSyllable()
  }

  closeTour = () => {
    this.setState({
      isTourOpen: false,
    })
  }

  render() {
    const { paper } = this.props

    const showError = isNil(paper.syllables[paper.currentPageNum])
    return (
      <React.Fragment>
        <Tour
          steps={GUIDE_STEPS}
          isOpen={this.state.isTourOpen}
          onRequestClose={this.closeTour}
          className="helper"
          closeWithMask={false}
        />
        {localStorage.getItem('visited') ? null : <Attention />}
        <Header />
        <div className="Paper">
          <AreaOfSymbols />
          <div className="control">
            <div className="InputSymbol control-block">
              <InsertSyllable />
              <div>
                <Alert
                  style={{ display: showError ? 'block' : 'none' }}
                  className="errorNoParagraph"
                  color="danger"
                >
                  Не выбрана страница и абзац для ввода. Кликните по странице
                  или абзацу, в который вы хотите ввести крюк.
                </Alert>
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
  actions: bindActionCreators(
    {
      removeLastSyllable,
      setSymbols,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paper)

Paper.propTypes = {
  actions: PropTypes.object,
}
