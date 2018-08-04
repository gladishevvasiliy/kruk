import { ADD_SYLLABLE, SET_SYLLABLES, TEST_MSG } from '../constants/'

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
