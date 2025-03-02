import logo from "../assets/logo.png";
import { HeaderStle } from "./HeaderStle";

export default function Header() {
  return (
    <HeaderStle>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </HeaderStle>
  );
}
