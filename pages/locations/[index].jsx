import Layout from "@/Layout/Layout";
import Locations from "@/components/Pages/Locations";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const LocationPage = () => {
    const router = useRouter();
    const { index } = router.query;

    return (
        <Layout title={`Location || ${index}`}>
            <Locations data={index} />
        </Layout>
    );
};

export default LocationPage;
