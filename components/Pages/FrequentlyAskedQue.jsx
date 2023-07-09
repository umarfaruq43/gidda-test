import {
    Box,
    Flex,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { FaqSearchInput } from "../Common/SearchInput";

const FrequentlyAskedQue = () => {
    return (
        <Box p={{ base: "0px", md: "10px", xl: "10px" }} maxW="1283px">
            <FaqSearchInput />

            <Box mt="10px">
                {questions.map((item, i) => {
                    return <Que key={i} item={item} />;
                })}
            </Box>
        </Box>
    );
};

export default FrequentlyAskedQue;

const Que = ({ item }) => {
    return (
        <Accordion allowToggle mb="10px">
            <AccordionItem border="none">
                <AccordionButton
                    _hover={{}}
                    py="20px"
                    fontSize={{ base: "18px", md: "20px", xl: "" }}
                    boxShadow="0px 5px 25px 2px rgba(0, 0, 0, 0.05)"
                    borderRadius={"10px"}
                    textAlign="left"
                >
                    <Flex align="center" justify="space-between" w="100%">
                        {item.que}
                        <AccordionIcon />
                    </Flex>
                </AccordionButton>

                <AccordionPanel pb={4}>{item.ans}</AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

const questions = [
    {
        que: "What makes Gidda different from others on the market?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit, delectus quia laboriosam libero nihil nemo id, nesciunt minima commodi hic ducimus suscipit.",
    },
    {
        que: "How do I get my account activated?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit, delectus quia laboriosam libero nihil nemo id, nesciunt minima commodi hic ducimus suscipit.",
    },
    {
        que: "How does the payment system works on Gidda?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit, delectus quia laboriosam libero nihil nemo id, nesciunt minima commodi hic ducimus suscipit.",
    },
    {
        que: "How do i report a fake agent?",
        ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit, delectus quia laboriosam libero nihil nemo id, nesciunt minima commodi hic ducimus suscipit.",
    },
];
