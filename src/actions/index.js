import { 
  SET_SYLLABLES,
  ADD_SYLLABLE,
  REMOVE_LAST_SYLLABLE,
  REMOVE_SYLLABLE_BY_INDEX,
  FILTER_SYMBOLS_BY_NAME,
  FILTER_SYMBOLS_BY_OPTIONS,
  FILTER_SYMBOLS_BY_PITCH,
  ADD_TEXT_TO_SYLLABLE,
  GET_SYMBOLS,
} from '../constants/'

export const addSyllable = syllable => ({ type: ADD_SYLLABLE, payload: syllable })

export const removeLastSyllable = syllable => ({ type: REMOVE_LAST_SYLLABLE, payload: syllable })

export const removeSyllablebyIndex = id => ({ type: REMOVE_SYLLABLE_BY_INDEX, payload: id })

export const setSyllables = syllables => ({ type: SET_SYLLABLES, payload: syllables })

export const filterSymbolsByName = state => ({ type: FILTER_SYMBOLS_BY_NAME, payload: state })

export const filterSymbolsByOptions = state => ({ type: FILTER_SYMBOLS_BY_OPTIONS, payload: state })

export const filterSymbolsByPitch = state => ({ type: FILTER_SYMBOLS_BY_PITCH, payload: state })

export const addTextToSyllable = state => ({ type: ADD_TEXT_TO_SYLLABLE, payload: state })

export const getSymbols = state => ({ type: GET_SYMBOLS, payload: state })

