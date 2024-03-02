import React from 'react'
import styles from '../css/SignUp.module.css'
import { Container, Row, Col, Nav, Tab, Tabs } from 'react-bootstrap'
import image from '../images/Group 15.png'
import Form from './Form';
import Bmw from '../component/Bmw';
import Login from './Login';

export default function SignUp() {
  return (
    <div className={styles.bg}>
      <Container fluid>
        <Row className={styles.back}>
          <Col md="4" className={styles.pen}>
            <img src={image} alt="no image" />
          </Col>
          <Col md="2" className={styles.btn}>
            <button className={styles.btn2}>Home</button>
          </Col>
          <Col md="2" className={styles.btn}>
            <button className={styles.btn2}>Join</button>
          </Col>
        </Row>
        <Row className="project" id="projects">
          <Col size={12} className={styles.width}>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav varient="pills" className="nav-pills mx-5" id="pills-tab">
                <Nav.Item>
                  <Nav.Link className={styles.hello} eventKey="first">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.hello} eventKey="section">
                    Log In
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col>
                      <Form />
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <Row>
                    <Col>
                      <Login />
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        {/* <Row className={styles.dome}> */}

        {/* <Col className={styles.gg}>
            <Tabs className={styles.line} defaultActiveKey="Signup">
              <Tab eventKey="Signup" title="Signup" className={styles.jj}>
                <Form/>
              </Tab>
              <Tab eventKey="Login" title="Login" className={styles.jj}>
                <Login />
              </Tab>
            </Tabs>
          </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  );
}
