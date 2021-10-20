/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import { css, jsx } from '@emotion/react';
import BannerSection from '../components/home/BannerSection';
import FeaturedProject from '../components/home/FeaturedProject';
import AboutCard from '../components/about/AboutCard';
import Layout from '../components/shared/Layout';

const Home = () => (
  <Layout>
    <BannerSection />
    <FeaturedProject id={1} imageUrl="/private-deal.jpg">
      <h2 className="">Residential Fix and Flip</h2>
      <p className="mt-3">
        With a skilled and experienced team, Ontario Cash Buyers. helps real
        esate investors to purchase <b className="text-green-400">off-market</b>{' '}
        residential properties that has great potential after fix value
        throughout Ontario
      </p>
    </FeaturedProject>
    <FeaturedProject id={2} alignment="right" imageUrl="/comparison-123.jpg">
      <h2 className="">Value-add/BRRRR</h2>
      <p className="mt-3">
        Ontario Cash Buyers. provide lucrative deals to real estate investor who
        is looking to practice the popular BRRRR (buy, renovate, rent,
        refinance, and repeat) strategy{' '}
      </p>
    </FeaturedProject>
  </Layout>
);

export default Home;
