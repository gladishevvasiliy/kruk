import { dropRight, isNil, clone } from 'lodash'
import {
  ADD_SYLLABLE,
  CHANGE_SYLLABLE,
  SET_SYLLABLES,
  REMOVE_LAST_SYLLABLE,
  REMOVE_SYLLABLE_BY_INDEX,
  REPEAT_SYLLABLE_BY_INDEX,
  SHOW_MODAL_INSERT,
  SHOW_MODAL_EDIT,
  HIDE_MODAL,
  INSERT_SYLLABLE,
  SHOW_MODAL_EDIT_TEXT,
  HIDE_MODAL_EDIT_TEXT,
  EDIT_TEXT,
  ADD_PAGE,
  CHANGE_PAGE,
  REMOVE_PAGE,
  CHANGE_PARAGRAPH,
  REMOVE_PARAGRAPH,
} from '../constants/'

const initialState = {
  syllablesHide: isNil(localStorage.getItem('syllables')) ? [] : JSON.parse(localStorage.getItem('syllables')),
  syllables: isNil(localStorage.getItem('pages')) ? [[]] : JSON.parse(localStorage.getItem('pages')),
  pages: [0],
  currentPageNum: 0,
  currentParagraphNum: 0,
}

export default (state = initialState, action) => {
  const { syllables, currentPageNum, currentParagraphNum } = state
  const currentPageSyllables = state.syllables[currentPageNum] // current page
  let currentParagraph = []
  if (!isNil(currentPageSyllables)) {
    currentParagraph = currentPageSyllables[currentParagraphNum]
  }


  switch (action.type) {
    case ADD_SYLLABLE: {
      let currentSyllablesWithNew = []
      if (isNil(currentParagraph)) {
        currentSyllablesWithNew = [action.payload]
      } else {
        currentSyllablesWithNew = [...currentParagraph, action.payload]
      }
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = currentSyllablesWithNew
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REMOVE_LAST_SYLLABLE: {
      const paragraphDropRight = dropRight(currentParagraph)
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = paragraphDropRight
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REMOVE_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const newCurrentParagraph = Array.from(currentParagraph)
      newCurrentParagraph.splice(index, 1) // remove from current page
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = newCurrentParagraph
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REPEAT_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const syllableToRepeat = clone(currentParagraph[index])
      // make new array with repeated syllable
      const newSyllablesWithRepeat = [...currentParagraph, syllableToRepeat]
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = newSyllablesWithRepeat
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case SHOW_MODAL_EDIT: {
      const editableSyllable = action.payload
      return {
        ...state,
        showModalEdit: true,
        editableSyllable,
      }
    }

    case SHOW_MODAL_INSERT: {
      const indexToInsert = action.payload
      return {
        ...state,
        showModalEdit: true,
        indexToInsert,
      }
    }

    case HIDE_MODAL: {
      return {
        ...state,
        showModalEdit: false,
        editableSyllable: null,
        indexToInsert: null,
      }
    }

    case SHOW_MODAL_EDIT_TEXT : {
      const indexOfEditableText = action.payload
      return {
        ...state,
        showModalEditText: true,
        indexOfEditableText,
      }
    }

    case HIDE_MODAL_EDIT_TEXT : {
      return {
        ...state,
        showModalEditText: false,
        indexOfEditableText: null,

      }
    }

    case INSERT_SYLLABLE: {
      const { index, syllable } = action.payload
      const currentParagraphWithInsert = Array.from(currentParagraph)
      const afterIndex = parseInt(index) + 1 // eslint-disable-line
      currentParagraphWithInsert.splice(afterIndex, 0, syllable)
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = currentParagraphWithInsert
      localStorage.setItem('pages', JSON.stringify(newSyllables))

      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case CHANGE_SYLLABLE: {
      const { indexOfChangingSyllable, syllable } = action.payload
      const currentParagraphWithChange = Array.from(currentParagraph)
      currentParagraphWithChange[indexOfChangingSyllable] = syllable
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = currentParagraphWithChange
      localStorage.setItem('pages', JSON.stringify(newSyllables))

      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case EDIT_TEXT: {
      const newText = action.payload
      const { indexOfEditableText } = state
      const currentParagraphEditText = Array.from(currentParagraph)
      currentParagraphEditText[indexOfEditableText].text = newText
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum][currentParagraphNum] = currentParagraphEditText
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case SET_SYLLABLES: {
      const syllablesForSetting = action.payload
      localStorage.setItem('pages', JSON.stringify(syllablesForSetting))
      return {
        ...state,
        syllables: syllablesForSetting,
      }
    }

    case ADD_PAGE: {
      const newPage = currentPageNum + 1

      return {
        ...state,
        currentPageNum: newPage,
        syllables: [...syllables, []],
      }
    }

    case CHANGE_PAGE: {
      const pageIndex = action.payload

      return {
        ...state,
        currentPageNum: pageIndex,
      }
    }

    case CHANGE_PARAGRAPH: {
      const paragraphIndex = action.payload
      return {
        ...state,
        currentParagraphNum: paragraphIndex,
      }
    }

    case REMOVE_PAGE: {
      const pageIndex = action.payload
      const newSyllables = Array.from(syllables)
      newSyllables.splice(pageIndex, 1)
      localStorage.setItem('pages', JSON.stringify(newSyllables))

      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REMOVE_PARAGRAPH: {
      const paragraphIndex = action.payload
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum].splice(paragraphIndex, 1) // choose page, and remove paragraph
      localStorage.setItem('pages', JSON.stringify(newSyllables))

      return {
        ...state,
        syllables: newSyllables,
      }
    }

    default:
      return state
  }
}
