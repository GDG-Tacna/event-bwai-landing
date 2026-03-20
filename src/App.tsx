import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Events } from '@/components/Events';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container scanline min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex-grow w-full">
        <Hero />
        <Events />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
