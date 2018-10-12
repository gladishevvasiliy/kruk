const getPageNum = (pageIndex) => {
const pageNum = pageIndex + 1
  switch (pageNum) {
    case 1:
      return 'а7'
    case 2:
      return 'в7'
    case 3:
      return 'г7'
    case 4:
      return 'д7'
    case 5:
      return 'е7'
    case 6:
      return 'ѕ7'
    case 7:
      return 'з7'
    case 8:
      return 'и7'
    case 9:
      return 'f7'
    case 10:
      return 'i7'
    case 11:
      return 'аi7'
    case 12:
      return 'вi7'
    case 13:
      return 'гi7'
    case 14:
      return 'дi7'
    case 15:
      return 'еi7'
    case 16:
      return 'ѕi7'
    case 17:
      return 'зi7'
    case 18:
      return 'иi7'
    case 19:
      return 'fi7'
    case 20:
      return 'к7'
    default:
      return ''
  }
}

export default getPageNum
