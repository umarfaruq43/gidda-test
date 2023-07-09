import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { LightPrimaryButton, PrimaryButton } from "./Buttons";
import { InputBox, SelectBox } from "./InputComponents";

const SavedSearchForm = ({ handleCancel }) => {
    const handleSave = () => {
        handleCancel();
    };

    return (
        <Box maxW="" w="100%">
            <form>
                <FullFormLayout text="Search Name">
                    {/* Search Name */}
                    <InputBox
                        inputType="text"
                        InputPlaceholder="My first search"
                        value="My first search"
                        inputName="title"
                    />
                </FullFormLayout>

                <FullFormLayout text="Price">
                    {/* Price */}
                    <Flex gap="10px">
                        <SelectBox placeholder="MIN" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                        <SelectBox placeholder="MAX" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                    </Flex>
                </FullFormLayout>

                <FullFormLayout text="Category">
                    {/* Category */}

                    <SelectBox placeholder="Main Text" value={""}>
                        <option value="Option 1">Category 1</option>
                        <option value="Option 2">Category 2</option>
                        <option value="Option 3">Category 3</option>
                    </SelectBox>
                </FullFormLayout>

                <FullFormLayout text="Rooms">
                    {/* Rooms */}
                    <Flex gap="10px">
                        <SelectBox placeholder="MIN" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                        <SelectBox placeholder="MAX" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                    </Flex>
                </FullFormLayout>

                <FullFormLayout text="Bath">
                    {/* Bath */}
                    <Flex gap="10px">
                        <SelectBox placeholder="MIN" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                        <SelectBox placeholder="MAX" value={""}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </SelectBox>
                    </Flex>
                </FullFormLayout>

                <FullFormLayout text="Facilities">
                    {/* Facilities */}

                    <InputBox
                        inputType="text"
                        InputPlaceholder="Enter Facilities"
                        value=""
                        inputName="facilities"
                    />
                </FullFormLayout>
                <FullFormLayout text="Condition">
                    {/* Condition */}

                    <SelectBox placeholder="Select Condition" value={""}>
                        <option value="Option 1">Condition 1</option>
                        <option value="Option 2">Condition 2</option>
                        <option value="Option 3">Condition 3</option>
                    </SelectBox>
                </FullFormLayout>

                <Flex gap="10px">
                    <LightPrimaryButton
                        text="Cancel"
                        color="primary"
                        BorderCol="primary"
                        type="button"
                        onClick={handleCancel}
                    />
                    <PrimaryButton text="Save" onClick={handleSave} />
                </Flex>
            </form>
        </Box>
    );
};

export default SavedSearchForm;

const FullFormLayout = ({ text, children }) => {
    return (
        <Box maxW="" w="100%" mb="15px">
            <Flex
                bgColor="light_9"
                py="5px"
                align={"center"}
                gap="10px"
                px="10px"
                h="70px"
            >
                {/* Row  Name  */}
                <Text
                    maxW="155px"
                    w="100%"
                    fontSize={{
                        base: "20px",
                        md: "20px",
                        xl: "20px",
                    }}
                    fontWeight={700}
                    className="openSans"
                >
                    {text}
                </Text>
                {/* Row Form */}
                <Box flex="1" w="100%">
                    {children}
                </Box>
            </Flex>
        </Box>
    );
};
