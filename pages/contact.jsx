import Contact from "@/components/Pages/Contact";
import FrequentlyAskedQue from "@/components/Pages/FrequentlyAskedQue";
import Layout from "@/Layout/Layout";
import SupportLayout from "@/Layout/SupportLayout";
import React from "react";

const Faq = () => {
    return (
        <Layout title="Contact Support">
            <SupportLayout
                destination="Contact"
                activeNav={"contact"}
                title={"Contact Support"}
            >
                <Contact />
            </SupportLayout>
        </Layout>
    );
};

export default Faq;
