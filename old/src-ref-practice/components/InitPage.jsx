import React, { useEffect } from "react";
import noProjectImg from "../assets/no-projects.png";
export function InitPage({ addingPorject }) {
  const [noProject, setNoProject] = React.useState(false);
  console.log("InitPage")

  // useEffect(() => {
  //   console.log("useEffect")
  //   const timer = setInterval(() => {
  //     console.log("xxxxxx")
  //     setNoProject((old)=>{
  //       // console.log('old', old)
  //       return !old;
  //     });
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);
  return (
    <section className="border-2 border-amber-200  flex flex-col items-center justify-start gap-5 h-full">
     {"111" + noProject}
      <img className="h-20 w-20 object-cover" src={noProjectImg} alt="an empty task list" />
     <p className="font-bold text-xl"> No Project Selecte1d</p>
      <p className="text-gray-500"> Select a project or get started with a new one</p>
      <button className="  p-2 text-xs md:text-base bg-black text-gray-400 px-4 rounded-lg" onClick={addingPorject}>Create new Project</button>
    </section>
  );
}
