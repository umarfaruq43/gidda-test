import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SelectBox } from "@/components/Common/InputComponents";
import TextAreaInputComponent from "@/components/Common/TextAreaInputComponent";
import { PrimaryButton } from "../Common/Buttons";

const Contact = () => {
    const [sms, setSms] = useState("");
    const handleSms = (e) => {
        setSms(e.target.value);
    };

    return (
        <Box className="openSans">
            <Box
                rounded="20px"
                border="1px"
                borderColor="stroke_3"
                p={{ base: "10px", md: "20px", xl: "30px" }}
            >
                <Text
                    fontSize={{ base: "25px", md: "25px", xl: "" }}
                    fontWeight={700}
                >
                    Update credentials
                </Text>

                <Box mt="30px">
                    <Flex
                        gap={{ base: "50px", md: "30px", xl: "50px" }}
                        flexDir={{
                            base: "column",
                            md: "column",
                            lg: "row",
                            xl: "row",
                        }}
                    >
                        <Box w="100%" maxW="576px">
                            <Box mb="10px">
                                <SelectBox
                                    placeholder="Message Type"
                                    value={""}
                                >
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </SelectBox>
                            </Box>

                            {/* Message Title */}
                            <Box>
                                <SelectBox
                                    placeholder="Message Title"
                                    value={""}
                                >
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                </SelectBox>
                            </Box>

                            <Box mt="20px">
                                <TextAreaInputComponent
                                    value={sms}
                                    inputName={"sms"}
                                    inputLabel={"Full Message"}
                                    inputPlaceHolder={"Enter Full Message"}
                                    onChange={handleSms}
                                />
                            </Box>

                            <Box mt="10px">
                                <PrimaryButton text="Send" />
                            </Box>
                        </Box>

                        {/* Address Card */}
                        <Box flex="1">
                            <Flex gap="10px" mb="10px">
                                <Text fontSize="21px" fontWeight="700">
                                    Address:
                                </Text>
                                <Text fontSize="20px">
                                    PC 12, Lawrence Avenue, Chicago, Illinois
                                </Text>
                            </Flex>

                            <Flex gap="10px" mb="10px">
                                <Text fontSize="21px" fontWeight="700">
                                    Contact:
                                </Text>
                                <Box fontSize="20px">
                                    <Text fontSize="20px">+1093448586</Text>
                                    <Text fontSize="20px">+1093448586</Text>
                                    <Text fontSize="20px">+1093448586</Text>
                                </Box>
                            </Flex>

                            <Flex gap="10px" mb="10px">
                                <Text fontSize="21px" fontWeight="700">
                                    Email:
                                </Text>
                                <Box fontSize="20px">
                                    <Text>support@gidda.com</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
