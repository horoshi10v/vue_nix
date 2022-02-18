<template>
  <div>
    <div> ID: {{ post.id }}, User: {{ post.userId }}</div>
    <div>Title: {{ post.title }}</div>
    <div>Body: {{ post.body }}</div>
  </div>
</template>

<script>

export default {
  name: "Product",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>