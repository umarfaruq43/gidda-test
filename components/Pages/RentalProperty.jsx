import SubmitPropertyLayout from "@/Layout/SubmitPropertyLayout";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { Gallery } from "iconsax-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
    InputBox,
    PropertyInputBox,
    SelectBox,
} from "../Common/InputComponents";
import { PrimaryButton } from "../Common/Buttons";
import TextAreaInputComponent from "../Common/TextAreaInputComponent";
import BasicInfo from "../Common/BasicInfo";
import Location from "../Forms/Location";
import PreviewProperty from "../Common/PreviewProperty";

const RentalProperty = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleCurrentStep = (step) => {
        setCurrentStep(step);
    };
    return (
        <SubmitPropertyLayout
            currentStage={
                currentStep === 1
                    ? "Basic Property Information"
                    : currentStep === 2
                    ? "Property Address"
                    : "Preview Your Property"
            }
        >
            <Box
                maxW="895px"
                boxShadow={
                    currentStep !== 3
                        ? "0px 2px 20px rgba(102, 70, 28, 0.11)"
                        : ""
                }
                rounded={"20px"}
                p={{
                    base: "15px",
                    md: currentStep !== 3 ? "50px" : "0px",
                    xl: currentStep !== 3 ? "70px" : "0px",
                }}
            >
                <Box
                    bgColor={currentStep !== 3 ? "light_80" : "white"}
                    p={{ base: "10px", md: "15px", xl: "20px" }}
                >
                    {/* Each Steps is render here base on the setp state */}
                    {currentStep === 1 ? (
                        <BasicInfo handleCurrentStep={handleCurrentStep} />
                    ) : currentStep === 2 ? (
                        <Location handleCurrentStep={handleCurrentStep} />
                    ) : (
                        <PreviewProperty
                            handleCurrentStep={handleCurrentStep}
                        />
                    )}
                </Box>
            </Box>
        </SubmitPropertyLayout>
    );
};

export default RentalProperty;
