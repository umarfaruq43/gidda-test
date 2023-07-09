import Layout from "@/Layout/Layout";
import PropertyCreation from "@/components/Pages/PropertyCreation";

import { Box } from "@chakra-ui/react";
import React from "react";

const property = () => {
    return (
        <Layout title="Add a Property">
            <PropertyCreation />
        </Layout>
    );
};

export default property;
