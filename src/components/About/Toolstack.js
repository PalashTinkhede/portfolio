import React from "react";
import { Col, Row } from "react-bootstrap";
import 'tailwindcss/tailwind.css';
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
    </Row>
  );
}

export default Toolstack;
