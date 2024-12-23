import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import chatBox from "./../../Assets/image.png";
import ecommerce from "./../../Assets/Screenshot 2024-12-23 162615.png";
import mul from "./../../Assets/Screenshot 2024-11-12 235406.png";
import gamezone from "./../../Assets/Screenshot 2024-11-12 235503.png";
import weather from "./../../Assets/Screenshot 2024-11-13 001730.png";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBox}
              isBlog={false}
              title="ChatBOX"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and MongoDB Atlas. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Palash-Tinkhede/chatbox_frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Website UI"
              description="An e-commerce website build in MERN stack , RestApi and Toastify. It is a dynamic userfriendly website which allows user to login, view product,  add product to cart and checkout and buy the product. It uses cookie , jwt for storing user and bcrypt to store password."
              ghLink="https://github.com/PalashTinkhede/E-commerce"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A sleek weather app with third-party API integration offering real-time updates, forecasts, and alerts. Features a user-friendly UI, location-based data, customizable themes, and cross-platform compatibility, ensuring accurate weather insights and a seamless experience for all users."
              ghLink="https://github.com/PalashTinkhede/weather_app"
              demoLink="https://weather-app-two-blush-21.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mul}
              isBlog={false}
              title="Mutal Funds Calculator"
              description="A mutual funds calculator built with ReactJS and Node calculates investment returns based on inputs like amount, duration, and rate of return. Deployed on Vercel, it provides real-time, user-friendly insights for investors on any device."
              ghLink="https://github.com/Palash-Tinkhede/mutalFundsCalculator"
              demoLink="https://mutalfundscalculator.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamezone}
              isBlog={false}
              title="GameZone"
              description="The GameZone project, developed in React and deployed on Vercel, offers an interactive platform for exploring and playing various games. With fast loading, responsive design, and smooth gameplay, it delivers an engaging user experience across devices."
              ghLink="https://github.com/PalashTinkhede/GameZone"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
