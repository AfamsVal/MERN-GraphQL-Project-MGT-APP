import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loader />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>
      <h4 className="mt-4">All Projects</h4>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <h6 className="text-danger">No Project Found!!</h6>
      )}
    </div>
  );
};

export default Projects;
