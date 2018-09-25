import { dropRight, isNil, clone } from 'lodash'
import { ADD_SYLLABLE,
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
} from '../constants/'

const initialState = {
  syllablesHide: isNil(localStorage.getItem('syllables')) ? [] : JSON.parse(localStorage.getItem('syllables')),
  syllables: isNil(localStorage.getItem('pages')) ? [[]] : JSON.parse(localStorage.getItem('pages')),
  pages: [0],
  currentPageNum: 0,
}

export default (state = initialState, action) => {
  const { syllables, currentPageNum } = state
  const currentPageSyllables = state.syllables[currentPageNum] // current page

  switch (action.type) {
    case ADD_SYLLABLE: {
      const currentSyllablesWithNew = [...currentPageSyllables, action.payload]
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = currentSyllablesWithNew
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REMOVE_LAST_SYLLABLE: {
      const syllablesDropRight = dropRight(currentPageSyllables)
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = syllablesDropRight
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REMOVE_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const newCurrentSyllables = Array.from(currentPageSyllables)
      newCurrentSyllables.splice(index, 1) // remove from current page
      const newSyllables = Array.from(syllables)
      // if (isEmpty(newCurrentSyllables) && currentPageNum !== 0) {
      //   localStorage.setItem('pages', JSON.stringify(newSyllables.splice(currentPageNum, 1)))
      //   return {
      //     ...state,
      //     syllables: newSyllables.splice(currentPageNum, 1),
      //   }
      // }
      newSyllables[currentPageNum] = newCurrentSyllables
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REPEAT_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const syllableToRepeat = clone(currentPageSyllables[index])
      // make new array with repeated syllable
      const newSyllablesWithRepeat = [...currentPageSyllables, syllableToRepeat]
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = newSyllablesWithRepeat
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
      const currentSyllablesWithInsert = Array.from(currentPageSyllables)
      const afterIndex = parseInt(index) + 1 // eslint-disable-line
      currentSyllablesWithInsert.splice(afterIndex, 0, syllable)
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = currentSyllablesWithInsert
      localStorage.setItem('pages', JSON.stringify(newSyllables))

      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case CHANGE_SYLLABLE: {
      const { indexOfChangingSyllable, syllable } = action.payload
      const currentSyllablesWithChange = Array.from(currentPageSyllables)
      currentSyllablesWithChange[indexOfChangingSyllable] = syllable
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = currentSyllablesWithChange
      localStorage.setItem('pages', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case EDIT_TEXT: {
      const newText = action.payload
      const { indexOfEditableText } = state
      const currentSyllablesEditText = Array.from(currentPageSyllables)
      currentSyllablesEditText[indexOfEditableText].text = newText
      const newSyllables = Array.from(syllables)
      newSyllables[currentPageNum] = currentSyllablesEditText
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

    default:
      return state
  }
}
