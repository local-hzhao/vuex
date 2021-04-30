<template>
  <div class="hello">
    <div>{{ $store.state.name }}</div>
    <div>{{ $store.state.Number }}</div>
    <div>{{ vuexx }}</div>
    <div>{{ name }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <div>{{ filterList }}</div>
    <div>{{ password }}</div>
    <div>{{ 'vuex模块化：' + $store.state.aa.token }}</div>
    <button @click="addState">修改state的值</button>
    <button @click="addMapState(5)">修改Number的值</button>
    <button @click="asyncClick()">async</button>
    <button @click="addAsync(9)">用辅助函数</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    addState () {
      this.$store.commit('addState')
    },
    asyncClick () {
      // 通过dispatch触发actions里面的方法
      this.$store.dispatch('addAsync', 11)
    },
    ...mapMutations(['addMapState']),
    // 通过辅助函数触发actions里面的方法
    ...mapActions(['addAsync'])
  },
  computed: {
    ...mapState(['vuexx', 'name']),
    // 通过辅助函数写入getters里面的值
    ...mapGetters(['filterList', 'password'])
  }
}
</script>

<style scoped>
</style>
