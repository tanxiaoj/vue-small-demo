// import { playMode } from 'common/js/config'
// import { loadSearch ,loadPlay } from 'common/js/cache'
// 定义vuex 数据列表
const state = {
  token: localStorage.getItem('token'),
  pageCount: null // 统计每个页面访问次数
}

export default state
