import React from "react";
import { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div style={{ margin: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Contact Form</h1>
      <p>
        The following form demonstrates form validation in action. Contact form
        component reduces the amount of time it is being re-rendered by the user
        as it embraces uncontrolled form validation to reduce any unnecessary
        performance penalty.
      </p>

    </div>
  );
};

export default Contact;
