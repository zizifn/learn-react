import { useRef } from "react";

export function ProjectDetail({ project, addTask, clearTask }) {
  const tasks = project.tasks ?? [];
  const tasRef = useRef();

  function test() {
    console.log("-------");
  }
  return (
    <>
      <section className="flex flex-col">
        {/* <button onClick={test}>test111</button> */}
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p> {project.dueDate}</p>
        <p>{project.description}</p>
      </section>
      <section className="flex flex-col">
        <h1>Task</h1>
        <div>
          <input
            ref={tasRef}
            className="border-1 border-amber-300"
            type="text"
            name=""
            id=""
          />
          <button type="button" onClick={() => addTask(tasRef.current.value)}>
            Add Task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                {task} <button onClick={() => clearTask(index)}>Clear</button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
