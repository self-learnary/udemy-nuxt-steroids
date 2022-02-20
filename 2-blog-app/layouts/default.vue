<template>
  <div>
    <BaseHeader @sidenav-toggle="displaySidenav = !displaySidenav" />
    <BaseSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt keep-alive />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
<style>
html {
  font-family: 'Poppins', sans-serif;
}
body {
  margin: 0;
}
</style>
