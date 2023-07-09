import AuthLayout from "@/Layout/AuthLayout";
import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
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
import TextInputComponent from "../Common/TextInputComponent";

const SignUp = () => {
    // Use Router
    const router = useRouter();
    // Modal  handlers
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initailValues = {
        fName: "",
        lName: "",
        email: "",
        password: "",
        location: "",
    };
    // Error States
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        fName: "",
        lName: "",
        phoneNumber: "",
        accountType: "",
        location: "",
    });
    const [showLabel, setShowLabel] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [accountType, setAccountType] = useState(null);
    const [phoneNo, setPhoneNo] = useState("");

    // Detructure form values
    const { fName, email, password, lName, location } = formValues;

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

        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        if (fName === "") {
            newErrors.fName = "Enter your first Name";
        }

        if (lName === "") {
            newErrors.fName = "Enter your last Name";
        }
        if (accountType === "agent" && location === "") {
            newErrors.location = "Enter your location";
        }

        if (phoneNo.length < 6) {
            newErrors.phoneNo = "Enter valid phone number";
        }

        if (accountType === null) {
            newErrors.accountType = "Select account type";
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
                email: email,
                password: password,
                firstName: fName,
                lastName: lName,
                phoneNumber: phoneNo,
                location: location,
            };
            console.log(FinalFormValue);
            // onOpen();
            // setTimeout(() => {
            //     router.push("/");
            // }, 2000);
        }
    };

    return (
        <>
            {/* EmailConfirmation */}
            <EmailConfirmation isOpen={isOpen} onClose={onClose} />
            {/* EmailConfirmation */}
            <Box
                as="form"
                onSubmit={handleSubmit}
                bgColor="primary_1"
                minH="100vh"
                px="15px"
                pb="30px"
            >
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    w="65px"
                    alt="gida logo"
                    mb="20px"
                    pt="30px"
                    mx="auto"
                />

                <Box
                    mb="90px"
                    maxW="652px"
                    mx="auto"
                    bgColor="white"
                    p="20px"
                    borderRadius={"10px"}
                >
                    {/* Sign Up details  */}

                    <Text
                        fontSize={{ base: "16px", md: "25px", xl: "25px" }}
                        fontWeight={"700"}
                        className="openSans"
                        textAlign={"center"}
                        mb="25px"
                        mx="auto"
                    >
                        Sign up for new a Account
                    </Text>

                    {/* Account Type Input  */}
                    <Box>
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
                    {/* Full Name  Input Section */}

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

                    <Flex
                        gap={{ base: "10px", md: "10px", xl: "20px" }}
                        flexDir={{ base: "column", md: "row", xl: "row" }}
                    >
                        {/* Location */}
                        {accountType === "agent" && (
                            <Box mt="20px" w="100%">
                                <TextInputComponent
                                    onChange={handleChange}
                                    value={location}
                                    inputName={"location"}
                                    inputLabel={"Location"}
                                    inputPlaceHolder={"Enter Location"}
                                />
                                {errors.location && (
                                    <Text
                                        fontSize="12px"
                                        color={"red"}
                                        mt="2px"
                                    >
                                        {errors.location}{" "}
                                    </Text>
                                )}
                            </Box>
                        )}

                        {/* Password Input */}
                        <Box mt="20px" w="100%">
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
                    </Flex>
                    {/* Sign Up Button */}

                    <Box mt={["20px", "20px"]}>
                        <PrimaryButton
                            text="SIGN UP"
                            isDisabled={
                                email === "" ||
                                password === "" ||
                                fName === "" ||
                                accountType === null ||
                                phoneNo === "" ||
                                (accountType === "agent" && location === "")
                                    ? true
                                    : false
                            }
                            onClick={handleSubmit}
                        />
                    </Box>
                    {/* Divider */}
                    <Box py="20px">
                        <Flex
                            align="center"
                            justify={"space-between"}
                            px="10px"
                            gap="30px"
                        >
                            <Divider
                                border="1px"
                                borderColor={"black_200"}
                                maxW="132px"
                            />{" "}
                            <Text> or</Text>{" "}
                            <Divider
                                border="1px"
                                borderColor={"black_200"}
                                maxW="132px"
                            />
                        </Flex>
                    </Box>

                    {/* Google and Facebook BUtton  */}
                    <Flex gap="10px">
                        <GoogleButton href={"#"} />

                        {/* Facebook */}

                        <FacebookButton href={"#"} />
                    </Flex>
                    <Box py="5.5px">
                        <Flex mt="25.5px" justify={"center"}>
                            <Text fontSize={"14px"}>
                                Have an Existing{" "}
                                <Link
                                    as={NextLink}
                                    href="/login"
                                    fontWeight="700"
                                    color="primary"
                                    textDecor={"underline"}
                                >
                                    Account?
                                </Link>{" "}
                            </Text>
                        </Flex>
                    </Box>
                </Box>

                <Box>
                    <Text fontSize="14px" textAlign={"center"}>
                        Copyright 2022, All Rights Reserved
                    </Text>
                </Box>
            </Box>
        </>
    );
};

export default SignUp;
