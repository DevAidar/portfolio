import React from "react";
import ProjectLanguages from '../../components/projectLanguages/ProjectLanguages';
import "./GithubRepoCard.css";
import { socialMediaLinks } from "../../portfolio";

export default function GithubRepoCard({ repo }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win && win.focus();
  }

  return (
    <div
      className="repo-card-div"
      onClick={() => openRepoinNewTab(repo.projectLink)}
    >
      <div
        style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}
      >
        <div
          className="repo-name-div"
        // style={{ display: 'flex', alignContent: 'baseline' }}
        >
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="16"
            role="img"
            viewBox="0 0 12 16"
            width="12"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            />
          </svg>
          <span className="repo-name" >{repo.name}</span>
        </div>
        <span
          className="icon-button repo-icon-button github"
          rel="noopener noreferrer"
          style={{ display: 'flex', textAlign: 'right', height: '100%', justifySelf: 'flex-end', alignSelf: 'center', alignContent: 'center' }}
          onClick={() => openRepoinNewTab(repo.url)}
        >
          <i className="fab fa-github" style={{ alignSelf: 'center', justifySelf: 'center', margin: 'auto .5em auto 0', textSize: '1rem !important' }} />
        </span>
      </div>
      <div>
        <p className="repo-description">{repo.description}</p>
        <div className="repo-details">
          <p className="repo-creation-date subTitle">Created on {repo.createdAt.split('T')[0]}</p>
          <ProjectLanguages className="repo-languages" logos={repo.languages} repo={repo} />
        </div>
      </div>
    </div >
  );
}
