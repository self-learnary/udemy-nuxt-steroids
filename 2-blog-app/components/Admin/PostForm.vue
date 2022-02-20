<template>
  <form @submit.prevent="onSave">
    <UIAppControlInput v-model="editedPost.author">Author Name</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.thumbnail">Thumbnail Link</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.content" control-type="textarea"
      >Content</UIAppControlInput
    >

    <UIAppButton type="submit">Save</UIAppButton>

    <UIAppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel"
      >Cancel</UIAppButton
    >
  </form>
</template>
<script>
export default {
  name: 'PostForm',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editedPost: this.post
        ? {
            ...this.post,
            previewText: 'ini adalah preview text',
            updatedAt: new Date(),
          }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
          },
    }
  },
  methods: {
    onCancel() {
      // navigate back
      this.$router.push('/admin')
    },
    onSave() {
      this.$emit('submit', this.editedPost)
    },
  },
}
</script>
