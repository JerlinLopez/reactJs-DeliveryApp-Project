import React from "react";
import BackgroundImage from "../images/aboutpageImage.webp";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BackgroundImage}` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Extraordinary FOOD COMES FIRST <br></br>
          Consistently, in excess of 11 million visitors visit ‘Organization
          Name’ eateries around the globe. What’s more, they do as such in light
          of the fact that our eateries are known for serving astounding,
          incredible tasting, and reasonable food.
          <br></br>
          Established in 1954, ‘Organization Name’ ®is the second-biggest
          fast-food burger chain on the planet. The first home of customary
          burgers, our promise to premium fixings, signature formulas, and
          family-accommodating feasting encounters is the thing that has
          characterized our image for in excess of 50 fruitful years.
        </p>
      </div>
    </div>
  );
}

export default About;
