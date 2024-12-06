import React from "react";
import { useEffect } from "react";
import { Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(()=>{
        document.title="Home";
    },[]);
    return (
        <div>
            <Container className="p-2 my-4 bg-light rounded text-center">
                <h1 className="display-3">Welcome To My Website</h1>
                <p className="lead">
                     This is my Rest-API project I have used React JS for Frontend and SpringBoot for Backend.
                </p>
                <hr className="my-2" />
                <p className="lead">
                    <Button color="primary">Start Using</Button>
                </p>
            </Container>
        </div>
    );
};

export default Home;
