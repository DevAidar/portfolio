import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    return (
      <div>
        {skills.data.map(skill => {
          return (
            <div className="skills-main-div" key={`skill__${skill.title}__${skill.softwareSkills}`}>
              <Fade left duration={2000 / 4}>
                <div className="skills-image-div">
                  <img
                    alt="Aydar is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img>
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000 / 4}>
                  <h1 className="skills-heading">{skill.title}</h1>
                </Fade>
                <Fade right duration={1500 / 4}>
                  <SoftwareSkill logos={skill.softwareSkills} keyInfo={`skill__${skill.title}__${skill.softwareSkills}`} />
                </Fade>
                <Fade right duration={2000 / 4}>
                  <div>
                    {skill.skills.map(skillSentence => {
                      return (
                        <p key={`skill__${skill.title}__${skill.softwareSkills}__${skillSentence}`} className="subTitle skills-text">{skillSentence}</p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
