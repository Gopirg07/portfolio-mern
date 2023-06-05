import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import "./App.css";
import { Navbarr } from "./Navbar";
import img from "./images/waving.1bae5fcfb51082b5c2b4.png";
import setup from "./images/roberto-cortese-ejhjSZKTeeg-unsplash.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import react from "./images/skills/icons8-react-native-240.png";
import redux from "./images/skills/icons8-redux-240.png";
import html from "./images/skills/icons8-html-5-240.png";
import css from "./images/skills/icons8-css3-240.png";
import bootstrap from "./images/skills/icons8-bootstrap-240.png";
import node from "./images/skills/icons8-nodejs-240.png";
import express from "./images/skills/icons8-express-js-240.png";
import git from "./images/skills/icons8-git-240.png";
import github from "./images/skills/icons8-github-250.png";
import npm from "./images/skills/icons8-npm-240.png";
import heroku from "./images/skills/icons8-heroku-240.png";
import js from "./images/skills/icons8-javascript-240.png";
import vs from "./images/skills/icons8-visual-studio-code-2019-240.png";
import postman from "./images/skills/postman-icon.png";
import mysql from "./images/skills/icons8-my-sql-240.png";
import mongodb from "./images/skills/icons8-mongodb-240.png";
import aws from "./images/skills/icons8-amazon-web-services-240.png";

import resume from "./Resume/Gopinath.R Resume MERN Final.pdf";

