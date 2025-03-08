import React, {useRef} from "react";

export function NewProject({ cancelAddProject, addProject }) {

  const titleRef = useRef(null);
  function submitForm(event) {
    console.log('titleRef', titleRef.current);
    console.log(event);
    event.preventDefault();
    const formData = new FormData(event.target);
    addProject(formData);
  }

  return (
    <form action="" onSubmit={submitForm} className="flex flex-col mt-10 gap-4">
      <menu className="flex items-center justify-end gap-4 text-lg">
        <button onClick={cancelAddProject} className="bg-white cursor-pointer">
          Cancel
        </button>
        <button type="submit" className="bg-stone-800 text-white py-2 px-6 rounded-lg hover:bg-stone-950">
          Save
        </button>
      </menu>
      <label className="flex flex-col mx-5 gap-1">
        Title
        <input ref={titleRef}
          type="text"
          className="h-10 border-b-2 border-gray-400  bg-gray-300"
          name="title"
        ></input>
      </label>
      <label className="flex flex-col mx-5">
        Description
        <textarea className="h-20 border-b-2 border-b-gray-400 bg-gray-300 focus:outline-none focus:border-stone-600" name="description"></textarea>
      </label>
      <label className="flex flex-col mx-5">
        Due Date
        <input className="h-10 border-b-2 border-b-gray-300 bg-gray-300" type="date" name="dueDate" id="due-date" />
      </label>
    </form>
  );
}
