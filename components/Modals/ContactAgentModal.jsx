import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Text,
    useDisclosure,
    Flex,
    Box,
    Checkbox,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import TextAreaInputComponent from "../Common/TextAreaInputComponent";
import { ContactSuccessModal } from "./StatusModal";

export default function ContactAgentModal({
    isOpenSuccess,
    onOpenSuccess,
    onCloseSuccess,
    onOpen,
    onClose,
    isOpen,
}) {
    const [sms, setSms] = useState("");
    const handleSms = (e) => {
        setSms(e.target.value);
    };
    const handleSubmit = () => {
        onClose();
    };

    return (
        <>
            <Modal
                blockScrollOnMount={true}
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size={"2xl"}
            >
                <ModalOverlay />

                <ModalContent
                    bgColor={"transparent"}
                    p={{ base: "10px", md: "16px", xl: "20px" }}
                    w="100%"
                >
                    <Box bgColor={"white"} borderRadius="10px">
                        <ModalHeader
                            flex={1}
                            className="openSans"
                            fontSize={{ base: "20px", md: "25px", xl: "" }}
                        >
                            Message
                        </ModalHeader>

                        <ModalBody>
                            <Box>
                                <Flex align="center" gap="10px">
                                    {/* User to message   */}
                                    <Flex
                                        w="100%"
                                        bgColor="fadePrimary"
                                        maxW="217px"
                                        borderRadius="100px"
                                        p="5px"
                                        gap="10px"
                                        alignItems={"center"}
                                    >
                                        <Flex
                                            w="43px"
                                            h="43px"
                                            border="4px"
                                            borderColor={"primary_4"}
                                            bgColor="primary"
                                            boxShadow={
                                                " 0px 4px 5px rgba(0, 0, 0, 0.1)"
                                            }
                                            borderRadius="100px"
                                            alignItems="center"
                                            justify="center"
                                        >
                                            <Text
                                                className="openSans"
                                                color="white"
                                            >
                                                R
                                            </Text>
                                        </Flex>

                                        <Box>
                                            <Text
                                                fontSize={"20px"}
                                                fontWeight={700}
                                            >
                                                Ret SILO
                                            </Text>
                                            <Text
                                                color="light_7"
                                                fontSize={"12px"}
                                                fontWeight={400}
                                            >
                                                Assigned Agent
                                            </Text>
                                        </Box>
                                    </Flex>
                                    {/* Add more User Icon */}
                                    <Flex
                                        boxShadow={
                                            "0px 2px 4px rgba(0, 0, 0, 0.1)"
                                        }
                                        bgColor="white"
                                        borderRadius={"100px"}
                                        h="33px"
                                        w="33px"
                                        cursor="pointer"
                                        fontSize={"18px"}
                                        fontWeight={500}
                                        align="center"
                                        justify="center"
                                    >
                                        {" "}
                                        +{" "}
                                    </Flex>
                                </Flex>

                                {/* Messgage to Agent  */}

                                <Box mt="20px">
                                    <TextAreaInputComponent
                                        value={sms}
                                        inputName={"sms"}
                                        inputLabel={"Your message"}
                                        inputPlaceHolder={"Enter your message"}
                                        onChange={handleSms}
                                    />
                                </Box>
                                <Box mt="20px">
                                    <Checkbox>
                                        <Text
                                            fontSize="12px"
                                            color="light_8"
                                            className="openSans"
                                            fontWeight="600"
                                        >
                                            Notify me of response
                                        </Text>
                                    </Checkbox>
                                </Box>
                            </Box>
                        </ModalBody>
                        <Box
                            bgColor="fadePrimary"
                            p="10px"
                            width={"100%"}
                            alignContent="flex-start"
                        >
                            <Flex
                                w="100%"
                                justify={"space-between"}
                                p="10px"
                                gap=" 10px"
                            >
                                <Flex align="center" gap="10px">
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={500}
                                        className="openSans"
                                    >
                                        Advance
                                    </Text>
                                    {/* <Forward size="16" color="black_400" /> */}

                                    <Text> {`>`} </Text>
                                </Flex>
                                <Flex
                                    w="100%"
                                    maxW={{
                                        base: "100%",
                                        md: "420px",
                                        xl: "420px",
                                    }}
                                    gap="10px"
                                    align={"center"}
                                    justify={"center"}
                                >
                                    <LightPrimaryButton
                                        onClick={onClose}
                                        text="Close"
                                        w="100%"
                                        maxW="200px"
                                    />{" "}
                                    <PrimaryButton
                                        onClick={handleSubmit}
                                        text="Message"
                                        w="100%"
                                        maxW="200px"
                                        isDisabled={sms === "" ? true : false}
                                    />{" "}
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}
