<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <popsmall></popsmall>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import popsmall from '../components/popsmall.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    popsmall
  }
}
</script>
