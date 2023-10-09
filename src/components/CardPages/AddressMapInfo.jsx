import React, { useState } from 'react';

// import icons
import SearchIcon from '../Icon/SearchIcon';
import HorizontalLineIcon from '../Icon/HorizontalLineIcon';

// images path
import MapImage from '../../assets/map.png';

const AddressMapInfo = ({ formData, setFormData }) => {

  return (
    <div className='d-flex flex-column align-items-center'>
      <p className='heading-p-page2'>Great to meet you
        <span className='heading-span-page2'> {formData.genderFullName} </span>
        What’s your property address?</p>

      <div className="form-div">
        <div className='text-div-page2'>
          <span className='span1-page2'>Property Address</span>
          <span className='span2-page2'>Unit #</span>
        </div>
        <div className='input-div-page2'>
          <div className="searchIcon"><SearchIcon /></div>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Enter address of home you want to insure"
            className="input1-page2"
            required
          />
          <div className="horizontal-line"><HorizontalLineIcon /></div>
          <input
            type="number"
            id="unitNumber"
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            placeholder="Unit"
            className="input2-page2"
            required
          />
        </div>
      </div>
      <div className='map-image'>
        <img src={MapImage} alt='MapImage' width='830' height='170' />
      </div>
    </div>
  )
}

export default AddressMapInfo
