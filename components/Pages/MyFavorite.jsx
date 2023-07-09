import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { Heart, Home3 } from "iconsax-react";
import React, { useState } from "react";
import { PrimaryButton } from "../Common/Buttons";
import FavouriteCard from "../Common/FavouriteCard";
import FavouriteNav from "../Common/FavouriteNav";

const MyFavorite = () => {
    const [activeFavourriteCategory, setActiveFavourriteCategory] = useState(
        (favouriteItems && favouriteItems[0]) || []
    );
    console.log(activeFavourriteCategory);
    const noOfProperties = favouriteItems && favouriteItems.length;
    return (
        <Box>
            <Box mb={["20px", "30px", "30px", "30px"]} px="10px">
                <Text
                    fontWeight={"700"}
                    fontSize={["25px", "45px", "45px", "45px"]}
                >
                    My Favorite
                </Text>
                <Text
                    mt="25px"
                    fontWeight="400"
                    fontSize={["15px", "25px"]}
                    lineHeight="34px"
                >
                    {noOfProperties} Favorite Properties
                </Text>
            </Box>

            {noOfProperties > 0 ? (
                <Box>
                    {/*  */}
                    <Box p="10px">
                        {/* Favourite Nav bar */}
                        <FavouriteNav
                            favouriteItems={favouriteItems}
                            activeFavourriteCategory={activeFavourriteCategory}
                            setActiveFavourriteCategory={
                                setActiveFavourriteCategory
                            }
                        />
                    </Box>

                    {/* Favourite  Cards TO display */}
                    <Box mt="30px">
                        {activeFavourriteCategory.properties &&
                            activeFavourriteCategory.properties.map(
                                (item, i) => {
                                    return (
                                        <FavouriteCard key={i} item={item} />
                                    );
                                }
                            )}
                    </Box>
                </Box>
            ) : (
                <Flex py="100px" px="50px" justify="center" bgColor="light_6">
                    <Box align="center">
                        <Box>
                            <Heart size="100" color="#B0B0B0" variant="Bulk" />
                        </Box>
                        <Text
                            mt="30px"
                            fontSize={{ base: "25px", md: "35px", xl: "35px" }}
                            className="openSans"
                            fontWeight={700}
                        >
                            You don’t have any property saved yet
                        </Text>
                        <Text
                            mt="30px"
                            fontSize={{ base: "15px", md: "20px", xl: "20px" }}
                            fontWeight={400}
                            className="openSans"
                        >
                            In order to add a property to your favorite list,
                            click on the love icon and you’ll find them here
                        </Text>

                        <PrimaryButton
                            text="Start Browsing"
                            maxW="429px"
                            fontSize="15px"
                            mt="30px"
                        />
                    </Box>
                </Flex>
            )}
        </Box>
    );
};

export default MyFavorite;

const amenities = [
    {
        item: "Kitchen",
        status: true,
        img: "pot.svg",
    },
    {
        item: "Bathroom",
        status: true,
        img: "shower.svg",
    },
    {
        item: "Running Water",
        status: true,
        img: "tap.svg",
    },
    {
        item: "Garden",
        status: true,
        img: "garden.svg",
    },
    {
        item: "Free Internet",
        status: true,
        img: "internet.svg",
    },
    {
        item: "Master Bedroom",
        status: true,
        img: "masterBed.svg",
    },
];

const favouriteItems = [
    {
        id: "1238388984fdufd8f9d",
        type: "Mansion",
        active: "mansion",
        noAvailable: 23943,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "2 Bedroom semi-detached mansion with swimming pool and BBQ",
            },

            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },
    {
        id: "1238388984fdufssd8f9d",
        type: "Detached Duplex",
        active: "detachedDuplex",
        noAvailable: 8733,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },
    {
        id: "12383889sdsfdufd8f9d",
        type: "Beach House",
        active: "detachedDuplex",
        noAvailable: 9313,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },

    {
        id: "1238388984dsddfdufd8f9d",
        type: "Penthouse",
        active: "detachedDuplex",
        noAvailable: 2339,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },
    {
        id: "1238388984fdufd8f9ddssd",
        type: "Penthouse",
        active: "detachedDuplex",
        noAvailable: 2339,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },
    {
        id: "123kjfkjakf8388984fdufd8f9d",
        type: "Penthouse",
        active: "detachedDuplex",
        noAvailable: 2339,
        image: "/images/house_1.svg",
        properties: [
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
            {
                houseName:
                    "Self-contain Studio Apartment with 24/7 electricity and water",
            },
        ],
    },
];

// const favouriteItems = [];
