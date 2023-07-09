import React from 'react'
import Layout from "@/Layout/Layout";
import Profile from "@/Layout/Profile";
import { Heading } from '@chakra-ui/react';
import MyFavorite from '@/components/Pages/MyFavorite';
const my_favorites = () => {
  return (
      <Layout title="My Favorites">
          <Profile activeNav="my_favorites">
            <MyFavorite />
          </Profile>
      </Layout>
  );
}

export default my_favorites