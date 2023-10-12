import React from 'react';
import HomeForm from '../components/HomeForm'

//Images
import FloodHomeImage from '../assets/home-image.png'

const FloodHome = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col px-0 d-none d-lg-flex'>
          <div>
            <img src={FloodHomeImage} alt='flood-home-image' width="100%" height="100%" />
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center justify-content-lg-center">
          <p className='text1 mb-1'>Who will be insure</p>
          <p className='text2 mb-0'>Save more by using OQVIC to insure</p>
          <HomeForm />
        </div>
      </div>
    </div>
  )
}

export default FloodHome
