import { useAuthContext } from "@/Context/AuthContext";
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
import NextLink from "next/link";
import React, { useState } from "react";
import { PrimaryButton } from "../Common/Buttons";

import EmailInput from "../Common/EmailInput";
import PasswordInput from "../Common/PasswordInput";
import RecoveryModal from "../Common/RecoveryModal";

const ForgetPassword = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initailValues = {
        email: "",
    };
    const [showLabel, setShowLabel] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [emailErr, setEmailErr] = useState(null);
    // Detructure form values
    const { email } = formValues;

    // Check if the email is a valid Email
    const handleIsEmailValid = () => {
        // Email Regex
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
        }
    };
    // handle Input Change
    const handleChange = (e) => {
        // Check if the email is  valid
        handleIsEmailValid();
        // destructure name and value of target
        const { name, value } = e.target;
        // updating the formValues
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmailValid) {
            setEmailErr("Input a valid Email");
        } else {
            console.log(email);
            setEmailErr(null);
            onOpen();
        }
    };
    return (
        <>
            {/* Recovery EMail Modal */}
            <RecoveryModal isOpen={isOpen} onClose={onClose} />
            {/* Recovery EMail Modal */}
            <Box as="form" onSubmit={handleSubmit}>
                <AuthLayout formTitle={"Recover Password"}>
                    <EmailInput
                        onChange={handleChange}
                        value={email}
                        isEmailValid={isEmailValid}
                        handleIsEmailValid={handleIsEmailValid}
                    />
                    {emailErr !== null && (
                        <Text fontSize="12px" color={"red"} mt="4px">
                            {" "}
                            {emailErr}{" "}
                        </Text>
                    )}

                    {/* Sign IN Button */}
                    <Box mt={["20px", "20px"]}>
                        {/*  */}
                        <PrimaryButton
                            text="RECOVER PASSWORD"
                            isDisabled={email == "" ? true : false}
                            type="submit"
                        />
                    </Box>

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
                </AuthLayout>
            </Box>
        </>
    );
};

export default ForgetPassword;
