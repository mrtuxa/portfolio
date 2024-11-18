import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import ToggleTheme from './components/ToggleTheme';
import Languages from "./components/Languages";

const App: React.FC = () => {
  return (
      <div className="portfolio-container">
        <Header />
        <Skills />
        <Projects />
        <Languages />
        <Footer />
      </div>
  );
};

export default App;