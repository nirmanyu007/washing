import React from 'react'
import '../css/Main.css'
import { Col, Container, Row } from 'react-bootstrap';
import image from '../images/Group 9.png'
import img2 from '../images/Group 10.png'


export default function Main() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center hello3">
        <Col className="img" xs md lg="9">
          <img className="img2" src={image} alt="no image" />
        </Col>
        <Col className="text19" xs lg="3" md="3">
          <text className="text20">
            Your Car Deserve
            <br /> Better
            <br />
            <img src={img2} alt="no image" />
          </text>
        </Col>
      </Row>
      <Row className='row'>
        <Col>
          <button class="button">
            Schedule a wash
          </button>
        </Col>
        <Col>
          <button class="button">
            Buy a wash
          </button>
        </Col>
      </Row>
    </Container>
  );
}
