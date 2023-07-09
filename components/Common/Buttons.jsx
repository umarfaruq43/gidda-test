import { Facebook, Google } from "@/public/Icon";
import { Button, Icon, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { FaAngleRight, FaFacebookSquare, FaGoogle } from "react-icons/fa";

export const PrimaryButton = ({ text, ...props }) => {
    return (
        <Button
            _hover={{}}
            bgColor="primary"
            fontSize={"15px"}
            fontWeight="700"
            w="100%"
            h="60px"
            color="white"
            type="submit"
            borderRadius={"5px"}
            {...props}
            className="openSans"
            backdropFilter={"20px"}
        >
            {text}
        </Button>
    );
};

export const LightPrimaryButton = ({
    text,
    BorderCol = "stroke",
    children,
    ...props
}) => {
    return (
        <Button
            _hover={{}}
            bgColor="white"
            fontSize={"15px"}
            fontWeight="400"
            w="100%"
            h="60px"
            color="black"
            type="submit"
            borderRadius={"5px"}
            {...props}
            className="openSans"
            border="1px"
            borderColor={BorderCol}
        >
            {text}
            {children}
        </Button>
    );
};

export const GoogleButton = ({ text, ...props }) => {
    return (
        <Button
            w="100%"
            h="60px"
            gap="8px"
            fontWeight="700"
            bgColor="red"
            color="white"
            _active={{}}
            _hover={{}}
            _focus={{}}
            display="flex"
            align="center"
            {...props}
        >
            <Google fontSize={"20px"} />
            <Text fontSize={"12px"}>Google</Text>
        </Button>
    );
};
export const FacebookButton = ({ text, ...props }) => {
    return (
        <Button
            w="100%"
            h="60px"
            gap="8px"
            fontWeight="700"
            bgColor="blue"
            color="white"
            _hover={{}}
            _active={{}}
            display="flex"
            align="center"
            justifyContent={"center"}
            {...props}
        >
            <Facebook size={"20px"} />
            <Text fontSize={"12px"}>Facebook</Text>
        </Button>
    );
};

export const FadeButton = ({ type, text, ...props }) => {
    return (
        <Button
            w="fit-content"
            backdropFilter={"auto"}
            backdropBlur={"1.50833px"}
            // h="60px"
            py={{ base: "8px", md: "15px", xl: "" }}
            px={{ base: "12px", md: "22px", xl: "" }}
            gap="8px"
            fontWeight="700"
            bgColor={{
                base: type === "thick" ? "primary" : "primary_8",
                md: "primary_8",
                xl: "",
            }}
            color="white"
            _hover={{}}
            _active={{}}
            display="flex"
            align="center"
            justifyContent={"center"}
            {...props}
        >
            <Text fontSize={"11px"}>{text}</Text>
            <Icon as={BiChevronRight} boxSize={"16px"} />
        </Button>
    );
};
