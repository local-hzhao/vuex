<template>
  <div class="hello">
    11
    <div>{{ $store.state.name }}</div>
    <button @click="addState">修改state的值</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    addState () {
      this.$store.commit('addState')
    }
  }
}
</script>

<style scoped>
</style>
