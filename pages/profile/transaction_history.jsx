import React from "react";
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import { Heading, Text } from "@chakra-ui/react";
import TransactionHistory from "@/components/Pages/TransactionHistory";
const transaction_history = () => {
    return (
        <Layout title="Transaction History">
            <Profile activeNav="transaction_history">
              
                <TransactionHistory />
            </Profile>
        </Layout>
    );
};

export default transaction_history;
