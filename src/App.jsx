import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';



const reactDescriptions = ["Fundament", "Core", "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
}

function CoreConcept({img, title, description}) {

  return (
  <li>
    <img src={img} alt="" srcset="" />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
          <CoreConcept img={CORE_CONCEPTS[0].img} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
          <CoreConcept img={CORE_CONCEPTS[1].img} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} />
      </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
