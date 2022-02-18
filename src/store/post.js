import axios from "axios";

export const postModule = {
  state:()=>({
      url: '',
      posts: [],
      errors: [],
      loader: false,
  }),
    getters:{
        getPostURL: (state)=>{
            return state.url
        },
        getPost: (state)=>{
            return state.post
        },
    },
    mutations:{
        setURL(state, url){
            state.url=url
        },
        setPost(state, posts){
            state.posts=posts
        },
        setErrors(state, errors){
            state.errors=errors
        },
        setLoaded(state, loaded){
            state.loaded=loaded
        },
    },
    actions: {
        fetchPosts(context){
            context.commit('setLoaded', false)
            //const url ='https://jsonplaceholder.typicode.com/posts'
            axios.get(context.getters.getPostURL).then((res)=>{
                context.commit('setPost', res.data)
            }).catch((err)=>{
                context.commit('setErrors', [err])
            }).finally(()=> {
                context.commit('setLoaded', true)
            })
        }
    },
    namespaced: true
}