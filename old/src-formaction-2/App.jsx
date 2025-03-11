import { Header } from './components/Header';
import { Opinions } from './components/Opinions';
import { NewOpinion } from './components/NewOpinion';
import { OpinionsContextProvider } from './store/opinions-context';
import React from 'react';

function App() {
  console.log("app1111")
  return (
    <>
      <Header />
      <main>
        <OpinionsContextProvider>
          <Header />
          <NewOpinion />
          <Opinions />
        </OpinionsContextProvider>
      </main>
    </>
  );
}

export default App;
