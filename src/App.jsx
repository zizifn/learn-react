import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header-Tailwind.jsx";
import { clsx } from "clsx";

export default function App() {
  return (
    <>
      <Header />
      <main
        className={clsx({
          "mb-0": true,
        })}
      >
        <AuthInputs />
      </main>
    </>
  );
}
