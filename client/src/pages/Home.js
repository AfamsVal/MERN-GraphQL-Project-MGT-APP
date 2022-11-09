import React from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-4">
            <AddClientModal /> &nbsp; &nbsp;
            <AddProjectModal />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <Projects />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Clients />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
