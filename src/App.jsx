import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Header /><p>Header will go here</p>
      <main>
        <Home />
        <Card />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
