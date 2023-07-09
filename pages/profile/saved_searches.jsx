import SavedSearches from "@/components/Pages/SavedSearches";
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import { Heading } from "@chakra-ui/react";
import React from "react";

const saved_searches = () => {
    return (
        <Layout title="Saved Searches">
            <Profile activeNav="saved_searches">
                <SavedSearches />
            </Profile>
        </Layout>
    );
};

export default saved_searches;
