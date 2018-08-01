import { SET_SYLLABLES, ADD_SYLLABLE, FILTER_SYMBOLS_BY_NAME, FILTER_SYMBOLS_BY_OPTIONS, FILTER_SYMBOLS_BY_PITCH, ADD_TEXT_TO_SYLLABLE, TEST_MSG, GET_SYMBOLS } from '../constants/'

export const addSyllable = (syllable) => {
  console.log('syllables setted') // eslint-disable-line no-console
  return {
    type: ADD_SYLLABLE,
    payload: syllable,
  }
}
export const setSyllables = (syllables) => {
  console.log('syllables setted') // eslint-disable-line no-console
  return {
    type: SET_SYLLABLES,
    payload: syllables,
  }
}

export const filterSymbolsByName = (state) => {
  // console.log('filterSymbolsByName') // eslint-disable-line no-console
  return {
    type: FILTER_SYMBOLS_BY_NAME,
    payload: state,
  }
}

export const filterSymbolsByOptions = (state) => {
  // console.log('filterSymbolsByOptions') // eslint-disable-line no-console
  return {
    type: FILTER_SYMBOLS_BY_OPTIONS,
    payload: state,
  }
}

export const filterSymbolsByPitch = (state) => {
  // console.log('filterSymbolsByPitch') // eslint-disable-line no-console
  return {
    type: FILTER_SYMBOLS_BY_PITCH,
    payload: state,
  }
}

export const addTextToSyllable = (state) => {
  // console.log('filterSymbolsByPitch') // eslint-disable-line no-console
  return {
    type: ADD_TEXT_TO_SYLLABLE,
    payload: state,
  }
}


export const testMessage = (state) => {
  console.log('success') // eslint-disable-line no-console
  return {
    type: TEST_MSG,
    payload: state,
  }
}

export const getSymbols = (state) => {
  console.log('getSymbols') // eslint-disable-line no-console
  return {
    type: GET_SYMBOLS,
    payload: state,
  }
}

