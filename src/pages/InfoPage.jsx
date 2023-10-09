import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Nav from '../components/Nav';
import CardMain from '../components/CardMain';

const InfoPage = () => {
    return (
        <Container fluid>
            <Row>
                <Nav />
            </Row>
            <Row className='infoRow2'>
                <div className='infoMainText'>
                    <p className='infoP1'>Flood Insurance</p>
                    <p className='infoP2'>Insure your prized possession in few easy steps</p>
                    <CardMain />
                </div>
            </Row>
        </Container>
    )
}

export default InfoPage
