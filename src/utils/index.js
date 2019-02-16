import { RFReactSelect, RFReactMultiSelect } from './RFReactSelect'
import { withErrorHandling, DivWithErrorHandling } from './withErrorHandling'

import Loading from './Loading'
import Header from './Header'
import RangeInput from './RangeInput'
import getPageNum from './getPageNum'

export {
  RFReactMultiSelect,
  RFReactSelect,
  Loading,
  Header,
  RangeInput,
  getPageNum,
  withErrorHandling,
  DivWithErrorHandling,
}

export const getDataFromServer = (url: string) => {
  return fetch(url).then(resp => {
    const data = resp.json()
    return data
  })
}
