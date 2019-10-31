<template>
  <div>
    <NavBar />
    <b-container fluid>
      <nuxt />
    </b-container>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import '~/assets/scss/custom.scss'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
</style>
