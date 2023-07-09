import Notification from "@/components/Pages/Notification";
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import { Heading } from "@chakra-ui/react";
import React from "react";

const notification = () => {
    return (
        <Layout title="Notifications">
            <Profile activeNav="notification">
                <Notification />
            </Profile>
        </Layout>
    );
};

export default notification;
