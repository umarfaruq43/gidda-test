//   <Box
//           p={{ base: "16px", md: "20px", xl: "30px" }}
//           border="1px"
//           borderColor={"stroke_3"}
//           maxW="1003px"
//           w="100%"
//           borderRadius={"20px"}
//       >
//           <Box></Box>
//       </Box>

import AuthLayout from "@/Layout/AuthLayout";
import {
    Box,
    Button,
    Divider,
    Flex,
    Link,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Lekton } from "@next/font/google";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import AccountType from "../Common/AccountType";
import { FacebookButton, GoogleButton, PrimaryButton } from "../Common/Buttons";
import EmailConfirmation from "../Modals/EmailConfirmationModal";
import EmailInput from "../Common/EmailInput";
import PasswordInput from "../Common/PasswordInput";
import PhoneNumber from "../Common/PhoneNumber";
import TextInput from "../Common/TextInput";

const ContactInfor = () => {
    // Use Router
    const router = useRouter();
    // Modal  handlers
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initailValues = {
        email: "richard-lucas@gmail.com",
        password: "",
    };
    // Error States
    const [errors, setErrors] = useState({
        email: "",

        phoneNumber: "",
    });
    const [showLabel, setShowLabel] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [accountType, setAccountType] = useState(null);
    const [phoneNo, setPhoneNo] = useState("");

    // Detructure form values
    const { fName, email, password } = formValues;

    const handleChange = (e) => {
        // Check if the email is  valid
        handleIsEmailValid();
        // destructure name and value of target
        const { name, value } = e.target;
        // updating the formValues
        setFormValues({ ...formValues, [name]: value });
    };

    // Email Regex
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Check if the email is a valid Email
    const handleIsEmailValid = () => {
        if (!emailRegex.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
    };

    // Validate Form

    const validateForm = () => {
        const newErrors = {};

        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email address";
        } else if (email.length < 5) {
            newErrors.email = "Invalid email address";
        }

        if (phoneNo.length < 6) {
            newErrors.phoneNo = "Enter valid phone number";
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
            // const FinalFormValue = {
            //     accountType: accountType,
            //     email: email,
            //     password: password,
            //     fullName: fName,
            //     phoneNumber: phoneNo,
            // };
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
                Contact Information
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
                <Flex
                    gap={{ base: "10px", md: "10px", xl: "20px" }}
                    flexDir={{ base: "column", md: "row", xl: "row" }}
                >
                    {/* Email Input  */}
                    <Box mt="20px" w="100%">
                        <EmailInput
                            onChange={handleChange}
                            value={email}
                            handleIsEmailValid={handleIsEmailValid}
                            isEmailValid={isEmailValid}
                        />
                        {errors.email && (
                            <Text fontSize="12px" color={"red"} mt="2px">
                                {errors.email}{" "}
                            </Text>
                        )}
                    </Box>
                    {/* Phone Number */}
                    <Box mt="20px" w="100%">
                        <PhoneNumber
                            setPhoneNo={setPhoneNo}
                            phoneNo={phoneNo}
                        />
                        {errors.phoneNo && (
                            <Text fontSize="12px" color={"red"} mt="2px">
                                {errors.phoneNo}{" "}
                            </Text>
                        )}
                    </Box>
                </Flex>

                {/*  Button */}

                <Box mt={["20px", "20px"]}>
                    <PrimaryButton text="Modify" isDisabled />
                </Box>
            </Box>
        </Box>
    );
};

export default ContactInfor;
