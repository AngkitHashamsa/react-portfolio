import { useState } from 'react';
import Topbar from 'components/TopBar';
import Intro from 'components/Intro';
import Portfolio from 'components/Portfolio';
import Works from 'components/Works';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';
import Sidebar from 'components/Sidebar';
import './styles/global.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="section-center">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Sidebar open={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default App;
