import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/Home';
import PricingView from './views/Pricing';
import PlatformView from './views/Platform';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main>
        {currentView === 'home' && <HomeView />}
        {currentView === 'pricing' && <PricingView />}
        {currentView === 'platform' && <PlatformView />}
      </main>
    </div>
  );
}

export default App;
