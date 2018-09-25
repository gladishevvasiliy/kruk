/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AddGif from '../../res/img/help/add.gif'
import ChangeGif from '../../res/img/help/change.gif'
import DoubleGif from '../../res/img/help/copy.gif'
import TextGif from '../../res/img/help/text.gif'
import RemoveGif from '../../res/img/help/rm.gif'
import InsertGif from '../../res/img/help/insert.gif'
import SaveJsonGif from '../../res/img/help/save-json.gif'
import LoadJsonGif from '../../res/img/help/upload-json.gif'
import PDFGif from '../../res/img/help/pdf.gif'
import CompositionGif from '../../res/img/help/composition.gif'
import ElementsGif from '../../res/img/help/elements.gif'


import './style.css'

const Help = ({ showModalHelp, toggle }) => (
  <div>
    <Modal size="lg" isOpen={showModalHelp} toggle={toggle}>
      <ModalHeader toggle={toggle}>Помощь</ModalHeader>
      <ModalBody>
        {/* eslint-disable-next-line */}
        <h4>Оглавление</h4>
        <ol>
          <li><a href="#add">Вставка крюка</a></li>
          <li><a href="#change">Измение крюка</a></li>
          <li><a href="#double">Дублирование крюка</a></li>
          <li><a href="#text">Изменение текста</a></li>
          <li><a href="#rm">Удаление крюка</a></li>
          <li><a href="#insert">Вставка крюка в середину</a></li>
          <li><a href="#composition">Вставка попевки</a></li>
          <li><a href="#elements">Вставка строк текста, буквиц, и переноса</a></li>
          <li><a href="#json_save">Сохранение в исходный код</a></li>
          <li><a href="#json_load">Загрузка из исходного кода</a></li>
          <li><a href="#pdf">Сохранение в PDF</a></li>
        </ol>
        <h5><a id="add">Вставка крюка</a></h5>
        <img className="gifImgInModal" src={AddGif} alt="Вставка крюка" />

        <h5><a id="double">Измение крюка</a></h5>
        <img className="gifImgInModal" src={ChangeGif} alt="Изменение крюка" />

        <h5><a id="change">Дублирование крюка</a></h5>
        <img className="gifImgInModal" src={DoubleGif} alt="Дублирование крюка" />

        <h5><a id="text">Изменение текста</a></h5>
        <img className="gifImgInModal" src={TextGif} alt="Изменение текста" />

        <h5><a id="rm">Удаление крюка</a></h5>
        <img className="gifImgInModal" src={RemoveGif} alt="Удаление крюка" />

        <h5><a id="insert">Вставка крюка в середину</a></h5>
        <img className="gifImgInModal" src={InsertGif} alt="Вставка крюка в середину" />

        <h5><a id="composition">Вставка попевки</a></h5>
        <img className="gifImgInModal" src={CompositionGif} alt="Вставка строк текста, буквиц, и переноса" />

        <h5><a id="elements">Вставка строк текста, буквиц, и переноса</a></h5>
        <img className="gifImgInModal" src={ElementsGif} alt="Вставка строк текста, буквиц, и переноса" />

        <h5><a id="json_save">Сохранение в исходный код</a></h5>
        <img className="gifImgInModal" src={SaveJsonGif} alt="Сохранение в исходный код" />

        <h5><a id="json_load">Загрузка из исходного кода</a></h5>
        <img className="gifImgInModal" src={LoadJsonGif} alt="Загрузка из исходного кода" />

        <h5><a id="pdf">Сохранение в PDF</a></h5>
        <img className="gifImgInModal" src={PDFGif} alt="Сохранение в PDF" />

      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Я понял</Button>
      </ModalFooter>
    </Modal>
  </div>
)
export default Help
