import React from 'react';

// import icons
// import RadioIcon from '../../../icon/FloodIcons/RadioIcon';

const FloodInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <p className='para-page6 d-flex justify-content-center mt-5 mb-0'>Flood loss w/in 5 years or repetitive loss?</p>
            <div className="row d-flex justify-content-center
            mt-2 mt-lg-3 mt-md-3 mt-sm-3
            gap-lg-3 gap-md-3 gap-sm-3">
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            id='Red'
                            type="radio"
                            name="radio"
                            value="Yes, it is"
                            checked={formData.floodLoss === 'Yes, it is'}
                            onChange={(e) => setFormData({ ...formData, floodLoss: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-2 w-auto'>Yes, it is </span>
                    </label>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio"
                            value="No, it is"
                            checked={formData.floodLoss === 'No, it is'}
                            onChange={(e) => setFormData({ ...formData, floodLoss: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-2 w-auto'> No, it is </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center mb-4 mt-5'>Number of Floors above ground?</p>

            <div className=" d-flex justify-content-center">
                <input
                    type="number"
                    name="radio"
                    value={formData.noOfFloors}
                    className='input-number-page7 w-50'
                    required
                    onChange={(e) => setFormData({ ...formData, noOfFloors: e.target.value })}
                />
            </div>
        </div>
    )
}

export default FloodInfo
