import React,{useState, useEffect} from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'; 
const Editblog=()=>{
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
   

    const handleEdit = () => {
        console.log({ title, body, index: localStorage.getItem('editIndex') })
        let blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        const _blogs = blogs.map((blog, blogInIndex) => {
            if (blogInIndex == localStorage.getItem('editIndex')) {
                return { title, body}
            } else {
                return blog
            }
        })
        console.log(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
        navigate('/')
    }

    return(
            
        <div className="container">
            <div className ="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a Blog</h2>
                <Form>
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
                                defaultValue={uid}
            onChange={e=>onInputChange(e)}
                            />
                        </div>
    */}

                        <div className="form-group">
                        <Label for="title" >Edit Title</Label>
                             <input
                             id="title"
                                type="text"
                                placeholder="Enter title here"
                                className="form-control form-control-lg"
                                name="title"
                                defaultValue={title}
                                onChange={(e) => handleTitleChange(e)}
                            />
                            </div>
                            <div className="">
                            <Label for="content" >Edit Content</Label>
                            <Input
                            id="content"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter content here"
                                name="body"
                                //onChange={fieldChanged}
                                defaultValue={body}
                                onChange={(e) => handleBodyChange(e)}
                            />
                        </div>
                        
                    <Button type="submit" className="btn btn-primary btn" onClick={handleEdit}>Edit Blog</Button>

                </Form>


            </div>
        </div>

    )
}
export default Editblog;