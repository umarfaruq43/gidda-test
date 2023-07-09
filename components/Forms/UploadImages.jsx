import SubmitPropertyLayout from "@/Layout/SubmitPropertyLayout";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { Gallery } from "iconsax-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export const UploadImages = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        multiple: true,
        onDrop: (acceptedFiles) => {
            // handle dropped files
            console.log(acceptedFiles);
        },
    });
    return (
        <Box rounded={"10px"}>
            <Text fontSize={"25px"} fontWeight={700}>
                Upload
            </Text>
            <Box
                {...getRootProps()}
                mt="20px"
                py="20px"
                textAlign={"center"}
                border={"1px"}
                borderStyle={"dashed"}
                borderColor={"stroke_3"}
                fontSize="15px"
                rounded={"10px"}
                px="20px"
            >
                <Text>Drag and drop your media files here</Text>
                <Text mt="10px" fontWeight={"700"}>
                    supported formats include: JPG, PNG, MP4, GIF, AVF
                </Text>
                <Text mt="10px" fontSize="12px">
                    or choose files
                </Text>
                <Flex
                    mt="10px"
                    py="10px"
                    color="light_50"
                    align={"center"}
                    gap="10px"
                    justify={"center"}
                    flexDir={["column", null, "row"]}
                >
                    <Button
                        border={"1px"}
                        rounded={"full"}
                        display={"flex"}
                        px="27px"
                        gap="10px"
                        alignContent={"center"}
                        justifyContent={"center"}
                        fontSize={"15px"}
                        fontWeight={400}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                        bg={"transparent"}
                    >
                        <Text>Browse File</Text>
                        <Icon as={Gallery} />
                    </Button>
                    <input {...getInputProps()} />
                    <Text>Upload file</Text>
                </Flex>
            </Box>
        </Box>
    );
};
