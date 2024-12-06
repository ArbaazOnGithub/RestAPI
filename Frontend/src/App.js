// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import Menu from './components/Menu';
import AddCourse from './components/AddCourse';
import { Container, Row, Col } from 'reactstrap';
import Contact from './components/Contact';

function App() {
  const notify = () => {
    toast.success("done", {
      position: "top-center",
    });
  };
  
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={3} className='' >
              <Menu />
            </Col>
            <Col md={9} className='' >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/add-courses" element={<AddCourse />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add other routes here */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;
