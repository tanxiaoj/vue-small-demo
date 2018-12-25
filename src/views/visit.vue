<template>
  <div class="visit">
    <ul>
        <li v-for="(item, index) in list" :key="index">
            <span>{{item.name}}页面</span>
            <span>访问次数:{{item.value}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'visit',
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'pageCount'
    ])
  },
  created () {
    this.initList()
  },
  methods: {
    initList () {
      Object.keys(this.pageCount).forEach((key) => {
        this.list.push({
          name: key,
          value: this.pageCount[key]
        })
      })
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
  .visit {
      ul {
          list-style: none;
          padding: 30px;
          li {
              float: left;
              margin: 10px;
          }
      }
  }
</style>
