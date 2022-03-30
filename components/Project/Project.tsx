import Image from "next/image";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Project = () => {
  const projects = useSelector((state: RootState) => state.project.value);
  return (
    <div className="container m-auto mb-5 px-2">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-gray-700 mb-5">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <div key={index} className="shadow-sm mb-1 hover:shadow-2xl cursor-pointer">
              <Card
                title={project.title}
                picUrl={project.picUrl}
                category={project.category}
                link={project.title}
              />
            </div>
          );
        })}

        {/* <div className="flex justify-center p-3">
        <Image
          src={`${process.env.BASEURL}/images/logo/logoGrey.webp`}
          width="150"
          height="60"
        />
      </div> */}
      </div>
    </div>
  );
};

export default Project;
