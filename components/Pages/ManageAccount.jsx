import { Box, Text } from "@chakra-ui/react";
import React from "react";
import AccountSettings from "../Common/AccountSettings";
import ContactInfor from "../Common/ContactInfor";
import PasswordManagement from "../Common/PasswordManagement";

const ManageAccount = () => {
    return (
        <Box>
            <Text
                fontWeight={"700"}
                fontSize={{ base: "25px", md: "35px", xl: "45px" }}
                className="openSans"
                mb="30px"
                maxW={{ base: "1010px", md: "1010px", xl: "100%" }}
                mx="auto"
            >
                Manage Account
            </Text>
            <Box
                maxW={{
                    base: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "1010px",
                    xxl: "1010px",
                }}
            >
                <Box>
                    <AccountSettings />
                </Box>

                <Box mt="20px">
                    <ContactInfor />
                </Box>

                <Box mt="20px">
                    <PasswordManagement />
                </Box>
            </Box>
        </Box>
    );
};

export default ManageAccount;
