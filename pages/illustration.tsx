
import type { NextPage } from "next";
import Image from "next/image";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Link from "next/link";
import Card from "../components/Card/Card";

const Illustration: NextPage = () => {
  const category = "ILLUSTRATION";
  const projects = useSelector((state: RootState) =>
    state.project.value.filter((proj) => proj.category === category)
  );
  return (
    <>
      <div className="relative flex flex-col items-center justify-center mb-12 overflow-hidden py-16 lg:py-48 z-10">
        <h1
          className="z-30 text-3xl lg:text-6xl font-bold p-2 text-white"
          style={{ textShadow: " 3px 4px 1px black" }}
        >
          {category}
        </h1>
        <Image
          src={`${process.env.BASEURL}/images/bg/banner-detail.webp`}
          layout="fill"
          className="opacity-25"
        />
      </div>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <a>
                <div className="shadow-sm mb-1 hover:shadow-2xl cursor-pointer">
                  <Card picUrl={project.imgList ? project.imgList[0] : ""} />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Illustration;
