export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    await dispatch('posts/setPosts')
  },
}
