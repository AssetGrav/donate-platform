import React from "react";
import { setGlobalState } from "../store";
import { BsPlusLg } from "react-icons/bs";

const AddBotton = () => {
  return (
    <div className="fixed right-10 bottom-10 flex space-x2 justify-center">
      <button
        type="button"
        className="flex justify-center items-center w-9 h-9 bg-green-600 text-white font-medium text-xs leading-light uppercase rounded-full shadow-md hover:bg-white hover:text-green-700 hover:border hover:border-green-600"
        onClick={() => setGlobalState("createModal", "scale-100")}
      >
        <BsPlusLg className="font-bold" size={20} />
      </button>
    </div>
  );
};

export default AddBotton;
