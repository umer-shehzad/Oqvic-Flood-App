import React from 'react'
import { Card, Form } from 'react-bootstrap';

// images paths
import SingleHomeImage from '../../assets/single-home.png';
import DuplexImage from '../../assets/duplex.png';
import TriplexImage from '../../assets/triplex.png';
import QuadplexImage from '../../assets/quadplex.png';

const ConstructionTypeInfo = ({ formData, setFormData }) => {
    return (
        <>
            <Card.Body className='pb-0'>
                <Card.Title className='cardTitle mt-3' >Construction Type</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Select the construction style of the property</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div
                    className="row justify-content-center 
                    mt-2 mt-lg-4 mt-md-4 mt-sm-0 mb-sm-0 mb-0
                    gap-lg-3 gap-md-3 gap-sm-1 gap-1
                    "
                >
                    <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family Home"
                                checked={formData.constructionType === 'Single Family Home'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={SingleHomeImage} alt='SingleHomeImage' 
                                className='mw-100 mh-100 pt-2' />
                                Single Family Home
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Duplex"
                                checked={formData.constructionType === 'Duplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={DuplexImage} alt='DuplexImage' 
                                className='mw-100 mh-100 pt-4' />
                                Duplex
                                </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Triplex"
                                checked={formData.constructionType === 'Triplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={TriplexImage} alt='TriplexImage' 
                                className=' mw-100 mh-100 pt-3' />
                                Triplex
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.constructionType === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent gap-3'>
                                <img src={QuadplexImage} alt='QuadplexImage' 
                                className=' mw-100 mh-100 pt-4' />
                                Quadplex
                            </span>
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ConstructionTypeInfo
