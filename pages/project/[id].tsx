import React from "react";
import { GetStaticPaths } from "next";
import { allProject } from "../../store/projectSlice";
import Card from "../../components/Card/Card";
import Image from "next/image";
import Video from "../../components/Video/Video";

type idProps = {
  id: string;
  curProject: any;
};
const DetailProject = (props: idProps) => {
  const curProject = props.curProject[0];
  return (
    <>
      {/* {<p>{JSON.stringify(props.curProject)}</p>} */}

      {/* set if video */}
      {curProject.video ? (
        <>
         <div className="relative flex flex-col items-center justify-center mb-12 overflow-hidden py-16 lg:py-48 z-10 w-full h-full">
            <button className="z-30 text-3xl  lg:text-6xl font-bold p-2 text-gray-100">
              PLAY
            </button>
            <Image
              src={curProject.video[0].imgUrl}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="contain"
              className="opacity-60"
            />
          </div>
          <Video vidUrl="" />
        </>
      ) : (
        <>
          <div className="relative flex flex-col items-center justify-center mb-12 overflow-hidden py-16 lg:py-48 z-10">
            <h1 className="z-30 text-3xl  lg:text-6xl font-bold p-2">
              {props.curProject[0].title}
            </h1>
            <h2 className="z-30 text-lg">{props.curProject[0].tech}</h2>
            <h2 className="z-30 text-lg uppercase">{props.curProject[0].id}</h2>
            <Image
              src={`${process.env.BASEURL}/images/bg/banner-detail.webp`}
              layout="fill"
              className="opacity-25"
            />
          </div>
          <div className="container m-auto p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {curProject.imgList.map((image: string, index: number) => {
              return (
                <div
                  key={index}
                  className="shadow-sm mb-1 hover:shadow-2xl cursor-pointer"
                >
                  <Card picUrl={image} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const projects = allProject.value;
  const paths = projects.map((project) => {
    return {
      params: { id: project.id },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

type Context = {
  params: {
    id: string;
  };
};
export function getStaticProps(context: Context) {
  const id = context.params.id;
  const curProject = allProject.value.filter(
    (proj: { id: string }) => proj.id === id
  );
  return {
    props: { id, curProject },
  };
}

export default DetailProject;
