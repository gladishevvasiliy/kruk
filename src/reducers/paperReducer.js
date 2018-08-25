import { dropRight, isNil } from 'lodash'
import { ADD_SYLLABLE, CHANGE_SYLLABLE, SET_SYLLABLES, REMOVE_LAST_SYLLABLE, REMOVE_SYLLABLE_BY_INDEX, REPEAT_SYLLABLE_BY_INDEX, MOVE_SYLLABLE, EDIT_SYLLABLE, SHOW_MODAL_EDIT, HIDE_MODAL_EDIT } from '../constants/'

const initialState = {
  syllables: isNil(localStorage.getItem('syllables')) ? [] : JSON.parse(localStorage.getItem('syllables')),
}

export default (state = initialState, action) => {
  const { syllables } = state
  switch (action.type) {
    case ADD_SYLLABLE: {
      const syllablesWithNew = [...syllables, action.payload]
      //       const obj = JSON.parse(SymbolsToLocalStorage)
      localStorage.setItem('syllables', JSON.stringify(syllablesWithNew))
      return {
        ...state,
        syllables: syllablesWithNew,
      }
    }

    case REMOVE_LAST_SYLLABLE: {
      const syllablesDropRight = dropRight(syllables)
      localStorage.setItem('syllables', JSON.stringify(syllablesDropRight))
      return {
        ...state,
        syllables: syllablesDropRight,
      }
    }

    case REMOVE_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const newSyllables = syllables.slice()
      newSyllables.splice(index, 1)
      localStorage.setItem('syllables', JSON.stringify(newSyllables))
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case REPEAT_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const syllableToRepeat = syllables[index]
      localStorage.setItem('syllables', JSON.stringify([...syllables, syllableToRepeat]))
      return {
        ...state,
        syllables: [...syllables, syllableToRepeat],
      }
    }

    case MOVE_SYLLABLE: {
      const { source, destination } = action.payload
      const newSyllables = Array.from(syllables)
      const [removed] = newSyllables.splice(source.index, 1)
      newSyllables.splice(destination.index, 0, removed)
      localStorage.setItem('syllables', JSON.stringify(newSyllables))

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

    case HIDE_MODAL_EDIT: {
      return {
        ...state,
        showModalEdit: false,
        editableSyllable: null,
      }
    }

    case EDIT_SYLLABLE: {
      const id = action.payload
      console.log(id)

      return state
    }

    case CHANGE_SYLLABLE: {
      const { indexOfChangingSyllable, syllable } = action.payload
      const newSyllables = Array.from(syllables)
      newSyllables[indexOfChangingSyllable] = syllable
      return {
        ...state,
        syllables: newSyllables,
      }
    }

    case SET_SYLLABLES:
      return {
        loading: false,
        messages: action.payload,
      }

    default:
      return state
  }
}
