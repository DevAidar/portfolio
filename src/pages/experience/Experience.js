import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
  title: "Experience",
  subtitle: "Front End, React, Cyber Security",
  description:
    "I have 2 years of experience in Web Development. I love working on colaborative projects at college with my classmates. I have a lot of experience of working with data from API, that I use to create interactive apps",
  header_image_path: "experience.svg",
  sections: []
};

class Experience extends Component {
  render() {
    return (
      <div className="experience-main">
        <Header />
        <div className="basic-experience">
          <Fade bottom duration={1000 / 4} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assests/images/${experience["header_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text">{experience.title}</h1>
                <h3 className="experience-heading-sub-text">
                  {experience["subtitle"]}
                </h3>
                <p className="experience-header-detail-text subTitle">
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Experience;
