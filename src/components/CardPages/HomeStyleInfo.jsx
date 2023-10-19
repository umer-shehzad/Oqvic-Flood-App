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
                gap-lg-3 gap-md-3 gap-sm-1 gap-1">
                    <div className="col-md-2 col-sm-4 col-4">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.styleOfHome === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent gap-4'>
                                <img src={QuadplexImage} alt='QuadplexImage' 
                                className='pt-4 mw-100 mh-100' />
                                Quadplex
                            </span>
                        </label>
                    </div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Condo/ Townhouse"
                                checked={formData.styleOfHome === 'Condo/ Townhouse'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={CondoImage} alt='CondoImage'
                                className='pt-3 mw-100 mh-100' />
                                Condo/ Townhouse
                            </span>
                        </label>
                    </div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non Residential"
                                checked={formData.styleOfHome === 'Non Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent gap-2'>
                                <img src={NonResidentialImage} alt='NonResidentialImage' 
                                className='pt-2 mw-100 mh-100' />
                                Non<br />Residential
                            </span>
                        </label>
                    </div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Non- Other Residential"
                                checked={formData.styleOfHome === 'Non- Other Residential'}
                                onChange={(e) => setFormData({ ...formData, styleOfHome: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={NonOtherResidentialImage} alt='NonOtherResidentialImage' 
                                className='pt-3 mt-1 mw-100 mh-100' />
                                Non-Other Residential
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeStyleInfo
