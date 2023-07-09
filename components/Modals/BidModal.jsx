import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Flex,
    Box,
    RadioGroup,
    ButtonGroup,
    Input,
    Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import NumberOfUnitSelect from "../Common/NumberOfUnitSelect";
import SelectCustomBidAmount from "../Common/SelectCustomBidAmount";
import TextInputComponent from "../Common/TextInputComponent";
import { TaskModal } from "./StatusModal";

const BidModal = ({ onOpen, onClose, isOpen }) => {
    const [noOfUnits, setNoOfUnits] = useState(null);
    const [customBid, setCustomBid] = useState(null);
    const [bidAmount, setBidAmount] = useState("");
    const {
        isOpen: isOpenSuccessModal,
        onClose: onCloseSuccessModal,
        onOpen: onOpenSuccessModal,
    } = useDisclosure();
    const handleChange = (e) => {
        setBidAmount(e.target.value);
    };
    return (
        <>
            <Modal
                blockScrollOnMount={true}
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size={"lg"}
            >
                <ModalOverlay />

                <ModalContent>
                    <Box
                        bgColor={"transparent"}
                        p={{ base: "10px", md: "16px", xl: "20px" }}
                        w="100%"
                    >
                        <Box
                            bgColor={"white"}
                            borderRadius="10px"
                            // p={{ base: "10px", md: "16px", xl: "20px" }}
                        >
                            <Flex align="center" justify={"space-between"}>
                                <Text fontSize="35px" fontWeight={"700"}>
                                    Bid Unit
                                </Text>
                                <Text>
                                    <FaTimes
                                        onClick={() => onClose()}
                                        cursor="pointer"
                                    />
                                </Text>
                            </Flex>

                            {/* Body  */}

                            <Box mt="20px">
                                <Text fontSize="12px">Price Per Unit</Text>
                                <Text fontSize="25px" fontWeight="700">
                                    {" "}
                                    ₦186,910{" "}
                                </Text>
                            </Box>

                            <Box mt="20px">
                                <NumberOfUnitSelect
                                    noOfUnit={noOfUnits}
                                    setNoOfUnit={setNoOfUnits}
                                />
                            </Box>
                            <Divider bgColor="stroke" my="20px" />

                            <Box>
                                <SelectCustomBidAmount
                                    customBid={customBid}
                                    setCustomBid={setCustomBid}
                                    bidData={BigDatas}
                                />
                            </Box>

                            <Box mt="20px">
                                <TextInputComponent
                                    onChange={handleChange}
                                    value={bidAmount}
                                    inputName={"bidAmount"}
                                    inputLabel={"Bid Amount"}
                                    inputPlaceHolder={"Enter Bid Amount"}
                                />
                            </Box>

                            <Box mt="20px">
                                <Flex align="center" justify="space-between">
                                    <Text fontSize="12px">Total Price</Text>
                                    <Text fontSize="25px" fontWeight="700">
                                        {" "}
                                        ₦358,000
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                    <Flex
                        w="100%"
                        gap="10px"
                        align={"center"}
                        justify={"space-between"}
                        p="10px"
                        bgColor="primary_6"
                    >
                        <LightPrimaryButton
                            onClick={onClose}
                            text="Close"
                            w="100%"
                        />{" "}
                        <PrimaryButton
                            onClick={() => {
                                onOpenSuccessModal();
                                onClose();
                            }}
                            text="PLACE YOUR BID"
                            w="100%"
                        />{" "}
                    </Flex>
                </ModalContent>
            </Modal>

            <TaskModal
                title="Task completed"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sodales tellus, id venenatis mauris consequat sagittis. "
                onOpen={onOpenSuccessModal}
                onClose={onCloseSuccessModal}
                isOpen={isOpenSuccessModal}
            />
        </>
    );
};

export default BidModal;

const BigDatas = [
    { id: 1, price: "179,000", discount: "10%" },
    { id: 2, price: "₦186,910", discount: "10%" },
    { id: 3, price: "₦199,00", discount: "10%" },
];
