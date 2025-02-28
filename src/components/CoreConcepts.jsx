import { CORE_CONCEPTS } from '../data.js';
import { CoreConcept } from './CoreConcept';
import { Section } from './Section';

export function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core concepts">
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
    </Section>
  );
}