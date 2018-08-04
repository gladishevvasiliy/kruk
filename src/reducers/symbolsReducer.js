import { filter, find, clone, intersection } from 'lodash'
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
      console.log(action.payload)
      const symbolsFilteredByOptions = filter(symbols.value, symbol => intersection(symbol.opts, currentOptionsOfSymbol).join(' ') === symbol.opts.join(' ')
               && intersection(symbol.opts, currentOptionsOfSymbol).join(' ') === currentOptionsOfSymbol.join(' '))
      console.log(symbolsFilteredByOptions)

      return {
        ...state,
        symbolsFilteredByOptions,
      }
    }

    case FILTER_SYMBOLS_BY_PITCH: {
      console.log(FILTER_SYMBOLS_BY_PITCH)
      const { symbolsFilteredByOptions } = state
      const currentPitchOfSymbol = action.payload
      const symbolsFilteredByPitch = filter(symbolsFilteredByOptions, ({ pitch }) => pitch === currentPitchOfSymbol) // eslint-disable-line max-len
      console.log(symbolsFilteredByPitch)

      return {
        ...state,
        symbolsFilteredByPitch,
      }
    }

    case ADD_TEXT_TO_SYLLABLE: {
      console.log(ADD_TEXT_TO_SYLLABLE)
      const { symbolsFilteredByPitch } = state
      const textForInsert = action.payload
      const symbolWithText = clone(symbolsFilteredByPitch)[0]
      symbolWithText.text = textForInsert
      console.log(symbolWithText)
      return {
        ...state,
        symbolWithText,
      }
    }

    case GET_SYMBOLS:
      console.log(GET_SYMBOLS)
      return {
        ...state,
        symbols: KRUKI,
      }

    default: {
      return state
    }
  }
}
