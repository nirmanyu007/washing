import React from 'react'
import styles from '../css/Form.module.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function () {
  return (
    <Col className={styles.bg} md="3">
      <Row className={styles.align}>
        <Col className={styles.text}>Create New Account</Col>
      </Row>
      <Row className={styles.text6}>
        <Col>
          <input
            className={styles.border}
            type="text"
            placeholder="First Name"
            size={12}
          />
        </Col>
        <Col>
          <input
            className={styles.border}
            type="text"
            placeholder="Last name"
            size={12}
          />
        </Col>
      </Row>
      <Row className={styles.text2}>
        <Col>
          <input
            className={styles.border}
            type="email"
            placeholder="Email"
            size={40}
          />
        </Col>
      </Row>
      <Row className={styles.text2}>
        <Col>
          <input
            className={styles.border}
            type="password"
            placeholder="Password"
            size={40}
          />
        </Col>
      </Row>
      <Row className={styles.text3}>
        <Col>
          <button className={styles.border}>More Option</button>
        </Col>
        <Col className={styles.text5}>
          <button className={styles.border2}>Signup</button>
        </Col>
      </Row>
      
    </Col>
  );
}
