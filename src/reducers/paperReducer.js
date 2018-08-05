import { dropRight } from 'lodash'
import { ADD_SYLLABLE, SET_SYLLABLES, REMOVE_SYLLABLE, TEST_MSG } from '../constants/'

const initialState = {
  syllables: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYLLABLE: {
      const { syllables } = state
      const syllablesWithNew = [...syllables, action.payload]
      return {
        ...state,
        syllables: syllablesWithNew,
      }
    }

    case REMOVE_SYLLABLE: {
      const { syllables } = state
      const syllablesDropRight = dropRight(syllables)
      return {
        ...state,
        syllables: syllablesDropRight,
      }
    }

    case SET_SYLLABLES:
      return {
        loading: false,
        messages: action.payload,
      }
    case TEST_MSG:
      return state
    default:
      return state
  }
}
