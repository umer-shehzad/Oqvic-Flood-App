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
            <Card.Body className=''>
                <Card.Title className='cardTitle mt-3' >Construction Type</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Select the construction style of the property</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div
                    className="row justify-content-center
                    mt-2 mt-lg-4 mt-md-4 mt-sm-4 mb-sm-3 mb-3
                    gap-lg-3 gap-md-3 gap-sm-3
                    
                    "
                >
                    <div class="col-lg-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family Home"
                                checked={formData.constructionType === 'Single Family Home'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={SingleHomeImage} alt='SingleHomeImage' 
                                className='pt-4 w-auto h-auto' />
                                Single Family Home
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Duplex"
                                checked={formData.constructionType === 'Duplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-4'>
                                <img src={DuplexImage} alt='DuplexImage' 
                                className='pt-4 pb-2 w-auto h-auto' />
                                Duplex
                                </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Triplex"
                                checked={formData.constructionType === 'Triplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4'>
                                <img src={TriplexImage} alt='TriplexImage' 
                                className='pt-4 pb-4 w-auto h-auto' />
                                Triplex
                            </span>
                        </label>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-5">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.constructionType === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='homeContent mx-auto pb-4 gap-2'>
                                <img src={QuadplexImage} alt='QuadplexImage' 
                                className='pt-4 pb-4 w-auto h-auto' />
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
