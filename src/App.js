import Topbar from 'components/TopBar';
import Portfolio from 'components/Portfolio';
import Works from 'components/Works';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <main className="sections">
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
