import * as types from './mutation-types.js'
// import { playMode } from 'common/js/config'
// import { shuffle } from 'common/js/util'
// import { saveSearch ,delectSearch ,clearSearch,savePlay } from 'common/js/cache'

// function findIndex (list, song) {
//   return list.findIndex((item) => {
//     return item.id === song.id
//   })
// }

export const setToken = function ({ commit, state }, { token }) {
  commit(types.SET_TOKEN, token)
}

export const getPageCount = function ({ commit, state }, { name }) {
  let countObj = Object.assign({}, state.pageCount)

  let keys = []

  Object.keys(countObj).forEach(key => {
    keys.push(key)
  })
  var index = keys.findIndex((item) => {
    return item === name
  })

  if (index == -1) {
    countObj[name] = 1
  } else {
    countObj[name] += 1
  }

  commit(types.COUNT_PAGE_CS, countObj)
}
