import FrequentlyAskedQue from "@/components/Pages/FrequentlyAskedQue";
import Layout from "@/Layout/Layout";
import SupportLayout from "@/Layout/SupportLayout";
import React from "react";

const Faq = () => {
    return (
        <Layout title="FAQ/Help">
            <SupportLayout
                destination="Support"
                activeNav={"faq"}
                title={"FAQ/Help"}
            >
                <FrequentlyAskedQue />
            </SupportLayout>
        </Layout>
    );
};

export default Faq;
