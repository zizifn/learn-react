import { TabBut } from "./TabBut";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export function Examples() {
    const [contentType, setContent] = useState(null);
    
    function handleClick(selectedType) {
        setContent(selectedType);
    }
    
    return (
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
  );
}
