import logo from "../assets/logo.png";
// import "./header.css";

import classes1 from "./header.module.css";

console.log("-------", classes1);

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes1.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
