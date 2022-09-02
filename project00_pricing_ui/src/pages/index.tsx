import type { NextPage } from "next";

import { Header, Pricing, Features } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  );
};

export default Home;
