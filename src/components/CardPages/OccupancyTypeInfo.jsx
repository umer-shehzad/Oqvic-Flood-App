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
            <Card.Body className='pb-0'>
                <Card.Title className='cardTitle mt-3'>Occupancy Type</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Select the occupancy type of the property</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div className="row justify-content-center
                    mt-2 mt-lg-4 mt-md-4 mt-sm-0 mb-sm-0 mb-0
                    gap-lg-3 gap-md-3 gap-sm-1 gap-1">
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family"
                                checked={formData.occupancyType === 'Single Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={SingleHomeImage} alt='SingleHomeImage' 
                                className='pt-3 mw-100 mh-100' />
                                Single Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mobile Home"
                                checked={formData.occupancyType === 'Mobile Home'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={MobileHomeImage} alt='DuplexImage' 
                                className='pt-3 mw-100 mh-100' />
                                Mobile Home</span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="2-4 Family"
                                checked={formData.occupancyType === '2-4 Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={TriplexImage} alt='TriplexImage' 
                                className='pt-4 mw-100 mh-100' />
                                2-4 Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Other Residential"
                                checked={formData.occupancyType === 'Other Residential'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={QuadplexImage} alt='QuadplexImage' 
                                className='pt-4 mw-100 mh-100' />
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
