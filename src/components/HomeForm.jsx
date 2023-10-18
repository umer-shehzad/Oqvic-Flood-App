import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import icons
import BusinessIcon from '../components/Icon/BusinessIcon';
import HomeBtnIcon from '../components/Icon/HomeBtnIcon';
import UserIcon from '../components/Icon/UserIcon';

const HomeForm = () => {
  const [selectedRadio, setSelectedRadio] = useState('Individual');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the selectedRadio and email values here
    console.log('Selected Radio:', selectedRadio);
    console.log('Email:', email);

    // convert email and selectedRadio into object
    const data = {
      'selectedRadio': selectedRadio,
      'email': email
    }
    // set data to localStorage before navigation
    localStorage.setItem('user-email', JSON.stringify(data));
    localStorage.setItem('page-no', JSON.stringify(1));
    // let pageNo = localStorage.getItem('page-no');
    
    // Navigate to the info page for getting more info
    navigate('/flood-info');
    
  };
  
  return (
    <Form className='formStyle' onSubmit={handleSubmit}>
      <div className="row">
        <div class="col-5 col-lg-5 col-md-4 col-sm-4">
          <label class="radio">
            <input 
              type="radio" 
              name="radio" 
              value="Individual" 
              checked = {selectedRadio === 'Individual'}
              onChange={(e) => {setSelectedRadio(e.target.value)}}
            />
            <span><UserIcon/>Individual</span>
          </label>
        </div>
        <div class="col-5 col-lg-5 col-md-4 col-sm-4">
          <label class="radio">
            <input 
              type="radio" 
              name="radio" 
              value="Business"
              checked = {selectedRadio === 'Business'}
              onChange={(e) => {setSelectedRadio(e.target.value)}}
            />
            <span><BusinessIcon />Business</span>
          </label>
        </div>
      </div>

      <Form.Group className="mb-4 mt-3 col-10 col-lg-10 col-md-8 col-sm-8" controlId="email">
        <Form.Control 
          className='emailStyle' 
          type="email" 
          placeholder="Email"
          onChange={(e) => {setEmail(e.target.value)}}
          required
        />
      </Form.Group>

      <Button type="submit" className='home-btn'>      
        <span className='home-btn-text'><HomeBtnIcon />Start Quote</span>
      </Button>
    </Form>
  )
}

export default HomeForm
