import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from '../../components/button/Button';

export default function Greeting() {
  return (
    <Fade bottom duration={1000 / 4} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle">{`${greeting.subTitle}`}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="aydar sitting on table"
              src={require("../../assests/images/feelingProud.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
