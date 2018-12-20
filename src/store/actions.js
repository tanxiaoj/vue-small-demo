import * as types from './mutation-types.js'
// import { playMode } from 'common/js/config'
// import { shuffle } from 'common/js/util'
// import { saveSearch ,delectSearch ,clearSearch,savePlay } from 'common/js/cache'

function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = function ({ commit, state }, { list, index }) {
  commit(types.SET_SINGER, list)
}
