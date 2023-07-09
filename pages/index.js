import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Layout from "@/Layout/Layout";
import HomePage from "@/components/Pages/HomePage";

export default function Home() {
    return (
        <Layout title={"Gida"}>
          <HomePage />
        </Layout>
    );
}
