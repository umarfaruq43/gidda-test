import { Box } from "@chakra-ui/react";
import React from "react";
import FeaturedProperties from "../Common/FeaturedProperties";
import ScreenSize from "@/Layout/ScreenSize";
import TopProperties from "../Common/TopProperties";
import LatestProperties from "../Common/LatestProperties";
import TopCategories from "../Common/TopCategories";
import Hero from "../Common/Hero";

const HomePage = () => {
    return (
        <ScreenSize>
            <Hero />
            <FeaturedProperties />
            <TopProperties />
            <LatestProperties />
            <TopCategories />
        </ScreenSize>
    );
};

export default HomePage;
