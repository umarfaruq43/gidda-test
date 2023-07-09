import React from "react";
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import { Heading } from "@chakra-ui/react";
import ManageAccount from "@/components/Pages/ManageAccount";

const manage_account = () => {
    return (
        <Layout title="Manage Account">
            <Profile activeNav="manage_account">
                <ManageAccount />
            </Profile>
        </Layout>
    );
};

export default manage_account;
