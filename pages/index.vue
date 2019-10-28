<template>
  <div>
    <b-row>
      <b-col>
        <b-jumbotron header="BootstrapVue" lead="Coolest Project Registration Procedure 2020">
          <template v-slot:header>
            <b-img center src="~/assets/CPlogo.png" width="200" height="160" />
          </template>
          <b-button variant="success" href="/registration">Start registratie</b-button>
          <h2 class="text-center">georganiseerd door:</h2>
          <b-img center src="~/assets/coderdojo.png" width="400" height="70" />
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
