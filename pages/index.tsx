import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    // <div className="h-screen" style={{ backgroundImage: `url('${process.env.BASEURL}/images/bg/banner-bg.jpg')`}}>
    <div className="">
      {/* <h1>HOME</h1> */}

      <div className="relative flex items-center justify-center mb-12 overflow-hidden p-8">
        <Image
          src={`${process.env.BASEURL}/images/logo/logo.png`}
        
          width={450}
          height={200}
          className="z-30"
        />
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-blend-overlay opacity-40"
        >
          <source
            src={`${process.env.BASEURL}/videos/bg/file.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
