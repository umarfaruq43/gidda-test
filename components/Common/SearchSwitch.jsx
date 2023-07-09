import { Switch } from "@chakra-ui/react";
import React, { useState } from "react";

const SearchSwitch = () => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Switch
                size="sm"
                colorScheme="green"
                trackColor="primary"
                onChange={handleChange} 
            />
            {/* <Text ml={2}>{isActive ? "Active" : "Inactive"}</Text> */}
        </>
    );
};

export default SearchSwitch;
