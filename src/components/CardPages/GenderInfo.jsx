import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

// images paths 
import MrImage from '../../assets/mr.png';
import MrsImage from '../../assets/mrs.png';
import MissImage from '../../assets/miss.png';

const GenderInfo = ({ formData, setFormData, emptyField }) => {
    return (
        <>
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title className='cardTitle mt-3'>Welcome!</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Let’s begin with your name</Card.Subtitle>
            </Card.Body>
            <div className='gender'>
                <div className="row genderRow row-gap-custom align-items-baseline justify-content-center">
                    <div class="col-sm-6 col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mr."
                                checked={formData.genderType === 'Mr.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent '>
                                <img src={MrImage} alt='MrImage' className='genderImageMargin' />
                                Mr.
                            </span>
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mrs."
                                checked={formData.genderType === 'Mrs.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent'>
                                <img src={MrsImage} alt='MrsImage' className='genderImageMargin' />
                                Mrs.</span>
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-2">
                        <label class="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Miss."
                                checked={formData.genderType === 'Miss.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent'>
                                <img src={MissImage} alt='MissImage' className='genderImageMargin' />
                                Miss.
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <input
                    type='text'
                    placeholder='Full name'
                    onChange={(e) => setFormData({ ...formData, genderFullName: e.target.value })}
                    className='fullName mb-2'
                    required
                />
                <div className='error-full-name'>
                    {
                        (emptyField && !formData.genderFullName)
                            ? (<span>Please! enter valid name</span>)
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default GenderInfo