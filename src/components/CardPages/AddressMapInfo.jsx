import React, { useState } from 'react';

// import icons
import SearchIcon from '../Icon/SearchIcon';
import HorizontalLineIcon from '../Icon/HorizontalLineIcon';

// images path
import MapImage from '../../assets/map.png';

const AddressMapInfo = ({ formData, setFormData }) => {

  return (
    <div className='d-flex flex-column'>
      <p className='heading-p-page2'>Great to meet you
        <span className='heading-span-page2'> {formData.genderFullName} </span>
        What’s your property address?</p>

      <div className="form-div mt-4">
        <div className='d-flex mb-2 justify-content-between'>
          <span className='span1-page2 ms-lg-4 ms-md-3 ms-sm-2 ms-2'>Property Address</span>
          <span className='span2-page2 span1-page2'>Unit #</span>
        </div>
        <div className='input-div-page2 d-flex align-items-center ms-lg-4 ms-md-3 ms-sm-2 ms-2 mw-100'>
          <div className="ms-2"><SearchIcon /></div>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Enter address of home you want to insure"
            className="input1-page2 h-75 ms-2 ps-3 border-0"
            required
          />
          <div className="horizontal-line-pos ms-2"><HorizontalLineIcon /></div>
          <input
            type="number"
            id="unitNumber"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            placeholder="Unit"
            className="input2-page2 h-75 border-0"
            required
          />
        </div>
      </div>
      <div className='map-image'>
        <img src={MapImage} alt='MapImage' width='95%' height="200" />
      </div>
    </div>
  )
}

export default AddressMapInfo
