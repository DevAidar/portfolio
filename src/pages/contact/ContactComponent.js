import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';
import './ContactComponent.css';


const blogSection = {};

const addressSection = {
  title: "Address",
  subtitle:
    "Mission Viejo, CA, 92692",
  avatar_image_path: "address_image.svg",
  location_map_link: "https://www.google.com/maps?q=Mission+Viejo&ftid=0x80dcc2af93bd7d9b:0x276285924e314834"
};

const phoneSection = {
  title: "Phone Number",
  subtitle: "+1 (949) 339-7462"
}

const ContactData = {
  title: "Contact Me",
  profile_image_path: "aydar_nuriev.png",
  description: "I am ready for any chalenges, and love solving difficult tasks."
};

class Contact extends Component {
  render() {
    return (
      <div className="contact-main">
        <Header />
        <div className="basic-contact">
          <Fade bottom duration={1000 / 4} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">
                  {ContactData["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {ContactData["description"]}
                </p>
                <SocialMedia />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000 / 4} distance="40px">
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <h1 className="address-heading-text">
                  {addressSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {addressSection["subtitle"]}
                </p>
                <h1 className="address-heading-text">
                  {phoneSection["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                  />
                </div>
              </div>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;