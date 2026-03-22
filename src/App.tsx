import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Events } from '@/components/Events';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container scanline min-h-screen flex flex-col transition-colors duration-300">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex-grow w-full">
        <Hero theme={theme} />
        <Events />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
