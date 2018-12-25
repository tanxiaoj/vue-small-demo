import * as types from './mutation-types'

const matutions = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.COUNT_PAGE_CS] (state, pageCount) {
    state.pageCount = pageCount
  }
}

export default matutions
