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

const PasswordManagement = () => {
    // Use Router
    const router = useRouter();
    // Modal  handlers
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initailValues = {
        password: "cojfasoidfsjdfakjskjs",
    };
    // Error States
    const [errors, setErrors] = useState({
        password: "",
    });
    const [showLabel, setShowLabel] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [accountType, setAccountType] = useState(null);
    const [phoneNo, setPhoneNo] = useState("");

    // Detructure form values
    const { password } = formValues;

    const handleChange = (e) => {
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

        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
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
        }
    };

    return (
        <>
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
                    Password Management
                </Text>
                <Box as="form" onSubmit={handleSubmit}>
                    {/* Password Input */}
                    <Box mt="20px">
                        <PasswordInput
                            onChange={handleChange}
                            value={password}
                        />
                        {errors.password && (
                            <Text fontSize="12px" color={"red"} mt="2px">
                                {errors.password}{" "}
                            </Text>
                        )}
                    </Box>

                    {/* Sign Up Button */}

                    <Box mt={["20px", "20px"]}>
                        <PrimaryButton text="Modify" isDisabled={true} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default PasswordManagement;
