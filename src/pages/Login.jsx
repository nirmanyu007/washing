import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styles from '../css/Login.module.css'
import google from '../images/google1.png'
import meta from '../images/meta.png'
import bubble from '../images/bubble.png'

export default function Login() {
  return (
    <Col className={styles.bg} md="3">
      <Row className={styles.align}>
        <Col className={styles.text}>Fill Details</Col>
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
        <Col className={styles.border4}>
          <button className={styles.border2}>Login</button>
        </Col>
      </Row>
      <Row className={styles.border5}>
        <hr className={styles.lne} />
      </Row>
      <Row className={styles.border6}>
        <Col>
          <img src={google} alt="no image" />
        </Col>
        <Col>
          <img src={meta} alt="no image" />
        </Col>
        <Col>
          <img src={bubble} alt="no image" />
        </Col>
      </Row>
      <Row></Row>
    </Col>
  );
}
