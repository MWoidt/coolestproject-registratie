<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="/">Coolest Projects</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/registration">Registratie</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Kies je taal" right>
                    <b-dropdown-item href="#">English</b-dropdown-item>
                    <b-dropdown-item href="#">Francais</b-dropdown-item>
                    <b-dropdown-item href="#">Nederlands</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    Welkom <em>test</em>
                </template>
                <b-dropdown-item href="#">Mijn project</b-dropdown-item>
                <b-dropdown-item href="#">Log uit</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
