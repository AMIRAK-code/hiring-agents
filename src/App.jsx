import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/Home';
import PricingView from './views/Pricing';
import PlatformView from './views/Platform';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenWaitlist={openWaitlist}
      />

      <main>
        {currentView === 'home' && (
          <HomeView
            setCurrentView={setCurrentView}
            onOpenWaitlist={openWaitlist}
          />
        )}
        {currentView === 'pricing' && (
          <PricingView
            onOpenWaitlist={openWaitlist}
          />
        )}
        {currentView === 'platform' && (
          <PlatformView
            onOpenWaitlist={openWaitlist}
          />
        )}
      </main>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
