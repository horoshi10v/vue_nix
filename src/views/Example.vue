<template>
<div class="example">
  <card @calc="plus">
  </card>
  Card: {{ value }}
</div>
</template>
<script>

export default {
  name: 'Example',
  data(){
    return{
    value:0,
    }
  },
  methods: {
    plus(){
      this.value++
    }
  },
}
</script>

<style scoped>
.example{
  color: red;
  cursor: help;
}
</style>