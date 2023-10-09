import React from 'react'

const BuildingInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <p className='para-page6 d-flex justify-content-center'>Is the building over water?</p>

            <div className="row d-flex justify-content-center row-gap-custom">
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio1"
                            value="Yes"
                            className='input-page6'
                            checked={formData.buildingOverWater === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, buildingOverWater: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> Yes </span>
                    </label>
                </div>
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio1"
                            value="No"
                            className='input-page6'
                            checked={formData.buildingOverWater === 'No'}
                            onChange={(e) => setFormData({ ...formData, buildingOverWater: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> No </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center'>Is the building under construction?</p>

            <div className="row d-flex justify-content-center row-gap-custom">
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio2"
                            value="Yes"
                            className='input-page6'
                            checked={formData.buildingUnderConstruction === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, buildingUnderConstruction: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> Yes </span>
                    </label>
                </div>
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio2"
                            value="No"
                            className='input-page6'
                            checked={formData.buildingUnderConstruction === 'No'}
                            onChange={(e) => setFormData({ ...formData, buildingUnderConstruction: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> No </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center'>Is this your primary residnece?</p>

            <div className="row d-flex justify-content-center row-gap-custom">
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio3"
                            value="Yes"
                            className='input-page6'
                            checked={formData.primaryResidence === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, primaryResidence: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> Yes </span>
                    </label>
                </div>
                <div class="col-md-3">
                    <label class="radio radio-page6">
                        <input
                            type="radio"
                            name="radio3"
                            value="No"
                            className='input-page6'
                            checked={formData.primaryResidence === 'No'}
                            onChange={(e) => setFormData({ ...formData, primaryResidence: e.target.value })}
                        />
                        <span className='span-page6 ps-5'> No </span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default BuildingInfo