import React from 'react'
import { Card, Form } from 'react-bootstrap';

// images paths
import SingleHomeImage from '../../assets/single-home.png';
import MobileHomeImage from '../../assets/mobile-home.png';
import TriplexImage from '../../assets/triplex.png';
import QuadplexImage from '../../assets/quadplex.png';

const OccupancyTypeInfo = ({ formData, setFormData }) => {
    return (
        <>
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title className='cardTitle p1-page3 mt-3'>Occupancy Type</Card.Title>
                <Card.Subtitle className="cardSubTitle p2-page3 mt-2">Select the occupancy type of the property</Card.Subtitle>
            </Card.Body>
            <div className='construction-type'>
                <div className="row row-gap-custom justify-content-center">
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family"
                                checked={formData.occupancyType === 'Single Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={SingleHomeImage} alt='SingleHomeImage' className='singleFamilyImageMargin' />
                                Single Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mobile Home"
                                checked={formData.occupancyType === 'Mobile Home'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={MobileHomeImage} alt='DuplexImage' className='mobileHomeImageMargin' />
                                Mobile Home</span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="2-4 Family"
                                checked={formData.occupancyType === '2-4 Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={TriplexImage} alt='TriplexImage' className='triplexImageMargin' />
                                2-4 Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Other Residential"
                                checked={formData.occupancyType === 'Other Residential'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={QuadplexImage} alt='QuadplexImage' className='quadplexImageMargin' />
                                Other Residential
                            </span>
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OccupancyTypeInfo
