import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BasicTable from "../Tables/BasicTable";

const TransactionHistory = () => {
    const [transactionFilter, setTransactionFilter] = useState("today");
    const handleFilter = (activeFilter) => {
        setTransactionFilter(activeFilter);
    };
    return (
        <Box>
            <Text
                fontWeight={"700"}
                fontSize={{ base: "25px", md: "35px", xl: "45px" }}
                className="openSans"
                mb="30px"
            >
                Transaction History
            </Text>
            <Box>
                {/* Button Filter section   */}
                <Flex justify={"flex-end"} w="100%">
                    <Flex
                        w="100%"
                        maxW={"398px"}
                        boxShadow="0px 2px 20px #E4F2F3"
                        p="10px"
                        gap="10px"
                        align="center"
                    >
                        <TransactionFilterButton
                            text="Today"
                            transactionFilter={transactionFilter}
                            onClick={() => handleFilter("today")}
                            stateTextHandler={"today"}
                        />
                        <TransactionFilterButton
                            text="Quarterly"
                            transactionFilter={transactionFilter}
                            onClick={() => handleFilter("quarterly")}
                            stateTextHandler={"quarterly"}
                        />

                        <Divider
                            orientation="vertical"
                            borderColor="stroke_1"
                            h="30px"
                        />

                        <TransactionFilterButton
                            text="Annual"
                            transactionFilter={transactionFilter}
                            onClick={() => handleFilter("annual")}
                            stateTextHandler={"annual"}
                        />
                    </Flex>
                </Flex>
                {/* Table  */}
                <Box>
                    <BasicTable />
                </Box>
            </Box>
        </Box>
    );
};

export default TransactionHistory;

const TransactionFilterButton = ({
    text,
    stateTextHandler,
    transactionFilter,
    ...props
}) => {
    return (
        <Button
            bgColor={
                transactionFilter === stateTextHandler ? "primary" : "white"
            }
            px="38px"
            py="25px"
            _active={{}}
            _hover={{}}
            color={transactionFilter === stateTextHandler ? "white" : "black"}
            fontSize="15px"
            fontWeight={transactionFilter === stateTextHandler ? 700 : 400}
            {...props}
        >
            {text}
        </Button>
    );
};
