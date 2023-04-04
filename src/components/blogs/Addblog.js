import React,{useState} from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
import {useDispatch} from 'react-redux'
import {blogRegister} from '../../redux/allAction'
const Addblog=()=>{
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    //const [author,setAuthor]=useState('')

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }
    const handleBodyChange = (e)=>{
        setBody(e.target.value)
    }
    {/*
    const handleAuthorChange = (e)=>{
        setAuthor(e.target.value)
    }
*/}
    const handleSubmit = (e)=>{
        e.preventDefault();
        const _blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []


        
        localStorage.setItem('blogs', JSON.stringify([..._blogs, { title, body}]))
        //dispatch(blogRegister(title,body))
        navigate('/')
    }
    







    
    return(

        <div className="container">
            <div className ="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a Blog</h2>
                <Form >
                    {/*
                                
                                
            
                            
                        <div className="form-group">
                        <Label for="uid" >User Id</Label>
                            <Input
                                id="uid"
                                type="text"
                                placeholder="Enter User Id here"
                                className="form-control form-control-lg"
                                name="id"
                                //onChange={fieldChanged}
                                defaultValue={id}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
    */}

                        <div className="form-group">
                        <Label for="title" >Post Title</Label>
                             <input
                             id="title"
                                type="text"
                                placeholder="Enter title here"
                                className="form-control form-control-lg"
                                name="title"
                                defaultValue={title}
            onChange={e=>handleTitleChange(e)}
                            />
                            </div>
                            <div className="">
                            <Label for="content" >Post Content</Label>
                            <Input
                            id="content"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter here"
                                name="body"
                                //onChange={fieldChanged}
                                defaultValue={body}
            onChange={e=>handleBodyChange(e)}
                            />
                        </div>
                        {/*
                        <div className="form-group">
                        <Label for="author" >Author</Label>
                            <Input
                                id="author"
                                type="text"
                                placeholder="Enter Author here"
                                className="form-control form-control-lg"
                                name="author"
                                //onChange={fieldChanged}
                                defaultValue={author}
            onChange={e=>handleAuthorChange(e)}
                            />
</div>*/}
                        
                    <Button type="submit"className="btn btn-primary btn" onClick={handleSubmit}>Add Blog</Button>

                </Form>


            </div>
        </div>
       
    )
}
export default Addblog;