<template>
  <h1>A User with ID: {{ $route.params.id }}</h1>
</template>
<script>
export default {
  name: 'UserIndex',
  validate(data) {
    return /^\d+$/.test(data.params.id)
  },
}
</script>
