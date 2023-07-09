import { Box } from "@chakra-ui/react";
import React from "react";
import { UploadImages } from "../Forms/UploadImages";
import { ItemDetails } from "../Forms/ItemDetails";
import { ApartmentFeatures } from "../Forms/ApartmentFeatures";
import { AmenitiesSelection } from "../Forms/AmenitiesSelection";
import { PrimaryButton } from "./Buttons";

const BasicInfo = ({ handleCurrentStep }) => {
    return (
        <Box>
            <UploadImages />
            <ItemDetails />
            <ApartmentFeatures />
            <AmenitiesSelection />
            <Box mt="50px">
                <PrimaryButton
                    text="NEXT"
                    onClick={() => handleCurrentStep(2)}
                />
            </Box>
        </Box>
    );
};

export default BasicInfo;
