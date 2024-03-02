import React from 'react'
import '../css/Flip.module.css'
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';


export default function Flip() {
  return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav varient="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                    <Nav.Item>
                        <Nav.Link eventKey="first">React JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="section">React Native</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content id='slideInUp'>
                    <Tab.Pane eventKey="first" >
                        <Row>
                            <Login/>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <Row  className='align-items-center' >
                            <SignUp/>
                    </Row>
                    </Tab.Pane>

                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        </section>
  )
}
