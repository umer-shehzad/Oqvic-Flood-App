import React from 'react';

// import icons
// import RadioIcon from '../../../icon/FloodIcons/RadioIcon';

const FloodInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <p className='para-page6 d-flex justify-content-center para1-page7 mb-4'>Flood loss w/in 5 years or repetitive loss?</p>
            <div className="row d-flex justify-content-center row-gap-custom">
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            id='Red'
                            type="radio"
                            name="radio"
                            value="Yes, it is"
                            className='input-page6'
                            checked={formData.floodLoss === 'Yes, it is'}
                            onChange={(e) => setFormData({ ...formData, floodLoss: e.target.value })}
                        />
                        <span className='span-page6 ps-5'>Yes, it is </span>
                    </label>
                </div>
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio"
                            value="No, it is"
                            className='input-page6'
                            checked={formData.floodLoss === 'No, it is'}
                            onChange={(e) => setFormData({ ...formData, floodLoss: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> No, it is </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center para2-page7 mb-4'>Number of Floors above ground?</p>

            <div className="row d-flex justify-content-center">
                <input
                    type="number"
                    name="radio"
                    value={formData.noOfFloors}
                    className='input-number-page7'
                    onChange={(e) => setFormData({ ...formData, noOfFloors: e.target.value })}
                />
            </div>
        </div>
    )
}

export default FloodInfo
