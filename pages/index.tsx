import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url('${process.env.BASEURL}/images/bg/banner-bg.jpg')`}}>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
