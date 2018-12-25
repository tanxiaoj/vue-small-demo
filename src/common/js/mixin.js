import { mapActions } from 'vuex'

export const setVisitMixin = {
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      this.getPageCount({
        name: this.$route.name
      })
    }, 2000)
  },
  methods: {
    ...mapActions([
      'getPageCount'
    ])
  }
}
