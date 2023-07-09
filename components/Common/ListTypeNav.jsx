import { useCommonContext } from "@/Context/CommonContext";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FaListUl } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";

const ListTypeNav = () => {
    const { setIsGridTrue, setIsGridFalse, isGrid } = useCommonContext();
    return (
        <Flex gap="10px" align="center">
            <Icon
                as={HiViewGrid}
                cursor={"pointer"}
                fontSize="25px"
                onClick={setIsGridTrue}
                color={isGrid ? "primary" : "black"}
            />{" "}
            <Icon
                as={FaListUl}
                cursor={"pointer"}
                fontSize="21px"
                onClick={setIsGridFalse}
                color={!isGrid ? "primary" : "black"}
            />
        </Flex>
    );
};

export default ListTypeNav;
