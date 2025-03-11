import React from 'react';
import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import RefLogin from './components/RefLogin.jsx';
import DefaultLogin from './components/Login.jsx';


import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h3>default login</h3>
          <DefaultLogin></DefaultLogin>
        </section>
        <section>
          <h3>ref login</h3>
          <RefLogin></RefLogin>
        </section>
        <Login></Login>
        <Signup />
      </main>
    </>
  );
}

export default App;
