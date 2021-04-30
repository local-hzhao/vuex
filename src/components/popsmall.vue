<template>
  <div>
    <div>11</div>
    <div>{{ password }}</div>
    <button @click="upload">改变模块化里面的值</button>
    <button @click="upload">通过辅助函数该模块化里面的值</button>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('aa')
export default {
  name: 'popsmall',
  data () {
    return {

    }
  },
  methods: {
    upload () {
      this.$store.commit('aa/upload')
    },
    ...mapMutations(['upload'])
  },
  computed: {
    // 通过辅助函数拿到vuex模块化里面的password
    ...mapGetters(['password'])
  }

}
</script>
