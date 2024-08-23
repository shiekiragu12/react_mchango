import React, { useState } from 'react'
import '../assets/scss/Login.scss'
import { Col, Container, Form, FormControl, Row, Button,Image } from 'react-bootstrap'
import LoginImage from '../assets/images/login-pana.png'

function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  })
  return (
    <div className='login'>
      <Container fluid >
        <Row>
          <Col md={6} className='sideDisplayData'>
            <div className='welcomeContent'>
              <h1 className='welcome'>Welcome</h1>
              <p className='subheading'>Welcome back! Ready to make a difference? Our platform is here to help you easily manage fundraising for life's important moments, from weddings to business ventures. With seamless mobile payments and instant receipts, everything is simple, transparent, and right at your fingertips no extra apps needed.
              </p>
            </div>
          </Col>

          <Col md={6} className='formLogin'>
            <Form className='loginFormDisplay'>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <FormControl
                  type='email'
                  value={formdata.email}
                  onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <FormControl
                  type='password'
                  value={formdata.password}
                  onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            
              <p className='account'>Don't have an account? <a href='#' className='sign-up'>Sign Up</a></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Login
