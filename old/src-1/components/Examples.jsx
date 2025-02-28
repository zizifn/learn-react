import { TabBut } from "./TabBut";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import { Section } from "./Section";
import { Tabs } from "./Tabs";

export function Examples() {
  const [contentType, setContent] = useState(null);

  function handleClick(selectedType) {
    setContent(selectedType);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
      ButtonsContainer="menu"
        buttons={Object.keys(EXAMPLES).map((key) => (
          <TabBut
            key={key}
            isSelected={contentType === key}
            onSelect={() => handleClick(key)}
          >
            {key[0].toUpperCase() + key.slice(1)}
          </TabBut>
        ))}
      >
        <div id="tab-conent">
          {contentType ?? <p>Please choose topic</p>}
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
      </Tabs>
    </Section>
  );
}
