import React from 'react'

const BuildingInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <p className='para-page6 d-flex justify-content-center mb-0 mt-4'>Is the building over water?</p>

            <div className="row d-flex justify-content-center
            gap-lg-3 gap-md-3 gap-sm-3
            ">
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio1"
                            value="Yes"
                            className=''
                            checked={formData.buildingOverWater === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, buildingOverWater: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> Yes </span>
                    </label>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio1"
                            value="No"
                            className=''
                            checked={formData.buildingOverWater === 'No'}
                            onChange={(e) => setFormData({ ...formData, buildingOverWater: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> No </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center mb-0 mt-4'>Is the building under construction?</p>

            <div className="row d-flex justify-content-center
            gap-lg-3 gap-md-3 gap-sm-3">
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio2"
                            value="Yes"
                            className=''
                            checked={formData.buildingUnderConstruction === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, buildingUnderConstruction: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> Yes </span>
                    </label>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio2"
                            value="No"
                            className=''
                            checked={formData.buildingUnderConstruction === 'No'}
                            onChange={(e) => setFormData({ ...formData, buildingUnderConstruction: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> No </span>
                    </label>
                </div>
            </div>

            <p className='para-page6 d-flex justify-content-center mb-0 mt-4'>Is this your primary residnece?</p>

            <div className="row d-flex justify-content-center
            gap-lg-3 gap-md-3 gap-sm-3">
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio3"
                            value="Yes"
                            className=''
                            checked={formData.primaryResidence === 'Yes'}
                            onChange={(e) => setFormData({ ...formData, primaryResidence: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> Yes </span>
                    </label>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-4">
                    <label class="radio">
                        <input
                            type="radio"
                            name="radio3"
                            value="No"
                            className=''
                            checked={formData.primaryResidence === 'No'}
                            onChange={(e) => setFormData({ ...formData, primaryResidence: e.target.value })}
                        />
                        <span className='span-page6 ps-lg-5 ps-md-4 ps-sm-3 ps-3 w-auto'> No </span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default BuildingInfo