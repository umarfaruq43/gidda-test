import MyProperties from "@/components/Pages/MyProperties";
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import ScreenSize from "@/Layout/ScreenSize";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const my_properties = () => {
    return (
        <Layout title="My Properties">
            <Profile activeNav="my_properties">
                <MyProperties />
            </Profile>
        </Layout>
    );
};

export default my_properties;
