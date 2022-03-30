import React from "react";
import { useRouter } from "next/router";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { GetStaticPaths } from "next";

const DetailProject = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  //   const projects = useSelector((state: RootState) => state.project.value);
  //   console.log(projects);
  // const paths = projects.map((project) => {
  //     return {
  //       params: { prod: project.id },
  //     };
  //   });
  return {
    paths: [{ params: { id: "cari-hp" } }, { params: { id: "cari-hp1" } }],
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
  return {
    props: { id },
  };
}

export default DetailProject;
