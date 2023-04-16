import React from "react";
import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../store";
import { deleteProject } from "../services/blockchain";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteProject = ({ project }) => {
  const [deleteModal] = useGlobalState("deleteModal");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    deleteProject(project?.id);
    toast.success("Project deleted successfully, will reflect in 30 sec.");
    setGlobalState("deleteModal", "scale-0");
    navigate.push("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 scale-0 ${deleteModal}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{project?.title}</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={() => setGlobalState("deleteModal", "scale-0")}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="rounde-xl overflow-hidden h-20 w-20">
              <img
                src={
                  project?.imageURL ||
                  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg"
                }
                alt={project?.title}
                className="rounded-xl h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center rounded-sm ">
            <p>Are you sure?</p>
            <small className="text-red-400">This is irreversible!</small>
          </div>

          <button
            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-md leading-light uppercase rounded-full shadow-md hover:bg-white hover:text-green-700 hover:border hover:border-red-600 mt-5"
            onClick={handleSubmit}
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
