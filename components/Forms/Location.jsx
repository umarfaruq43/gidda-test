import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { PrimaryButton } from "../Common/Buttons";
import { PropertyInputBox, SelectBox } from "../Common/InputComponents";
import TextAreaInputComponent from "../Common/TextAreaInputComponent";

const Location = ({ handleCurrentStep }) => {
    return (
        <Box>
            <PropertyInputBox
                mt="20px"
                inputType={"text"}
                InputPlaceholder={"City"}
                value={""}
                inputName={"city"}
            />

            <TextAreaInputComponent
                mt="20px"
                value={""}
                inputName={"town"}
                // inputLabel={""}
                inputPlaceHolder={"Town"}
            />

            <PropertyInputBox
                mt="20px"
                inputType={"text"}
                InputPlaceholder={"Street Address"}
                value={""}
                inputName={"street_address"}
            />
            <Box mt="20px">
                <SelectBox placeholder="House Number" value={""} isLight={true}>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </SelectBox>
            </Box>

            <Box maxH="234px" mt="20px">
                <Image
                    src="/images/locationMap.svg"
                    alt="location Image replacement"
                    w="100%"
                />
            </Box>

            <Box mt="40px">
                <PrimaryButton
                    text="NEXT"
                    onClick={() => handleCurrentStep(3)}
                />
            </Box>
        </Box>
    );
};

export default Location;
