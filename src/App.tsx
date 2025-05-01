import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Artifacts from './components/Artifacts';
import GroupExperience from './components/GroupExperience';
import PodcastScript from './components/PodcastScript';
import PinterestSection from './components/PinterestSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Artifacts />
        <GroupExperience />
        <PodcastScript />
        <PinterestSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;