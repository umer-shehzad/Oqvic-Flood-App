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
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title className='cardTitle p1-page3 mt-3'>Construction Type</Card.Title>
                <Card.Subtitle className="cardSubTitle p2-page3 mt-2">Select the construction style of the property</Card.Subtitle>
            </Card.Body>
            <div className='construction-type'>
                <div className="row row-gap-custom justify-content-center">
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Single Family Home"
                                checked={formData.constructionType === 'Single Family Home'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={SingleHomeImage} alt='SingleHomeImage' className='singleHomeImageMargin' />
                                Single Family Home
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Duplex"
                                checked={formData.constructionType === 'Duplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={DuplexImage} alt='DuplexImage' className='duplexImageMargin' />
                                Duplex</span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Triplex"
                                checked={formData.constructionType === 'Triplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={TriplexImage} alt='TriplexImage' className='triplexImageMargin' />
                                Triplex
                            </span>
                        </label>
                    </div>
                    <div class="col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Quadplex"
                                checked={formData.constructionType === 'Quadplex'}
                                onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
                            />
                            <span className='construction-span homeContent '>
                                <img src={QuadplexImage} alt='QuadplexImage' className='quadplexImageMargin' />
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
