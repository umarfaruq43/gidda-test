import Contact from "@/components/Pages/Contact";
import FrequentlyAskedQue from "@/components/Pages/FrequentlyAskedQue";
import Payment from "@/components/Pages/Payment";
import Layout from "@/Layout/Layout";
import SupportLayout from "@/Layout/SupportLayout";
import React from "react";

const payment = () => {
    return (
        <Layout title="Payment Systems">
            <SupportLayout
                destination="Payment Systems"
                activeNav={"payment"}
                title={"Payment Systems"}
            >
                <Payment />
            </SupportLayout>
        </Layout>
    );
};

export default payment;
