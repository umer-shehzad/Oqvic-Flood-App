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
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title className='cardTitle p1-page3 mt-3'>Style of Home</Card.Title>
                <Card.Subtitle className="cardSubTitle p2-page3 mt-2">Select the style of your home</Card.Subtitle>
            </Card.Body>
            <div className='construction-type'>
                <div className="row row-gap-custom justify-content-center">
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.styleOfHome === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={QuadplexImage} alt='QuadplexImage' className='quadplexImageMargin' />
                                Quadplex
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Condo/ Townhouse"
                                checked={formData.styleOfHome === 'Condo/ Townhouse'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={CondoImage} alt='CondoImage' className='singleHomeImageMargin' />
                                Condo/ Townhouse
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non Residential"
                                checked={formData.styleOfHome === 'Non Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={NonResidentialImage} alt='NonResidentialImage' className='nonImageMargin' />
                                Non<br />Residential
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non- Other Residential"
                                checked={formData.styleOfHome === 'Non- Other Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={NonOtherResidentialImage} alt='NonOtherResidentialImage' className='singleHomeImageMargin' />
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
