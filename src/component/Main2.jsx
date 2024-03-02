import React from "react";
import "../css/Main2.css";
import { Col, Container, Row } from "react-bootstrap";
import image from '../images/Vector.png'

export default function Main2() {
  return (
    <div className="bg">
      <Container fluid>
        <Row>
          <Col md="7" className="text3">
            <text className="color">We Deliver Shine</text>
            <br />
            <text className="color2">For Your Car</text>
          </Col>
          <Col className="color3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sunt repellendus facere commodi culpa dolorum magnam voluptatum
            libero odio explicabo.
          </Col>
        </Row>
        <Row>
          <hr className="color4" />
        </Row>
        <Row className="color5">
          <Col md="4" className="box">
            <div className="circle">
              <img src={image} alt="no image" />
            </div>
          </Col>
          <Col md="4" className="box">
            <div className="circle">
              <img src={image} alt="no image" />
            </div>
          </Col>
          <Col md="4" className="box">
            <div className="circle">
              <img src={image} alt="no image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    //     <Row className="color5">
    //       <Col md="4" className="box">
    //         <div className="circle">
    //           <img src={image} alt="no image" />
    //         </div>
    //       </Col>
    //       <Col md="4" className="box">
    //         <div className="circle">
    //           <img src={image} alt="no image" />
    //         </div>
    //       </Col>
    //       <Col md="4" className="box">
    //         <div className="circle">
    //           <img src={image} alt="no image" />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
  );
}