import makeup from "./images/Makeup-Api.png";
import crm from "./images/crm.png";
import dashboard from "./images/dashboard.png";
import { Fade } from "react-reveal";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbarr />

        {/* HomePage */}
        <Fade bottom cascade>
          <section id="home" className="">
            <div className="row">
              <div className="home-wrap">
                <h1 className="home-MERN">MERN- Stack Developer</h1>
                <img className="home-img" src={img} alt="img" />
              </div>
              <h6 className="home-about">
                Hi, I'm Gopinath Rajendran. A passionate MERN Stack Developer
                based in Chennai, India. 📍
              </h6>
            </div>
            <Button
              variant="outlined"
              href="#about"
              style={{ color: "#2d2e32", borderColor: "#2d2e32" }}
            >
              Portfolio
            </Button>
          </section>
        </Fade>
        {/* Portfolio */}
        <Fade bottom cascade>
          <section id="about" className="">
            <h1 className="about-heading">About</h1>
            <div className="row about-row">
              <div className="img-wrap col-lg-6 ">
                <img className="about-img" src={setup} alt="setup" />
              </div>
              <p className="about-summary col-lg-6">
                I'm a MERN Stack Developer, i have hands on experience during
                the entire course in Guvi. During these 8 months i got fully
                trained on Full Stack Development by using MERN Stack. I created
                and developed MERN stack and frontend projects as a part of my
                training, and i learned AWS for deploying and managing real-time
                websites. The Technologies that i learned and trained are,
                Frontend [ HTML, CSS, Javascript, React.Js], Backend[ Node.Js],
                Databases[ MongoDb, MySQL], AWS And System design. <br />{" "}
                Looking To pursue a challenging career and work for an esteemed
                organization where I can contribute my skills for both my
                personal and organizaonal growth.
              </p>
            </div>
          </section>
        </Fade>
        {/* Skills */}
        <Fade bottom cascade>
          <section id="skills">
            <h1 className="skills-heading">Skills</h1>
            <h5 className="skills-wrap-heading">
              Technologies I've Worked With <ArrowDownwardIcon />{" "}
            </h5>
            <div className="skills-wrap shadow">
              <div className="skill-box shadow">
                <p className="skill-title">FRONTEND</p>
                <div className="skill-icons">
                  <Tooltip title="React" arrow>
                    <img className="icons" src={react} alt="icons" />
                  </Tooltip>

                  <Tooltip title="Redux" arrow>
                    <img className="icons" src={redux} alt="icons" />
                  </Tooltip>

                  <Tooltip title="HTML-5" arrow>
                    <img className="icons" src={html} alt="icons" />
                  </Tooltip>

                  <Tooltip title="CSS" arrow>
                    <img className="icons" src={css} alt="icons" />
                  </Tooltip>

                  <Tooltip title="Bootstrap" arrow>
                    <img className="icons" src={bootstrap} alt="icons" />
                  </Tooltip>
                </div>
              </div>
              <div className="skill-box shadow">
                <p className="skill-title">BACKEND</p>
                <div className="skill-icons">
                  <Tooltip title="Node.js" arrow>
                    <img className="icons" src={node} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Express.js" arrow>
                    <img className="icons" src={express} alt="icons" />
                  </Tooltip>
                  <Tooltip title="mongodb" arrow>
                    <img className="icons" src={mongodb} alt="icons" />
                  </Tooltip>
                  <Tooltip title="mysql" arrow>
                    <img className="icons" src={mysql} alt="icons" />
                  </Tooltip>
                </div>
              </div>
              <div className="skill-box shadow">
                <p className="skill-title">DEVOPS</p>
                <div className="skill-icons">
                  <Tooltip title="aws" arrow>
                    <img className="icons" src={aws} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Github" arrow>
                    <img className="icons" src={github} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Git" arrow>
                    <img className="icons" src={git} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Npm" arrow>
                    <img className="icons" src={npm} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Heroku" arrow>
                    <img className="icons" src={heroku} alt="icons" />
                  </Tooltip>
                </div>
              </div>
              <div className="skill-box shadow">
                <p className="skill-title">LANGUAGES</p>
                <div className="skill-icons">
                  <Tooltip title="Javascript" arrow>
                    <img className="icons" src={js} alt="icons" />
                  </Tooltip>
                </div>
              </div>
              <div className="skill-box shadow">
                <p className="skill-title">TOOLS</p>
                <div className="skill-icons">
                  <Tooltip title="Visual Studio" arrow>
                    <img className="icons" src={vs} alt="icons" />
                  </Tooltip>
                  <Tooltip title="Postman" arrow>
                    <img className="icons" src={postman} alt="icons" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        {/* Projects */}
        <Fade bottom cascade>
          <section id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="projects-wrap">
              <div className="row project-each shadow">
                <div className="project-img-div col-lg-6 shadow">
                  <img className="project-img" src={crm} alt="" />
                </div>

                <div className="project-text col-lg-4">
                  <h3 className="project-heading"> CRM App </h3>
                  <p className="project-exp">
                    {" "}
                    This Is A CRM MERN Stack Application Created For My Webcode
                    Project. In This CRM Project We Can Create Leads & Contacts.
                    For Now Its Only Limited To Create Leads & Contacts.{" "}
                  </p>
                  <div className="project-skills">
                    <p className="skills shadow">React</p>
                    <p className="skills shadow">Node</p>
                    <p className="skills shadow">Express</p>
                    <p className="skills shadow">MongoDb</p>
                  </div>
                  <div className="project-view">
                    <a
                      className="view"
                      target="_blank"
                      href="https://github.com/Gopirg07/crm-frontend"
                    >
                      {" "}
                      Code <GitHubIcon />{" "}
                    </a>
                    <a
                      className="view"
                      target="_blank"
                      href="https://gcrm-frontend.netlify.app/"
                    >
                      {" "}
                      Live Demo <OpenInNewRoundedIcon />{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="row project-each shadow">
                <div className="project-text col-lg-4">
                  <h3 className="project-heading"> React dashboard </h3>
                  <p className="project-exp">
                    {" "}
                    This Is A Dashboard Front-End Application Created For My
                    Project.
                  </p>
                  <div className="project-skills">
                    <p className="skills shadow">React</p>
                    <p className="skills shadow">MUI</p>
                  </div>
                  <div className="project-view">
                    <a
                      className="view"
                      target="_blank"
                      href="https://github.com/Gopirg07/recap-dashboard"
                    >
                      {" "}
                      Code <GitHubIcon />{" "}
                    </a>
                    <a
                      className="view"
                      target="_blank"
                      href="https://bejewelled-sundae-e95c38.netlify.app/"
                    >
                      {" "}
                      Live Demo <OpenInNewRoundedIcon />{" "}
                    </a>
                  </div>
                </div>

                <div className="project-img-div col-lg-6 shadow">
                  <img className="project-img" src={dashboard} alt="" />
                </div>
              </div>

              <div className="row project-each shadow">
                <div className="project-img-div col-lg-6 shadow">
                  <img className="project-img" src={makeup} alt="" />
                </div>

                <div className="project-text col-lg-4">
                  <h3 className="project-heading"> Makeup Api </h3>
                  <p className="project-exp">
                    {" "}
                    This Is A Front-End Application Created To Fetch The Makeup
                    Api For My Webcode Project. In This Api Project We Can
                    Search Any Makeup products By The Product Type,Product
                    Category,Product Tags,Brand,etc.. For Now Its Only Limited To
                    Search By Product Type.
                  </p>
                  <div className="project-skills">
                    <p className="skills shadow">HTML</p>
                    <p className="skills shadow">CSS</p>
                    <p className="skills shadow">JS</p>
                  </div>
                  <div className="project-view">
                    <a
                      className="view"
                      target="_blank"
                      href="https://github.com/Gopirg07/Hackathon-1"
                    >
                      {" "}
                      Code <GitHubIcon />{" "}
                    </a>
                    <a
                      className="view"
                      target="_blank"
                      href="https://admirable-torte-98f637.netlify.app/"
                    >
                      {" "}
                      Live Demo <OpenInNewRoundedIcon />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        {/* Resume */}
        <Fade bottom cascade>    
        <section id="resume">
          <h1 className="resume-heading">Resume</h1>
          <div className="resume-main">
            <div className="resume-icons">
              <Button variant="outlined">
                <a href={resume} target="_blank">
                  {" "}
                  View Resume <VisibilityRoundedIcon />
                </a>
              </Button>
            </div>
            <div className="resume-icons">
              <Button variant="outlined">
                <a href={resume} download>
                  {" "}
                  Download Resume <DownloadRoundedIcon />{" "}
                </a>
              </Button>
            </div>
          </div>
        </section>
        </Fade>          
        <Fade bottom cascade></Fade>
        {/* Contact */}
        <Fade bottom cascade>
          <section id="contact">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-details">
              <div className="contact-tags contact-name">
                {" "}
                <PersonRoundedIcon /> R.Gopinath{" "}
              </div>
              <a className="contact-tags" href="tel:+919080042180">
                {" "}
                <CallRoundedIcon /> +91 9080042180{" "}
              </a>
              <a
                className="contact-tags"
                href="mailto:gopinathofficial16@gmail.com"
                target="_blank"
              >
                {" "}
                <EmailRoundedIcon /> gopinathofficial16@gmail.com{" "}
              </a>
            </div>
          </section>
        </Fade>
      </div>

      {/* Footer */} 
        <section class="footer">
          <div class="footer-links">
            <a
              href="mailto:gopinathofficial16@gmail.com"
              target="_blank"
              class="footer-links-a mail"
            >
              <EmailRoundedIcon color="primary" />{" "}
            </a>
            <a
              href="https://github.com/Gopirg07"
              target="_blank"
              class="footer-links-a git"
            >
              <GitHubIcon fontSize="large" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/gopinath-rajendran-539206258/"
              target="_blank"
              class="footer-links-a linkedin"
            >
              {" "}
              <LinkedInIcon color="primary" />{" "}
            </a>
          </div>
          <div class="footer-name">© 2023 Gopinath. All rights reserved.</div>
        </section> 
    </div>
  );
}

export default App;
