import {createStore} from "vuex";
import {postModule} from "@/store/post";
export default createStore ({
     modules:{
         post: postModule
     }
})