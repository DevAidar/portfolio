import React, { Component } from 'react'
import { Fade } from 'react-reveal';

import ProjectDisplayLanguages from "../../components/projectDisplayLanguages/ProjectDisplayLanguages";

import './GithubProject.css';

class GithubProject extends Component {
  render() {
    function openRepoinNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
    }

    return (
      <div className='github-project-main'>
        <div className="github-project-text">
          <Fade left duration={1000 / 4}>
            <h1 className="github-project-heading" onClick={() => openRepoinNewTab(this.props.project.projectLink)}>{this.props.project.title}</h1>
          </Fade>
          <Fade left duration={1500 / 4}>
            <ProjectDisplayLanguages project={this.props.project} keyInfo={`project__display__${this.props.project.name}`} />
            <p className="github-project-detail-text subTitle">
              {this.props.project.description}
            </p>
          </Fade>
          <Fade left duration={2000 / 4}>
            <div>
              {this.props.project.details.map(detail => {
                return (
                  <p key={`skill__${this.props.project.title}__${this.props.project.detail}`} className="subTitle github-project-detail-text-inner ">{detail}</p>
                );
              })}
            </div>
          </Fade>
        </div>

        <Fade right duration={1500 / 4}>
          <div
            className='github-project-image'
            onClick={() => openRepoinNewTab(this.props.project.projectLink)}
          >
            <img
              alt={this.props.project.name}
              src={require(`../../assests/images/${this.props.project.imagePath}`)}
            />
          </div>
        </Fade>
      </div>
    )
  }
}

export default GithubProject
