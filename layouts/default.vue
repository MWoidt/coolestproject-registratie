<template>
  <div>
    <NavBar />
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
</style>
