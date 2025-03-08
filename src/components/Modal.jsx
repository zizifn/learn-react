import React, { useEffect } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open }) {
  const dialog = useRef(null);
  console.log("------Modal")
  useEffect(() => {
    console.log("----Modal---useEffect", open)
    if (open) {
      console.log("----Modal---useEffect--open")
      dialog.current.showModal();
    } else {
      console.log("----Modal---useEffect--close")
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open && children}
    </dialog>,
    document.getElementById("modal"),
  );
}

export default Modal;
