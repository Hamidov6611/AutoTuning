import React from "react";
import { ChipTuning, Collection, ExhaustSystems, Feedback, Hero, Layout, News, VideosSection, Work } from "../components";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Collection />
      <ChipTuning />
      <News />
      <ExhaustSystems />
      <Work />
      <VideosSection />
      <Feedback />
    </Layout>
  );
};

export default Home;
