import React from "react";

export function SideBar({ projects, addingPorject, selectProject }) {
  return (
    <section className="flex-1/3 bg-black mt-10 rounded-r-2xl">
      <h1 className="text-white text-2xl mt-20 ml-5">Your Projects</h1>
      <button className=" bg-gray-700 p-2 text-gray-50 ml-5 mt-5 h-10" onClick={addingPorject}>
        +Add Project
      </button>

      <ol className="ml-5 mt-10 list-none">
        {projects.map((project, index) => {
          return (
            <li
              className="pl-2 my-1  text-lg hover:bg-gray-800 hover:text-white text-gray-400 cursor-pointer"
              key={index}
              onClick={() => {
                selectProject(index);
              }}
            >
              {project.title}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
