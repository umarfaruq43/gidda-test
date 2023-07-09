import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Button } from "@chakra-ui/react";

const options = [
    { label: "Monthly Updates", value: "monthly" },
    { label: "Daily Updates", value: "daily" },
    { label: "Instant Updates", value: "instant" },
    { label: "No Updates", value: "no_update" },
];

const NotificationBox = ({ selectedCheckboxes, setSelectedCheckboxes }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedCheckboxes);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CheckboxGroup
                value={selectedCheckboxes}
                onChange={setSelectedCheckboxes}
                minH="219px"
            >
                {options.map((option) => (
                    <Checkbox
                        w="100%"
                        py="5px"
                        mb="10px"
                        key={option.value}
                        value={option.value}
                        isChecked={selectedCheckboxes.includes(option.value)}
                        colorScheme={
                            selectedCheckboxes.includes(option.value)
                                ? "red"
                                : "gray"
                        }
                        variant="red"
                        size="md"
                        className="openSans"
                        fontSize="20px"
                    >
                        {option.label}
                    </Checkbox>
                ))}
            </CheckboxGroup>
            {/* <Button type="submit">Submit</Button> */}
        </form>
    );
};

export default NotificationBox;
