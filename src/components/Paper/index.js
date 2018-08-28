import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { isNil } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InsertSyllable from '../InsertSyllable'
import AreaOfSymbols from '../AreaOfSymbols'
import PaperContext from '../../context'
import PaperStyle from '../PaperStyle'
import Header from '../../utils/Header'
import CurrentSymbols from '../CurrentSymbols'

import './style.css'
import '../../res/bootstrap/css/bootstrap.min.css'

import { removeLastSyllable } from '../../actions'

import { KRUKI } from '../../res/index'

class Paper extends Component {
  constructor(props) {
    super(props)

    this.getDataForInsert = (dataForInsert) => {
      if (!isNil(dataForInsert)) {
        this.setState(prevState => ({
          dataOfArea: [...prevState.dataOfArea, dataForInsert],
        }))
      }
    }

    this.state = {
      dataOfArea: [],
      getDataForInsert: this.getDataForInsert,
    }

    this.handleremoveLastSyllable = this.handleremoveLastSyllable.bind(this)
  }

  handleremoveLastSyllable() {
    const { actions } = this.props
    actions.removeLastSyllable()
  }


  render() {
    return (
      <PaperContext.Provider value={this.state}>
        <React.Fragment>
          <Header />
          <div className="Paper">
            <AreaOfSymbols symbols={this.state.dataOfArea} />
            {/* <hr className="hr" /> */}
            <div className="control">
              <div className="InputSymbol">
                <InsertSyllable data={KRUKI} getDataForInsert={this.getDataForInsert} />
                <div className="removeLast">
                  <div />
                  <button type="button" className="removeButton btn btn-danger" onClick={this.handleremoveLastSyllable} ><i className="fa fa-trash" />  Удалить последний слог</button>
                </div>
              </div>
              <CurrentSymbols />
              <PaperStyle />
            </div>
          </div>
        </React.Fragment>
      </PaperContext.Provider>
    )
  }
}


const mapStateToProps = state => ({
  paper: state.paper,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    removeLastSyllable,
  }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Paper)

Paper.propTypes = {
  actions: PropTypes.object,
}

