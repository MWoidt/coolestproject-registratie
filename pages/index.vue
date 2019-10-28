<template>
  <div class="container">
    <div>
      <img src="~/assets/CPlogo.png" width="200" height="160">
      <h1 class="title">
        <img src="~/assets/coderdojo.png" width="400" height="70">
      </h1>
      <h2 class="subtitle">
        Coolest Project Registration Procedure 2020
      </h2>
      <div class="links">
        <n-link class="button--grey" to="/registration">
          Start registratie
        </n-link>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
