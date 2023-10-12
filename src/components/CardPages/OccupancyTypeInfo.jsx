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
            <Card.Body className=''>
                <Card.Title className='cardTitle mt-3'>Occupancy Type</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Select the occupancy type of the property</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div className="row justify-content-center
                    mt-2 mt-lg-4 mt-md-4 mt-sm-4 mb-sm-3 mb-3
                    gap-lg-3 gap-md-3 gap-sm-3">
                    <div class="col-md-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family"
                                checked={formData.occupancyType === 'Single Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={SingleHomeImage} alt='SingleHomeImage' className='pt-4 w-auto h-auto' />
                                Single Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mobile Home"
                                checked={formData.occupancyType === 'Mobile Home'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 pt-3 gap-4'>
                                <img src={MobileHomeImage} alt='DuplexImage' className='pt-2 w-auto h-auto' />
                                Mobile Home</span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="2-4 Family"
                                checked={formData.occupancyType === '2-4 Family'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={TriplexImage} alt='TriplexImage' className='pt-4 w-auto h-auto' />
                                2-4 Family
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Other Residential"
                                checked={formData.occupancyType === 'Other Residential'}
                                onChange={(e) => setFormData({ ...formData, occupancyType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 pt-3 gap-4'>
                                <img src={QuadplexImage} alt='QuadplexImage' className='pt-4 w-auto h-auto' />
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
