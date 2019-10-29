<template>
  <div>
    <b-navbar toggleable="lg">
      <b-container>
        <b-navbar-brand href="/">
          <img
            width="100"
            height="75"
            src="~/assets/CPlogo.png"
            class="img-fluid"
            alt="Coolest Projects"
            itemprop="logo"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/registration">Registratie</b-nav-item>
            <b-nav-item-dropdown text="Kies je taal" right>
              <b-dropdown-item href="#">English</b-dropdown-item>
              <b-dropdown-item href="#">Francais</b-dropdown-item>
              <b-dropdown-item href="#">Nederlands</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right v-if="loggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                Welkom <em>test</em>
              </template>
              <b-dropdown-item href="#">Mijn project</b-dropdown-item>
              <b-dropdown-item href="#">Log uit</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loggedIn: false
    }
  },
  computed: {},
  methods: {}
}
</script>
