import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    // <div className="h-screen" style={{ backgroundImage: `url('${process.env.BASEURL}/images/bg/banner-bg.jpg')`}}>
    <div className="">
      <h1>HOME</h1>
      <div className="flex justify-center p-5">
        <Image
          src={`${process.env.BASEURL}/images/logo/logo.png`}
          width="650"
          height="400"
        />
      </div>

      <div className="w-1/4 h-48 relative">
        {/* <Image
          src={`${process.env.BASEURL}/images/team/alex.webp`}
          layout="fill"
          objectFit="contain"
        /> */}
      </div>
    </div>
  );
};

export default Home;
