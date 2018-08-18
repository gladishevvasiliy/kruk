import { filter, find, clone, intersection } from 'lodash'
import { KRUKI } from '../res/index'

import { FILTER_SYMBOLS_BY_NAME, FILTER_SYMBOLS_BY_OPTIONS, FILTER_SYMBOLS_BY_PITCH, ADD_TEXT_TO_SYLLABLE, GET_SYMBOLS, CHECK_ERROR, ERROR_NO_DEFINE_SYMBOL } from '../constants/'

const initialState = {
  symbols: KRUKI,
  error: '',
}

const checkError = (symbols) => {
  if (symbols.length === 0) {
    return 'Ошибка. Такого крюка в базе нет.'
  } else return ''
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
      const symbolsFilteredByOptions = filter(symbols.value, symbol => intersection(symbol.opts, currentOptionsOfSymbol).join(' ') === symbol.opts.join(' ')
               && intersection(symbol.opts, currentOptionsOfSymbol).join(' ') === currentOptionsOfSymbol.join(' '))
      console.log(symbolsFilteredByOptions)
      return {
        ...state,
        symbolsFilteredByOptions,
        error: checkError(symbolsFilteredByOptions),
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
        error: checkError(symbolsFilteredByPitch),
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

    case CHECK_ERROR: {
      const symbolsForCheck = action.payload
      if (symbolsForCheck.length === 0) {
        return {
          ...state,
          error: 'Ошибка. Такого крюка нет в базе',
        }
      }
      return {
        ...state,
        error: '',
      }
    }

    case ERROR_NO_DEFINE_SYMBOL: {
      return {
        ...state,
        error: 'Ошибка. Не выбран крюк или его помета',
      }
    }

    default: {
      return state
    }
  }
}
