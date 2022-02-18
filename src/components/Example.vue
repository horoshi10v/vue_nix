<template>
<!--  <div class="example">Example {{ $route.params.id }}</div>-->
<!--  <div>Hi {{ title }} {{ number }} {{ data }} </div>-->
  <div>
<!--      <div :title="'Jump to: '+$router.getRoutes()[0].name"-->
<!--           :class="{example: true, clickable: clickable}"-->
<!--           :style="{'font-size': '25px'}"-->
<!--      @click="$router.push({ name: 'Home' })">{{ ' Example ' }}</div>-->
<!--      <div :title ="name" @click="clickable2">-->
<!--        Card: {{ name }} {{ values }} {{ data2 }}-->
        <button @click="increment">Increase 'Value'</button>

<!--      </div>-->
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    title: {
      type:String,
      required: false,
    },
    number: {
      type: Number,
      default: 0,
      validator:(value) =>{
        return value >=0;
      },
    },
    data: {
      type: Object,
    },
    clickable:{
        type: Boolean,
      required: false,
    }
  },
  // data() {
  //   return {
  //     name: "CardName",
  //     data2:{a:1, b:2},
  //     clickable2: false,
  //     values: 0,
  //   }
  // },
  methods: {
    increment(){
      this.$emit(
          'calc',
      )
    }
  },
}
</script>

<style scoped>
.example{
  color: red;
}
.clickable{
  cursor: help;
}
</style>