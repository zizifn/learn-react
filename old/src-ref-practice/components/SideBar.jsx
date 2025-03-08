import React from "react";

export function SideBar({ projects, addingPorject, selectProject }) {
  const [selectId, setSelectId] = React.useState(null);
  return (
    <section className="flex-1/5 py-16 bg-black rounded-r-2xl md:flex-[0_0_10rem]">
      <h2 className="text-white text-2xl ml-5">Your Projects</h2>
      <button className=" bg-gray-700 p-2 h-10 text-gray-50 ml-5 mt-5 md:text-base hover:bg-stone-400" onClick={addingPorject}>
        + Create Project
      </button>

      <ol className="ml-5 mt-10 list-none">
        {projects.map((project, index) => {
          return (
            <li
              className={`pl-2 my-1 text-lg hover:bg-gray-800 hover:text-white text-gray-400 cursor-pointer ${selectId === project.id ? "bg-gray-800 text-white" : ""}`}
              key={project.id}
              onClick={() => {
                setSelectId(project.id);
                selectProject(project.id);
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
