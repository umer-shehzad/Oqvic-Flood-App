import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import Icon
import InfoBtnLeft from '../components/Icon/InfoBtnLeft';
import InfoBtnRight from '../components/Icon/InfoBtnRight';
import CheckIcon from '../components/Icon/CheckIcon';

const LeftRightBtn = ({ currentPage, setCurrentPage, formData, setEmptyField }) => {
    const navigate = useNavigate();

    return (
        <div className='mx-auto my-auto d-flex gap-3'>
            {currentPage !== 0 &&
                <span>
                    <Button
                        className="w-100 h-100 rounded-circle info-btn-common "
                        type='submit'
                        onClick={() => { setCurrentPage(currPage => currPage - 1) }}
                    >
                        <InfoBtnLeft />
                    </Button>
                </span>}
            <span className=''>
                <Button
                    className="w-100 h-100 rounded-circle info-btn-common "
                    type='submit'
                    onClick={() => {
                        if (currentPage === 8) {
                            alert('You have successfuly submitted your answers');
                            navigate('/');
                            console.log(formData);
                        } else {
                            // setCurrentPage(currPage => currPage + 1)
                            if (formData.genderFullName.length === 0 || formData.genderFullName === '') {
                                setEmptyField(true);
                                // console.log('else', emptyField);
                            } else {
                                if (!isNaN(formData.genderFullName)) {
                                    setEmptyField(true);
                                } else {
                                    // setEmptyField(false);
                                    setCurrentPage(currPage => currPage + 1)
                                }

                                // console.log('if', emptyField);
                            }
                        }
                    }
                    }
                >
                    {currentPage === 8 ? <CheckIcon /> : <InfoBtnRight />}
                </Button>
            </span>
        </div>
    )
}

export default LeftRightBtn
