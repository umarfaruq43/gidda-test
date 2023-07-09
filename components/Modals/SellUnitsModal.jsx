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
    Icon,
    Radio,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import NumberOfUnitSelect from "../Common/NumberOfUnitSelect";
import SelectCustomBidAmount from "../Common/SelectCustomBidAmount";
import PricePerUnit from "../Common/PricePerUnitInput";
import TextInputComponent from "../Common/TextInputComponent";
import { TaskModal } from "./StatusModal";
import TextAreaInputComponent from "../Common/TextAreaInputComponent";
import { Money, People, Timer1 } from "iconsax-react";
import { BsChevronBarDown, BsChevronLeft } from "react-icons/bs";

const SellUnitsModal = ({ onOpen, onClose, isOpen }) => {
    const [noOfUnits, setNoOfUnits] = useState(null);

    const [bidAmount, setBidAmount] = useState("");
    const [pricePerUnit, setPricePerUnit] = useState("");
    const [sms, setSms] = useState("");
    const {
        isOpen: isOpenSuccessModal,
        onClose: onCloseSuccessModal,
        onOpen: onOpenSuccessModal,
    } = useDisclosure();
    const handleChange = (e) => {
        setBidAmount(e.target.value);
    };
    const handleUnitValue = (e) => {
        setPricePerUnit(e.target.value);
    };
    const handleSms = (e) => {
        setSms(e.target.value);
    };
    return (
        <>
            <Modal
                blockScrollOnMount={true}
                // isCentered
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
                                    Sell your Unit
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
                                <Text fontSize="12px">
                                    Default Price Per Unit
                                </Text>
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

                            <Box mt="20px">
                                <PricePerUnit
                                    onChange={handleUnitValue}
                                    value={pricePerUnit}
                                />
                            </Box>

                            <Box mt="20px">
                                <TextAreaInputComponent
                                    value={sms}
                                    inputName={"sms"}
                                    inputLabel={"Sales Note"}
                                    inputPlaceHolder={"Enter Sales Note"}
                                    onChange={handleSms}
                                />
                            </Box>

                            {noOfUnits > 1 ? (
                                <Box mt="20px">
                                    <Bidders />
                                </Box>
                            ) : (
                                ""
                            )}

                            <Box>
                                <Divider my="20px" bgColor="stroke_1" h="5px" />
                            </Box>

                            <Box>
                                <TimerStart />
                            </Box>

                            <Box>
                                <Divider my="20px" bgColor="stroke_1" h="5px" />
                            </Box>

                            <Box mt="20px">
                                <Bidding />
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
                                //    noOfUnits ===  "" || bidAmount === "" || pricePerUnit === ""
                            }}
                            text="PUT ON SALE"
                            w="100%"
                            isDisabled={
                                noOfUnits === "" ||
                                bidAmount === "" ||
                                pricePerUnit === ""
                                    ? true
                                    : false
                            }
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

export default SellUnitsModal;

const BigDatas = [
    { id: 1, price: "179,000", discount: "10%" },
    { id: 2, price: "₦186,910", discount: "10%" },
    { id: 3, price: "₦199,00", discount: "10%" },
];

const Bidding = () => {
    return (
        <Box>
            <Flex gap="10px">
                <Money variant="bulk" size="20" color="#292D32" />
                <Text fontSize="14px" fontWeight="500">
                    Bidding
                </Text>
            </Flex>

            <Flex mt="10px" gap="20px">
                <Radio variant={"red"}>Fixed</Radio>
                <Radio>Negotiable</Radio>
            </Flex>
        </Box>
    );
};

const Bidders = () => {
    return (
        <Box>
            <Flex gap="10px">
                <People variant="bulk" size="20" color="#292D32" />
                <Text fontSize="14px" fontWeight="500">
                    Bidders
                </Text>
            </Flex>

            <Flex mt="10px" gap="20px">
                <Radio>Single Buyer</Radio>
                <Radio>Multiple Buyers</Radio>
            </Flex>
        </Box>
    );
};

const TimerStart = () => {
    const [expireTime, setExpireTime] = useState("");
    return (
        <Box>
            <Flex align="center" gap="10px">
                <Icon as={Timer1} color="#292D32" />
                <Text fontWeight="500" fontSize="14px">
                    Expiration
                </Text>
            </Flex>
            <Box mt="20px">
                <Flex
                    h="60px"
                    bgColor="info_1"
                    w="100%"
                    gap="15px"
                    rounded="5px"
                    align="center"
                    py="4.5px"
                >
                    {/* 24 Hours Block */}
                    <Flex
                        align="center"
                        justify="center"
                        h="100%"
                        cursor="pointer"
                        maxW="155px"
                        w="100%"
                        bgColor={expireTime === 24 ? "primary" : ""}
                        onClick={() => setExpireTime(24)}
                        rounded="5px"
                    >
                        <Text
                            color={expireTime === 24 ? "white" : "black"}
                            fontSize="12px"
                        >
                            24 Hours
                        </Text>
                    </Flex>
                    <Divider
                        orientation="vertical"
                        height="15px"
                        variant="dashed"
                        borderColor="light_40"
                    />
                    {/* $8 Hours */}
                    <Flex
                        align="center"
                        justify="center"
                        h="100%"
                        cursor="pointer"
                        maxW="155px"
                        w="100%"
                        onClick={() => setExpireTime(48)}
                        rounded="5px"
                        bgColor={expireTime === 48 ? "primary" : ""}
                    >
                        <Text
                            color={expireTime === 48 ? "white" : "black"}
                            fontSize="12px"
                        >
                            48 Hours
                        </Text>
                    </Flex>
                    <Divider
                        orientation="vertical"
                        height="15px"
                        variant="dashed"
                        borderColor="light_40"
                    />

                    <Flex
                        align="center"
                        justify="center"
                        h="100%"
                        cursor="pointer"
                        maxW="98px"
                        w="100%"
                        onClick={() => setExpireTime(48)}
                        rounded="5px"
                        bgColor={expireTime === "" ? "" : ""}
                        gap="10px"
                    >
                        <Text color="black" fontSize="12px">
                            CUSTOM
                        </Text>
                        <Icon as={FaCaretDown} color="light_50" />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};
