import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Performance } from './components/Performance/Performance';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Performance />
      <Contact />
    </div>
  );
}

export default App;
