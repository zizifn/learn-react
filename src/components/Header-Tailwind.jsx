import logo from "../assets/logo.png";
import { HeaderStle } from "./HeaderStle";

export default function Header() {
  return (
    <header className="mt-8 flex flex-col items-center md:mb-16">
      <img
        className="mb-8 h-44 w-44 object-contain"
        src={logo}
        alt="A canvas"
      />
      <h1 className="font-semibold tracking-widest text-amber-800 uppercase md:text-4xl">
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
