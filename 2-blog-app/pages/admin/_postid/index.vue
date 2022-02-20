<template>
  <div class="admin-post-page">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <section class="update-form">
        <AdminPostForm :post="loadedPost" />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostidIndex',
  data() {
    return {
      loadedPost: {},
    }
  },
  async fetch() {
    const response = await this.$axios.$get('/loadedPosts/' + this.$route.params.postid)
    this.loadedPost = response
  },
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
