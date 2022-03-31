import React from "react";
import { GetStaticPaths } from "next";
import { allProject } from "../../store/projectSlice";

type idProps = {
  id: string;
  curProject: any;
};
const DetailProject = (props: idProps) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{JSON.stringify(props.curProject)}</p>
    </div>
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
