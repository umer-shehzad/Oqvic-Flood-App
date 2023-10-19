import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

// images paths 
import MrImage from '../../assets/mr.png';
import MrsImage from '../../assets/mrs.png';
import MissImage from '../../assets/miss.png';

const GenderInfo = ({ formData, setFormData, emptyField }) => {
    return (
        <>
            <Card.Body className=''>
                <Card.Title className='cardTitle mt-3'>Welcome!</Card.Title>
                <Card.Subtitle className="cardSubTitle mt-2">Let’s begin with your name</Card.Subtitle>
            </Card.Body>
            <div className=''>
                <div
                    className="row mt-4 mt-lg-4 mt-md-4 mt-sm-4 
                    align-items-baseline justify-content-center
                    gap-1 gap-lg-3 gap-md-3 gap-sm-3
                    "
                >
                    <div className="col-3 col-lg-2 col-md-3 col-sm-3">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mr."
                                checked={formData.genderType === 'Mr.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent mx-auto
                            w-auto h-auto  '>
                                <img src={MrImage} alt='MrImage'
                                    className='mt-1 mb-2 
                                mw-100 mh-100'
                                />
                                Mr.
                            </span>
                        </label>
                    </div>
                    <div className="col-3 col-lg-2 col-md-3 col-sm-3">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Mrs."
                                checked={formData.genderType === 'Mrs.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent mx-auto
                            w-auto h-auto'>
                                <img src={MrsImage} alt='MrsImage'
                                    className='mt-1 mb-2 
                                mw-100 mh-100'
                                />
                                Mrs.</span>
                        </label>
                    </div>
                    <div className="col-3 col-lg-2 col-md-3 col-sm-3">
                        <label className="radio">
                            <input
                                type="radio"
                                name="radio"
                                value="Miss."
                                checked={formData.genderType === 'Miss.'}
                                onChange={(e) => setFormData({ ...formData, genderType: e.target.value })}
                            />
                            <span className='genderSpan genderContent mx-auto
                            w-auto h-auto'>
                                <img src={MissImage} alt='MissImage'
                                    className='mt-1 mb-2 
                                mw-100 mh-100'
                                />
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
                    className='fullName mt-lg-5 mt-5 mt-md-5 mt-sm-5 '
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