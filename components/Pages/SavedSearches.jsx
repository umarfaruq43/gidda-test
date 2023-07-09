import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    Input,
    SimpleGrid,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { ArrowRight2, Bag, Bag2, Home3, Location } from "iconsax-react";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LightPrimaryButton, PrimaryButton } from "../Common/Buttons";
import { InputBox } from "../Common/InputComponents";
import NotificationBox from "../Common/NotificationBox";
import SavedSearchForm from "../Common/SavedSearchForm";
import SearchSwitch from "../Common/SearchSwitch";
import { WarningModal } from "../Modals/StatusModal";

const SavedSearches = () => {
    const savedS = [
        {
            id: "1",
            cardDetails: "",
        },
        {
            id: "2",
            cardDetails: "",
        },
        {
            id: "3",
            cardDetails: "",
        },
    ];
    const [savedSearchData, setSavedSearchData] = useState(savedS);
    const noOfSearches = savedSearchData && savedSearchData.length;

    return (
        <>
            <Box>
                <Box mb={["20px", "30px", "30px", "30px"]} px="10px">
                    <Text
                        fontWeight={"700"}
                        fontSize={["25px", "45px", "45px", "45px"]}
                    >
                        Saved Searches
                    </Text>
                    <Flex justify="space-between" align="center">
                        <Text
                            mt="25px"
                            fontWeight="400"
                            fontSize={["15px", "25px"]}
                            lineHeight="34px"
                        >
                            {noOfSearches} Searches Saved
                        </Text>

                        <Flex>
                            <Text>Sort by:</Text>
                            <Text> date</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            {savedSearchData &&
                savedSearchData.map((item, i) => {
                    console.log(item);
                    return (
                        <SavedSearchesCard
                            key={i}
                            item={item}
                            setSavedSearchData={setSavedSearchData}
                            savedSearchData={savedSearchData}
                        />
                    );
                })}
        </>
    );
};

