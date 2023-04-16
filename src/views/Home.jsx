import React, { useEffect } from "react";
import AddBotton from "../components/AddBotton";
import CreateProject from "../components/CreateProject";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { loadProjects } from "../services/blockchain";
import { useGlobalState } from "../store";

const Home = () => {
  const [projects] = useGlobalState("projects");
  useEffect(async () => {
    await loadProjects();
  }, []);

  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddBotton />
    </>
  );
};

export default Home;
