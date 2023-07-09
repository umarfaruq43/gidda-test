import {
    Box,
    Flex,
    Image,
    Text,
    Icon,
    Button,
    Divider,
    Link,
    useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

import AccountType from "../Common/AccountType";
import { FacebookButton, GoogleButton, PrimaryButton } from "../Common/Buttons";

import TextInputComponent from "./TextInputComponent";
import { Trash } from "iconsax-react";
const AccountSettings = () => {
    // Use Router
    const router = useRouter();
    // Modal  handlers
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initailValues = {
        fName: "Richard",
        lName: "Lucas",
        kin: "Jibraheem Thomasino",
        location: "Victoria Island, Lagos",
    };
    // Error States
    const [errors, setErrors] = useState({
        fName: "",
        lName: "",
        accountType: "",
        kin: "",
        location: "",
    });
    const [showLabel, setShowLabel] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [accountType, setAccountType] = useState("agent");
    const [phoneNo, setPhoneNo] = useState("");

    // Detructure form values
    const { fName, lName, kin, location } = formValues;

    const handleChange = (e) => {
        // destructure name and value of target
        const { name, value } = e.target;
        // updating the formValues
        setFormValues({ ...formValues, [name]: value });
    };

    // Validate Form

    const validateForm = () => {
        const newErrors = {};

        if (fName === "") {
            newErrors.fName = "Enter your First Name";
        }
        if (lName === "") {
            newErrors.lName = "Enter your Last Name";
        }

        if (accountType === null) {
            newErrors.accountType = "Select account type";
        }
        if (kin === null) {
            newErrors.kin = "Enter your Next of Kin Name";
        }
        if (location === null) {
            newErrors.location = "Enter your location";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }

        return true;
    };

    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Final formValue
            const FinalFormValue = {
                accountType: accountType,
                firstName: fName,
                lastName: lName,
            };
            console.log(FinalFormValue);
            onOpen();
            setTimeout(() => {
                router.push("/");
            }, 2000);
        }
    };

    return (
        <Box
            p={{ base: "16px", md: "20px", xl: "30px" }}
            border="1px"
            borderColor={"stroke_3"}
            maxW="1003px"
            w="100%"
            borderRadius={"20px"}
            mx="auto"
        >
            <Text fontSize={"25px"} fontWeight={700} className="openSans">
                Account Settings
            </Text>
            {/* Image Upload section */}
            <Box>
                <Flex align={"center"}>
                    <Image
                        src="/images/user.svg"
                        maxW={"100px"}
                        maxH={"100px"}
                        borderRadius="100%"
                        alt="Upload Image"
                    />
                    <Flex gap="10px">
                        <Icon as={FaPen} cursor="pointer" />
                        <Trash color="#000" size="17" cursor="pointer" />
                    </Flex>
                </Flex>
            </Box>

            {/* FOrm Section  */}

            <>
                <Box as="form" onSubmit={handleSubmit}>
                    <Flex
                        gap={{ base: "10px", md: "10px", xl: "20px" }}
                        flexDir={{ base: "column", md: "row", xl: "row" }}
                    >
                        {/* First Name */}
                        <Box mt="20px" w="100%">
                            <TextInputComponent
                                onChange={handleChange}
                                value={fName}
                                inputName={"fName"}
                                inputLabel={"First Name"}
                                inputPlaceHolder={"Enter First Name"}
                            />
                            {errors.fName && (
                                <Text fontSize="12px" color={"red"} mt="2px">
                                    {errors.fName}{" "}
                                </Text>
                            )}
                        </Box>
                        {/* Last Name */}
                        <Box mt="20px" w="100%">
                            <TextInputComponent
                                onChange={handleChange}
                                value={lName}
                                inputName={"lName"}
                                inputLabel={"Last Name"}
                                inputPlaceHolder={"Enter Last Name"}
                            />
                            {errors.lName && (
                                <Text fontSize="12px" color={"red"} mt="2px">
                                    {errors.lName}{" "}
                                </Text>
                            )}
                        </Box>
                    </Flex>

                    <Flex
                        gap={{ base: "10px", md: "10px", xl: "20px" }}
                        flexDir={{ base: "column", md: "row", xl: "row" }}
                    >
                        {/* Account Type Input  */}
                        <Box mt="20px" w="100%">
                            <AccountType
                                accountType={accountType}
                                setAccountType={setAccountType}
                            />
                            {/* Display error message  */}
                            {errors.accountType && (
                                <Text fontSize="12px" color={"red"} mt="2px">
                                    {errors.accountType}{" "}
                                </Text>
                            )}
                        </Box>

                        {/* Next of Kin */}
                        <Box mt="20px" w="100%">
                            <TextInputComponent
                                onChange={handleChange}
                                value={lName}
                                inputName={"kin"}
                                inputLabel={"Next of Kin"}
                            />
                            {errors.kin && (
                                <Text fontSize="12px" color={"red"} mt="2px">
                                    {errors.kin}{" "}
                                </Text>
                            )}
                        </Box>
                    </Flex>

                    {/* Location */}
                    <Box mt="20px">
                        <TextInputComponent
                            onChange={handleChange}
                            value={location}
                            inputName={"location"}
                            inputLabel={"Location"}
                            inputPlaceHolder={"Enter your location"}
                        />
                        {errors.location && (
                            <Text fontSize="12px" color={"red"} mt="2px">
                                {errors.location}{" "}
                            </Text>
                        )}
                    </Box>

                    {/* Sign Up Button */}
                    <Box mt={["20px", "20px"]}>
                        <PrimaryButton text="Modify" isDisabled={true} />
                    </Box>
                </Box>
            </>
        </Box>
    );
};

export default AccountSettings;
