import React, { useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";

export function Header() {
    // const { opinions } = useContext(OpinionsContext);
    // console.log(opinions)
  console.log("-----------Header")
  return (
    <header id="main-header">
      <h1>OpinionBoard</h1>
      <p>
        Strong opinions, judged by anonymous internet users. What could possibly
        go wrong?
      </p>
    </header>
  );
}
