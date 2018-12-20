export const singer = state => state.singer

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
