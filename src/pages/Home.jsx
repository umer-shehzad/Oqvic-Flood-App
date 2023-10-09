import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeForm from '../components/HomeForm'

//Images
import FloodHomeImage from '../assets/home-image.png'

const FloodHome = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='px-0 d-none d-lg-flex'>
          <div>
            <img src={FloodHomeImage} alt='flood-home-image' width="100%" height="100%" />
          </div>

        </Col>
        <Col className='d-flex flex-column justify-content-lg-center justify-content-sm-between'>
          <p className='text1 mb-1'>Who will be insure</p>
          <p className='text2 mb-0'>Save more by using OQVIC to insure</p>
          <HomeForm />
        </Col>
      </Row>
    </Container>
  )
}

export default FloodHome
