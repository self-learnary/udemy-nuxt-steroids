<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('/admin/new-post/')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostsPostList :is-admin="isAdmin" :posts="loadedPosts" />
    </section>
  </div>
</template>
<script>
export default {
  name: 'AdminIndex',
  data() {
    return {
      isAdmin: true,
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/posts']
    },
  },
}
</script>
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
