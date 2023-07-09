import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
    Flex,
    Image,
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import ContactAgentModal from "./ContactAgentModal";
import { useRouter } from "next/router";

export const TourSuccessModal = ({ onOpen, onClose, isOpen }) => {
    const {
        isOpen: isOpenContactModal,
        onOpen: onOpenContactModal,
        onClose: onCloseContactModal,
    } = useDisclosure();
    const {
        isOpen: isOpenSuccessModal,
        onClose: onCloseSuccessModal,
        onOpen: onOpenSuccessModal,
    } = useDisclosure();
    return (
        <>
            <ContactAgentModal
                isOpen={isOpenSuccessModal}
                onClose={onCloseSuccessModal}
                onOpen={onOpenSuccessModal}
            />
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
                            Task completed
                        </Text>
                        <Text
                            mt="20px"
                            maxW="410px"
                            mx="auto"
                            fontSize="16px"
                            pb={"30px"}
                        >
                            Your tour schedule has been submitted to our admin.
                            An agent will be assigned to you and you will be
                            contacted within 24 hours
                        </Text>
                    </ModalBody>
                    <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                        <LightPrimaryButton text="Close" onClick={onClose} />
                        <PrimaryButton
                            text="Message"
                            onClick={() => {
                                onClose();
                                onOpenSuccessModal();
                            }}
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export const ContactSuccessModal = ({ onOpen, onClose, isOpen }) => {
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
                            Task completed
                        </Text>
                        <Text
                            mt="20px"
                            maxW="410px"
                            mx="auto"
                            fontSize="16px"
                            pb={"30px"}
                        >
                            Your Message has been submitted to our admin. An
                            agent will be assigned to you and you will be
                            contacted within 24 hours
                        </Text>
                    </ModalBody>
                    <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                        <LightPrimaryButton text="Close" onClick={onClose} />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export const WarningModal = ({
    onOpen,
    onClose,
    isOpen,
    handleDelete,
    itemId,
}) => {
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
                        <Box mt="-70px" textAlign={"center"}>
                            <Image
                                src="/images/warning.svg"
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
                            Are you sure?
                        </Text>
                        <Text
                            mt="20px"
                            maxW="410px"
                            mx="auto"
                            fontSize="16px"
                            pb={"30px"}
                        >
                            When you delete your saved search, you’ll have to
                            manually rebuild the search again by visiting the
                            property archive or home page
                        </Text>
                    </ModalBody>
                    <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                        <LightPrimaryButton text="Close" onClick={onClose} />
                        <PrimaryButton
                            text="Continue"
                            onClick={() => {
                                onClose();
                                handleDelete(itemId);
                            }}
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export const TaskModal = ({ onOpen, onClose, isOpen, title, message }) => {
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
                        <Box mt="-70px" textAlign={"center"}>
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
                            {title}
                        </Text>
                        <Text
                            mt="20px"
                            maxW="410px"
                            mx="auto"
                            fontSize="16px"
                            pb={"30px"}
                        >
                            {message}
                        </Text>
                    </ModalBody>
                    <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                        <LightPrimaryButton
                            text="Close"
                            w="100%"
                            onClick={onClose}
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export const PropertySuccessModal = ({ onOpen, onClose, isOpen }) => {
    const router = useRouter();
    return (
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
                        Property sent for Review
                    </Text>
                    <Text
                        mt="20px"
                        maxW="410px"
                        mx="auto"
                        fontSize="16px"
                        pb={"30px"}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam pulvinar sodales tellus, id venenatis mauris
                        consequat sagittis.
                    </Text>
                </ModalBody>
                <Flex gap="10px" p="10px" bgColor={"fadePrimary"}>
                    <PrimaryButton
                        text="Continue"
                        onClick={() => {
                            onClose();
                            router.push("/");
                        }}
                    />
                </Flex>
            </ModalContent>
        </Modal>
    );
};
