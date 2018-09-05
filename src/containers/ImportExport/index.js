import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    const hiddenElement = document.createElement('a')
    hiddenElement.href = 'data:attachment/text,' + encodeURI(dataToDownload)
    hiddenElement.target = '_blank'
    hiddenElement.download = 'kruk.json'
    hiddenElement.click()
  }

  render() {
    return (
      <div className="import-export">
        <div className="file btn btn-lg btn-primary">
          Загрузить из файла
          <input className="input-upload" type="file" name="myfile" onChange={e => this.handleFile(e)} />
        </div>
        <button className="btn btn-lg btn-light button-download" onClick={this.downloadFile}>Экспорт в файл</button>

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
