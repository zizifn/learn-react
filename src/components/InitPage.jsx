import React from "react";
import noProjectImg from "../assets/no-projects.png";
export function InitPage({ addingPorject }) {
  return (
    <section className="border-2 border-amber-200  flex flex-col items-center justify-start gap-5 h-full">
      <img className="h-20 w-20 object-cover" src={noProjectImg} alt="" />
     <p className="font-bold text-xl"> No Project Selected</p>
      <p className="text-gray-500"> Select a project or get started with a new one</p>
      <button className="h-10 bg-black text-gray-400 px-4 rounded-lg" onClick={addingPorject}>Create new Project</button>
    </section>
  );
}
