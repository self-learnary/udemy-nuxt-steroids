<template>
  <header>
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.nav-items {
  width: 80%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-items li a {
  color: #000;
  text-decoration: none;
}
.nav-items li a:hover,
.nav-items li a:active {
  color: #fff;
}
</style>
