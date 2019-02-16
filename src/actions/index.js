import {
  SET_SYLLABLES,
  ADD_SYLLABLE,
  REMOVE_LAST_SYLLABLE,
  REMOVE_SYLLABLE_BY_INDEX,
  REPEAT_SYLLABLE_BY_INDEX,
  FILTER_SYMBOLS_BY_NAME,
  FILTER_SYMBOLS_BY_OPTIONS,
  FILTER_SYMBOLS_BY_PITCH,
  ADD_TEXT_TO_SYLLABLE,
  GET_SYMBOLS,
  CHECK_ERROR,
  ERROR_NO_DEFINE_SYMBOL,
  MOVE_SYLLABLE,
  SHOW_MODAL_INSERT,
  SHOW_MODAL_EDIT,
  HIDE_MODAL,
  CHANGE_SYLLABLE,
  INSERT_SYLLABLE,
  CREATE_OPTIONS_LIST,
  SHOW_MODAL_EDIT_TEXT,
  HIDE_MODAL_EDIT_TEXT,
  EDIT_TEXT,
  CREATE_PITCH_LIST,
  ADD_PAGE,
  CHANGE_PAGE,
  REMOVE_PAGE,
  CREATE_TONE_LIST,
  GET_COMPOSITIONS,
  CHANGE_PARAGRAPH,
  DELETE_PARAGRAPH,
  SHOW_MODAL_DELETE_PARAGRAPH,
  HIDE_MODAL_DELETE_PARAGRAPH,
  CHECK_PARAGRAPH_IS_EMPTY,
  TOGGLE_SHOW_PAGINATION,
  TOGGLE_MODAL_DELETE_PAGE,
  SET_SYMBOLS,
} from '../constants/'

export const setSymbols = symbols => ({ type: SET_SYMBOLS, payload: symbols })

export const addSyllable = syllable => ({
  type: ADD_SYLLABLE,
  payload: syllable,
})

export const removeLastSyllable = syllable => ({
  type: REMOVE_LAST_SYLLABLE,
  payload: syllable,
})

export const removeSyllablebyIndex = index => ({
  type: REMOVE_SYLLABLE_BY_INDEX,
  payload: index,
})

export const repeatSyllableByIndex = index => ({
  type: REPEAT_SYLLABLE_BY_INDEX,
  payload: index,
})

export const moveSyllable = state => ({ type: MOVE_SYLLABLE, payload: state })

export const showModalInsert = index => ({
  type: SHOW_MODAL_INSERT,
  payload: index,
})

export const setSyllables = syllables => ({
  type: SET_SYLLABLES,
  payload: syllables,
})

export const filterSymbolsByName = state => ({
  type: FILTER_SYMBOLS_BY_NAME,
  payload: state,
})

export const filterSymbolsByOptions = state => ({
  type: FILTER_SYMBOLS_BY_OPTIONS,
  payload: state,
})

export const filterSymbolsByPitch = state => ({
  type: FILTER_SYMBOLS_BY_PITCH,
  payload: state,
})

export const addTextToSyllable = state => ({
  type: ADD_TEXT_TO_SYLLABLE,
  payload: state,
})

export const getSymbols = state => ({ type: GET_SYMBOLS, payload: state })

export const checkError = symbolsForCheck => ({
  type: CHECK_ERROR,
  payload: symbolsForCheck,
})

export const ErrorNoDefineSymbol = state => ({
  type: ERROR_NO_DEFINE_SYMBOL,
  payload: state,
})

export const showModalEdit = editableSyllable => ({
  type: SHOW_MODAL_EDIT,
  payload: editableSyllable,
}) //eslint-disable-line

export const hideModal = state => ({ type: HIDE_MODAL, payload: state })

export const changeSyllable = (indexOfChangingSyllable, syllable) => ({
  type: CHANGE_SYLLABLE,
  payload: { indexOfChangingSyllable, syllable },
}) //eslint-disable-line

export const insertSyllable = (index, syllable) => ({
  type: INSERT_SYLLABLE,
  payload: { index, syllable },
}) // eslint-disable-line

export const createOptionsList = nameOfSymbol => ({
  type: CREATE_OPTIONS_LIST,
  payload: nameOfSymbol,
}) // eslint-disable-line max-len

export const showModalEditText = indexOfEditableText => ({
  type: SHOW_MODAL_EDIT_TEXT,
  payload: indexOfEditableText,
}) // eslint-disable-line max-len

export const hideModalEditText = state => ({
  type: HIDE_MODAL_EDIT_TEXT,
  payload: state,
})

export const editText = newText => ({ type: EDIT_TEXT, payload: newText })

export const createPitchList = state => ({
  type: CREATE_PITCH_LIST,
  payload: state,
})

export const addPage = prevPageNum => ({ type: ADD_PAGE, payload: prevPageNum })

export const changePage = pageIndex => ({
  type: CHANGE_PAGE,
  payload: pageIndex,
})

export const removePage = pageIndex => ({
  type: REMOVE_PAGE,
  payload: pageIndex,
})

export const createToneList = state => ({
  type: CREATE_TONE_LIST,
  payload: state,
})

export const getCompositions = state => ({
  type: GET_COMPOSITIONS,
  payload: state,
})

export const changeParagraph = paragraphIndex => ({
  type: CHANGE_PARAGRAPH,
  payload: paragraphIndex,
}) // eslint-disable-line max-len

export const showModalDeleteParagraph = paragraphIndex => ({
  type: SHOW_MODAL_DELETE_PARAGRAPH,
  payload: paragraphIndex,
}) // eslint-disable-line max-len

export const hideModalDeleteParagraph = state => ({
  type: HIDE_MODAL_DELETE_PARAGRAPH,
  payload: state,
}) // eslint-disable-line max-len

export const deleteParagraph = paragraphIndex => ({
  type: DELETE_PARAGRAPH,
  payload: paragraphIndex,
}) // eslint-disable-line max-len

export const checkParagraphIsEmpty = state => ({
  type: CHECK_PARAGRAPH_IS_EMPTY,
  payload: state,
}) // eslint-disable-line max-len

export const toggleShowPagination = state => ({
  type: TOGGLE_SHOW_PAGINATION,
  payload: state,
}) // eslint-disable-line max-len

export const toggleModalDeletePage = pageIndex => ({
  type: TOGGLE_MODAL_DELETE_PAGE,
  payload: pageIndex,
}) // eslint-disable-line max-len
