import type { NextPage } from "next";
import Image from "next/image";
import Project from "../components/Project/Project";

const Home: NextPage = () => {
  return (
    // <div className="h-screen" style={{ backgroundImage: `url('${process.env.BASEURL}/images/bg/banner-bg.jpg')`}}>
    <>
      <div className="relative flex items-center justify-center mb-12 overflow-hidden py-16 lg:py-48">
        <Image
          src={`${process.env.BASEURL}/images/logo/logo.png`}
          width={350}
          height={150}
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
      <Project />
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
        <div className="lg:order-1 lg:p-5 lg:drop-shadow-lg">
          <Image
            src={`${process.env.BASEURL}/images/team/alex.webp`}
            layout="responsive"
            width={150}
            height={200}
          />
        </div>
        <div className="lg:order-2 lg:p-5 lg:drop-shadow-lg">
          <Image
            src={`${process.env.BASEURL}/images/team/fendi.webp`}
            layout="responsive"
            width={150}
            height={200}
          />
        </div>
        <div className="order-first col-span-4 lg:col-span-1 lg:order-3 bg-gray-100 flex flex-col items-center justify-center py-3">
          <h1 className="text-3xl text-gray-600">OUR</h1>
          <h2 className="text-2xl text-gray-600 font-bold">TEAM</h2>
          <p className="text-sm p-3 mt-3 text-center text-gray-500">
            背景與實力多元的團隊 我們為您提供​網頁全端開發 平面/UI
            開發、影片拍攝/剪輯等服務
          </p>
        </div>
        <div className="lg:order-3 lg:p-5 lg:drop-shadow-lg">
          <Image
            src={`${process.env.BASEURL}/images/team/angeline.webp`}
            layout="responsive"
            width={150}
            height={200}
          />
        </div>
        <div className="lg:order-5 lg:p-5 lg:drop-shadow-lg">
          <Image
            src={`${process.env.BASEURL}/images/team/venus.webp`}
            layout="responsive"
            width={150}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
