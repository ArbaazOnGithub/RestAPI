import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from "axios";
import base_url from "../api/SpringBootApi";
import { toast } from "react-toastify";
  
  const Course = ({course,update}) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/topics/${id}`).then(
          (response)=>{
            toast.success("Course has been deleted",{position: "bottom-center"});
            update(id);
          },
          (error)=>{
            toast.error("Something went wrong",{position: "bottom-center"});
          }
        );
    }
    return (
      <div>
        <Card className="text-center bg-light">
          {/* <CardImg top width="100%" src="" alt="Course img" /> */}
          <CardBody>
            <CardSubtitle className="fw-bold">{course.id}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Button color="danger" onClick={()=>{
              deleteCourse(course.id);
            }} outline>Delete</Button>
            <Button color="warning" className="ms-3" outline>Update</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Course; 