<template>
  <div class="home">
    <h1>Vue 简易demo 列表</h1>
    <div
      class="listClass"
      v-for="(list, index) in lists"
      :key="index">
      <div class="f">
        {{list.name | getLenString(20)}}
      </div>
      <router-link v-if="list.route.type === 0" class="r" :to="list.route.url">前往</router-link>
      <a :href="list.route.url" class="r" v-if="list.route.type === 1">前往</a>
    </div>
    <div>{{new Date() | formatTime}}</div>
  </div>
</template>

<script>
import { getHome } from 'api'
export default {
  name: 'home',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this._getList()
  },
  methods: {
    _getList () {
      getHome().then(res => {
        this.lists = res
      })
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .home {
    .listClass {
      padding: 10px 15px;
      overflow: hidden;
      .f {
        float: left;
      }
      .r {
        color: #999;
        float: right;
      }
    }
  }
</style>
