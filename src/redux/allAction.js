import { ADD_BLOG,DELETE_BLOG,UPDATE_BLOG } from "./constants"
export const blogRegister=(data)=>{
    return{
        type:ADD_BLOG,
        payload:data
    }
}
export const deleteBlog=(blogIndex)=>{
    return{
        type:DELETE_BLOG,
        payload:blogIndex
    }
    
}
export const updateBlog=(blogIndex)=>{
    return{
        type:UPDATE_BLOG,
        payload:blogIndex
    }
}