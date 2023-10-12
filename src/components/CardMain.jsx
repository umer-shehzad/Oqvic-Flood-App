import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import LeftRightBtn from './LeftRightBtn';

// import Card Pages
import GenderInfo from './CardPages/GenderInfo';
import AddressMapInfo from './CardPages/AddressMapInfo';
import ConstructionTypeInfo from './CardPages/ConstructionTypeInfo';
import OccupancyTypeInfo from './CardPages/OccupancyTypeInfo';
import HomeStyleInfo from './CardPages/HomeStyleInfo';
import BuildingInfo from './CardPages/BuildingInfo';
import FloodInfo from './CardPages/FloodInfo';
import BuildingGeneralInfo from './CardPages/BuildingGeneralInfo';
import PhoneBusinessMailInfo from './CardPages/PhoneBusinessMailInfo';

const CardMain = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [emptyField, setEmptyField] = useState(false);

    // Calculate the width dynamically based on currentPage
    const progressBarWidth = ((currentPage + 1) / 9) * 100 + '%';

    const [formData, setFormData] = useState({
        genderType: "Mr.",
        genderFullName: "",
        address: "",
        unit: null,
        constructionType: "Single Family Home",
        occupancyType: "Single Family",
        styleOfHome: "Quadplex",
        buildingOverWater: "Yes",
        buildingUnderConstruction: "",
        primaryResidence: "",
        floodLoss: "Yes, it is",
        noOfFloors: null,
        year: null,
        sqFoot: null,
        buildCost: null,
        contentCost: null,
        phoneNo: null,
        businessName: "",
        mailAddress1: "",
        mailAddress2: "",
    });

    // function for display Card Pages againt page number
    const PageDisplay = (emptyField) => {
        if (currentPage === 0) {
            return <GenderInfo formData={formData} setFormData={setFormData} emptyField={emptyField} />
        } 
        else if (currentPage === 1) {
            return <AddressMapInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 2) {
            return <ConstructionTypeInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 3) {
            return <OccupancyTypeInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 4) {
            return <HomeStyleInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 5) {
            return <BuildingInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 6) {
            return <FloodInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 7) {
            return <BuildingGeneralInfo formData={formData} setFormData={setFormData} />
        }
        else if (currentPage === 8) {
            return <PhoneBusinessMailInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        // <Card className='cardStyle mx-auto mt-5 w-75 h-75 overflow-auto'>
        <Card className='cardStyle mx-auto mt-5 w-75 h-75'>
            <div>
                {PageDisplay(emptyField)}
            </div>
            <LeftRightBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                formData={formData}
                setEmptyField={setEmptyField}
            />
            <div
                className="fillingProgressBar"
                style={{ width: progressBarWidth }}
            />
        </Card>
    )
}

export default CardMain
