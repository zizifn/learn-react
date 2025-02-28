import { CORE_CONCEPTS } from '../data.js';
import { CoreConcept } from './CoreConcept';

export function CoreConcepts() {
  return (
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
  );
}