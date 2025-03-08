import React, { useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ref}){
    function log(event){
        console.log(event);
    }
    // const ref = useRef(null);
    return (
        createPortal(<dialog onClick={log} ref={ref} className="backdrop:bg-stone-300/90 m-auto">
            <h2>Modal Title</h2>
            <p>This is a modal content.</p>
            <form method="dialog">
            <button>Close</button>
            </form>
        </dialog>, document.getElementsByTagName('body')[0])
    );
}