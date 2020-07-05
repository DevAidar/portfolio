import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Header />
        <div className="basic-education">
          <Fade bottom duration={1000 / 4} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src={require("../../assests/images/education.svg")} alt="" />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">Education</h1>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Education;
