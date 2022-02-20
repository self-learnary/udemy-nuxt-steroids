<template>
  <div class="posts-page">
    <div>
      <PostsPostList :posts="loadedPosts" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostsIndex',
  // async asyncData({ $axios }) {
  //   const loadedPosts = await $axios.$get('/loadedPosts')
  //   return { loadedPosts }
  // },
  // async fetch() {
  //   const response = await this.$axios.$get('/loadedPosts')
  //   this.$store.dispatch('posts/setPosts', response)
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/posts']
    },
  },
}
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
