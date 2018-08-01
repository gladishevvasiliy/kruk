import { filter, find, join, clone } from 'lodash'
import { KRUKI } from '../res/index'

import { FILTER_SYMBOLS_BY_NAME, FILTER_SYMBOLS_BY_OPTIONS, FILTER_SYMBOLS_BY_PITCH, ADD_TEXT_TO_SYLLABLE, GET_SYMBOLS } from '../constants/'

const initialState = {
  symbols: KRUKI,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SYMBOLS_BY_NAME: {
      console.log(FILTER_SYMBOLS_BY_NAME)
      const { symbols } = state
      const currentNameOfSymbol = action.payload
      const symbolsFilteredByName = find(symbols, symbol => symbol.name === currentNameOfSymbol)
      console.log(symbolsFilteredByName)

      return {
        ...state,
        symbols: symbolsFilteredByName,
      }
    }

    case FILTER_SYMBOLS_BY_OPTIONS: {
      console.log(FILTER_SYMBOLS_BY_OPTIONS)
      const { symbols } = state
      const currentOptionsOfSymbol = action.payload
      const symbolsFilteredByOptions = filter(symbols.value, symbol => join(symbol.opts, ',') === currentOptionsOfSymbol)
      console.log(symbolsFilteredByOptions)

      return {
        ...state,
        symbols: symbolsFilteredByOptions,
      }
    }

    case FILTER_SYMBOLS_BY_PITCH: {
      console.log(FILTER_SYMBOLS_BY_PITCH)
      const { symbols } = state
      const currentPitchOfSymbol = action.payload
      const symbolsFilteredByPitch = filter(symbols, ({ pitch }) => pitch === currentPitchOfSymbol)
      console.log(symbolsFilteredByPitch)

      return {
        ...state,
        symbols: symbolsFilteredByPitch,
      }
    }

    case ADD_TEXT_TO_SYLLABLE: {
      console.log(ADD_TEXT_TO_SYLLABLE)
      const { symbols } = state
      const textForInsert = action.payload
      const symbolWithText = clone(symbols)[0]
      symbolWithText.text = textForInsert
      console.log(symbolWithText)
      return {
        ...state,
        symbols: symbolWithText,
      }
    }

    case GET_SYMBOLS:
      console.log(GET_SYMBOLS)
      return {
        symbols: KRUKI,
      }

    default: {
      return state
    }
  }
}
