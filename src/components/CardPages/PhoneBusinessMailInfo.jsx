import React from 'react'

const PhoneBusinessMailInfo = ({ formData, setFormData }) => {
    return (
        <>
            <div className='d-flex flex-column align-items-center text-style'>
                <p className='para1-page9 mt-3 mb-1 me-4'>Lastly, please confrim the following.</p>

                <label className='label-page9 me-4 mb-2'>Your phone number</label>
                <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNo}
                    className='input-page9 me-4'
                    placeholder='Phone number'
                    onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                />

                <p className='para2-page9 mt-2 mb-2 me-4'>*we will use phone number to verify important information regarding property.</p>
                <p className='para3-page9 me-4 mb-1'>If the owner of this property is a Business (LLC, Trust, or similar), please enter the Business Name below. This is the name that will appear as the Named Insured on the policy.</p>

                <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    className='input-page9 me-4 mb-2'
                    placeholder='Business Name'
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />

                <hr className='h-line-page9 my-1 w-75' />


                <label className='label-page9 my-2 me-4'>Your mailing address</label>
                <input
                    type="text"
                    name="mailingAddress"
                    value={formData.mailAddress1}
                    className='input-page9 me-4 mb-2'
                    placeholder='Mortgage Holder address line 1'
                    onChange={(e) => setFormData({ ...formData, mailAddress1: e.target.value })}
                />
                <input
                    type="text"
                    name="mailingAddress"
                    value={formData.mailAddress2}
                    className='input-page9 me-4 mb-2'
                    placeholder='Mortgage Holder address line 2(optional)'
                    onChange={(e) => setFormData({ ...formData, mailAddress2: e.target.value })}
                />
                <p className='para4-page9 me-4 mb-2'>You will receive your quote once you click submit. If we need more information to provide you with a quote, we'll be in touch.</p>
            </div>
        </>
    )
}

export default PhoneBusinessMailInfo
