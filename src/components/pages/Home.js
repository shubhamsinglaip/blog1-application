import React,{useState,useEffect} from 'react'

import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { blogRegister,deleteBlog,updateBlog } from '../../redux/allAction'
import { useDispatch } from 'react-redux'
const Home=()=>{
    const dispatch=useDispatch()
    {/*const data=useSelector((state)=>{
        return state.blog.items;
    })*/}
    const data=useSelector((state)=>state.blogReducer)
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      const blogs = localStorage.getItem('blogs')
      setBlogs(JSON.parse(blogs))
  }, [blogs])

  const handleDelete = (blogOutIndex) => {
      const _blogs = blogs.filter((blog, blogInIndex) => {
          if (blogInIndex !== blogOutIndex) {
              return blog
          }
      })
      console.log(_blogs)
      setBlogs(_blogs)
      localStorage.setItem('blogs', JSON.stringify(_blogs))
  }

  const handleEdit = (blogIndex) => {
      localStorage.setItem('editIndex', blogIndex)
      navigate('/edit')
  }

  

    return(
      <>
      <div style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
          
          <span style={{
              display: 'inline-block',
              minWidth: '140px',
              maxWidth: '140px'
          }}>Title : 
               </span>
          <span style={{
              display: 'inline-block',
              minWidth: '620px',
              maxWidth: '620px'
          }}>Description :
             
          </span>
          <span style={{
              display: 'inline-block',
              minWidth: '180px',
              maxWidth: '180px'
          }}>Action :
             
          </span>
          </div>
          

            {
                blogs && blogs.length > 0 ?
                    blogs.map((blog, blogIndex) => {
                        return (
                                
                                
                                
                            
                            <div style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
                                
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '140px',
                                    maxWidth: '140px'
                                }}>
                                    {blog?.title} </span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '600px',
                                    maxWidth: '600px'
                                }}>
                                    {blog?.body}
                                </span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '180px',
                                    maxWidth: '180px'
                                }}>
                                {/*<button className='btn btn-primary m-2' onClick={() => handleEdit(blogIndex)}>edit</button>
                    
                            <button className='btn btn-danger m-2'onClick={() => handleDelete(blogIndex)}>Delete</button>*/}
                                <button className='btn btn-primary m-2' onClick={() => dispatch(updateBlog(blogIndex))}>edit</button>
                    
                                <button className='btn btn-danger m-2'onClick={() => dispatch(deleteBlog(blogIndex))}>Delete</button>
                                
                                </span>
                                
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
        </>

    )
}
export default Home;