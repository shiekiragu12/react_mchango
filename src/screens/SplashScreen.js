import React from 'react'
import '../assets/scss/SplashScreen.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SplashScreen() {
    return (
        <div className='splashscreen'>
            <Container>
                <Row>
                    <Col md={6} className='formDisplay'>
                        <h2></h2>
                    </Col>
                    <Col md={6} className='welcomeContent'>
                        <h2>Welcome to Our Fundraiser</h2>
                        <p>
                            Our platform simplifies fundraising for major life events like weddings, funerals, and business ventures. With easy mobile money payments and downloadable receipts, it's user-friendly and transparent, ensuring trust and collaboration without the need for additional apps
                        </p>

                        <Link to='login'>
                            <Button className='loginBtn'>Login</Button>
                        </Link>

                        <Link to='register'>
                            <Button className='loginBtn'>Register</Button>
                        </Link>



                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default SplashScreen
