import React, { use, useRef } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export function NewProject({ cancelAddProject, addProject }) {
  const dialogRef = useRef(null);

  const titleRef = useRef(null);
  function submitForm(event) {
    console.log("titleRef", titleRef.current);
    console.log(event);
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get("title").trim() === "") {
      dialogRef.current.showModal();
    } else {
      addProject(formData);
    }
  }

  return (
    <>
      <Modal ref={dialogRef}></Modal>
      <form
        action=""
        onSubmit={submitForm}
        className="mt-10 flex flex-col gap-4"
      >
        <menu className="flex items-center justify-end gap-4 text-lg">
          <button
            onClick={cancelAddProject}
            className="cursor-pointer bg-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-stone-800 px-6 py-2 text-white hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <label className="mx-5 flex flex-col gap-1">
          Title
          <input
            ref={titleRef}
            type="text"
            className="h-10 border-b-2 border-gray-400 bg-gray-300"
            name="title"
          ></input>
        </label>
        <label className="mx-5 flex flex-col">
          Description
          <textarea
            className="h-20 border-b-2 border-b-gray-400 bg-gray-300 focus:border-stone-600 focus:outline-none"
            name="description"
          ></textarea>
        </label>
        <label className="mx-5 flex flex-col">
          Due Date
          <input
            className="h-10 border-b-2 border-b-gray-300 bg-gray-300"
            type="date"
            name="dueDate"
            id="due-date"
          />
        </label>
      </form>
    </>
  );
}
