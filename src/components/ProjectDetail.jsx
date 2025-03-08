import React, { useRef } from "react";

export function ProjectDetail({ project, addTask, clearTask, deleteSelectedItem }) {
  const tasks = project.tasks ?? [];
  const tasRef = useRef(null);

  return (
    <>
      <section className="flex flex-col ml-5 gap-4 border-b-2 border-b-gray-200">  
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">{project.title}</h1>
          <button onClick={deleteSelectedItem}>Delete</button>
        </div>
        <p className="text-gray-300">{project.dueDate}</p>
        <p className="mb-4">{project.description}</p>
      </section>
      <section className="flex flex-col mt-4 ml-5 gap-4">
        <h1 className="font-bold text-3xl">Tasks</h1>
        <div>
          <input
            ref={tasRef}
            className="bg-gray-300 h-8 border-b-2 border-b-gray-400 focus:outline-blue-300"
            type="text"
            name=""
            id=""
          />
          <button className="ml-4" type="button" onClick={() => {
            if (tasRef.current.value.trim()) {
              addTask(tasRef.current.value);
              tasRef.current.value = '';
            }
          }}>
            Add Task
          </button>
        </div>
        <ol className="mr-5">
          {tasks.map((task, index) => {
            return (
              <li key={index} className=" flex items-center h-10 bg-gray-300">
                {task} 
                <button className="ml-auto" onClick={() => clearTask(index)}>Clear</button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
