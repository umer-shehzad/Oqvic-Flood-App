import React, { useState } from 'react'

// import icons
import HorizontalRedLineIcon from '../Icon/HorizontalLineRedIcon';


const BuildingGeneralInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center'>
                <p className='para1-page8 mt-4 mb-2'>Building Construction Year</p>

                <div className="div-page8 justify-content-start w-50">
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        className='input-border mx-2 w-100 ps-lg-5 ps-md-4 ps-sm-3 ps-2'
                        placeholder='Enter construction year'
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    />
                </div>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <p className='para1-page8 mt-4 mb-2 me-4 pe-1'>Building Square Footage</p>

                <div className="div-page8 w-50">
                    <input
                        type="number"
                        name="sqfoot"
                        value={formData.sqFoot}
                        className='input-border mx-2 w-100 ps-lg-5 ps-md-4 ps-sm-3 ps-2'
                        placeholder='Enter sq'
                        onChange={(e) => setFormData({ ...formData, sqFoot: e.target.value })}
                    />
                    <span className='pe-3'><HorizontalRedLineIcon /></span>
                    <span className='pe-3 span-custom-style'>sq/ft</span>
                </div>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <p className='para1-page8 mt-4 mb-2'>Building Replacement Cost</p>

                <div className="div-page8 w-50">
                    <span className='ps-3 span-custom-style'>$</span>
                    <span className='ps-3'><HorizontalRedLineIcon /></span>
                    <input
                        type="number"
                        name="builCOst"
                        value={formData.buildCost}
                        className='input-border mx-2 w-75 ps-lg-3 ps-md-3 ps-sm-2'
                        placeholder='Enter cost'
                        onChange={(e) => setFormData({ ...formData, buildCost: e.target.value })}
                    />
                    <span className='pe-3 pe-lg-4 pe-md-4 pe-sm-3'><HorizontalRedLineIcon /></span>
                    <span className='pe-3 span-custom-style'>.00</span>
                </div>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <p className='para1-page8 mt-4 mb-2'>Contents Replacement Cost</p>


                <div className="div-page8 w-50">
                    <span className='ps-3 span-custom-style'>$</span>
                    <span className='ps-3'><HorizontalRedLineIcon /></span>
                    <input
                        type="number"
                        name="contentCost"
                        value={formData.contentCost}
                        className='input-border mx-2 w-75 ps-lg-3 ps-md-3 ps-sm-2'
                        placeholder='Enter cost'
                        onChange={(e) => setFormData({ ...formData, contentCost: e.target.value })}
                    />
                    <span className='pe-3 pe-lg-4 pe-md-4 pe-sm-3'><HorizontalRedLineIcon /></span>
                    <span className='pe-3 span-custom-style '>.00</span>
                </div>
            </div>
        </div>
    )
}

export default BuildingGeneralInfo
