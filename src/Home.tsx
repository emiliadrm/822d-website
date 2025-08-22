import { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import BlogHome from './components/BlogHome';

function Home() {
  const [currentScreen, setCurrentScreen] = useState<'entry' | 'blog'>('entry');

  const handleAccessGranted = () => {
    setCurrentScreen('blog');
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {currentScreen === 'entry' ? (
        <EntryScreen onAccessGranted={handleAccessGranted} />
      ) : (
        <BlogHome />
      )}
    </div>
  );
}

export default Home;