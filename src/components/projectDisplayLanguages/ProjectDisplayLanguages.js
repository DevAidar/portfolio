import React from "react";
import "./ProjectDisplayLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectDisplayLanguages extends React.Component {
  render() {
    return (
      <div>
        <div className="github-project-languages-main">
          <ul className="dev-icons">
            {this.props.project.languages.map(languages => {
              return (
                <OverlayTrigger
                  key={`${this.props.keyInfo}__${languages.name}__${languages.iconifyClass}`}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{languages.name}</strong>
                    </Tooltip>
                  }
                >
                  <li className="github-project-languages-inline" name={languages.name}>
                    <span
                      className="iconify"
                      data-icon={languages.iconifyClass}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectDisplayLanguages;
