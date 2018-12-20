export { formatTime } from 'utils/'
// 过滤器
export function getLenString (str, len) {
  if (typeof str !== 'string') {
    return str
  }
  const length = str.length
  if (length > len) {
    return str.substring(0, len) + '...'
  } else {
    return str  
  }
}
