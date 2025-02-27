import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";
import { TabBut } from "./components/TabBut";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [contentType, setContent] = useState(null);
  function handleClick(type) {
    setContent(type);
    console.log("old value", contentType);
  }

  let tabContent = null;
  if (contentType) {
    tabContent = <p>{EXAMPLES[contentType].description}</p>;
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                img={concept.image} 
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            {
              Object.keys(EXAMPLES).map((key) => (
                <TabBut 
                  key={key} 
                  isSelected={contentType === key} 
                  onSelect={() => handleClick(key)}
                >
                  {key[0].toUpperCase() + key.slice(1)}
                </TabBut>
              ))
            }
          </menu>
          <div id="tab-conent">
            {contentType ?? <p>please choose topic</p>}
            {contentType ? (
              <>
                <h3>{EXAMPLES[contentType].title}</h3>
                <p>{EXAMPLES[contentType].description}</p>
                <pre>
                  <code>{EXAMPLES[contentType].code}</code>
                </pre>
              </>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
