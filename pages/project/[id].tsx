import React from "react";
import { useRouter } from "next/router";

const DetailProject = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "cari-hp" } }],
    fallback: false, // false or 'blocking'
  };
}

type Context = {
  params: {
    id: string;
  };
};
export async function getStaticProps(context: Context) {
  const id = context.params.id;
  return {
    props: { id },
  };
}

export default DetailProject;
