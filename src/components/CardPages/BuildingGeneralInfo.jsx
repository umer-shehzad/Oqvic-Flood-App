import React, { useState } from 'react'

// import icons
import HorizontalRedLineIcon from '../Icon/HorizontalLineRedIcon';


const BuildingGeneralInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center div-margin-top-page8'>
                <p className='para1-page8'>Building Construction Year</p>

                <div className="div-page8 justify-content-start">
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        className='input-border mx-2 w-100 px-5'
                        placeholder='Enter construction year'
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    />
                </div>
            </div>

            <div className='d-flex flex-column align-items-center div-margin-top-page8'>
                <p className='para1-page8 para-margin-right'>Building Square Footage</p>

                <div className="div-page8">
                    <input
                        type="number"
                        name="sqfoot"
                        value={formData.sqFoot}
                        className='input-border px-5'
                        placeholder='Enter sq'
                        onChange={(e) => setFormData({ ...formData, sqFoot: e.target.value })}
                    />
                    <span className='horizontal-red-rightline-page8'><HorizontalRedLineIcon /></span>
                    <span className='span-right-page8 span-custom-style'>sq/ft</span>
                </div>
            </div>

            <div className='d-flex flex-column align-items-center div-margin-top-page8'>
                <p className='para1-page8'>Building Replacement Cost</p>

                <div className="div-page8">
                    <span className='span-custom-style'>$</span>
                    <span className=''><HorizontalRedLineIcon /></span>
                    <input
                        type="number"
                        name="builCOst"
                        value={formData.buildCost}
                        className='input-border custom-width'
                        placeholder='Enter cost'
                        onChange={(e) => setFormData({ ...formData, buildCost: e.target.value })}
                    />
                    <span className=''><HorizontalRedLineIcon /></span>
                    <span className='span-custom-style number-custom-style'>.00</span>
                </div>
            </div>

            <div className='d-flex flex-column align-items-center div-margin-top-page8'>
                <p className='para1-page8'>Contents Replacement Cost</p>


                <div className="div-page8">
                    <span className='span-custom-style'>$</span>
                    <span className=''><HorizontalRedLineIcon /></span>
                    <input
                        type="number"
                        name="contentCost"
                        value={formData.contentCost}
                        className='input-border custom-width'
                        placeholder='Enter cost'
                        onChange={(e) => setFormData({ ...formData, contentCost: e.target.value })}
                    />
                    <span className=''><HorizontalRedLineIcon /></span>
                    <span className='span-custom-style number-custom-style'>.00</span>
                </div>
            </div>
        </div>
    )
}

export default BuildingGeneralInfo
