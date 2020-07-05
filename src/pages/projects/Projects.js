import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import GithubProject from '../../components/githubProject/GithubProject';
import Button from "../../components/button/Button";
import { Fade } from 'react-reveal';
import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';

const projectsHeader = {
  title: "Projects",
  description: "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg"
}


class Projects extends Component {
  render() {
    return (
      <div className="projects-main">
        <Header />
        <div className="basic-projects">
          <Fade bottom duration={1000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text">
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle">
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className='project-display'>
          {ProjectsData.data.slice(0, 2).map(project => {
            return <GithubProject project={project} key={`project__display__${project.name}`} />
          })}
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map(repo => {
            return <GithubRepoCard repo={repo} key={repo.id} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/devaidar"
          newTab={true}
        />
        <Footer />
      </div>
    );
  }
}

export default Projects;