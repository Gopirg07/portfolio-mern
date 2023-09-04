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

import mobile_store from "./images/mobile-store.png";
import movie_review from "./images/movie-review.png";
import crm from "./images/crm.png";
import fitness_tracker from "./images/fitness-tracker.png";

function App() {
  let Data = [
    {
      img: mobile_store,
      title: "Mobile Store App",
      brief: "This Is A Mobile Store's Online MERN Stack Application.",
      notes: ["React", "Node", "Express", "MongoDb"],
      git: "https://github.com/Gopirg07/mobile-store-fe",
      deployed: "https://mobile-store-fe.netlify.app/signin",
      place: true,
    },
    {
      img: movie_review,
      title: "Movie Review App",
      brief:
        "This Is A Movie Review MERN Stack Application, Where We Can Create And Read Reviews For Movies.",
      notes: ["React", "Node", "Express", "MongoDb"],
      git: "https://github.com/Gopirg07/Movie-Review-FE",
      deployed: "https://moviesreviewsapp.netlify.app/",
      place: false,
    },
    {
      img: crm,
      title: "CRM App",
      brief:
        "This Is A CRM MERN Stack Application Created For My Webcode Project. In This CRM Project We Can Create Leads & Contacts. For Now Its Only Limited To Create Leads & Contacts.",
      notes: ["React", "Node", "Express", "MongoDb"],
      git: "https://github.com/Gopirg07/crm-frontend",
      deployed: "https://gcrm-frontend.netlify.app/",
      place: true,
    },
    {
      img: fitness_tracker,
      title: "Fitness Tracker App",
      brief:
        "This Is A Fitness Tacking MERN Stack Application, Where We Can Keep Tracking Our Fitness Progress.",
      notes: ["React", "Node", "Express", "MongoDb"],
      git: "https://github.com/Gopirg07/capstone-front-end",
      deployed: "https://capstone-fitness-logger.netlify.app/signin",
      place: false,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Navbarr />

        {/* HomePage */}
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

        {/* Portfolio */}
        <section id="about" className="">
          <h1 className="about-heading">About</h1>
          <div className="row about-row">
            <div className="img-wrap col-lg-6 ">
              <img className="about-img" src={setup} alt="setup" />
            </div>
            <p className="about-summary col-lg-6">
              I'm a MERN Stack Developer, i have hands on experience during the
              entire course in Guvi. During these 8 months i got fully trained
              on Full Stack Development by using MERN Stack. I created and
              developed MERN stack and frontend projects as a part of my
              training, and i learned AWS for deploying and managing real-time
              websites. The Technologies that i learned and trained are,
              Frontend [ HTML, CSS, Javascript, React.Js], Backend[ Node.Js],
              Databases[ MongoDb, MySQL], AWS And System design. <br /> Looking
              To pursue a challenging career and work for an esteemed
              organization where I can contribute my skills for both my personal
              and organizaonal growth.
            </p>
          </div>
        </section>

        {/* Skills */}
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

        {/* Projects */}
        <section id="projects">
          <h1 className="projects-heading">Projects</h1>
          <div className="projects-wrap">
            {Data.map((data, idx) => {
              return (
                <div key={idx} className="row project-each shadow">
                  <div className="project-img-div col-lg-6 shadow">
                    <img className="project-img" src={data.img} alt="" />
                  </div>

                  <div className="project-text col-lg-4">
                    <h3 className="project-heading"> {data.title} </h3>
                    <p className="project-exp"> {data.brief} </p>
                    <div className="project-skills">
                      {data.notes[idx] ? (
                        <p className="skills shadow"> {data.notes[0]} </p>
                      ) : (
                        ""
                      )}
                      {data.notes[idx] ? (
                        <p className="skills shadow"> {data.notes[1]} </p>
                      ) : (
                        ""
                      )}
                      {data.notes[idx] ? (
                        <p className="skills shadow"> {data.notes[2]} </p>
                      ) : (
                        ""
                      )}
                      {data.notes[idx] ? (
                        <p className="skills shadow"> {data.notes[3]} </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="project-view">
                      <a className="view" target="_blank" href={data.git}>
                        Code <GitHubIcon />
                      </a>
                      <a className="view" target="_blank" href={data.deployed}>
                        Live Demo <OpenInNewRoundedIcon />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="row project-each shadow">
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
            </div>  */}
          </div>
        </section>

        {/* Resume */}
        <section id="resume">
          <h1 className="resume-heading">Resume</h1>
          <div className="resume-main">
            <div className="resume-icons">
              <Button variant="outlined">
                <a
                  href="https://drive.google.com/file/d/1Qt-SRiI4ZUHdtWGP-76czeGH73U5tPF7/view?usp=sharing"
                  target="_blank"
                >
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

        {/* Contact */}
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
