import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Flex,
    Image,
    Box,
} from "@chakra-ui/react";
import { LightPrimaryButton, PrimaryButton } from "./Buttons";
import { useRouter } from "next/router";

const RecoveryModal = ({ isOpen, onOpen, onClose }) => {
    const router = useRouter();

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent maxW="510px" w="100%">
                    <ModalBody textAlign={"center"}>
                        <Box mt="-80px" textAlign={"center"}>
                            <Image
                                src="/images/emailChecked.png"
                                alt="Checked Icon"
                                mx="auto"
                            />
                        </Box>
                        <Text
                            className="openSans"
                            fontSize={"35px"}
                            fontWeight={"700"}
                        >
                            {" "}
                            Recovery Email Sent
                        </Text>
                        <Text mt="20px" maxW="410px" mx="auto" fontSize="15px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam pulvinar sodales tellus, id venenatis
                            mauris consequat sagittis.
                        </Text>
                    </ModalBody>
                    <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                        <LightPrimaryButton text="CLOSE" onClick={onClose} />
                        <PrimaryButton
                            text="LOGIN"
                            onClick={() => router.push("/login")}
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RecoveryModal;
