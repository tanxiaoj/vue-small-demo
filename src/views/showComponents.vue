<template>
  <div class="showComponents">
      <h1>组件的写法及调用方式</h1>
      <div>类型1：常规组件写法xxx.vue  import 引入 页面写入{{comp}}方式调用</div>
      <br>
      <div @click="showConfirm">这是一个confirm组件</div>
      <br>
      <div>类型2：Vue.extend 扩展方式写组件 将组件挂载到Vue.prototype下即可全局调用 this.xxx() 调用组件</div>
      <br>
      <div @click="showToast">这是一个Toast组件</div>
      <confirm ref="confirm" :text="text" @confirm="confirm" @cancel="cancel"></confirm>
  </div>
</template>

<script>
import Confirm from 'components/confirm/confirm'
import { setVisitMixin } from 'common/js/mixin'

export default {
  name: 'components',
  data () {
    return {
      comp: '<xxx></xxx>',
      text: '这是一条测试提示'
    }
  },
  created () {
  },
  mixins: [setVisitMixin],
  methods: {
    showConfirm () {
    //   console.log(this.$refs.confirm.$el)
      this.$refs.confirm.show()
    },
    showToast () {
      this.$toast('这是一条提示')
    },
    confirm () {
      alert('点击了确认')
    },
    cancel () {
      alert('点击了取消')
    }
  },
  components: {
    Confirm
  }
}
</script>

<style lang="less" scoped>
  .showComponents {
      padding: 10px 15px;
      >div {
          line-height: 30px;
          text-align: left;
      }
  }
</style>
