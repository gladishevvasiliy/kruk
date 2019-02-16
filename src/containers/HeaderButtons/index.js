import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveAs } from 'file-saver/FileSaver'
import { setSyllables } from '../../actions'
import { Help } from './../index'
import './style.css'

class HeaderButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModalHelp: false,
    }

    this.toggleModalHelp = this.toggleModalHelp.bind()
  }

  handleFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = evt => resolve(evt.target.result)
        reader.readAsText(file)
        reader.onerror = reject
      })
        .then(this.processFileContent)
        .catch(err => console.log(err),
        )
    }
  }

  processFileContent = (data) => {
    const { actions } = this.props
    actions.setSyllables(JSON.parse(data))
  }

  downloadFile = () => {
    const { paper } = this.props
    const dataToDownload = JSON.stringify(paper.syllables)
    const blob = new Blob([dataToDownload], { type: 'application/json; charset=utf-8' })
    saveAs(blob, 'domestikos.json')
  }

  toggleModalHelp = () => {
    this.setState({
      showModalHelp: !this.state.showModalHelp,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Help toggle={this.toggleModalHelp} showModalHelp={this.state.showModalHelp} />
        <div className="import-export">
          <div id="hidden-export-container" style={{ display: 'none' }} />
          <div className="file btn-light btn">
            Загрузить из файла
            <input className="input-upload" type="file" name="myfile" onChange={e => this.handleFile(e)} />
          </div>
          <button className="btn btn-light button-download" onClick={this.downloadFile}>Экспорт в файл</button>
          <button className="btn button-help btn-primary button-help" onClick={() => this.toggleModalHelp()}>Помощь</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  paper: state.paper,
})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setSyllables }, dispatch) })


export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons)

HeaderButtons.propTypes = {
  paper: PropTypes.object,
  actions: PropTypes.object,
}
