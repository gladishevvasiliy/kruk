/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Attention extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true,
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
    localStorage.setItem('visited', 'true')
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Предупреждение</ModalHeader>
          <ModalBody>
            {/* eslint-disable-next-line */}
            <h5>Здравствуйте!</h5>
            <br /> Программа &quot;Доместикос&quot; находится в стадии
            тестирования, поэтому разработчик не отвечает за последствия работы
            приложения. <br />
            <br /> Не рекомендуется набирать большие тексты (если вы потратите
            на это много времени, а из-за ошибки что-то пойдет не так, это будет
            печально). <br />
            <br />В любом случае прошу прощения за возможные недоразумения, и
            прошу все замеченные ошибки присылать по адресу{' '}
            <b>gladishevvasiliy@gmail.com</b>. <br />
            <br />
            Благодарю за внимание!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Я понял
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Attention
