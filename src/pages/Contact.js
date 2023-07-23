import React, { useState, useEffect } from "react";
import BackgroundImage from "../images/contactpageImage.jpg";
import "../styles/Contact.css";
import {useHistory} from "react-router-dom";

function Contact() {
  const url = "";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(data));
    setData({
      name:"",
      email:"",
      message:""
    });
    console.log(data)
    window.location.href = '/menu'; 
    alert("Login Successfull")
    }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BackgroundImage}` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input
            onChange={handle}
            id="name"
            value={data.name}
            name="name"
            placeholder="Enter your fullname"
            type="text"
          />

          <label htmlFor="email">Email Address</label>
          <input
            onChange={handle}
            id="email"
            value={data.email}
            name="email"
            placeholder="Enter your email address"
            type="email"
          />

          <label>Message</label>
          <textarea
            onChange={handle}
            id="message"
            value={data.message}
            rows="6"
            placeholder="Enter your message to us"
            name="message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
