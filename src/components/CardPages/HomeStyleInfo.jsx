import React from 'react'
import { Card, Form } from 'react-bootstrap';

// images paths
import CondoImage from '../../assets/condo.png';
import NonResidentialImage from '../../assets/non-residential.png';
import NonOtherResidentialImage from '../../assets/non-other-residential.png';
import QuadplexImage from '../../assets/quadplex.png';

const HomeStyleInfo = ({ formData, setFormData }) => {
    return (
        <>
            <Card.Body className='pb-0'>
                <Card.Title className='cardTitle mt-3'>Style of Home</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Select the style of your home</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div className="row justify-content-center
                mt-2 mt-lg-4 mt-md-4 mt-sm-0 mb-sm-0 mb-0
                gap-lg-3 gap-md-3 gap-sm-2 gap-2">
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.styleOfHome === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 pt-3 gap-4'>
                                <img src={QuadplexImage} alt='QuadplexImage' className='pt-4 w-auto h-auto' />
                                Quadplex
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Condo/ Townhouse"
                                checked={formData.styleOfHome === 'Condo/ Townhouse'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={CondoImage} alt='CondoImage' className='pt-4 w-auto h-auto' />
                                Condo/ Townhouse
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non Residential"
                                checked={formData.styleOfHome === 'Non Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-3'>
                                <img src={NonResidentialImage} alt='NonResidentialImage' className='pt-3 w-auto h-auto' />
                                Non<br />Residential
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non- Other Residential"
                                checked={formData.styleOfHome === 'Non- Other Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={NonOtherResidentialImage} alt='NonOtherResidentialImage' 
                                className='pt-4 w-auto h-auto' />
                                Non- Other Residential
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeStyleInfo
