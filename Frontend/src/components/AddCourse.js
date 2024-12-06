import React, { Fragment, useEffect, useState } from "react";
import { Input, Form, Button, Container, FormGroup } from "reactstrap";
import axios from "axios";
import base_url from "../api/SpringBootApi";
import { ToastContainer, toast } from 'react-toastify';


const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Courses";
    }, []);


    const [course, setCourse] = useState({});
    //Form Handler Function
    const handleForm = (e) => {
        console.log(course);
        e.preventDefault();
        console.log(course); // Log the data
        postDataToServer(course); // Send data to the server
    }

    //creating fucntion to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/topics`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Courses has been added",{position: "bottom-center"});
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position: "bottom-center"});
            }
        );
    };


    return (
        <div>
            <ToastContainer />
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    <Input type="text" name="userId" placeholder="Enter ID" id="userId"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input type="text" name="title" placeholder="Enter title here" id="title" 
                     onChange={(e) => {
                        setCourse({ ...course, title: e.target.value });
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Description</label>
                    <Input type="textarea" name="description" placeholder="Enter description here" id="description" style={{ height: 150 }} 
                     onChange={(e) => {
                        setCourse({ ...course, description: e.target.value });
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Courses</Button>
                    <Button type="reset" color="warning ms-2" >Clear</Button>
                </Container>
            </Form>
        </div>
    )
}
export default AddCourse;