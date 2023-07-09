import {
    Box,
    Button,
    Icon,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { AiOutlineMore } from "react-icons/ai";

export const COLUMN = [
    {
        Header: "Transaction Type",
        accessor: "transaction_type",
    },
    {
        Header: "Property",
        accessor: "property",
       
    },

    {
        Header: "Duration",
        accessor: "duration",
    },

    {
        Header: "Amount",
        accessor: "amount",
    },

    {
        Header: "Status",
        accessor: "status",
        Cell: (values) => {
            return (
                <>
                    {values && values.row.original.status === "failed" ? (
                        <Button
                            maxW="100px"
                            bgColor={"red_2"}
                            fontSize="20px"
                            fontWeight={400}
                            color="red_1"
                            w="100%"
                            h="44px"
                            borderRadius={"5px"}
                            _hover={{}}
                            _active={{}}
                            _focus={{}}
                        >
                            Failed
                        </Button>
                    ) : (
                        ""
                    )}

                    {values && values.row.original.status === "pending" ? (
                        <Button
                            maxW="100px"
                            bgColor={"info_1"}
                            fontSize="20px"
                            fontWeight={400}
                            color="info"
                            w="100%"
                            h="44px"
                            borderRadius={"5px"}
                            _hover={{}}
                            _active={{}}
                            _focus={{}}
                        >
                            Pending
                        </Button>
                    ) : (
                        ""
                    )}

                    {values && values.row.original.status === "success" ? (
                        <Button
                            maxW="100px"
                            bgColor={"success_1"}
                            fontSize="20px"
                            fontWeight={400}
                            color="success"
                            w="100%"
                            h="44px"
                            borderRadius={"5px"}
                            _hover={{}}
                            _active={{}}
                            _focus={{}}
                        >
                            Success
                        </Button>
                    ) : (
                        ""
                    )}
                </>
            );
        },
    },
    {
        Header: "Date and Time",
        accessor: "date_added",
    },

    {
        Header: "",
        accessor: "id",
        Cell: (values) => {
            return (
                <Button
                    maxW="128px"
                    bgColor="transparent"
                    _active={{}}
                    _hover={{}}
                    fontSize="14px"
                    color="brand.black"
                    w="100%"
                    h="34px"
                    borderRadius={"none"}
                >
                    <AiOutlineMore />
                </Button>
            );
        },
    },
];
