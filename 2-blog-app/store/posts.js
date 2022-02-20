export const state = () => ({
  posts: [],
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
}

export const actions = {
  async setPosts({ commit }) {
    const response = await this.$axios.$get('/loadedPosts')
    commit('setPosts', response)
  },
}

export const getters = {
  posts: (state) => state.posts,
}
