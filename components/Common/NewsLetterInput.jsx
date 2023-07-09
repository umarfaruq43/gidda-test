import {
    Box,
    Input,
    InputRightElement,
    Button,
    InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";

const NewsLetterInput = ({ ...props }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Box w="100%" position={"relative"} {...props}>
            <Input
                pr=""
                name="email"
                type="email"
                placeholder="Enter Email Address"
                _focusVisible={{}}
                bgColor="shadow_2"
                border="none"
                minW="100%"
                fontSize={"15px"}
                display="block"
                h="67px"
                size={"lg"}
            />

            <Button
                h="57px"
                borderRadius={"none"}
                bgColor="primary"
                _hover={{}}
                _focus={{}}
                _active={{}}
                p="18px 35px"
                fontSize={"15px"}
                fontWeight={700}
                position="absolute"
                top="5px"
                right="5px"
            >
                Submit
            </Button>
        </Box>
    );
};

export default NewsLetterInput;

{
    /* <Box maxW="382px" w="100%" position={"relative"}>
                            <Input
                               
                                p="23px 20px"
                             
                            />
                            <Button
                                position={"absolute"}
                                
                            >
                                Submit
                            </Button>
                        </Box> */
}
