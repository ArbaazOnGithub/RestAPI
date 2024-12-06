import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link as RouterLink } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem tag={RouterLink} to="/" action>
        Home
      </ListGroupItem>
      <ListGroupItem tag={RouterLink} to="/view-courses" action>
        View Courses
      </ListGroupItem>
      <ListGroupItem tag={RouterLink} to="/add-courses" action>
        Add Courses
      </ListGroupItem>
      <ListGroupItem tag={RouterLink} to="/contact" action>
        Contact Me
      </ListGroupItem>
      <ListGroupItem tag={RouterLink} to="/about" action>
        About
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menu;
