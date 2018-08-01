import React, { Component } from 'react'
import { isNil, map, remove, uniq, split, trim, filter, join } from 'lodash'
import PropTypes from 'react-proptypes'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { filterSymbolsByName } from '../../actions'
import ChoosePitch from '../ChoosePitch'

// import './style.css'

class ChooseOptions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOptionsOfSymbol: '',
      currentArrayForChoosePitch: '',
      nameInput: '',
    }

    this.inputOptions = React.createRef()
    this.handleInputChangeSymbolOptions = this.handleInputChangeSymbolOptions.bind(this)
    this.btnHandler = this.btnHandler.bind(this)

  }

  componentDidMount() {
    // if (!isNil(this.inputOptions.current)) {
    //   this.inputOptions.current.focus()
    // }
  }

  handleInputChangeSymbolOptions(event) {
    this.setState({ currentOptionsOfSymbol: event.target.value })
  }

  btnHandler() {
    const { syllableForInsert, actions } = this.props
    actions.filterSymbolsByName(syllableForInsert.values.name)
  }

  render() {
    const { currentOptionsOfSymbol } = this.state
    const { data } = this.props
    const currentOptionsAsArray = map(split(this.state.currentOptionsOfSymbol, ',', 2), item => trim(item))

    const { syllableForInsert, actions } = this.props

    // const options = map(data.value, 'opts')
    // remove(options, item => item.length === 0)

    return (
      <form onKeyPress={this.handleKeyPress}>
        <Field
          label="Опции"
          name="options"
          component="input"
          type="text"
        />
      </form>
    )
    // return (
    //   <div className="chooseOptions">
    //     <form>
    //       <label htmlFor="options">Опции
    //         <input
    //           type="text"
    //           list="options"
    //           value={currentOptionsOfSymbol}
    //           onChange={this.handleInputChangeSymbolOptions}
    //           onSubmit={this.btnHandler}
    //           ref={this.inputOptions}
    //         />
    //         <datalist id="options">
    //           {/* eslint-disable-next-line */}
    //           {(uniq(map(options, item => item.join(', ')))).map((name, index) => (<option key={index}>{name}</option>))}
    //         </datalist>
    //       </label>
    //     </form>
    //     <button onClick={this.btnHandler}>Filter</button>
    //     <ChoosePitch data={filter(data.value, item => join(item.opts, ',') === join(currentOptionsAsArray, ','))} getDataForInsert={this.props.getDataForInsert} />
    //     {/* eslint-disable-next-line max-len */}
    //   </div>
    // )
  }
}

ChooseOptions.propTypes = {
  data: PropTypes.object,
  getDataForInsert: PropTypes.func,
}

const ChooseOptionsWithForm = reduxForm({
  form: 'syllableForInsert',
})(ChooseOptions)

const mapStateToProps = state => ({ syllableForInsert: state.form.syllableForInsert })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ filterSymbolsByName }, dispatch) }) // eslint-disable-line max-len

export default connect(mapStateToProps, mapDispatchToProps)(ChooseOptionsWithForm)

