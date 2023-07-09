import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

// import "react-phone-input-2/lib/material.css";

import "react-phone-input-2/lib/style.css";
const PhoneNumber = ({ phoneNo, setPhoneNo, ...props }) => {
    const [isFocus, setIsFocus] = useState(false);
    const handleP = (e) => {
        setPhoneNo(e.target.value);
        
    };
    return (
        <Box pos="relative">
            <Text
                opacity={isFocus || phoneNo.length > 0 ? 1 : 0}
                position={"absolute"}
                zIndex={1}
                fontSize="14px"
                bgColor="white"
                px="10px"
                left="20px"
                top="-10px"
            >
                Phone Number
            </Text>
            <PhoneInput
                country={"ng"}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={phoneNo}
                name="phoneNo"
                inputProps={{
                    onChange: handleP,
                }}
                inputStyle={{
                    width: "100%",
                    height: "60px",
                    fontSize:"12px",
                    border: `${
                        isFocus || phoneNo.length > 0
                            ? "1px solid #EBE8E8"
                            : "none"
                    }`,
                    overflow: "hidden",
                    backgroundColor: `${
                        isFocus || phoneNo.length > 0
                            ? "transparent"
                            : "#F2F2F2"
                    }`,
                }}
            />
        </Box>
    );
};

export default PhoneNumber;
