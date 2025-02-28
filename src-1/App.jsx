import reactImg from "./assets/react-core-concepts.png";
import { Header } from "./components/Header";
import { CoreConcepts } from "./components/CoreConcepts";
import { Examples } from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
