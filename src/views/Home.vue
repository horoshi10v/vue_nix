<template>
  <div class="home">
    Card {{ value }}
    <h1>{{ $store.state.post }}</h1>
    <card @calc="plus"/>
<!--    <example :clickable="true" title="name"></example>-->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src mapState, mapGetters,
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      value:0,
    }
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      fetchPosts:'post/fetchPosts'
    }),

    plus(){
      this.value++
    }
  },
}
</script>
