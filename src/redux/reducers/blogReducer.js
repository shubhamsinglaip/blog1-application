import { ADD_BLOG,DELETE_BLOG,UPDATE_BLOG } from "../constants"
const initialState={

}



const blogReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_BLOG:
        return{
            state

            
        }
        case UPDATE_BLOG:
        return{
            state

            
        }
        case DELETE_BLOG:
            
        return{
            state

          
        }
        default: return state
    }
}
export default blogReducer;