const SavedSearchesCard = ({ setSavedSearchData, savedSearchData, item }) => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [editSaved, setEditSaved] = useState(false);

    const handleModify = () => {
        setEditSaved(!editSaved);
    };
    const {
        isOpen: isOpenWarningModal,
        onOpen: onOpenWarningModal,
        onClose: onCloseWarningModal,
    } = useDisclosure();

    const handleDelete = (id) => {
        const newSavedSearches = savedSearchData.filter(
            (item) => item.id !== id
        );
        setSavedSearchData(newSavedSearches);
    };
    return (
        <Box>
            {/* Warning Modal for delete Saved Searches */}

            <WarningModal
                isOpen={isOpenWarningModal}
                onOpen={onOpenWarningModal}
                onClose={onCloseWarningModal}
                handleDelete={handleDelete}
                itemId={item && item.id}
            />

            {/* Saved searches box */}
            {editSaved ? (
                <>
                    {/* Map section  */}

                    <Flex
                        w="100%"
                        px={{ base: "0px", md: "20px", xl: "20px" }}
                        py="20px"
                        mb="30px"
                        // borderRadius={"10px"}
                        bgColor="white"
                        boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
                        border={"1px"}
                        borderColor={"transparent"}
                        _hover={{
                            boxShadow: "0px 2px 20px rgba(102, 70, 28, 0.11)",

                            borderColor: "primary",
                        }}
                        transitionDuration=".5s"
                        gap="30px"
                    >
                        {/* Map Display Section */}
                        <Flex
                            maxW={{ base: "100%", md: "683px", xl: "821px" }}
                            align="flex-end"
                            borderRadius="10px"
                            w="100%"
                            position={"relative"}
                        >
                            {/* Change Adress Label */}
                            <Box
                                borderRadius={{
                                    base: "100px",
                                    md: "",
                                    xl: "0px",
                                }}
                                maxW={{
                                    base: "160px",
                                    md: "160px",
                                    xl: "250px",
                                }}
                                bgColor="white"
                                position={"absolute"}
                                w="100%"
                                boxShadow="0px 3px 9px rgba(0, 0, 0, 0.1)"
                                px="20px"
                                py="12px"
                                top={{ base: "34px", md: "34px", xl: "42px" }}
                                left="42px"
                            >
                                <Text
                                    fontSize={{
                                        base: "12px",
                                        md: "12.5px",
                                        xl: "15px",
                                    }}
                                    fontWeight="700"
                                    className="openSans"
                                    flexShrink={"0"}
                                >
                                    Change Address
                                </Text>
                            </Box>
                            {/* Search as I move the map */}
                            <Box
                                borderRadius={{
                                    base: "100px",
                                    md: "",
                                    xl: "0px",
                                }}
                                maxW={"314px"}
                                bgColor="white"
                                position={"absolute"}
                                w="100%"
                                boxShadow="0px 3px 9px rgba(0, 0, 0, 0.1)"
                                px="20px"
                                py="12px"
                                bottom={{
                                    base: "21px",
                                    md: "21px",
                                    xl: "21px",
                                }}
                                left="42px"
                            >
                                <Flex alignItems="center" gap="10px">
                                    <Text
                                        fontSize={{
                                            base: "15px",
                                            md: "15px",
                                            xl: "15px",
                                        }}
                                        fontWeight="700"
                                        className="openSans"
                                    >
                                        Search as I move the map
                                    </Text>
                                    {/* <SearchSwitch /> */}
                                </Flex>
                            </Box>

                            {/* Map Component will be used here */}
                            <Image src="/images/map.svg" alt="MapImage" />
                        </Flex>
                        {/* Search form section */}
                        <SavedSearchForm handleCancel={handleModify} />

                        {/* Card  */}
                    </Flex>
                </>
            ) : (
                <Flex
                    p={{ base: "10px", md: "20px", xl: "20px" }}
                    mb="30px"
                    borderRadius={"10px"}
                    bgColor="white"
                    boxShadow={"0px 2px 20px rgba(102, 70, 28, 0.11)"}
                    border={"1px"}
                    borderColor={"transparent"}
                    _hover={{
                        boxShadow: "0px 2px 20px rgba(102, 70, 28, 0.11)",
                        cursor: "pointer",
                        borderColor: "primary",
                    }}
                    transitionDuration=".5s"
                    gap="30px"
                >
                    {/* Images Section */}
                    <Flex
                        minH="342px"
                        bgColor={"blackAlpha.500"}
                        maxW={{ base: "100%", md: "422px", xl: "422px" }}
                        p="30px"
                        // justifyContent={"center"}
                        align="flex-end"
                        borderRadius="10px"
                        w="100%"
                    >
                        <Flex color="white" flexDir="column" gap="20px">
                            <Text
                                fontSize={{
                                    base: "35px",
                                    md: "35px",
                                    xl: "35px",
                                }}
                                fontWeight={"700"}
                                className="openSans"
                            >
                                My first search
                            </Text>

                            <Flex gap="10px" align="center">
                                <Box>
                                    <Location size="27" color="white" />
                                </Box>
                                <Text
                                    fontSize={"20px"}
                                    fontWeight={400}
                                    className="openSans"
                                >
                                    Victoria Island, Lagos
                                </Text>
                            </Flex>

                            <Flex gap="10px" align="center">
                                <Box>
                                    <Home3 size="27" color="white" />
                                </Box>
                                <Text
                                    fontSize={"20px"}
                                    fontWeight={400}
                                    className="openSans"
                                >
                                    <Text as="strong"> 23943</Text> Houses
                                </Text>
                            </Flex>
                            <Box>
                                <PrimaryButton
                                    text="SEE ALL"
                                    rightIcon={<ArrowRight2 size="17" />}
                                    maxW="111px"
                                    maxH="46px"
                                    fontSize="12px"
                                />
                            </Box>
                        </Flex>
                    </Flex>

                    {/* Card  */}

                    <Box w="100%" maxW="414px">
                        {searchValues.map(({ text, value }, i) => {
                            return (
                                <Flex
                                    _even={{ bgColor: "white" }}
                                    key={i}
                                    gap="10px"
                                    p="15px"
                                    w="100%"
                                    bgColor={"light_9"}
                                >
                                    <Text
                                        fontSize={"20px"}
                                        fontWeight={700}
                                        className="openSans"
                                        minW="189px"
                                    >
                                        {text}
                                    </Text>
                                    <Text
                                        fontSize={"20px"}
                                        fontWeight={400}
                                        className="openSans"
                                        noOfLines={1}
                                    >
                                        {value}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Box>

                    {/* Divider */}
                    <Divider
                        orientation="vertical"
                        color="stroke_3"
                        h="250px"
                        variant="dashed"
                    />
                    {/*  */}
                    <Box>
                        <Text
                            fontSize={"25px"}
                            fontWeight={700}
                            className="openSans"
                        >
                            Notification
                        </Text>

                        <Box mt="10px">
                            <Box minH="219px" mb="12px">
                                <NotificationBox
                                    selectedCheckboxes={selectedCheckboxes}
                                    setSelectedCheckboxes={
                                        setSelectedCheckboxes
                                    }
                                />
                            </Box>
                            <Flex align="center" gap="10px">
                                <PrimaryButton
                                    text="Modify Search"
                                    onClick={handleModify}
                                />
                                <LightPrimaryButton
                                    maxW="50px"
                                    border="1.2px"
                                    BorderCol="red_1"
                                    onClick={onOpenWarningModal}
                                >
                                    {/* <FaTrash / > */}
                                    <Bag size="30" color="#DA0C0C" />
                                </LightPrimaryButton>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};

export default SavedSearches;

const searchValues = [
    {
        text: "Price",
        value: "₦650K to ₦1.50M",
    },
    {
        text: "Category",
        value: "Studio Apartment",
    },
    {
        text: "Rooms",
        value: "2 Rooms to 3 Rooms",
    },
    {
        text: "Bath",
        value: "2 Baths to 3 Baths",
    },
    {
        text: "Facilities",
        value: "Wifi - Security - Electricity - Water",
    },
    {
        text: "Condition",
        value: "Any",
    },
];
