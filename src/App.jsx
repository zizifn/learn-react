import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";
import { TabBut } from "./components/TabBut";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  function handleClick(type) {
    if(type === "Component") {
      setContent("Component");
      return;
    }

    setContent("");
    console.log("clicked");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              img={CORE_CONCEPTS[0].img}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[1].img}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabBut onSelect={() => handleClick('Component')}>Component</TabBut>
            <TabBut onSelect={() => handleClick('Config')}>Config</TabBut>
          </menu>
          <div>{content}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
