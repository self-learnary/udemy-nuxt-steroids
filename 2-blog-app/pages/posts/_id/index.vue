<template>
  <div class="single-post-page">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
          <span class="post-detail">Last updated on {{ loadedPost.updatedAt }}</span>
          <span class="post-detail">Author : {{ loadedPost.author }}</span>
        </div>
        <p class="post-content">{{ loadedPost.content }}</p>
      </section>
      <section class="post-feedback">
        <p>
          Let me now what you think about this post, send a mail to
          <a href="mailto:rafli.rfsp@gmail.com">rafli.rfsp@gmail.com</a>
        </p>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SinglePostIndex',
  data() {
    return {
      loadedPost: {},
    }
  },
  async fetch() {
    const response = await this.$axios.$get('/loadedPosts/' + this.$route.params.id)
    this.loadedPost = response
  },
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
