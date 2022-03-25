import Image from "next/image";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Project = () => {
  const projects = useSelector((state: RootState) => state.project.value);
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-5">PROJECTS</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <Card
          title=""
          picUrl={`${process.env.BASEURL}/images/project/tbdamai.webp`}
          category=""
          link=""
        />
        <Card
          title=""
          picUrl={`${process.env.BASEURL}/images/project/tbdamai.webp`}
          category=""
          link=""
        />
        <Card
          title=""
          picUrl={`${process.env.BASEURL}/images/project/tbdamai.webp`}
          category=""
          link=""
        />
        <Card
          title=""
          picUrl={`${process.env.BASEURL}/images/project/tbdamai.webp`}
          category=""
          link=""
        />
        {/* <div className="flex justify-center p-3">
        <Image
          src={`${process.env.BASEURL}/images/logo/logoGrey.webp`}
          width="150"
          height="60"
        />
      </div> */}
      </div>
    </>
  );
};

export default Project;
