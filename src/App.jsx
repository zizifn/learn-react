import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { InitPage } from "./components/InitPage";
import { NewProject } from "./components/NewProject";
import { ProjectDetail } from "./components/ProjectDetail";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);

  const [isAdding, setIsAdding] = useState(false);

  const noProjects = projects.length < 1;

  const showProjectDetails = !noProjects && !isAdding;
  let project = null;
  if (showProjectDetails) {
    project = projects[selectedProject];
  }

  function addTask(task) {
    console.log("add task");
    setProjects((old) => {
      const newProjects = structuredClone(old);
      if (!newProjects[selectedProject].tasks) {
        newProjects[selectedProject].tasks = [];
      }
      newProjects[selectedProject].tasks.push(task);

      return newProjects;
    });
  }

  function clearTask(index) {
    setProjects((old) => {
      const clone = structuredClone(old);
      if (!clone[selectedProject].tasks) {
        clone[selectedProject].tasks = [];
      }
      const tasks = clone[selectedProject].tasks;
      tasks.splice(index, 1); // Fixed: Added second parameter to remove only one item
      return clone;
    });
  }

  function selectProject(projectIndex) {
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
      return [...old, Object.fromEntries(event.entries())];
    });
    setIsAdding(false);
  }

  return (
    <>
      <div className="flex h-lvh">
        <SideBar
          projects={projects}
          selectProject={selectProject}
          addingPorject={addingPorject}
        ></SideBar>
        <div className="flex-2/3">
          {isAdding ? (
            <NewProject
              cancelAddProject={cancelAddProject}
              addProject={addProject}
            ></NewProject>
          ) : showProjectDetails ? (
            <ProjectDetail
              addTask={addTask}
              clearTask={clearTask}
              project={project}
            ></ProjectDetail>
          ) : (
            <InitPage addingPorject={addingPorject}></InitPage>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
