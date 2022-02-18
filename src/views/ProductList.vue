<template>
  <div>
      <div v-if="loader">
        <div>POST</div>
          <Error v-for="(error, index) in errors" :key="index" :error="error">
          </Error>
        <Product v-for="post in posts" :key="post.id" :post="post"></Product>
      </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import axios from "axios";
import Error from "@/components/Error";
export default {
  name: "ProductList",
  components: {Error, Product},
  data(){
    return{
      posts:[],
      loader: false,
      errors: []
    }
  },
  mounted() {
    const url ='https://jsonplaceholder.typicode.com/posts'
    axios.get(url).then((res)=>{
      this.posts=res.data
      console.log(this.posts)
    }).catch((err)=>{
      this.errors.push(err)
    }).finally(()=> {
      this.loader = true
    })
  },
}
</script>

<style scoped>

</style>