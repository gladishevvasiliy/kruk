// FOR REACT-REDUX
export const SET_SYMBOLS = 'SET_SYMBOLS'
export const ADD_SYLLABLE = 'ADD_SYMBOL'
export const SET_SYLLABLES = 'SET_SYLLABLES'
export const TEST_MSG = 'TEST_MSG'
export const GET_SYMBOLS = 'GET_SYMBOLS'
export const FILTER_SYMBOLS_BY_NAME = 'FILTER_SYMBOLS_BY_NAME'
export const FILTER_SYMBOLS_BY_OPTIONS = 'FILTER_SYMBOLS_BY_OPTIONS'
export const FILTER_SYMBOLS_BY_PITCH = 'FILTER_SYMBOLS_BY_PITCH'
export const ADD_TEXT_TO_SYLLABLE = 'ADD_TEXT_TO_SYLLABLE'
export const REMOVE_LAST_SYLLABLE = 'REMOVE_LAST_SYLLABLE'
export const REMOVE_SYLLABLE_BY_INDEX = 'REMOVE_SYLLABLE_BY_INDEX'
export const CHECK_ERROR = 'CHECK_ERROR'
export const ERROR_NO_DEFINE_SYMBOL = 'ERROR_NO_DEFINE_SYMBOL'
export const REPEAT_SYLLABLE_BY_INDEX = 'REPEAT_SYLLABLE_BY_INDEX'
export const MOVE_SYLLABLE = 'MOVE_SYLLABLE'
export const SHOW_MODAL_INSERT = 'SHOW_MODAL_INSERT'
export const SHOW_MODAL_EDIT = 'SHOW_MODAL_EDIT'
export const HIDE_MODAL = 'HIDE_MODAL'
export const CHANGE_SYLLABLE = 'CHANGE_SYLLABLE'
export const INSERT_SYLLABLE = 'INSERT_SYLLABLE'
export const CREATE_OPTIONS_LIST = 'CREATE_OPTIONS_LIST'
export const SHOW_MODAL_EDIT_TEXT = 'SHOW_MODAL_EDIT_TEXT'
export const HIDE_MODAL_EDIT_TEXT = 'HIDE_MODAL_EDIT_TEXT'
export const EDIT_TEXT = 'EDIT_TEXT'
export const CREATE_PITCH_LIST = 'CREATE_PITCH_LIST'
export const ADD_PAGE = 'ADD_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const REMOVE_PAGE = 'REMOVE_PAGE'
export const CREATE_TONE_LIST = 'CREATE_TONE_LIST'
export const GET_COMPOSITIONS = 'GET_COMPOSITIONS'
export const CHANGE_PARAGRAPH = 'CHANGE_PARAGRAPH'
export const DELETE_PARAGRAPH = 'DELETE_PARAGRAPH'
export const SHOW_MODAL_DELETE_PARAGRAPH = 'SHOW_MODAL_DELETE_PARAGRAPH'
export const HIDE_MODAL_DELETE_PARAGRAPH = 'HIDE_MODAL_DELETE_PARAGRAPH'
export const CHECK_PARAGRAPH_IS_EMPTY = 'CHECK_PARAGRAPH_IS_EMPTY'
export const TOGGLE_SHOW_PAGINATION = 'TOGGLE_SHOW_PAGINATION'
export const TOGGLE_MODAL_DELETE_PAGE = 'TOGGLE_MODAL_DELETE_PAGE'

export const SYMBOLS = [
  { value: 1, label: 'Параклит' },
  { value: 2, label: 'Крюк' },
  { value: 3, label: 'Запятая' },
  { value: 4, label: 'Стопица' },
  { value: 5, label: 'Челюстка' },
  { value: 6, label: 'Ключ' },
  { value: 7, label: 'Подчашие' },
  { value: 8, label: 'Палка' },
  { value: 9, label: 'Скамейца' },
  { value: 10, label: 'Дербица' },
  { value: 11, label: 'Переводка' },
  { value: 12, label: 'Голубчик борзый' },
  { value: 13, label: 'Голубчик тихий' },
  { value: 14, label: 'Чашка' },
  { value: 15, label: 'Статья' },
  { value: 16, label: 'Статья светлая' },
  { value: 17, label: 'Статья с запятой' },
  { value: 18, label: 'Статья мрачная' },
  { value: 19, label: 'Малая закрытая' },
  { value: 20, label: 'Средняя закрытая' },
  { value: 21, label: 'Крыж' },
  { value: 22, label: 'Рог' },
  { value: 23, label: 'Сложитие' },
  { value: 24, label: 'Сложитие с купной' },
  { value: 25, label: 'Сложитие с запятой' },
  { value: 26, label: 'Полукулизма' },
  { value: 27, label: 'Два в челну' },
  { value: 28, label: 'Труба' },
  { value: 29, label: 'Дуда' },
  { value: 30, label: 'Мечник' },
  { value: 31, label: 'Стрела мрачная' },
  { value: 32, label: 'Стрела крыжевая' },
  { value: 33, label: 'Стрела поводная' },
  { value: 34, label: 'Стрела светлая' },
  { value: 35, label: 'Статья тресветлая' },
  { value: 36, label: 'Стрела светлотихая' },
  { value: 37, label: 'Стрела поездная' },
  { value: 38, label: 'Стрела громная' },
  { value: 39, label: 'Стрела громосветлая' },
  { value: 40, label: 'Стрела громотресветлая' },
  { value: 41, label: 'Стрела возводная' },
  { value: 42, label: 'Стрела громокрыжная' },
  { value: 43, label: 'Стрела трясосветлая' },
  { value: 44, label: 'Хамило' },
  { value: 45, label: 'Паук малый' },
  { value: 46, label: 'Паук большой' },
  { value: 47, label: 'Фита' },
  { value: 48, label: 'Полукулизма малая' },
  { value: 49, label: 'Фотиза' },
  { value: 50, label: 'Змийца' },
  { value: 51, label: 'Статья с крыжом' },
  { value: 52, label: 'Статья в кулизме' },
  { value: 53, label: 'Запятая с крыжом' },
  { value: 54, label: 'Стрела простая' },
]

export const PITCH = [
  { value: 1, label: 'Ут низкое' },
  { value: 2, label: 'Ре низкое' },
  { value: 3, label: 'Ми низкое' },
  { value: 4, label: 'Ут' },
  { value: 5, label: 'Ре' },
  { value: 6, label: 'Ми' },
  { value: 7, label: 'Фа' },
  { value: 8, label: 'Соль' },
  { value: 9, label: 'Ля' },
  { value: 10, label: 'Фа высокое' },
  { value: 11, label: 'Соль высокое' },
  { value: 12, label: 'Ля высокое' },
]
