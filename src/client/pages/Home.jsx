import React from "react";
import { ChipTuning, Collection, ExhaustSystems, Feedback, Hero, News, VideosSection, Work } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <ChipTuning />
      <News />
      <ExhaustSystems />
      <Work />
      <VideosSection />
      <Feedback />
    </>
  );
};

export default Home;
