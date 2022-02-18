<template>
<div>Error {{ error }}</div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>