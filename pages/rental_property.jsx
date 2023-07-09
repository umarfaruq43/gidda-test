import Layout from "@/Layout/Layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import RentalProperty from "@/components/Pages/RentalProperty";

const rental_property = () => {
    return (
        <Layout title="Add Rental Property">
            <RentalProperty />
        </Layout>
    );
};

export default rental_property;
