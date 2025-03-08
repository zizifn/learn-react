import React from "react";

export function NewProject({ cancelAddProject, addProject }) {
  function submitForm(event) {
    console.log(event);
    event.preventDefault();
    const formData = new FormData(event.target);
    addProject(formData);
  }

  return (
    <form action="" onSubmit={submitForm} className="flex flex-col">
      <div className="flex justify-end">
        <button onClick={cancelAddProject} className="bg-white">
          Cancel
        </button>
        <button type="submit" className="bg-black text-white">
          Save
        </button>
      </div>
      <label>
        Title
        <input
          type="text"
          className="h-8 border-1 border-red-200"
          name="title"
        ></input>
      </label>
      <label>
        Description
        <textarea name="description"></textarea>
      </label>
      <label>
        Due Date
        <input type="date" name="dueDate" id="due-date" />
      </label>
    </form>
  );
}
