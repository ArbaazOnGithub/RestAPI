import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/SpringBootApi";
import axios from "axios";
import { Toast } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';


const AllCourses = () => {

    useEffect(()=>{
        document.title="All Courses";
    },[]);

    const getAllCoursesFromServer=()=>{

        axios.get(`${base_url}/topics`).then(
            (response)=>{
                //success
                console.log(response);
                setCourses(response.data);
                toast.success("Courses has been loaded",{position: "bottom-center"});
            },
            (error)=>{
                //for the error 
                console.log(error);
                toast.error("Something went wrong",{position: "bottom-center"});
            });
    }

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses] = useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
  
    return (
        <div>
            <ToastContainer />
            {/* <h1>All Courses</h1> */}
            {courses.length > 0 ? courses.map((item, index) => (<Course key={index} course={item} update={updateCourses}  />)) : <div style={{textAlign: "center"}}>No Courses Available</div>}
        </div>
    );
};

export default AllCourses;  

