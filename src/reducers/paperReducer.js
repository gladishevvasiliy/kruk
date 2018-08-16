import { dropRight } from 'lodash'
import { ADD_SYLLABLE, SET_SYLLABLES, REMOVE_LAST_SYLLABLE, REMOVE_SYLLABLE_BY_INDEX } from '../constants/'

const initialState = {
  syllables: [],
}

export default (state = initialState, action) => {
  const { syllables } = state
  switch (action.type) {
    case ADD_SYLLABLE: {
      const syllablesWithNew = [...syllables, action.payload]
      return {
        ...state,
        syllables: syllablesWithNew,
      }
    }

    case REMOVE_LAST_SYLLABLE: {
      const syllablesDropRight = dropRight(syllables)
      return {
        ...state,
        syllables: syllablesDropRight,
      }
    }

    case REMOVE_SYLLABLE_BY_INDEX: {
      const index = action.payload
      const newSyllables = syllables.slice().splice(index, 1)
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
