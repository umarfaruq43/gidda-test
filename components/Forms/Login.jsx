import { useAuthContext } from "@/Context/AuthContext";
import AuthLayout from "@/Layout/AuthLayout";
import { Box, Button, Divider, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { FacebookButton, GoogleButton, PrimaryButton } from "../Common/Buttons";
import EmailInput from "../Common/EmailInput";
import PasswordInput from "../Common/PasswordInput";

const Login = () => {
    const router = useRouter();
    const { SignIn } = useAuthContext();
    const initailValues = {
        email: "",
        password: "",
    };
    const [showLabel, setShowLabel] = useState(false);
    const [formValues, setFormValues] = useState(initailValues);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    // Detructure form values
    const { email, password } = formValues;

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

    const handleChange = (e) => {
        // Check if the email is  valid
        handleIsEmailValid();
        // destructure name and value of target
        const { name, value } = e.target;
        // updating the formValues
        setFormValues({ ...formValues, [name]: value });
    };

    // Validate Form

    const validateForm = () => {
        const newErrors = {};
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email address";
        } else if (email.length < 5) {
            newErrors.email = "Invalid email address";
        }

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
            SignIn(formValues);
        }
        router.push("/");
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <AuthLayout formTitle={"Sign in to your account"}>
                {/* Email Input */}
                <Box>
                    <EmailInput
                        onChange={handleChange}
                        value={email}
                        handleIsEmailValid={handleIsEmailValid}
                        isEmailValid={isEmailValid}
                    />
                    {/* Display error message  */}
                    {errors.email && (
                        <Text fontSize="12px" color={"red"} mt="2px">
                            {errors.email}{" "}
                        </Text>
                    )}
                </Box>

                {/* Password Input */}
                <Box mt="20px">
                    <PasswordInput onChange={handleChange} value={password} />
                    {/* Display error message  */}
                    {errors.password && (
                        <Text fontSize="12px" color={"red"} mt="2px">
                            {errors.password}{" "}
                        </Text>
                    )}
                </Box>

                {/* Sign In Button */}

                <Box mt={["20px", "20px"]}>
                    <PrimaryButton
                        text="SIGN IN"
                        isDisabled={
                            email === "" || password === "" ? true : false
                        }
                    />
                </Box>
                {/* Sign IN Button */}
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
                            Forgot Password?{" "}
                            <Link
                                as={NextLink}
                                href="/forget_password"
                                fontWeight="700"
                                color="primary"
                                textDecor={"underline"}
                            >
                                Click Here
                            </Link>{" "}
                        </Text>
                    </Flex>

                    <Flex mt="25.5px" justify={"center"}>
                        <Text fontSize={"14px"}>
                            Don’t have{" "}
                            <Link
                                as={NextLink}
                                href="/sign_up"
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
    );
};

export default Login;
