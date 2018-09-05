import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saveAs } from 'file-saver/FileSaver'
import { setSyllables } from '../../actions'
import './style.css'

class ImportExport extends Component {
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

  render() {
    return (
      <div className="import-export">
        <div id="hidden-export-container" style={{ display: 'none' }} />
        <div className="file btn btn-primary">
          Загрузить из файла
          <input className="input-upload" type="file" name="myfile" onChange={e => this.handleFile(e)} />
        </div>
        <button className="btn btn-light button-download" onClick={this.downloadFile}>Экспорт в файл</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  paper: state.paper,
})

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setSyllables }, dispatch) })


export default connect(mapStateToProps, mapDispatchToProps)(ImportExport)

ImportExport.propTypes = {
  paper: PropTypes.object,
  actions: PropTypes.object,
}
