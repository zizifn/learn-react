import React from "react";
import noProjectImg from "../assets/no-projects.png";
export function InitPage({ addingPorject }) {
  return (
    <section className="border-2 border-amber-200 h-full flex flex-col items-center justify-start gap-5 mt-20">
      <img className="h-20 w-20 object-cover" src={noProjectImg} alt="" />
     <p className=""> No Project Selected</p>
      <p> Select a project or get started with a new one</p>
      <button onClick={addingPorject}>Create new Project</button>
    </section>
  );
}
