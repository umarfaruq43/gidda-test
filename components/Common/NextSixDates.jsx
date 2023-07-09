import { useState } from "react";
import { format, addDays } from "date-fns";
import { Box, Text } from "@chakra-ui/react";

// Generate the next 6 dates
const today = new Date();
const nextSixDates = Array.from({ length: 6 }, (_, index) =>
    addDays(today, index + 1)
);
// generate random id
const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = "";
for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
}

// Format the dates, day of the week, and month
export const NextSixDatesArray = nextSixDates.map((date) => ({
    id: result,
    day: format(date, "dd"),
    dayOfWeek: format(date, "iii"),
    month: format(date, "MMM"),
    date: date,
}));
