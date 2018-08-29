
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'react-proptypes'


import './style.css'

class Bucvica extends PureComponent {
  render() {
    const { form } = this.props
    return (
      <div
        className="bukvica"
        style={{
          fontSize: form.paperStyle.values.sizeOfBucvica + 'pt', // eslint-disable-line
          height: form.paperStyle.values.sizeOfBucvica * 0.9,
        }}
        dangerouslySetInnerHTML={{
          __html: form.paperStyle.values.bucvica,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({ form: state.form })

export default connect(mapStateToProps)(Bucvica)

Bucvica.propTypes = {
  form: PropTypes.object,
}

