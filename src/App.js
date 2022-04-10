import Topbar from 'components/TopBar';
import Intro from 'components/Intro';
import Portfolio from 'components/Portfolio';
import Works from 'components/Works';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';
import './styles/global.scss';

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <main className="section-center">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
