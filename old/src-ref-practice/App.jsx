import React, { useState } from "react";
import { SideBar } from "./components/SideBar";
import { InitPage } from "./components/InitPage";
import { NewProject } from "./components/NewProject";
import { ProjectDetail } from "./components/ProjectDetail";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const noProjects = projects.length < 1;

  const showProjectDetails = !noProjects && !isAdding;
  let project = null;
  if (showProjectDetails) {
    if(!selectedProject){
      setSelectedProject(projects[0]?.id);
    }else{
      project = projects.find((project) => project.id === selectedProject);

    }
  }

  function addTask(task) {
    console.log("add task");
    setProjects((old) => {
      const newProjects = structuredClone(old);
      const project = newProjects.find((project) => project.id === selectedProject);
      if (!project.tasks) {
        project.tasks = [];
      }
      project.tasks.push(task);
      return newProjects;
    });
  }

  function clearTask(index) {
    setProjects((old) => {
      const newProjects = structuredClone(old);
      const project = newProjects.find((project) => project.id === selectedProject);
      
      const tasks = project.tasks;
      tasks.splice(index, 1); // Fixed: Added second parameter to remove only one item
      return newProjects;
    });
  }

  function selectProject(projectID) {
    setSelectedProject(projectIndex);
  }

  function addingPorject() {
    setIsAdding(true);
  }

  function cancelAddProject() {
    setIsAdding(false);
  }

  /**
   *
   * @param {import("react").FormEvent} event
   */
  function addProject(event) {
    console.log(event);
    setProjects((old) => {
      return [...old, {
        id: crypto.randomUUID(),
        ...Object.fromEntries(event.entries())
      }];
    });
    setIsAdding(false);
  }

  function deleteSelectedItem(){
    setProjects((old) => {
      const clone = structuredClone(old);
      const tempProject = clone.findIndex((project) => project.id === selectedProject);
      clone.splice(tempProject, 1);
      return clone;
    });
    setSelectedProject('');
  }

  return (
    <>
      <main className="flex ite items h-screen bg-white my-8">
        <SideBar
          projects={projects}
          selectProject={selectProject}
          addingPorject={addingPorject}
        />
        <div className="flex-4/5">
          {isAdding ? (
            <NewProject
              cancelAddProject={cancelAddProject}
              addProject={addProject}
            ></NewProject>
          ) : showProjectDetails ? (
            <ProjectDetail
            deleteSelectedItem= {deleteSelectedItem}
              addTask={addTask}
              clearTask={clearTask}
              project={project}
            ></ProjectDetail>
          ) : (
            <InitPage addingPorject={addingPorject}></InitPage>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
