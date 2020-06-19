import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Section1 from './components/SectionA';
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <Section1/>
        <Footer/>
    </div>
  );
}

export default Home;
